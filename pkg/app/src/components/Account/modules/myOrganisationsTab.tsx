import React, { useCallback, useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import AddIcon from '@mui/icons-material/Add'
import { Box, Button } from '@mui/material'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useTranslation } from 'react-i18next'
import { Organization, useAccountOrganizationsSubscription } from 'src/queries'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import MyOrganisationsTable from './MyOrganisations/myOrganisations'

export function MyOrganisationsTab() {
	const { t } = useTranslation()
	const router = useRouter()

	const accountState = useCurrentAccountState()
	const address = getAddressFromAccountState(accountState)
	const { data, loading } = useAccountOrganizationsSubscription({
		variables: {
			address: address,
		},
	})

	const createOrganization = useCallback(() => {
		router.push('/organizations/create')
	}, [router])

	const [organizations, setOrganizations] = useState(null)

	useEffect(() => {
		if (!data?.identity_by_pk?.organization_members) return
		const _ = data?.identity_by_pk?.organization_members?.map(({ organization }) => organization)?.slice()
		setOrganizations(_)
	}, [data?.identity_by_pk?.organization_members])

	// console.log(organizations)

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
			<MyOrganisationsTable organisations={organizations as Organization[]} loading={loading} />
		</Box>
	)
}
