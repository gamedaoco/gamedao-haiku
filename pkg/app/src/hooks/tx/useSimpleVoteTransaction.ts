import { useEffect, useState } from 'react'

import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useLogger } from 'hooks/useLogger'
import { useNetworkContext } from 'provider/network/modules/context'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	proposalId: Yup.string().required(),
	vote: Yup.number().required().min(0).max(1),
})

export function useSimpleVoteTransaction(proposalId: string, vote: number): SubmittableExtrinsic {
	const [txState, setTxState] = useState<SubmittableExtrinsic>(null)
	const { selectedApiProvider } = useNetworkContext()
	const logger = useLogger('useSimpleVoteTransaction')

	useEffect(() => {
		if (selectedApiProvider?.apiProvider && proposalId && vote) {
			try {
				// Data mapping
				const mappedData = {
					proposalId: proposalId,
					vote: vote,
				}

				// Data validation
				validation.validateSync(mappedData)

				const tx = selectedApiProvider.apiProvider.tx.signal.simpleVote(mappedData.proposalId, mappedData.vote)

				setTxState(tx)
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
