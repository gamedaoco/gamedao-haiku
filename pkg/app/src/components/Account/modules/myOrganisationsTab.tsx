import React, { useCallback } from 'react'

import { useRouter } from 'next/router'

import AddIcon from '@mui/icons-material/Add'
import { Box, Button } from '@mui/material'
import { Organization, useAccountOrganizationsSubscription } from 'src/queries'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import MyOrganisationsTable from './MyOrganisations/myOrganisations'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'

export function MyOrganisationsTab() {
	const accountState = useCurrentAccountState()
	const address = getAddressFromAccountState(accountState)
	const { data, loading } = useAccountOrganizationsSubscription({
		variables: {
			address: address,
		},
	})
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
				Create
			</Button>
			<MyOrganisationsTable organisations={organisations as Organization[]} loading={loading} />
		</Box>
	)
}
