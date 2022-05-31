import React, { FC, memo, useEffect, useState } from 'react'

import AddIcon from '@mui/icons-material/Add'
import { Box, Button } from '@mui/material'
import { AccountState } from 'src/@types/extension'

import { tempOrganisations } from '../TempData'
import MyOrganisationsTable from './MyOrganisations/myOrganisations'

interface MyOrganisationsTabProps {
	accountState: AccountState
}
const MyOrganisationsTab: FC<MyOrganisationsTabProps> = ({ accountState }) => {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 4000)
	}, [])
	return (
		<Box display="flex" flexDirection="column">
			<Button startIcon={<AddIcon fontSize="small" />} variant="outlined" sx={{ alignSelf: 'end', mb: 2 }}>
				Create
			</Button>
			<MyOrganisationsTable organisations={tempOrganisations} title={false} loading={loading} />
		</Box>
	)
}

export default memo(MyOrganisationsTab)
