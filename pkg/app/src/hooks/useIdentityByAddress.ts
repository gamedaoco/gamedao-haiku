import { useEffect, useState } from 'react'

import { useIdentityByAddressLazyQuery } from '@gamedao-haiku/graphql/dist'
import type { Identity } from '@gamedao-haiku/graphql/dist/types'
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
		if (data?.identities?.length >= 1) {
			setIdentityState(data.identities.slice()[0] as any)
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
