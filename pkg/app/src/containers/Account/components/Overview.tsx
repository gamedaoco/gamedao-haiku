import React from 'react'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTranslation } from 'react-i18next'

import { Organization, useAccountOrganizationsSubscription } from 'src/queries'

import { useTheme } from '@mui/material/styles'
import { Box, Grid } from '@mui/material'

import { Achievements } from './Overview/Achievements'
import { Balances } from './Overview/Balances'
import { Collectables } from './Collectables'
import { Organisations } from './Organisations'

export function Overview() {
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
				<Grid item xs={12} md={6}>
					<Achievements />
				</Grid>

				<Grid item xs={12} md={6}>
					<Balances />
				</Grid>

				<Grid item xs={12}>
					<Organisations
						organisations={organisations as Organization[]}
						title={t('page:account:organisations:title')}
						loading={loading}
					/>
				</Grid>

				<Grid item xs={12}>
					<Collectables />
				</Grid>
			</Grid>
		</Box>
	)
}

export default Overview
