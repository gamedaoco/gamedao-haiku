import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'

import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'

export const Staking = () => {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<Card sx={{ display: 'flex' }} variant={'glass'}>
			<CardContent>
				<Typography variant="h5">Staking Rewards</Typography>
				<Typography variant="caption">Get rewards for participating in our staking programs</Typography>

				<Box sx={{ mt: 3.5, display: 'flex', flexDirection: 'column', gap: 3.5 }}>
					<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2.5 }}>
						<Typography fontWeight="700">Astar dApp Staking</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	)
}
