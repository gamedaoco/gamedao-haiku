import { useEffect, useState } from 'react'

import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useBlockNumber } from 'hooks/useBlockNumber'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLogger } from 'hooks/useLogger'
import { useTMPProposal } from 'hooks/useTMPProposal'
import moment from 'moment'
import { useNetworkContext } from 'provider/network/modules/context'
import { ApiProvider } from 'src/@types/network'
import { TMPProposal } from 'src/@types/proposal'
import { blocksPerDay } from 'src/constants'
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

	// Get diff days for start date
	const startDayDiff = startDate.diff(moment(), 'days') + 1
	const startBlocks = startDayDiff > 0 ? startDayDiff * blocksPerDay + blockNumber : blockNumber

	// Get diff days for end date
	// min blockNumber + 1 day
	const endDayDiff = endDate.diff(startDate, 'days')
	const endBlocks = endDayDiff > 0 ? endDayDiff * blocksPerDay + blockNumber : blockNumber + blocksPerDay

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

export function useCreateProposalTransaction(organizationId: string): SubmittableExtrinsic {
	const [txState, setTxState] = useState<SubmittableExtrinsic>(null)
	const [blockNumberState, setBlockNumberState] = useState<number>(0)
	const { selectedApiProvider } = useNetworkContext()
	const address = useCurrentAccountAddress()
	const data = useTMPProposal()
	const blockNumber = useBlockNumber()
	const logger = useLogger('useCreateProposalTransaction')

	useEffect(() => {
		// The transaction is only regenerated every 2 minutes and not every 2-3 seconds.
		// 40 * 3s = ~2 minutes
		if (blockNumber && blockNumber - 40 > blockNumberState) {
			setBlockNumberState(blockNumber)
		}
	}, [blockNumber])

	useEffect(() => {
		if (organizationId && selectedApiProvider?.apiProvider && data && blockNumberState) {
			try {
				let tx
				if (data.type === 0) {
					tx = createGeneralProposalTx(selectedApiProvider, data, blockNumber, organizationId)
				} else if (data.type === 1) {
					tx = createWithdrawProposalTx(selectedApiProvider, data, blockNumber)
				}

				if (tx) {
					setTxState(tx)
				}
			} catch (e) {
				logger.trace(e)
			}
		}
	}, [organizationId, selectedApiProvider, address, data, blockNumberState])

	return txState
}
