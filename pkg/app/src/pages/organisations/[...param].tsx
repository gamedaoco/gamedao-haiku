import React, { useCallback, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { AddAPhoto } from '@mui/icons-material'
import { TabContext, TabPanel } from '@mui/lab'
import {
	Avatar,
	Card,
	CardContent,
	CardMedia,
	CircularProgress,
	Grid,
	Stack,
	Tab,
	Tabs,
	useMediaQuery,
} from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'
import { Organization, useCampaignByOrganizationIdSubscription, useOrganizationByIdSubscription } from 'src/queries'
import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notificationUtils'

import { Layout } from 'components/Layouts/default/layout'
import { CampaignOverview } from 'components/TabPanels/Campaign/overview'
import { OrganizationMembersTable } from 'components/TabPanels/Organization/organizationMembers'
import { Overview } from 'components/TabPanels/Organization/overview'
import { TmpOverview } from 'components/TabPanels/Organization/tmpOverview'
import { ProposalDetail } from 'components/TabPanels/Proposal/detail'
import { ProposalOverview } from 'components/TabPanels/Proposal/overview'

export function OrganisationById() {
	const { query, push } = useRouter()
	const [routeState, setRouteState] = useState<string>(null)
	const [organizationIdState, setOrganizationIdState] = useState<string>(null)
	const [proposalIdState, setProposalIdState] = useState<string>(null)
	const [activeStep, setActiveStep] = useState<string>('dashboard')
	const [organizationState, setOrganizationState] = useState<Organization>()
	const [isMemberState, setIsMemberState] = useState<boolean>(false)
	const { loading, data } = useOrganizationByIdSubscription({
		variables: { orgId: organizationIdState },
	})

	const address = useCurrentAccountAddress()
	const theme = useTheme()
	const config = useConfig()
	const tmpOrg = useTmpOrganisationState()
	const { data: campaignData, loading: campaignLoading } = useCampaignByOrganizationIdSubscription({
		variables: { orgId: organizationIdState },
	})

	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const handleTabSelect = useCallback(
		(newPath) => {
			if (organizationIdState) {
				push(`${organizationIdState}/${newPath}`)
			} else {
				push(newPath)
			}

			// Reset proposal id when click on tab
			setProposalIdState(null)
		},
		[organizationIdState, push],
	)

	const handleUploadImage = useCallback(async (event, setter) => {
		const files = event.target.files
		if (!files || files.length === 0) {
			return createWarningNotification('No file selected')
		}

		const cid = await uploadFileToIpfs(files[0])
		setter(cid.toString())
	}, [])

	// Query and route mapping
	useEffect(() => {
		const param = query?.param
		if (param && Array.isArray(param)) {
			if (param.length == 1) {
				setRouteState(param[0])
			} else if (param.length >= 2) {
				setOrganizationIdState(param[0])
				setRouteState(param[1])

				if (param.length >= 3) {
					setProposalIdState(param[2])
				}
			}
		}
	}, [query])

	useEffect(() => {
		if (routeState) {
			setActiveStep(routeState)
		}
	}, [routeState])

	// Update and upload metadata
	useEffect(() => {
		if (tmpOrg.name && tmpOrg.description && tmpOrg.logoCID && tmpOrg.headerCID) {
			const metaData = {
				name: tmpOrg.name,
				description: tmpOrg.description,
				logo: tmpOrg.logoCID,
				header: tmpOrg.headerCID,
			}
			;(async (): Promise<string> => {
				const file = new File([JSON.stringify(metaData)], `${tmpOrg.name}-metadata.json`, {
					type: 'text/plain',
				})

				const cid = await uploadFileToIpfs(file)
				return cid.toString()
			})().then((cid) => tmpOrg.setMetaDataCID(cid))
		}
	}, [tmpOrg.name, tmpOrg.description, tmpOrg.logoCID, tmpOrg.headerCID])

	useEffect(() => {
		if (data) {
			setOrganizationState(data.organization?.[0] as Organization)
		}
	}, [data])

	useEffect(() => {
		if (address && organizationState) {
			setIsMemberState(organizationState.organization_members.some((member) => member.address === address))
		}
	}, [organizationState, address])

	return (
		<Layout showHeader showFooter showSidebar title="Organisation">
			<Box width="100%" height="100%" minHeight="90vh" padding={{ xs: 2, sm: 4 }}>
				<TabContext value={activeStep}>
					{(!loading && data) || !organizationIdState ? (
						<Stack spacing={4}>
							<Card
								sx={{
									position: 'relative',
								}}
							>
								<Grid
									minHeight="20vh"
									maxHeight="20vh"
									width="100%"
									display="grid"
									alignItems="center"
									overflow="hidden"
								>
									<label htmlFor="header-file-upload">
										<input
											style={{ display: 'none' }}
											accept="image/*"
											id="header-file-upload"
											type="file"
											onChange={(event) => handleUploadImage(event, tmpOrg.setHeaderCID)}
										/>
										{!organizationState?.organization_metadata?.header &&
										!tmpOrg.headerCID?.length ? (
											<Box display="grid" justifyContent="center" alignItems="center">
												<AddAPhoto sx={{ height: '44px', width: '44px', cursor: 'pointer' }} />
											</Box>
										) : (
											<CardMedia
												component="img"
												src={parseIpfsHash(
													organizationState?.organization_metadata?.header ??
														tmpOrg.headerCID,
													config.IPFS_GATEWAY,
												)}
												alt="logo"
											/>
										)}
									</label>
								</Grid>
								<Stack
									direction="row"
									spacing={4}
									alignItems="center"
									justifyContent={isMd ? 'flex-start' : 'center'}
									sx={{
										position: isMd ? 'absolute' : 'relative',
										left: '2rem',
										bottom: '2rem',
									}}
								>
									<label htmlFor="logo-file-upload">
										<input
											style={{ display: 'none' }}
											accept="image/*"
											id="logo-file-upload"
											type="file"
											onChange={(event) => handleUploadImage(event, tmpOrg.setLogoCID)}
										/>
										<Avatar
											sx={(theme) => ({
												width: '7rem',
												height: '7rem',
												backgroundColor: theme.palette.background.default,
												outline: `1px dashed ${theme.palette.grey['500']} !important`,
												outlineOffset: '5px',
												cursor: 'pointer',
											})}
											srcSet={
												organizationState?.organization_metadata?.logo || tmpOrg.logoCID?.length
													? parseIpfsHash(
															organizationState?.organization_metadata?.logo ||
																tmpOrg.logoCID,
															config.IPFS_GATEWAY,
													  )
													: null
											}
										>
											<Stack spacing={1} alignItems="center">
												<AddAPhoto sx={{ height: '20px', width: '20px' }} />
												<Typography>Update photo</Typography>
											</Stack>
										</Avatar>
									</label>

									<Stack spacing={1}>
										<Typography variant="h4">
											{organizationState?.organization_metadata?.name ?? tmpOrg.name ?? ''}
										</Typography>
										<Typography>
											{organizationState?.organization_members?.length ?? 1} Member
										</Typography>
									</Stack>
								</Stack>
								<CardContent sx={{ maxWidth: isMd ? '60%' : '100%', marginLeft: 'auto' }}>
									<Tabs
										variant="scrollable"
										value={activeStep}
										onChange={(_, value) => handleTabSelect(value)}
										scrollButtons="auto"
									>
										<Tab label="Overview" value={'dashboard'} />
										<Tab label="Campaigns" value={'campaigns'} disabled={!organizationIdState} />
										<Tab label="proposals" value={'proposals'} disabled={!organizationIdState} />
										<Tab label="members" value={'members'} disabled={!organizationIdState} />
										<Tab label="treasury" value={'treasury'} disabled={!organizationIdState} />
										<Tab label="settings" value={'settings'} disabled={!organizationIdState} />
									</Tabs>
								</CardContent>
							</Card>
							<TabPanel value={'dashboard'}>
								{organizationIdState ? (
									<Overview
										organizationId={organizationIdState}
										isMember={isMemberState}
										isAdmin={address === organizationState?.controller}
									/>
								) : (
									<TmpOverview />
								)}
							</TabPanel>
							<TabPanel value={'campaigns'}>
								{organizationIdState ? (
									<CampaignOverview
										organizationId={organizationIdState}
										isAdmin={address === organizationState?.controller}
										data={campaignData}
										loading={campaignLoading}
									/>
								) : (
									<TmpOverview />
								)}
							</TabPanel>
							<TabPanel value={'treasury'}>
								{organizationState && (
									<Typography>Treasury Address: {organizationState.treasury}</Typography>
								)}
							</TabPanel>
							<TabPanel value={'proposals'}>
								{proposalIdState && organizationState ? (
									<ProposalDetail
										organization={organizationState}
										proposalId={proposalIdState}
										goBack={() => handleTabSelect('proposals')}
									/>
								) : (
									<ProposalOverview organizationId={organizationIdState} />
								)}
							</TabPanel>
							<TabPanel value={'members'}>
								<OrganizationMembersTable organizationState={organizationState} />
							</TabPanel>
						</Stack>
					) : (
						<CircularProgress
							sx={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
							}}
						/>
					)}
				</TabContext>
			</Box>
		</Layout>
	)
}

export default OrganisationById
