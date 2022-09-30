import React from 'react'

import { Grid, Paper, Stack } from '@mui/material'
import { Organization } from 'src/queries'

import { About } from './modules/about'
import { AccessType } from './modules/accessType'
import { Control } from './modules/control'
import { MemberLimit } from './modules/memberLimit'
import { MemberType } from './modules/memberType'

interface ComponentProps {
	organizationState: Organization
}

export function SettingsOverview({ organizationState }: ComponentProps) {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw">
					<About
						description={organizationState?.organization_metadata?.description}
						header={organizationState?.organization_metadata?.header}
						logo={organizationState?.organization_metadata?.logo}
					/>
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw">
					<AccessType mode={organizationState?.access_model} />
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw">
					<MemberType feeType={organizationState?.fee_model} feeAmount={+organizationState?.fee_model} />
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw">
					<MemberLimit memberLimit={organizationState?.member_limit} />
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw">
					<Control organizationType={organizationState?.type} />
				</Stack>
			</Grid>
		</Grid>
	)
}
