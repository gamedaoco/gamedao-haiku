import { useEffect, useState } from 'react'

import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useLogger } from 'hooks/useLogger'
import { useNetworkContext } from 'provider/network/modules/context'
import { Identity } from 'src/queries'
import * as Yup from 'yup'

export function useClearIdentityTransaction(): SubmittableExtrinsic {
	const [txState, setTxState] = useState<SubmittableExtrinsic>(null)
	const { selectedApiProvider } = useNetworkContext()
	const logger = useLogger('useIdentitySetTransaction')

	useEffect(() => {
		if (selectedApiProvider?.apiProvider) {
			try {
				const tx = selectedApiProvider.apiProvider.tx.identity.clearIdentity()

				setTxState(tx)
			} catch (e) {
				logger.trace(e)
				if (txState) {
					setTxState(null)
				}
			}
		}
	}, [selectedApiProvider])

	return txState
}
