import React, { FC, memo, useCallback } from 'react'

import { useRouter } from 'next/router'

import AddIcon from '@mui/icons-material/Add'
import { Box, Button } from '@mui/material'
import { Simulate } from 'react-dom/test-utils'
import { AccountState } from 'src/@types/extension'
import { Organization, useAccountOrganizationsSubscription } from 'src/queries'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import MyOrganisationsTable from './MyOrganisations/myOrganisations'

import input = Simulate.input

interface MyOrganisationsTabProps {
	accountState: AccountState
}
const MyOrganisationsTab: FC<MyOrganisationsTabProps> = ({ accountState }) => {
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

export default memo(MyOrganisationsTab)
