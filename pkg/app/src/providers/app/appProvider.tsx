import { useEffect, useState } from 'react'

import { AppContext } from 'providers/app/modules/context'
import { ENVIRONMENT } from 'src/constants'
import { useApiProviderConfigQuery, useConfigQuery, useFeaturesQuery } from 'src/queries'

import { useSession } from 'next-auth/react'
import { useGetIdentityByDiscordQuery } from 'src/queries'

export function AppProvider({ children }) {
	// resolve uuid and persist in app state
	const { data: session } = useSession()
	const { data } = useGetIdentityByDiscordQuery({ variables: { discord: session?.user?.discord } })
	const [uuid, setUuid] = useState(null)
	useEffect(() => {
		if (!data) return
		const id = data.BattlepassBot.BattlepassIdentities[0].uuid
		setUuid(id)
	}, [data?.BattlepassBot])

	const configQueryResult = useConfigQuery({
		variables: { env: ENVIRONMENT },
	})
	const featureQueryResult = useFeaturesQuery({
		variables: { env: ENVIRONMENT },
	})
	const apiProviderConfigQueryResult = useApiProviderConfigQuery()

	useEffect(() => {
		if (configQueryResult.error) {
			console.error('The app config could not be retrieved', 'error', configQueryResult.error)
		}
	}, [configQueryResult.error])

	useEffect(() => {
		if (featureQueryResult.error) {
			console.error('The app features could not be retrieved', 'error', featureQueryResult.error)
		}
	}, [featureQueryResult.error])

	return (
		<AppContext.Provider
			value={{
				ready: !!configQueryResult.data && !!featureQueryResult.data && !!apiProviderConfigQueryResult.data,
				config: configQueryResult.data?.config ?? null,
				features: featureQueryResult.data?.features ?? null,
				apiProviderConfig: apiProviderConfigQueryResult.data?.apiProvider ?? null,
				uuid: uuid,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
