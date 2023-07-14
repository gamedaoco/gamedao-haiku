import { MyAchievements } from './MyAchievements'
import { MyBalances } from './MyBalances'
import { MyBalancesChart } from './MyBalancesChart'
import { MyCollectables } from './MyCollectables'
import { MyOrganizations } from './MyOrganizations'
import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'

export function Overview() {
	const theme = useTheme()

	return (
		<Grid container spacing={theme.spacing(2)}>
			<Grid item xs={12} md={8}>
				<MyBalances />
			</Grid>

			<Grid item xs={12} md={4}>
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
