import React from 'react'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTranslation } from 'react-i18next'

import { useTheme } from '@mui/material/styles'
import { Box, Grid } from '@mui/material'

import { Achievements } from './Achievements'
import { Balances } from './Balances'
import OrganizationsTable from '../Organizations/OrganizationsTable'
import Collectables from '../Collectables'

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

				<Grid item xs={12}>
					<OrganizationsTable title={t('page:account:organisations:title')} />
				</Grid>

				<Grid item xs={12}>
					<Collectables />
				</Grid>
			</Grid>
		</Box>
	)
}

export default Overview
