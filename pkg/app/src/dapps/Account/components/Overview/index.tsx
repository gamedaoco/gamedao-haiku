import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTranslation } from 'react-i18next'

import { Organization, useAccountOrganizationsSubscription } from 'src/queries'

import { useTheme } from '@mui/material/styles'
import { Box, Grid } from '@mui/material'

import OrganizationsTable from '../Organizations/OrganizationsTable'
import { Achievements } from './Achievements'
import { Balances } from './Balances'
// import Collectables from '../Collectables'

export function Overview() {
	const theme = useTheme()
	const address = useCurrentAccountAddress()
	const { t } = useTranslation()

	return (
		<Box>
			<Grid container spacing={theme.spacing(2)} sx={{ flexDirection: 'row', flexGrow: 1 }}>
				<Grid item xs={12} md={6}>
					<Achievements />
				</Grid>

				<Grid item xs={12} md={6}>
					<Balances />
				</Grid>

				{/*
				<Grid item xs={12}>
					<OrganizationsTable
						organizations={organizations as Organization[]}
						title={t('page:account:organisations:title')}
						loading={loading}
					/>
				</Grid>
*/}

				{/*
				<Grid item xs={12}>
					<Collectables />
				</Grid>
*/}
			</Grid>
		</Box>
	)
}

export default Overview
