import { useEffect, useState } from 'react'

import { Identity, useIdentityByAddressLazyQuery } from 'src/queries'
import { createErrorNotification } from 'src/utils/notificationUtils'

export interface IdentityByAddress {
	identity: Identity
	loading: boolean
}

export function useIdentityByAddress(address: string): IdentityByAddress {
	const [identityState, setIdentityState] = useState<Identity>(null)
	const [queryIdentity, { data, error, loading }] = useIdentityByAddressLazyQuery()

	useEffect(() => {
		if (address) {
			queryIdentity({ variables: { address } })
		}
	}, [address])

	useEffect(() => {
		if (data?.identity_by_pk) {
			setIdentityState({ ...data.identity_by_pk } as any)
		}
	}, [data])

	useEffect(() => {
		if (error) {
			console.error(error)
			createErrorNotification('Identity could not be loaded ')
		}
	}, [error])

	return { identity: identityState, loading: loading || !data }
}
