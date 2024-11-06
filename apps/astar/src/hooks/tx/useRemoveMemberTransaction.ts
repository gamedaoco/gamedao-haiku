import { useEffect, useState } from 'react'

import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useLogger } from 'src/hooks/useLogger'
import { useNetworkContext } from 'src/providers/network/components/context'
import { useTranslation } from 'react-i18next'
import { TransactionData } from 'src/@types/transactionData'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	organizationId: Yup.string().required(),
	accountId: Yup.string().required(),
})

export function useRemoveMemberTransaction(organizationId: string): TransactionData {
	const [txState, setTxState] = useState<TransactionData>(null)
	const { t } = useTranslation()
	const { selectedApiProvider } = useNetworkContext()
	const address = useCurrentAccountAddress()
	const logger = useLogger('useRemoveMemberTransaction')

	useEffect(() => {
		if (selectedApiProvider?.apiProvider && address && organizationId) {
			try {
				// Data mapping
				const mappedData = {
					organizationId: organizationId,
					accountId: address,
				}

				// Data validation
				validation.validateSync(mappedData)

				const tx = selectedApiProvider.apiProvider.tx.control.removeMember(
					mappedData.organizationId,
					mappedData.accountId,
				)

				setTxState({
					tx,
					title: t('transactions:removeMember:title'),
					txMsg: {
						pending: t('notification:transactions:removeMember:pending'),
						success: t('notification:transactions:removeMember:success'),
						error: t('notification:transactions:removeMember:error'),
					},
				})
			} catch (e) {
				logger.trace(e)
				if (txState) {
					setTxState(null)
				}
			}
		}
	}, [selectedApiProvider, address, organizationId])

	return txState
}
