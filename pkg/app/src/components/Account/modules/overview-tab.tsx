import React, { FC, memo } from 'react'
import { AccountState } from 'src/@types/extension'
import { Box, Grid } from '@mui/material'
import MyAchievementsCard from './overview-section/my-achievements'
import MyBalancesCard from './overview-section/my-balances'

interface OverviewTabProps {
	accountState: AccountState
}
const OverviewTab: FC<OverviewTabProps> = ({ accountState }) => {
	const tempBalances = [
		{
			token: '123',
			transferrable: 123,
			locked: 1,
			reserved: 23,
			total: 4,
		},
		{
			token: '456',
			transferrable: 798,
			locked: 13,
			reserved: 231,
			total: 44,
		},
		{
			token: '1234',
			transferrable: 1123,
			locked: 123,
			reserved: 12323,
			total: 4123,
		},
	]
	return (
		<Box>
			<Grid container spacing={3}>
				<Grid item xs={12} md={4}>
					<MyAchievementsCard />
				</Grid>
				<Grid item xs={12} md={8}>
					<MyBalancesCard balances={tempBalances} />
				</Grid>
			</Grid>
		</Box>
	)
}

export default memo(OverviewTab)
