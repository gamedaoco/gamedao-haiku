import React, { useCallback, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { AddAPhoto } from '@mui/icons-material'
import { TabContext, TabPanel } from '@mui/lab'
import { Avatar, Box, Button, CircularProgress, Grid, Paper, Stack, Tab, Tabs, useMediaQuery } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'
import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'
import { useTranslation } from 'react-i18next'
import { Organization, useOrganizationByIdSubscription } from 'src/queries'
import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notificationUtils'

import { Image } from 'components/Image/image'
import { Layout } from 'components/Layouts/default/layout'
import { CampaignOverview } from 'components/TabPanels/Campaign/overview'
import { TreasuryOverview } from 'components/TabPanels/Treasury/overview'
import { OrganizationMembersTable } from 'components/TabPanels/Organization/organizationMembers'
import { Overview } from 'components/TabPanels/Organization/overview'
import { TmpOverview } from 'components/TabPanels/Organization/tmpOverview'
import { ProposalDetail } from 'components/TabPanels/Proposal/detail'
import { ProposalOverview } from 'components/TabPanels/Proposal/overview'
import { SettingsOverview } from 'components/TabPanels/Settings/settings'

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
	const [showTxModalType, setShowTxModalType] = useState<boolean>(false)
	const addMemberTx = useAddMemberTransaction(organizationIdState)
	const address = useCurrentAccountAddress()
	const theme = useTheme()
	const config = useConfig()
	const tmpOrg = useTmpOrganisationState()
	const handleOpenTxModal = useCallback(() => {
		setShowTxModalType(true)
	}, [setShowTxModalType])
	const handleCloseTxModal = useCallback(() => {
		setShowTxModalType(false)
	}, [setShowTxModalType])
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const handleInvalidUrl = useCallback(() => {
		push('/')
	}, [push])

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
	const { t } = useTranslation()
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
				if (!param[0].startsWith('0x')) {
					handleInvalidUrl()
				}
				setOrganizationIdState(param[0])
				setRouteState(param[1])

				if (param.length >= 3) {
					if (!param[2].startsWith('0x')) {
						handleInvalidUrl()
					}
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
			!data.organization?.[0] ? handleInvalidUrl() : setOrganizationState(data.organization?.[0] as Organization)
		}
	}, [data])

	useEffect(() => {
		if (address && organizationState) {
			setIsMemberState(organizationState.organization_members.some((member) => member.address === address))
		}
	}, [organizationState, address])

	return (
		<Layout showHeader showFooter showSidebar title={t('page:organisations:title')}>
			<Box width="100%" height="100%" minHeight="90vh" padding={{ xs: 2, sm: 4 }}>
				<TabContext value={activeStep}>
					{(!loading && data) || !organizationIdState ? (
						<Stack spacing={4}>
							<Paper
								sx={{
									position: 'relative',
								}}
							>
								<Stack
									direction={isMd ? 'row' : 'column'}
									spacing={4}
									alignItems="center"
									justifyContent={isMd ? 'flex-start' : 'center'}
									sx={{
										top: '5%',
										left: 0,
										right: 0,
										zIndex: 99,
										position: 'absolute',
										marginTop: theme.spacing(5),
										[theme.breakpoints.up('md')]: {
											top: 'unset',
											right: 'auto',
											display: 'flex',
											alignItems: 'center',
											left: theme.spacing(3),
											bottom: theme.spacing(3),
										},
									}}
								>
									<label htmlFor="logo-file-upload">
										<input
											style={{ display: 'none' }}
											accept="image/*"
											id="logo-file-upload"
											type="file"
											disabled={!!organizationIdState}
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
												<Typography>{t('label:update_photo')}</Typography>
											</Stack>
										</Avatar>
									</label>

									<Stack
										spacing={2}
										px={isMd ? 0 : 2}
										sx={{
											width: '100%',
											justifyContent: { xs: 'space-between', sm: 'flex-start' },
										}}
										direction="row"
									>
										<Stack spacing={1} sx={{ flex: 0.9 }}>
											<Typography
												variant="h4"
												sx={{
													whiteSpace: 'nowrap',
												}}
											>
												{organizationState?.organization_metadata?.name ?? tmpOrg.name ?? ''}
											</Typography>
											<Typography
												sx={{
													whiteSpace: 'nowrap',
												}}
											>
												{t('label:n_members', {
													n: organizationState?.organization_members?.length ?? 1,
												})}
											</Typography>
										</Stack>
										<Stack>
											{!isMemberState && (
												<Button
													variant="contained"
													disabled={!addMemberTx}
													onClick={handleOpenTxModal}
												>
													{t('button:ui:join_organization')}
												</Button>
											)}
										</Stack>
									</Stack>
								</Stack>
								<Grid
									height={isMd ? '20vh' : '40vh'}
									width="100%"
									display="grid"
									alignItems="center"
									overflow="hidden"
									position="relative"
									sx={{
										height: '40vh',
										[theme.breakpoints.up('sm')]: {
											height: '25vh',
										},

										[theme.breakpoints.up('md')]: {
											height: '20vh',
										},
									}}
								>
									<label htmlFor="header-file-upload">
										<input
											style={{ display: 'none' }}
											accept="image/*"
											id="header-file-upload"
											type="file"
											disabled={!!organizationIdState}
											onChange={(event) => handleUploadImage(event, tmpOrg.setHeaderCID)}
										/>
										{!organizationState?.organization_metadata?.header &&
										!tmpOrg.headerCID?.length ? (
											<Box display="grid" justifyContent="center" alignItems="center">
												<AddAPhoto sx={{ height: '44px', width: '44px', cursor: 'pointer' }} />
											</Box>
										) : (
											<Image
												src={parseIpfsHash(
													organizationState?.organization_metadata?.header ??
														tmpOrg.headerCID,
													config.IPFS_GATEWAY,
												)}
												alt="logo"
												sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
											/>
										)}
									</label>
									<Box
										sx={{
											position: 'absolute',
											top: 0,
											left: 0,
											right: 0,
											bottom: 0,
											background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) -1.23%, #000000 80%)',
											pointerEvents: 'none',
										}}
									></Box>
								</Grid>

								<Box sx={{ maxWidth: isMd ? '60%' : '100%', marginLeft: 'auto' }}>
									<Tabs
										variant="scrollable"
										value={activeStep}
										onChange={(_, value) => handleTabSelect(value)}
										scrollButtons="auto"
									>
										<Tab label={t('button:navigation:overview')} value={'dashboard'} />
										<Tab
											label={t('button:navigation:campaigns')}
											value={'campaigns'}
											disabled={!organizationIdState}
										/>
										<Tab
											label={t('button:navigation:proposals')}
											value={'proposals'}
											disabled={!organizationIdState}
										/>
										<Tab
											label={t('button:navigation:members')}
											value={'members'}
											disabled={!organizationIdState}
										/>
										<Tab
											label={t('button:navigation:treasury')}
											value={'treasury'}
											disabled={!organizationIdState}
										/>
										<Tab
											label={t('button:navigation:settings')}
											value={'settings'}
											disabled={!organizationIdState}
										/>
									</Tabs>
								</Box>
							</Paper>
							<TabPanel value={'dashboard'}>
								{organizationIdState ? (
									<Overview
										organization={organizationState}
										organizationId={organizationIdState}
										isMember={isMemberState}
										isAdmin={address === organizationState?.controller}
										handleCloseTxModal={handleCloseTxModal}
										handleOpenTxModal={handleOpenTxModal}
										showTxModalType={showTxModalType}
										addMemberTx={addMemberTx}
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
									/>
								) : (
									<TmpOverview />
								)}
							</TabPanel>
							<TabPanel value={'treasury'}>
								{organizationState && <TreasuryOverview address={organizationState.treasury} />}
							</TabPanel>
							<TabPanel value={'proposals'}>
								{proposalIdState && organizationState ? (
									<ProposalDetail
										organization={organizationState}
										proposalId={proposalIdState}
										isMember={isMemberState}
										goBack={() => handleTabSelect('proposals')}
									/>
								) : (
									<ProposalOverview organizationId={organizationIdState} isMember={isMemberState} />
								)}
							</TabPanel>
							<TabPanel value={'members'}>
								<OrganizationMembersTable organizationState={organizationState} />
							</TabPanel>
							<TabPanel value={'settings'}>
								<SettingsOverview organizationState={organizationState} />
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
