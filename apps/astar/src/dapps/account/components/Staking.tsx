import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'

import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'
import { WarningIcon } from 'src/theme/overrides/CustomIcons'

export const Staking = () => {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<Card sx={{ display: 'flex' }} variant={'glass'}>
			<CardContent>
				<Typography variant="h5">Staking Rewards</Typography>
				<Typography variant="body1">Get rewards for participating in our staking program</Typography>
				<br />
				{/* <Typography variant="h5">Astar dApp Staking</Typography> */}
				<Box sx={{ mt: 3.5, display: 'flex', flexDirection: 'row', gap: 2, border: 1, p: 1 }}>
					<WarningIcon />
					<Typography variant="body1">Not available yet.</Typography>
				</Box>
			</CardContent>
		</Card>
	)
}
