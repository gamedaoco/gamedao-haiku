import { useNetworkContext } from 'provider/network/modules/context'
import { MenuItem, Paper, Select, SelectChangeEvent, Stack } from '@mui/material'
import { ApiProvider } from 'src/@types/network'
import { useCallback } from 'react'

export function NetworkSelector() {
	const { selectedApiProvider, apiProviders, selectApiProvider } = useNetworkContext()

	const handleNetworkChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			const chainName = event?.target?.value
			const newApiProvider = apiProviders.find((apiProvider) => apiProvider.chainName === chainName)
			if (newApiProvider) {
				selectApiProvider(newApiProvider)
			}
		},
		[selectApiProvider, apiProviders],
	)

	if (!selectedApiProvider || !apiProviders) {
		return null
	}

	return (
		<Stack component={Paper} width="fit-content" elevation={5}>
			<Select value={selectedApiProvider.chainName || ''} onChange={handleNetworkChange}>
				{apiProviders.map((apiProvider: ApiProvider) => {
					return (
						<MenuItem value={apiProvider.chainName} key={apiProvider.chainName}>
							{apiProvider.chainName}
						</MenuItem>
					)
				})}
			</Select>
		</Stack>
	)
}
