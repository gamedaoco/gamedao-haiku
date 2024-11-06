import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLogger } from 'src/hooks/useLogger'
import { useNetworkContext } from 'src/providers/network/components/context'
import { TransactionData } from 'src/@types/transactionData'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	organizationId: Yup.string().required(),
	accountId: Yup.string().required(),
})

export function useApproveMemberTx({ organizationId, accountId }): TransactionData {
	const { t } = useTranslation()
	const { selectedApiProvider } = useNetworkContext()
	const [txState, setTxState] = useState<TransactionData>(null)
	const logger = useLogger('Approve Member')

	useEffect(() => {
		if (selectedApiProvider?.apiProvider && accountId && organizationId) {
			console.log(accountId, organizationId)
			try {
				const payload = {
					organizationId,
					accountId,
				}
				validation.validateSync(payload)

				const tx = selectedApiProvider.apiProvider.tx.control.updateMemberState(
					payload.organizationId,
					payload.accountId,
					'Active',
				)

				setTxState({
					tx,
					title: 'Approve Member', //t('transactions:addMember:title'),
					description: 'This will approve a member to your organization.', //t('transactions:addMember:description'),
					actionSubTitle: t('transactions:addMember:action_subtitle'),
					txMsg: {
						pending: 'Pending: Approve member.', //t('notification:transactions:addMember:pending'),
						success: 'Member approved.', //t('notification:transactions:addMember:success'),
						error: 'Member approval failed.', //t('notification:transactions:addMember:error'),
					},
				})
			} catch (e) {
				logger.trace(e)
				if (txState) {
					setTxState(null)
				}
			}
		}
	}, [selectedApiProvider, accountId, organizationId])

	return txState
}
