import { useCallback, useEffect, useState } from 'react'

import { ApolloClient, ApolloProvider } from '@apollo/client'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { GraphQlContext } from 'provider/graphQl/modules/context'
import { createApolloClient } from 'provider/graphQl/modules/graphQl'
import { useTranslation } from 'react-i18next'
import { Endpoint } from 'src/@types/graphql'
import { ENDPOINTS } from 'src/constants/endpoints'
import { createErrorNotification } from 'src/utils/notificationUtils'

import { SelectNetworkDialog } from 'components/SelectNetworkDialog/selectNetworkDialog'

enum HealthCheckStatus {
	NOT_CHECKED = 'NOT_CHECKED',
	OK = 'OK',
	ERROR = 'ERROR',
}

export function GraphQlProvider({ children }) {
	const [client, setClient] = useState<ApolloClient<any>>(null)
	const [healthCheck, setHealthCheck] = useState<HealthCheckStatus>(HealthCheckStatus.NOT_CHECKED)
	const [selectedEndpoint, setSelectedEndpoint] = useLocalStorage<Endpoint>(
		'graphql-selected-endpoint',
		ENDPOINTS.find((e) => e.default),
	)
	const { t } = useTranslation()

	const handleSelectEndpoint = useCallback(
		(endpoint: Endpoint) => {
			setHealthCheck(HealthCheckStatus.NOT_CHECKED)
			if (endpoint) {
				setSelectedEndpoint(endpoint)
			}
		},
		[setSelectedEndpoint, setHealthCheck],
	)

	useEffect(() => {
		if (selectedEndpoint && selectedEndpoint.healthCheck?.startsWith('http')) {
			fetch(selectedEndpoint.healthCheck)
				.then((response) => {
					if (response.ok) {
						setHealthCheck(HealthCheckStatus.OK)
						createApolloClient(selectedEndpoint).then((client) => {
							setClient(client)
						})
					} else {
						setHealthCheck(HealthCheckStatus.ERROR)
					}
				})
				.catch(() => {
					setHealthCheck(HealthCheckStatus.ERROR)
				})
		}
	}, [selectedEndpoint])

	useEffect(() => {
		if (healthCheck === HealthCheckStatus.ERROR) {
			createErrorNotification(t('notification:error:graphql_connection_error', { name: selectedEndpoint?.name }))
		}
	}, [healthCheck])

	if (healthCheck === HealthCheckStatus.ERROR) {
		return (
			<GraphQlContext.Provider
				value={{
					selectedEndpoint: selectedEndpoint,
					endpoints: ENDPOINTS,
					selectEndpoint: handleSelectEndpoint,
				}}
			>
				<SelectNetworkDialog open={true} onClose={() => {}} />
			</GraphQlContext.Provider>
		)
	}

	if (!client || healthCheck !== HealthCheckStatus.OK) {
		return null
	}

	return (
		<GraphQlContext.Provider
			value={{
				selectedEndpoint: selectedEndpoint,
				endpoints: ENDPOINTS,
				selectEndpoint: handleSelectEndpoint,
			}}
		>
			<ApolloProvider client={client}>{children}</ApolloProvider>
		</GraphQlContext.Provider>
	)
}
