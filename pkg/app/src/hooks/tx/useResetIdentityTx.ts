import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useLogger } from 'hooks/useLogger'
import { useNetworkContext } from 'providers/network/modules/context'
import { TransactionData } from 'src/@types/transactionData'

export function useResetIdentityTx(): TransactionData {
	const { t } = useTranslation()
	const { selectedApiProvider } = useNetworkContext()
	const [txState, setTxState] = useState<TransactionData>(null)

	const logger = useLogger('useIdentitySetTransaction')

	useEffect(() => {
		if (selectedApiProvider?.apiProvider) {
			try {
				const tx = selectedApiProvider?.apiProvider?.tx?.identity?.clearIdentity()

				setTxState({
					tx,
					title: t('transactions:clearIdentity:title'),
					txMsg: {
						pending: t('notification:transactions:clearIdentity:pending'),
						success: t('notification:transactions:clearIdentity:success'),
						error: t('notification:transactions:clearIdentity:error'),
					},
				})
			} catch (e) {
				logger.error(e)
				if (txState) {
					setTxState(null)
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [logger, selectedApiProvider?.apiProvider, t])

	return txState
}
