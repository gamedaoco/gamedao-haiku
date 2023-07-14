import { useEffect, useState } from 'react'
import { Identity, useIdentityByAddressSubscription } from 'src/queries'
import { createErrorNotification } from 'src/utils/notificationUtils'

export interface IdentityByAddress {
	identity: Identity
	loading: boolean
}

export function useIdentityByAddress(address: string): IdentityByAddress {
	const [identityState, setIdentityState] = useState<Identity>(null)
	const { data, error, loading } = useIdentityByAddressSubscription({ variables: { address } })

	useEffect(() => {
		if (data?.identityByPk) {
			setIdentityState({ ...data.identityByPk } as any)
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
