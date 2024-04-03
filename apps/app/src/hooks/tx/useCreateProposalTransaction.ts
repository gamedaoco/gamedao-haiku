import { useEffect, useState } from 'react'

import { ApiPromise } from '@polkadot/api'
import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useBlockNumber } from 'src/hooks/useBlockNumber'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useLogger } from 'src/hooks/useLogger'
import { useTMPProposal } from 'src/hooks/useTMPProposal'
import moment from 'moment'
import { useNetworkContext } from 'src/providers/network/components/context'
import { useTranslation } from 'react-i18next'
import { ApiProvider } from 'src/@types/network'
import { TMPProposal } from 'src/@types/proposal'
import { TransactionData } from 'src/@types/transactionData'
import { PROPOSAL_KEYS, PROPOSAL_MAJORITIES, PROPOSAL_TYPES, PROPOSAL_UNITS } from 'src/constants/proposal'
import { createTokenType, fromUnit } from 'src/utils/token'
import { encode as utf8Encode } from 'utf8'
import * as Yup from 'yup'

interface BlockTime {
	startBlocks: number
	endBlocks: number
}

// Validations
const proposalValidation = Yup.object().shape({
	proposalType: Yup.mixed().required(),
	orgId: Yup.string().required(),
	title: Yup.string().required(),
	cid: Yup.string().required(),
	expiry: Yup.number().required(),
	majority: Yup.mixed().required(),
	unit: Yup.mixed().required(),
	scale: Yup.mixed().required(),

	start: Yup.number().nullable(),
	quorum: Yup.number().nullable(),
	deposit: Yup.string().nullable(),
	campaignId: Yup.string().nullable(),
	amount: Yup.string().nullable(),
	beneficiary: Yup.string().nullable(),
	currencyId: Yup.mixed().nullable(),
})

// Calculation for start and end block (BlockTime / blockNumbers) form Date
function getBlockTimeFromDate(data: TMPProposal, blockNumber: number, blockTime): BlockTime {
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

function createProposalType(apiProvider: ApiPromise, type: number) {
	return apiProvider.createType('GamedaoSignalProposalType', PROPOSAL_TYPES[type])
}

function createMajorityType(apiProvider: ApiPromise, type: number) {
	return apiProvider.createType('GamedaoSignalMajority', PROPOSAL_MAJORITIES[type])
}

function createUnitType(apiProvider: ApiPromise, type: number) {
	return apiProvider.createType('GamedaoSignalUnit', PROPOSAL_UNITS[type])
}

function createScaleType(apiProvider: ApiPromise) {
	// ToDo: Later we need to support Quadratic
	return apiProvider.createType('GamedaoSignalScale', 'Linear')
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
				const blockTime = getBlockTimeFromDate(
					data,
					blockNumber,
					selectedApiProvider.systemProperties?.blockTargetTime,
				)

				// Data mapping
				const mappedData = {
					proposalType: createProposalType(selectedApiProvider.apiProvider, data.type),
					orgId: organizationId,
					title: typeof data.name === 'string' ? utf8Encode(data.name) : data.name,
					cid: data.metaDataCID,
					expiry: blockTime.endBlocks,
					majority: createMajorityType(selectedApiProvider.apiProvider, data.majority),
					unit: createUnitType(selectedApiProvider.apiProvider, data.type),
					scale: createScaleType(selectedApiProvider.apiProvider),

					start: blockTime.startBlocks + 5,
					quorum: null,
					deposit: fromUnit(
						data.deposit,
						selectedApiProvider.systemProperties.tokenDecimals[
							selectedApiProvider.systemProperties.governanceCurrency
						],
					),
					campaignId: data.campaignId ?? null,
					amount:
						fromUnit(
							data.amount,
							selectedApiProvider.systemProperties.tokenDecimals[
								selectedApiProvider.systemProperties.governanceCurrency
							],
						) ?? null,
					beneficiary: data.type === PROPOSAL_KEYS.Spending ? data.beneficiaryAddress : null,
					currencyId:
						data.type === PROPOSAL_KEYS.Spending
							? createTokenType(
									selectedApiProvider.apiProvider,
									selectedApiProvider.systemProperties.tokenSymbol[data.currencyId],
							  )
							: null,
				}

				// Data validation
				proposalValidation.validateSync(mappedData)

				let tx = selectedApiProvider.apiProvider.tx.signal.proposal(
					mappedData.proposalType,
					mappedData.orgId,
					mappedData.title,
					mappedData.cid,
					mappedData.expiry,
					mappedData.majority,
					mappedData.unit,
					mappedData.scale,
					mappedData.start,
					mappedData.quorum,
					mappedData.deposit,
					mappedData.campaignId,
					mappedData.amount,
					mappedData.beneficiary,
					mappedData.currencyId,
				)

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
