import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { Organization, useAccountOrganizationsSubscription } from 'src/queries'

import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Typography, Card, CardContent } from '@mui/material'
import OrganizationsTable from './OrganizationsTable'

export function Organizations() {
	const { t } = useTranslation()
	const { push } = useRouter()
	const address = useCurrentAccountAddress()

	const createOrganization = () => router.push('/organizations/create')

	const { data, loading } = useAccountOrganizationsSubscription({
		variables: { address },
	})

	const [organizations, setOrganizations] = useState(null)

	useEffect(() => {
		setOrganizations(data?.identity_by_pk?.organization_members?.map(({ organization }) => organization)?.slice())
	}, [data?.identity_by_pk?.organization_members])

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
			<Card variant={'glass'}>
				<CardContent>
					{organizations ? (
						<OrganizationsTable organizations={organizations as Organization[]} loading={loading} />
					) : (
						<Box>
							<Typography variant="subtitle1">You are not a member of any organization.</Typography>
							<Button onClick={() => push('/organizations')}>Explore Organizations</Button>
						</Box>
					)}
				</CardContent>
			</Card>
		</Box>
	)
}

export default Organizations
