import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid } from '@mui/material'

import { MyOrganizations } from './MyOrganizations'
import { MyAchievements } from './MyAchievements'
import { MyBalances } from './MyBalances'
import { MyCollectables } from './MyCollectables'

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

			<Grid item xs={12}>
				<MyOrganizations />
			</Grid>

			<Grid item xs={12}>
				<MyCollectables />
			</Grid>
		</Grid>
	)
}
