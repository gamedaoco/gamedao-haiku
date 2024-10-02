import React from 'react'

import { Grid, Paper, Stack } from '@mui/material'
import { Organization } from 'src/queries'

import { About } from './components/about'
import { AccessType } from './components/accessType'
import { Control } from './components/control'
import { MemberLimit } from './components/memberLimit'
import { MemberType } from './components/memberType'

interface ComponentProps {
	organizationState: Organization
}
import { TProps } from '../../../views/Collective'

export function SettingsView({ args }: TProps) {
	const { id } = args
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw" variant={'glass'}>
					<About
						id={id}
						// description={organizationState?.description}
						// header={organizationState?.header}
						// logo={organizationState?.logo}
					/>
				</Stack>
			</Grid>
			{/* <Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw" variant={'glass'}>
					<AccessType mode={organizationState?.accessModel} />
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw" variant={'glass'}>
					<MemberType feeType={organizationState?.feeModel} feeAmount={+organizationState?.feeModel} />
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw" variant={'glass'}>
					<MemberLimit memberLimit={organizationState?.memberLimit} />
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Stack component={Paper} padding={4} spacing={6} minWidth="40vw" variant={'glass'}>
					<Control organizationType={organizationState?.type} />
				</Stack>
			</Grid> */}
		</Grid>
	)
}
