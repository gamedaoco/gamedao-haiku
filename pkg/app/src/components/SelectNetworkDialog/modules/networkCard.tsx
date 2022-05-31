import { useCallback } from 'react'

import { Check } from '@mui/icons-material'
import { Avatar, Button, Card, Stack, Typography } from '@mui/material'
import { useNetworkContext } from 'provider/network/modules/context'
import type { ApiProvider } from 'src/@types/network'

interface ComponentProps {
	apiProvider: ApiProvider
	active?: boolean
	callback: () => void
}

export function NetworkCard({ apiProvider, active, callback }: ComponentProps) {
	const { selectApiProvider } = useNetworkContext()

	const handleButtonClick = useCallback(() => {
		if (apiProvider) {
			selectApiProvider(apiProvider)
		}

		if (callback) {
			callback()
		}
	}, [selectApiProvider, apiProvider, callback])

	if (!apiProvider) {
		return null
	}

	return (
		<Card>
			<Stack p={{ xs: 1, sm: 4 }} direction="row" alignItems="center" spacing={2}>
				<Avatar
					sx={{
						display: { xs: 'none', sm: 'block' },
						width: { md: '48px !important' },
						height: { md: '48px !important' },
					}}
					src={'https://picsum.photos/200'}
				/>
				<Typography variant="subtitle2">{apiProvider.chainName}</Typography>
				{active ? (
					<Check sx={{ display: 'block', marginLeft: 'auto !important' }} />
				) : (
					<Button onClick={handleButtonClick} variant="outlined" sx={{ marginLeft: 'auto !important' }}>
						<Typography>Select</Typography>
					</Button>
				)}
			</Stack>
		</Card>
	)
}
