import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'
import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notificationUtils'

import { AddAPhoto } from '@mui/icons-material'
import { TabContext, TabPanel } from '@mui/lab'
import {
	Container,
	Avatar,
	Box,
	Button,
	CircularProgress,
	Grid,
	Paper,
	Stack,
	Tab,
	Tabs,
	useMediaQuery,
} from '@mui/material'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

import { Organization, useOrganizationByIdSubscription } from 'src/queries'

import { Layout } from 'layouts/default/layout'
import { Image } from 'components/Image/image'
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
	const config = useConfig()
	const theme = useTheme()
	const { t } = useTranslation()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const [routeState, setRouteState] = useState<string>(null)
	const [activeStep, setActiveStep] = useState<string>('dashboard')
	const [organizationIdState, setOrganizationIdState] = useState<string>(null)
	const [proposalIdState, setProposalIdState] = useState<string>(null)
	const [organizationState, setOrganizationState] = useState<Organization>()
	const [isMemberState, setIsMemberState] = useState<boolean>(false)

	const { loading, data, error } = useOrganizationByIdSubscription({
		variables: { orgId: organizationIdState },
	})
	const addMemberTx = useAddMemberTransaction(organizationIdState)
	const address = useCurrentAccountAddress()
	const cache = useTmpOrganisationState()

	const [showTxModalType, setShowTxModalType] = useState<boolean>(false)
	const handleOpenTxModal = useCallback(() => {
		setShowTxModalType(true)
	}, [setShowTxModalType])
	const handleCloseTxModal = useCallback(() => {
		setShowTxModalType(false)
	}, [setShowTxModalType])

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
		if (!cache) return

		const metaData = {
			name: cache.name,
			description: cache.description,
			logo: cache.logoCID,
			header: cache.headerCID,
			url: cache.url,
			location: cache.location,
			tags: cache.tags,
		}

		console.log('================================')
		console.log('organization metadata', metaData)
		console.log('================================')
		;(async (): Promise<string> => {
			const file = new File([JSON.stringify(metaData)], `${cache.name}-metadata.json`, {
				type: 'text/plain',
			})
			const cid = await uploadFileToIpfs(file)
			return cid.toString()
		})().then((cid) => {
			console.log(cid, cache)
			cache.setMetaDataCID(cid)
		})
	}, [cache])

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

	// if (error) console.log('==== Error ====>\n', error)

	return (
		<Layout
			showHeader
			showFooter
			showSidebar
			title={organizationState?.name ?? cache.name ?? t('page:organisations:title')}
		>
			<TabContext value={activeStep}>
				{(!loading && data) || !organizationIdState ? (
					<Stack spacing={4}>
						<Paper
							variant={'glass'}
							sx={{
								position: 'relative',
								background: '#000000aa',
								backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), #000000aa)`,
							}}
						>
							<Stack
								direction={isMd ? 'row' : 'column'}
								spacing={2}
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
										onChange={(event) => handleUploadImage(event, cache.setLogoCID)}
									/>
									<Avatar
										sx={(theme) => ({
											width: '7rem',
											height: '7rem',
											backgroundColor: theme.palette.background.default,
											outline: `5px solid #000000aa`,
											cursor: 'pointer',
										})}
										srcSet={
											organizationState?.logo || cache.logoCID?.length
												? parseIpfsHash(
														organizationState?.logo || cache.logoCID,
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
									<Stack spacing={0} sx={{ flex: 0.9 }}>
										<Typography variant="h4" sx={{ whiteSpace: 'nowrap' }}>
											{organizationState?.name ?? cache.name ?? ''}
										</Typography>
										<Typography
											// variant='small'
											sx={{
												whiteSpace: 'nowrap',
											}}
										>
											{t('label:n_members', {
												n: organizationState?.organization_members?.length ?? 1,
											})}
										</Typography>
									</Stack>
									{/*											<Stack>
												{organizationState &&
													!isMemberState &&
													address !== organizationState?.creator && (
														<Button
															variant="contained"
															disabled={!addMemberTx}
															onClick={handleOpenTxModal}
														>
															{t('button:ui:join_organization')}
														</Button>
													)}
											</Stack>
*/}
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
										onChange={(event) => handleUploadImage(event, cache.setHeaderCID)}
									/>
									{!organizationState?.header && !cache.headerCID?.length ? (
										<Box display="grid" justifyContent="center" alignItems="center">
											<AddAPhoto sx={{ height: '44px', width: '44px', cursor: 'pointer' }} />
										</Box>
									) : (
										<Image
											src={parseIpfsHash(
												organizationState?.header ?? cache.headerCID,
												config.IPFS_GATEWAY,
											)}
											alt="logo"
											sx={{
												borderRadius: Number(theme.shape.borderRadius) * 20,
												position: 'absolute',
												top: 0,
												left: 0,
												right: 0,
												bottom: 0,
											}}
										/>
									)}
									{/*
									 */}
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

							<Box px={4}>
								<Tabs
									// variant="scrollable"
									// scrollButtons="auto"
									// fullWidth={true}
									// indicatorColor="#ff00ff"
									centered
									value={activeStep}
									onChange={(_, value) => handleTabSelect(value)}
								>
									<Tab label={t('button:navigation:overview')} value={'dashboard'} />

									<Tab
										label={t('button:navigation:campaigns')}
										value={'campaigns'}
										disabled={!organizationIdState}
									/>
									{/*
									 */}
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

									{/*
									<Tab
										label={t('button:navigation:settings')}
										value={'settings'}
										disabled={!organizationIdState}
									/>
*/}
								</Tabs>
							</Box>
						</Paper>

						<TabPanel value={'dashboard'}>
							{organizationIdState ? (
								<Overview
									organization={organizationState}
									organizationId={organizationIdState}
									isMember={isMemberState}
									isAdmin={address === organizationState?.creator}
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
									isAdmin={address === organizationState?.creator}
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
		</Layout>
	)
}

export default OrganisationById
