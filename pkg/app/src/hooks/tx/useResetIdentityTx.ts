import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useLogger } from 'hooks/useLogger'
import { useNetworkContext } from 'providers/network/modules/context'
import { TransactionData } from 'src/@types/transactionData'

export function useResetIdentityTx(): TransactionData {
	const [txState, setTxState] = useState<TransactionData>(null)
	const { selectedApiProvider } = useNetworkContext()
	const { t } = useTranslation()

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
	}, [logger, selectedApiProvider?.apiProvider, t, txState])

	return txState
}
