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
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw" variant={'glass'}>
					<About
						description={organizationState?.description}
						header={organizationState?.header}
						logo={organizationState?.logo}
					/>
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw" variant={'glass'}>
					<AccessType mode={organizationState?.access_model} />
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw" variant={'glass'}>
					<MemberType feeType={organizationState?.fee_model} feeAmount={+organizationState?.fee_model} />
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw" variant={'glass'}>
					<MemberLimit memberLimit={organizationState?.member_limit} />
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw" variant={'glass'}>
					<Control organizationType={organizationState?.type} />
				</Stack>
			</Grid>
		</Grid>
	)
}
