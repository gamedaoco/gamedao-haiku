import React, { useCallback } from 'react'

import { useRouter } from 'next/router'

import AddIcon from '@mui/icons-material/Add'
import { Box, Button } from '@mui/material'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useTranslation } from 'react-i18next'
import { Organization, useAccountOrganizationsSubscription } from 'src/queries'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import OrganisationsTable from './OrganisationsTable'

export function Organisations() {
	const accountState = useCurrentAccountState()
	const address = getAddressFromAccountState(accountState)
	const { data, loading } = useAccountOrganizationsSubscription({
		variables: {
			address: address,
		},
	})
	const { t } = useTranslation()
	const router = useRouter()
	const createOrganization = useCallback(() => {
		router.push('/organisations/create')
	}, [router])

	const organisations = data?.identity_by_pk?.organization_members?.map(({ organization }) => organization)?.slice()
	return (
		<Box display="flex" flexDirection="column">
			<Button
				startIcon={<AddIcon fontSize="small" />}
				variant="outlined"
				sx={{ alignSelf: 'end', mb: 2 }}
				onClick={createOrganization}
			>
				{t('button:ui:create')}
			</Button>
			<OrganisationsTable organisations={organisations as Organization[]} loading={loading} />
		</Box>
	)
}

export default Organisations
