import { useEffect, useState } from 'react'

import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useBlockNumber } from 'hooks/useBlockNumber'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLogger } from 'hooks/useLogger'
import { useTmpCampaign } from 'hooks/useTmpCampaign'
import moment from 'moment'
import { useNetworkContext } from 'provider/network/modules/context'
import { useTranslation } from 'react-i18next'
import { TransactionData } from 'src/@types/transactionData'
import { fromUnit } from 'src/utils/token'
import { encode as utf8Encode } from 'utf8'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	orgId: Yup.string().required(),
	adminId: Yup.string().required(),
	name: Yup.string().required(),
	target: Yup.string().required(),
	deposit: Yup.string().required(),
	expiry: Yup.number().required(),
	protocol: Yup.mixed().required(),
	governance: Yup.mixed().required(),
	cid: Yup.string().required(),
	start: Yup.number().required(),
	tokenSymbol: Yup.string(),
	tokenName: Yup.string(),
})

export function useCreateCampaignTransaction(): TransactionData {
	const [txState, setTxState] = useState<TransactionData>(null)
	const { t } = useTranslation()
	const { selectedApiProvider } = useNetworkContext()
	const address = useCurrentAccountAddress()
	const data = useTmpCampaign()
	const logger = useLogger('useCreateCampaignTransaction')
	const blockNumber = useBlockNumber()

	useEffect(() => {
		if (selectedApiProvider?.apiProvider && data && address && blockNumber) {
			try {
				// Data mapping
				// Get diff seconds for start date
				const startSecondsDiff = moment(data.startDate).diff(moment(), 'seconds')
				const startBlocks =
					startSecondsDiff > 0
						? blockNumber +
						  Math.ceil(startSecondsDiff / selectedApiProvider.systemProperties.blockTargetTime)
						: blockNumber

				const endSecondsDiff = moment(data.endDate).diff(moment(), 'seconds')
				const endBlock =
					blockNumber + Math.ceil(endSecondsDiff / selectedApiProvider.systemProperties.blockTargetTime)

				const currencySymbol = selectedApiProvider.systemProperties.tokenSymbol?.[data.currencyId] ?? ''
				const mappedData = {
					orgId: data.orgId,
					adminId: address,
					name: typeof data.name === 'string' ? utf8Encode(data.name) : data.name,
					target: fromUnit(
						data.target,
						selectedApiProvider.systemProperties.tokenDecimals?.[data.currencyId] ?? 18,
					),
					deposit: fromUnit(
						data.deposit,
						selectedApiProvider.systemProperties.tokenDecimals[
							selectedApiProvider.systemProperties.governanceCurrency
						],
					),
					expiry: endBlock,
					protocol: selectedApiProvider.apiProvider.createType('GamedaoFlowFlowProtocol', data.protocol),
					governance: selectedApiProvider.apiProvider.createType(
						'GamedaoFlowFlowGovernance',
						data.governance ? 1 : 0,
					),
					cid: data.metadataCid,
					start: startBlocks,
					tokenSymbol: currencySymbol,
					tokenName: currencySymbol,
				}

				// Data validation
				validation.validateSync(mappedData)

				const tx = selectedApiProvider.apiProvider.tx.flow.createCampaign(
					mappedData.orgId,
					mappedData.adminId,
					mappedData.name,
					mappedData.target,
					mappedData.deposit,
					mappedData.expiry,
					mappedData.protocol,
					mappedData.governance,
					mappedData.cid,
					mappedData.start,
					mappedData.tokenSymbol,
					mappedData.tokenName,
				) as SubmittableExtrinsic

				setTxState({
					tx,
					currencyId: selectedApiProvider.systemProperties.governanceCurrency,
					deposit: mappedData.deposit,
					title: t('transactions:createCampaign:title'),
					description: t('transactions:createCampaign:description'),
					actionSubLine: t('transactions:createCampaign:action_sub_line'),
					actionSubTitle: t('transactions:createCampaign:action_subtitle'),
					txMsg: {
						pending: t('notification:transactions:createCampaign:pending'),
						success: t('notification:transactions:createCampaign:success'),
						error: t('notification:transactions:createCampaign:error'),
					},
				})
			} catch (e) {
				logger.trace(e)
				if (txState) {
					setTxState(null)
				}
			}
		}
	}, [selectedApiProvider, address, data, blockNumber])

	return txState
}
