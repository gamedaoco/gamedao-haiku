import { useEffect, useState } from 'react'

import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useBlockNumber } from 'hooks/useBlockNumber'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLogger } from 'hooks/useLogger'
import { useTMPProposal } from 'hooks/useTMPProposal'
import moment from 'moment'
import { useNetworkContext } from 'provider/network/modules/context'
import { useTranslation } from 'react-i18next'
import { ApiProvider } from 'src/@types/network'
import { TMPProposal } from 'src/@types/proposal'
import { TransactionData } from 'src/@types/transactionData'
import { blockTime } from 'src/constants'
import { fromUnit } from 'src/utils/token'
import { encode as utf8Encode } from 'utf8'
import * as Yup from 'yup'

interface BlockTime {
	startBlocks: number
	endBlocks: number
}

// Validations
const generalProposalValidation = Yup.object().shape({
	orgId: Yup.string().required(),
	title: Yup.string().required(),
	cid: Yup.string().required(),
	start: Yup.number().required(),
	expiry: Yup.number().required(),
})

const withdrawProposalValidation = Yup.object().shape({
	campaignId: Yup.string().required(),
	title: Yup.string().required(),
	cid: Yup.string().required(),
	// Is actually a number but with 18 digits and yum has no support for big number
	amount: Yup.string().required(),
	start: Yup.number().required(),
	expiry: Yup.number().required(),
})

// Calculation for start and end block (BlockTime / blockNumbers) form Date
function getBlockTimeFromDate(data: TMPProposal, blockNumber: number): BlockTime {
	// Convert date to moment date.
	const startDate = moment(data.startDate)
	const endDate = moment(data.endDate)

	// Get diff seconds for start date
	const startSecondsDiff = startDate.diff(moment(), 'seconds')
	const startBlocks = startSecondsDiff > 0 ? blockNumber + Math.ceil(startSecondsDiff / blockTime) : blockNumber

	// Get diff seconds for end date
	// min blockNumber + 1 day
	const endSecondsDiff = endDate.diff(moment(), 'seconds')
	const endBlocks = blockNumber + Math.ceil(endSecondsDiff / blockTime)

	return { endBlocks, startBlocks }
}

function createGeneralProposalTx(
	selectedApiProvider: ApiProvider,
	data: TMPProposal,
	blockNumber: number,
	organizationId: string,
): SubmittableExtrinsic {
	const blockTime = getBlockTimeFromDate(data, blockNumber)

	// Data mapping
	const mappedData = {
		orgId: organizationId,
		title: typeof data.name === 'string' ? utf8Encode(data.name) : data.name,
		cid: data.metaDataCID,
		start: blockTime.startBlocks,
		expiry: blockTime.endBlocks,
	}

	// Data validation
	generalProposalValidation.validateSync(mappedData)

	return selectedApiProvider.apiProvider.tx.signal.generalProposal(
		mappedData.orgId,
		mappedData.title,
		mappedData.cid,
		mappedData.start,
		mappedData.expiry,
	)
}

function createWithdrawProposalTx(
	selectedApiProvider: ApiProvider,
	data: TMPProposal,
	blockNumber: number,
): SubmittableExtrinsic {
	const blockTime = getBlockTimeFromDate(data, blockNumber)

	// Data mapping
	const mappedData = {
		campaignId: data.campaignId,
		title: typeof data.name === 'string' ? utf8Encode(data.name) : data.name,
		cid: data.metaDataCID,
		amount: fromUnit(
			data.amount,
			selectedApiProvider.systemProperties.tokenDecimals[selectedApiProvider.systemProperties.networkCurrency],
		),
		start: blockTime.startBlocks,
		expiry: blockTime.endBlocks,
	}

	// Data validation
	withdrawProposalValidation.validateSync(mappedData)

	return selectedApiProvider.apiProvider.tx.signal.withdrawProposal(
		mappedData.campaignId,
		mappedData.title,
		mappedData.cid,
		mappedData.amount,
		mappedData.start,
		mappedData.expiry,
	)
}

export function useCreateProposalTransaction(organizationId: string): TransactionData {
	const [txState, setTxState] = useState<TransactionData>(null)
	const { t } = useTranslation()
	const { selectedApiProvider } = useNetworkContext()
	const address = useCurrentAccountAddress()
	const data = useTMPProposal()
	const blockNumber = useBlockNumber()
	const logger = useLogger('useCreateProposalTransaction')

	useEffect(() => {
		if (organizationId && selectedApiProvider?.apiProvider && data && blockNumber) {
			try {
				let tx
				if (data.type === 0) {
					tx = createGeneralProposalTx(selectedApiProvider, data, blockNumber, organizationId)
				} else if (data.type === 1) {
					tx = createWithdrawProposalTx(selectedApiProvider, data, blockNumber)
				}

				if (tx) {
					setTxState({
						tx,
						currencyId: selectedApiProvider?.systemProperties?.governanceCurrency,
						deposit: fromUnit(
							data.deposit || 1,
							selectedApiProvider.systemProperties.tokenDecimals[
								selectedApiProvider.systemProperties.governanceCurrency
							],
						),
						title: t('transactions:createProposal:title'),
						description: t('transactions:createProposal:description'),
						actionSubLine: t('transactions:createProposal:action_sub_line'),
						actionSubTitle: t('transactions:createProposal:action_subtitle'),
						txMsg: {
							pending: t('notification:transactions:createProposal:pending'),
							success: t('notification:transactions:createProposal:success'),
							error: t('notification:transactions:createProposal:error'),
						},
					})
				}
			} catch (e) {
				logger.trace(e)
			}
		}
	}, [organizationId, selectedApiProvider, address, data, blockNumber])

	return txState
}
