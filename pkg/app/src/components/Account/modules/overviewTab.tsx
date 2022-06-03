import React, { FC, memo } from 'react'

import { AccountBalance, useAccountBalancesQuery } from '@gamedao-haiku/graphql/dist'
import { Box, Grid } from '@mui/material'
import { AccountState } from 'src/@types/extension'

import { tempOrganisations } from '../TempData'
import MyOrganisationsTable from './MyOrganisations/myOrganisations'
import MyAchievementsCard from './OverviewSection/myAchievements'
import MyBalancesCard from './OverviewSection/myBalances'
import MyCollectablesTab from './myCollectablesTab'

interface OverviewTabProps {
	accountState: AccountState
}

const OverviewTab: FC<OverviewTabProps> = ({ accountState }) => {
	const { data: balancesData, loading: balancesLoading } = useAccountBalancesQuery({ variables: { address: 'q2e3' } })
	const balances = balancesData?.account?.balances
	return (
		<Box>
			<Grid container spacing={3}>
				<Grid item xs={12} md={4}>
					<MyAchievementsCard />
				</Grid>
				<Grid item xs={12} md={8}>
					<MyBalancesCard balances={balances?.slice() as AccountBalance[]} loading={balancesLoading} />
				</Grid>
				<Grid item xs={12}>
					<MyOrganisationsTable
						organisations={tempOrganisations}
						title={'Organisations'}
						loading={balancesLoading}
					/>
				</Grid>
				<Grid item xs={12}>
					<MyCollectablesTab accountState={accountState} />
				</Grid>
			</Grid>
		</Box>
	)
}

export default memo(OverviewTab)
