import { useEffect, useState } from 'react'

import { useLogger } from 'src/hooks/useLogger'
import { useNetworkContext } from 'src/providers/network/modules/context'
import { useTranslation } from 'react-i18next'
import { TransactionData } from 'src/@types/transactionData'
import { fromUnit } from 'utils/token'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	campaignId: Yup.string().required(),
	// Is actually a number but with 18 digits and yum has no support for big number
	contribution: Yup.string().required(),
})

export function useContributeTransaction(campaignId: string, contribution: number, currencyId): TransactionData {
	const [txState, setTxState] = useState<TransactionData>(null)
	const { selectedApiProvider } = useNetworkContext()
	const { t } = useTranslation()
	const logger = useLogger('useContributeTransaction')

	useEffect(() => {
		if (selectedApiProvider?.apiProvider) {
			try {
				const mappedData = {
					campaignId: campaignId,
					contribution: fromUnit(
						contribution ?? 0,
						selectedApiProvider.systemProperties.tokenDecimals[currencyId] ?? 18,
					),
				}

				// Data validation
				validation.validateSync(mappedData)

				const tx = selectedApiProvider.apiProvider.tx.flow.contribute(
					mappedData.campaignId,
					mappedData.contribution,
				)

				setTxState({
					tx,
					title: t('transactions:contribute:title'),
					actionSubLine: t('transactions:contribute:action_sub_line'),
					actionSubTitle: t('transactions:contribute:action_subtitle'),
					currencyId: currencyId,
					deposit: mappedData.contribution,
					txMsg: {
						pending: t('notification:transactions:contribute:pending'),
						success: t('notification:transactions:contribute:success'),
						error: t('notification:transactions:contribute:error'),
					},
				})
			} catch (e) {
				logger.trace(e)
				if (txState) {
					setTxState(null)
				}
			}
		}
	}, [selectedApiProvider, campaignId, contribution, currencyId])

	return txState
}
