import { Fragment, useEffect, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'

import { UnityView } from 'src/constants/unity'
import { Organization, useOrganizationByIdSubscription } from 'src/queries'

// import { useTmpOrganizationState } from 'src/hooks/useTmpOrganizationState'

import { TabContext, TabPanel } from '@mui/lab'
import { Container, Paper, Stack, Box } from '@mui/material'
import { Header } from '../components/Header'

const DashboardView = dynamic(() =>
	import('../components/tabs/organization/dashboardView').then((mod) => mod.DashboardView),
)
const GovernanceView = dynamic(() =>
	import('../components/tabs/governance/governanceView').then((mod) => mod.GovernanceView),
)
const ProposalView = dynamic(() => import('../components/tabs/governance/proposalView').then((mod) => mod.ProposalView))
const CampaignsView = dynamic(() =>
	import('../components/tabs/campaigns/campaignsView').then((mod) => mod.CampaignsView),
)
const TreasuryView = dynamic(() => import('../components/tabs/treasury/treasuryView').then((mod) => mod.TreasuryView))
const MembersView = dynamic(() => import('../components/tabs/members/membersView').then((mod) => mod.MembersView))
const SettingsView = dynamic(() => import('../components/tabs/settings/settingsView').then((mod) => mod.SettingsView))

export type TArgs = {
	id: string
	view?: UnityView
	isCreator?: boolean
	isMember?: boolean
	isPrime?: boolean
	treasury?: string
	organization?: Organization
	loading?: boolean
	openTx?: Function
}

export type TProps = {
	args: TArgs
}

export const Unity = ({ args }: TProps) => {
	const { view } = args
	return (
		<Fragment>
			<Stack spacing={4}>
				<Paper
					variant={'glass'}
					sx={{
						background: '#111111ee',
						backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), #000000aa)`,
					}}
				>
					<Header args={args} />
				</Paper>
				<Box p={[2, 4]} style={{ width: '100%', minHeight: '100vh' }}>
					<Box component="main" sx={{ flexGrow: 1 }}>
						<Container disableGutters maxWidth="xl" sx={{ border: 0 }}>
							<TabContext value={ view.toString() }>
								<TabPanel value="dashboard"><DashboardView args={args} /></TabPanel>
							{/*
								<TabPanel value="campaigns"><CampaignsView args={args} /></TabPanel>
								<TabPanel value="treasury"><TreasuryView args={args} /></TabPanel>
								<TabPanel value="proposal"><ProposalView args={args} /></TabPanel>
								<TabPanel value="governance"><GovernanceView args={args} /></TabPanel>
								<TabPanel value="members"><MembersView args={args} /></TabPanel>
								<TabPanel value="settings"><SettingsView args={args} /></TabPanel>
							*/}
							</TabContext>
						</Container>
					</Box>
				</Box>
			</Stack>
		</Fragment>
	)
}
