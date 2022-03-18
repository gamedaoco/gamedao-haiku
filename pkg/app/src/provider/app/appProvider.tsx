import { useEffect } from 'react'
import { AppContext } from 'provider/app/modules/context'
import { ENVIRONMENT } from 'src/constants'
import { useConfigQuery, useFeaturesQuery } from '@gamedao-haiku/graphql/dist'

export function AppProvider({ children }) {
	const configQueryResult = useConfigQuery({
		variables: { env: ENVIRONMENT },
	})
	const featureQueryResult = useFeaturesQuery({
		variables: { env: ENVIRONMENT },
	})

	useEffect(() => {
		if (configQueryResult.error) {
			console.error('The app config could not be retrieved', 'error', configQueryResult.error)
		}
	}, [configQueryResult.error])

	useEffect(() => {
		if (featureQueryResult.error) {
			console.error('The app config could not be retrieved', 'error', featureQueryResult.error)
		}
	}, [featureQueryResult.error])

	return (
		<AppContext.Provider
			value={{
				ready: !!configQueryResult.data && !!featureQueryResult.data,
				config: configQueryResult.data?.config ?? null,
				features: featureQueryResult.data?.features ?? null,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
