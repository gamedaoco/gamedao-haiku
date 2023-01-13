import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid } from '@mui/material'

import { MyOrganizations } from './MyOrganizations'
import { MyAchievements } from './MyAchievements'
import { MyBalances } from './MyBalances'
import { MyBalancesChart } from './MyBalancesChart'
import { MyCollectables } from './MyCollectables'

export function Overview() {
	const theme = useTheme()

	return (
		<Grid container spacing={theme.spacing(2)}>
			<Grid item xs={12} md={6}>
				<MyBalances />
			</Grid>

			<Grid item xs={12} md={6}>
				<MyAchievements />
			</Grid>

			<Grid item xs={12} md={12}>
				<MyBalancesChart symbol="ZERO" />
			</Grid>

			<Grid item xs={12}>
				<MyOrganizations />
			</Grid>

			<Grid item xs={12}>
				<MyCollectables />
			</Grid>
		</Grid>
	)
}