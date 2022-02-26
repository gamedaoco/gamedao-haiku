import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { AppContext } from 'provider/app/modules/context'
import { GET_CONFIG_QUERY } from 'graphql/queries/config'
import { GET_FEATURE_QUERY } from 'graphql/queries/feature'

export function AppProvider({ children }) {
	const configQueryResult = useQuery(GET_CONFIG_QUERY)
	const featureQueryResult = useQuery(GET_FEATURE_QUERY)

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
				ready: configQueryResult.data && featureQueryResult.data,
				config: configQueryResult.data?.config ?? null,
				features: featureQueryResult.data?.features ?? null,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
