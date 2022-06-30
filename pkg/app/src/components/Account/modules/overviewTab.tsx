import React, { FC, memo } from 'react'

import { Box, Grid } from '@mui/material'
import { AccountState } from 'src/@types/extension'
import { Organization, useAccountOrganizationsSubscription } from 'src/queries'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import MyOrganisationsTable from './MyOrganisations/myOrganisations'
import MyAchievementsCard from './OverviewSection/myAchievements'
import MyBalancesCard from './OverviewSection/myBalances'
import MyCollectablesTab from './myCollectablesTab'

interface OverviewTabProps {
	accountState: AccountState
}

const OverviewTab: FC<OverviewTabProps> = ({ accountState }) => {
	const address = getAddressFromAccountState(accountState)
	const { data, loading } = useAccountOrganizationsSubscription({
		variables: {
			address: address,
		},
	})
	const organisations = data?.identity_by_pk?.organization_members?.map(({ organization }) => organization)?.slice()
	return (
		<Box>
			<Grid container spacing={3}>
				<Grid item xs={12} md={4}>
					<MyAchievementsCard />
				</Grid>
				<Grid item xs={12} md={8}>
					{/*<MyBalancesCard balances={balances} loading={loading} />*/}
				</Grid>
				<Grid item xs={12}>
					<MyOrganisationsTable
						organisations={organisations as Organization[]}
						title={'Organisations'}
						loading={loading}
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
