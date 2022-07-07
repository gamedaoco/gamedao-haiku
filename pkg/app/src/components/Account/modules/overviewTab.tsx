import React from 'react'

import { Box, Grid } from '@mui/material'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { Organization, useAccountOrganizationsSubscription } from 'src/queries'

import MyOrganisationsTable from './MyOrganisations/myOrganisations'
import MyAchievementsCard from './OverviewSection/myAchievements'
import { MyBalancesCard } from './OverviewSection/myBalances'
import { MyCollectablesTab } from './myCollectablesTab'

export function OverviewTab() {
	const address = useCurrentAccountAddress()
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
					<MyBalancesCard />
				</Grid>
				<Grid item xs={12}>
					<MyOrganisationsTable
						organisations={organisations as Organization[]}
						title={'Organisations'}
						loading={loading}
					/>
				</Grid>
				<Grid item xs={12}>
					<MyCollectablesTab />
				</Grid>
			</Grid>
		</Box>
	)
}
