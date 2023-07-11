import { Check } from '@mui/icons-material'
import { Avatar, Button, Card, Stack, Typography } from '@mui/material'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Endpoint } from 'src/@types/graphql'
import { useGraphQlContext } from 'src/providers/graphQl/modules/context'

interface ComponentProps {
	endpoint: Endpoint
	active?: boolean
	callback: () => void
}

export function NetworkCard({ endpoint, active, callback }: ComponentProps) {
	const { selectEndpoint } = useGraphQlContext()
	const { t } = useTranslation()

	const handleButtonClick = useCallback(() => {
		if (endpoint) {
			selectEndpoint(endpoint)
		}

		if (callback) {
			callback()
		}
	}, [selectEndpoint, endpoint, callback])

	if (!endpoint) {
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
					src={endpoint?.image}
				/>
				<Typography variant="subtitle2">{endpoint.name}</Typography>
				{active ? (
					<Check sx={{ display: 'block', marginLeft: 'auto !important' }} />
				) : (
					<Button onClick={handleButtonClick} variant="outlined" sx={{ marginLeft: 'auto !important' }}>
						<Typography>{t('button:ui:select')}</Typography>
					</Button>
				)}
			</Stack>
		</Card>
	)
}
