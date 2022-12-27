import React, { useCallback, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { Organization, useOrganizationsByAccountSubscription } from 'src/queries'

import AddIcon from '@mui/icons-material/Add'
import { Card, CardContent, Typography, Box, Button, Stack } from '@mui/material'

import { OrganizationList } from './OrganizationList'

export function MyOrganizations() {
	const { t } = useTranslation()
	const { push } = useRouter()

	const createOrganization = useCallback(() => {
		push('/organizations/create')
	}, [push])

	const address = useCurrentAccountAddress()
	const { data, loading } = useOrganizationsByAccountSubscription({ variables: { address: address } })
	const [organizations, setOrganizations] = useState(null)

	useEffect(() => {
		if (!data) return
		const _ = data?.organization //.map(({ organization }) => organization).slice()
		setOrganizations(_)
	}, [data?.organization])

	return (
		<Card variant={'glass'}>
			<CardContent>
				<Typography variant="h5">My Organizations</Typography>
				{!loading && (!organizations || organizations?.length < 1) && (
					<Stack direction="row" alignItems="center" justifyContent="space-between">
						<Typography variant="body1"> You are not a member of any DAO yet. </Typography>
						<Button
							startIcon={<AddIcon fontSize="small" />}
							variant="outlined"
							size="small"
							onClick={createOrganization}
						>
							{t('button:ui:create')}
						</Button>
					</Stack>
				)}
				{organizations && <OrganizationList organizations={organizations} />}
			</CardContent>
		</Card>
	)
}
