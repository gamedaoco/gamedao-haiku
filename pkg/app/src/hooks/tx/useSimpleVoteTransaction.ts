import { useEffect, useState } from 'react'

import { useLogger } from 'hooks/useLogger'
import { useNetworkContext } from 'provider/network/modules/context'
import { useTranslation } from 'react-i18next'
import { TransactionData } from 'src/@types/transactionData'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	proposalId: Yup.string().required(),
	vote: Yup.number().required().min(0).max(1),
})

export function useSimpleVoteTransaction(proposalId: string, vote: number): TransactionData {
	const [txState, setTxState] = useState<TransactionData>(null)
	const { t } = useTranslation()
	const { selectedApiProvider } = useNetworkContext()
	const logger = useLogger('useSimpleVoteTransaction')

	useEffect(() => {
		if (selectedApiProvider?.apiProvider && proposalId && vote != null) {
			try {
				// Data mapping
				const mappedData = {
					proposalId: proposalId,
					vote: vote,
				}

				// Data validation
				validation.validateSync(mappedData)

				const tx = selectedApiProvider.apiProvider.tx.signal.simpleVote(mappedData.proposalId, mappedData.vote)

				setTxState({
					tx,
					title: t('transactions:simpleVote:title'),
					txMsg: {
						pending: t('notification:transactions:simpleVote:pending'),
						success: t('notification:transactions:simpleVote:success'),
						error: t('notification:transactions:simpleVote:error'),
					},
				})
			} catch (e) {
				logger.trace(e)
				if (txState) {
					setTxState(null)
				}
			}
		}
	}, [selectedApiProvider, proposalId, vote])

	return txState
}
