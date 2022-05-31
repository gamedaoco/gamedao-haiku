import React, { FC, memo, useEffect, useState } from 'react'
import { AccountState } from 'src/@types/extension'
import { Box, Grid } from '@mui/material'
import MyAchievementsCard from './OverviewSection/myAchievements'
import MyBalancesCard from './OverviewSection/myBalances'
import { tempBalances, tempOrganisations } from '../TempData'
import MyCollectablesTab from './myCollectablesTab'
import MyOrganisationsTable from './MyOrganisations/myOrganisations'

interface OverviewTabProps {
	accountState: AccountState
}
const OverviewTab: FC<OverviewTabProps> = ({ accountState }) => {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 4000)
	}, [])
	return (
		<Box>
			<Grid container spacing={3}>
				<Grid item xs={12} md={4}>
					<MyAchievementsCard />
				</Grid>
				<Grid item xs={12} md={8}>
					<MyBalancesCard balances={tempBalances} />
				</Grid>
				<Grid item xs={12}>
					<MyOrganisationsTable organisations={tempOrganisations} title={'Organisations'} loading={loading} />
				</Grid>
				<Grid item xs={12}>
					<MyCollectablesTab accountState={accountState} />
				</Grid>
			</Grid>
		</Box>
	)
}

export default memo(OverviewTab)
