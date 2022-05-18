import React, { FC, memo } from 'react'
import { AccountState } from 'src/@types/extension'
import { Box, Grid } from '@mui/material'
import MyAchievementsCard from './overview-section/my-achievements'

interface OverviewTabProps {
	accountState: AccountState
}
const OverviewTab: FC<OverviewTabProps> = ({ accountState }) => {
	return (
		<Box>
			<Grid container spacing={3}>
				<Grid item xs={4}>
					<MyAchievementsCard />
				</Grid>
			</Grid>
		</Box>
	)
}

export default memo(OverviewTab)
