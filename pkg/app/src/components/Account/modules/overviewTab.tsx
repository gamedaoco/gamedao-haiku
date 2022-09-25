import React from 'react'
import { useTheme } from '@mui/material/styles'

import { Box, Grid } from '@mui/material'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTranslation } from 'react-i18next'
import { Organization, useAccountOrganizationsSubscription } from 'src/queries'

import MyOrganisationsTable from './MyOrganisations/myOrganisations'
import MyAchievementsCard from './OverviewSection/myAchievements'
import { MyBalancesCard } from './OverviewSection/myBalances'
import { MyCollectablesTab } from './myCollectablesTab'

export function OverviewTab() {
	const theme = useTheme()
	const address = useCurrentAccountAddress()
	const { t } = useTranslation()
	const { data, loading } = useAccountOrganizationsSubscription({
		variables: {
			address: address,
		},
	})
	const organisations = data?.identity_by_pk?.organization_members?.map(({ organization }) => organization)?.slice()

	return (
		<Box>
			<Grid container spacing={theme.spacing(2)} sx={{ flexDirection: 'row', flexGrow: 1 }}>
				<Grid item xs={12} md={4}>
					<MyAchievementsCard />
				</Grid>

				<Grid item xs={12} md={8}>
					<MyBalancesCard />
				</Grid>

				<Grid item xs={12}>
					<MyOrganisationsTable
						organisations={organisations as Organization[]}
						title={t('page:account:organisations:title')}
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
