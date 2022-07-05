import { useEffect, useState } from 'react'

import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useLogger } from 'hooks/useLogger'
import { useNetworkContext } from 'provider/network/modules/context'
import * as Yup from 'yup'

const webRegularExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi

export const validation = Yup.object({
	display: Yup.string().max(32, 'Max of 32 characters').required('Display Name is Required'),
	legal: Yup.string().max(32, 'Max of 32 characters'),
	email: Yup.string().email('Must be a valid email').max(255),
	web: Yup.string()
		.notRequired()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr))
		.matches(webRegularExpression, 'Must be a valid website'),
	twitter: Yup.string()
		.notRequired()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr))
		.matches(/@(\w){2,15}(:|)/, 'Must be a valid twitter account'),
	riot: Yup.string()
		.notRequired()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr))
		.matches(/@(\w){2,15}.*:(\w){2,15}/, 'Must be a valid riot account'),
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
				validation.validateSync(mappedData)
				const tx = selectedApiProvider.apiProvider.tx.identity.setIdentity(
					selectedApiProvider?.apiProvider.createType('IdentityInfo', {
						additional: [],
						display: mappedData.display ? { raw: mappedData.display } : { none: null },
						legal: mappedData.legal ? { raw: mappedData.legal } : { none: null },
						web: mappedData.web ? { raw: mappedData.web } : { none: null },
						riot: mappedData.riot ? { raw: mappedData.riot } : { none: null },
						email: mappedData.email ? { raw: mappedData.email } : { none: null },
						image: { none: null },
						twitter: mappedData.twitter ? { raw: mappedData.twitter } : { none: null },
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
