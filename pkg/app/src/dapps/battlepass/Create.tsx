import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'

import { useActiveBattlepassSubscription } from 'src/queries'
import { useJoinBattlePassTX } from 'hooks/tx/useJoinBattlePassTX'

import { useTheme } from '@mui/material/styles'
import { Box, Card, Button, Typography, Grid, Stack } from '@mui/material'
import { CardContent, CardActions } from '@mui/material'

export const Create = () => {
	const theme = useTheme()

	return (
		<Grid
			container
			// columns={{ xs: 1, md: 2 }}
			rowSpacing={2}
			columnSpacing={{ xs: 2, md: 4, lg: 6 }}
			justifyContent={{ xs: 'center', md: 'left' }}
		>
			<Grid item xs={12}>
				<Typography variant="h4"> 1. Create Battlepass </Typography>
				<Typography variant="h5"> A. Deposit </Typography>
				<Typography>
					input amount
					<br />
					btn deposit
					<br />
				</Typography>
				<Typography variant="h5"> B. Create </Typography>
				<Typography>
					input name
					<br />
					input description
					<br />
					input price
					<br />
					input currency
					<br />
					input duration
					<br />
					upload icon
					<br />
					upload image
					<br />
				</Typography>
			</Grid>

			<Grid item xs={12}>
				<Typography variant="h4"> 2. Setup Battlepass </Typography>
				<Typography variant="h5"> A. Score / level mapping </Typography>
				<Typography>
					show list, for each add remove btn
					<br />
					input level
					<br />
					input score
					<br />
					input name
					<br />
					button add
				</Typography>
				<Typography variant="h5"> B. Create Quests </Typography>
				<Typography variant="h5"> C. Create Rewards </Typography>
			</Grid>

			<Grid item xs={12}>
				<Typography variant="h4"> 3. Activate Battlepass </Typography>
			</Grid>
		</Grid>
	)
}
