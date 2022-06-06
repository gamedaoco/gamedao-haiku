import React, { FC, memo } from 'react'

import { AccountOrganizations, useAccountQuery } from '@gamedao-haiku/graphql/dist'
import AddIcon from '@mui/icons-material/Add'
import { Box, Button } from '@mui/material'
import { AccountState } from 'src/@types/extension'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import MyOrganisationsTable from './MyOrganisations/myOrganisations'

interface MyOrganisationsTabProps {
	accountState: AccountState
}
const MyOrganisationsTab: FC<MyOrganisationsTabProps> = ({ accountState }) => {
	const address = getAddressFromAccountState(accountState)
	const { data, loading } = useAccountQuery({ variables: { address } })
	const organisations = data?.account?.organizations?.slice() as AccountOrganizations[]
	return (
		<Box display="flex" flexDirection="column">
			<Button startIcon={<AddIcon fontSize="small" />} variant="outlined" sx={{ alignSelf: 'end', mb: 2 }}>
				Create
			</Button>
			<MyOrganisationsTable organisations={organisations} loading={loading} />
		</Box>
	)
}

export default memo(MyOrganisationsTab)
