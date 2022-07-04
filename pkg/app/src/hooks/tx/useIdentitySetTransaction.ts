import { useEffect, useState } from 'react'

import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useLogger } from 'hooks/useLogger'
import { useNetworkContext } from 'provider/network/modules/context'
import * as Yup from 'yup'

const webRegularExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi

export const validation = Yup.object({
	display: Yup.string().max(32, 'Max of 32 characters').required('Display Name is Required'),
	legal: Yup.string().max(32, 'Max of 32 characters'),
	riot: Yup.string().max(32, 'Max of 32 characters'),
	email: Yup.string().email('Must be a valid email').max(255),
	web: Yup.string()
		.notRequired()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr))
		.matches(webRegularExpression, 'Must be a valid website'),
})
export function useIdentitySetTransaction(identity): SubmittableExtrinsic {
	const [txState, setTxState] = useState<SubmittableExtrinsic>(null)
	const { selectedApiProvider } = useNetworkContext()
	const logger = useLogger('useIdentitySetTransaction')

	useEffect(() => {
		if (selectedApiProvider?.apiProvider && identity) {
			try {
				// Data mapping
				const mappedData = {
					display: identity.display,
					legal: identity.legal,
					email: identity.email,
					riot: identity.riot,
					twitter: identity.twitter,
					web: identity.web,
				}

				// Data validation
				console.log(mappedData)
				validation.validateSync(mappedData)
				const tx = selectedApiProvider.apiProvider.tx.identity.setIdentity(
					selectedApiProvider?.apiProvider.createType('IdentityInfo', {
						additional: [],
						display: { raw: mappedData.display },
						legal: { raw: mappedData.legal },
						web: { raw: mappedData.web },
						riot: { raw: mappedData.riot },
						email: { raw: mappedData.email },
						image: { none: null },
						twitter: { raw: mappedData.twitter },
					}),
				)

				setTxState(tx)
			} catch (e) {
				logger.trace(e)
				if (txState) {
					setTxState(null)
				}
			}
		}
	}, [selectedApiProvider, identity])

	return txState
}
