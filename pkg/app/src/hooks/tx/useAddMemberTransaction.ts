import { useEffect, useState } from 'react'

import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLogger } from 'hooks/useLogger'
import { useNetworkContext } from 'provider/network/modules/context'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	organizationId: Yup.string().required(),
	accountId: Yup.string().required(),
})

export function useAddMemberTransaction(organizationId: string) {
	const [txState, setTxState] = useState<SubmittableExtrinsic>(null)
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

				setTxState(tx)
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
