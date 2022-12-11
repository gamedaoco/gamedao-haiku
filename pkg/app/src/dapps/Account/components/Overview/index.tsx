import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { Organization, useAccountOrganizationsSubscription } from 'src/queries'

import { useTheme } from '@mui/material/styles'
import { Box, Grid } from '@mui/material'

import Achievements from './Achievements'
import Balances from './Balances'
import Organizations from '../Organizations/OrganizationsTable'
import Collectables from '../Collectables'

import AddIcon from '@mui/icons-material/Add'

export function Overview() {
	const theme = useTheme()
	const { t } = useTranslation()

	const { push } = useRouter()
	const address = useCurrentAccountAddress()

	const { data, loading } = useAccountOrganizationsSubscription({
		variables: { address },
	})

	const [organizations, setOrganizations] = useState(null)

	useEffect(() => {
		setOrganizations(data?.identity_by_pk?.organization_members?.map(({ organization }) => organization)?.slice())
	}, [data?.identity_by_pk?.organization_members])

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
					<Organizations organizations={organizations} title={t('page:account:organisations:title')} />
				</Grid>

				<Grid item xs={12}>
					<Collectables />
				</Grid>
			</Grid>
		</Box>
	)
}

export default Overview
