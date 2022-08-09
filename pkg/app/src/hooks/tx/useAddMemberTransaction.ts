import { useEffect, useState } from 'react'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLogger } from 'hooks/useLogger'
import { useNetworkContext } from 'provider/network/modules/context'
import { useTranslation } from 'react-i18next'
import { TransactionData } from 'src/@types/transactionData'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	organizationId: Yup.string().required(),
	accountId: Yup.string().required(),
})

export function useAddMemberTransaction(organizationId: string): TransactionData {
	const [txState, setTxState] = useState<TransactionData>(null)
	const { t } = useTranslation()
	const { selectedApiProvider } = useNetworkContext()
	const address = useCurrentAccountAddress()
	const logger = useLogger('useAddMemberTransaction')

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

				const tx = selectedApiProvider.apiProvider.tx.control.addMember(
					mappedData.organizationId,
					mappedData.accountId,
				)

				setTxState({
					tx,
					title: t('transactions:addMember:title'),
					description: t('transactions:addMember:description'),
					actionSubTitle: t('transactions:addMember:action_subtitle'),
					txMsg: {
						pending: t('notification:transactions:addMember:pending'),
						success: t('notification:transactions:addMember:success'),
						error: t('notification:transactions:addMember:error'),
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
