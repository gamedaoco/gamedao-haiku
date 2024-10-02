import React, { lazy, useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import slugify from 'slugify'

import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'
import { useConfig } from 'src/hooks/useConfig'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useTmpOrganizationState } from 'src/hooks/useTmpOrganizationState'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notification'

import { AddAPhoto } from '@mui/icons-material'
// import { TabContext, TabPanel } from '@mui/lab'

import {
	// Container,
	Avatar,
	Box,
	// Button,
	// CircularProgress,
	Grid,
	Paper,
	Stack,
	// Tab,
	// Tabs,
	Typography,
	useMediaQuery,
} from '@mui/material'

import { useTheme } from '@mui/material/styles'
import { Organization, useOrganizationByIdSubscription } from 'src/queries'
import { Layout } from 'layouts/v2'

// import { Image } from 'components/atoms/Image/image'
import { Loader } from 'components/atoms/Loader'
import { Backdrop } from 'components/atoms/Backdrop'
// import { String } from 'lodash'

const FinalizeView = dynamic(() => import('dapps/collective/views/Finalize').then((mod) => mod.FinalizeView))

export function Page({ ...props }) {
	const { query, push } = useRouter()
	const config = useConfig()
	const theme = useTheme()
	const { t } = useTranslation()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const getURL = (cid) => (cid ? parseIpfsHash(cid, config.IPFS_GATEWAY) : null)

	const [metadata, setMetadata] = useState(null)
	const [avatarImageUrl, setAvatarImageUrl] = useState(null)
	const [headerImageUrl, setHeaderImageUrl] = useState(null)

	const [routeState, setRouteState] = useState<string>(null)
	const [activeStep, setActiveStep] = useState<string>('dashboard')

	const [organizationIdState, setOrganizationIdState] = useState<string>(null)
	const [organizationState, setOrganizationState] = useState<Organization>()
	const [proposalIdState, setProposalIdState] = useState<string>(null)

	const [isMemberState, setIsMemberState] = useState<boolean>(false)
	const [isPrime, setIsPrime] = useState<boolean>(false)
	const [treasury, setTreasury] = useState(null)

	const { loading, data, error } = useOrganizationByIdSubscription({
		variables: { orgId: organizationIdState },
	})

	const addMemberTx = useAddMemberTransaction(organizationIdState)
	const address = useCurrentAccountAddress()
	const cache = useTmpOrganizationState()

	const [showTxModalType, setShowTxModalType] = useState<boolean>(false)
	const handleOpenTxModal = useCallback(() => {
		setShowTxModalType(true)
	}, [setShowTxModalType])
	const handleCloseTxModal = useCallback(() => {
		setShowTxModalType(false)
	}, [setShowTxModalType])

	const handleInvalidUrl = useCallback(() => {
		push('/collectives')
	}, [push])

	// const handleTabSelect = useCallback(
	// 	(newPath) => {
	// 		if (organizationIdState) {
	// 			push(`${organizationIdState}/${newPath}`)
	// 		} else {
	// 			push(newPath)
	// 		}
	// 		// Reset proposal id when click on tab
	// 		setProposalIdState(null)
	// 	},
	// 	[organizationIdState, push],
	// )

	const handleUploadImage = useCallback(async (event, setter) => {
		const files = event.target.files
		if (!files || files.length === 0) {
			return createWarningNotification('No file selected')
		}
		const cid = await uploadFileToIpfs(files[0])
		console.log('cid created', cid)
		setter(cid.toString())
	}, [])

	// Update and upload metadata

	useEffect(() => {
		if (!cache) return

		console.log('==== cache ====\n')
		console.log('==== cache ====\n', cache)

		const metaData = {
			name: cache.name,
			slug: slugify(cache.name, { replacement: '-', lower: true }),
			description: cache.description,
			logo: cache.logoCID,
			header: cache.headerCID,
			url: cache.url,
			location: cache.location,
			tags: cache.tags,
		}

		// console.log('==== metadata ====\n', metaData)

		;(async (): Promise<string> => {
			const file = new File([JSON.stringify(metaData)], `${cache.name}-metadata.json`, {
				type: 'text/plain',
			})
			const cid = await uploadFileToIpfs(file)
			return cid.toString()
		})().then((cid) => {
			cache.setMetaDataCID(cid)
		})
	}, [cache])

	// useEffect(() => {
	// 	if (data) {
	// 		!data.organization?.[0] ? handleInvalidUrl() : setOrganizationState(data.organization?.[0] as Organization)
	// 	}
	// }, [data])

	useEffect(() => {
		if (!address || !organizationState) return
		setIsMemberState(organizationState?.organization_members?.some((member) => member.address === address))
		setIsPrime(organizationState?.prime === address)
		setTreasury(organizationState?.treasury)
		console.log('treasury', organizationState?.treasury)
	}, [organizationState, address])

	useEffect(() => {
		const url =
			!organizationState?.header && !cache.headerCID?.length
				? null
				: getURL(organizationState?.header ?? cache.headerCID)
		setHeaderImageUrl(url)
	}, [organizationState])

	// if ( cache !== null ) return ( <Loader/> )

	return (
		<Layout showHeader showFooter title={cache.name ?? 'Community'}>
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
							//disabled={!!organizationIdState}
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
									? parseIpfsHash(organizationState?.logo || cache.logoCID, config.IPFS_GATEWAY)
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
	/*  */}
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
							//disabled={!!organizationIdState}
							onChange={(event) => handleUploadImage(event, cache.setHeaderCID)}
							onClick={(event) => handleUploadImage(event, cache.setHeaderCID)}
						/>
						{!headerImageUrl ? (
							<Box display="grid" justifyContent="center" alignItems="center">
								<AddAPhoto sx={{ height: '44px', width: '44px', cursor: 'pointer' }} />
							</Box>
						) : (
							<Backdrop sx={{}} src={headerImageUrl} />
						)}
					</label>

					<Box
						sx={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							background: `linear-gradient(transparent 75%, #020202 100%)`,
							mixBlendMode: 'multiply',
							pointerEvents: 'none',
						}}
					></Box>
				</Grid>
			</Paper>
			<FinalizeView />
		</Layout>
	)

	// 				<Stack
	// 					direction={isMd ? 'row' : 'column'}
	// 					spacing={2}
	// 					alignItems="center"
	// 					justifyContent={isMd ? 'flex-start' : 'center'}
	// 					sx={{
	// 						top: '5%',
	// 						left: 0,

	// 						right: 0,
	// 						zIndex: 99,
	// 						position: 'absolute',
	// 						marginTop: theme.spacing(5),
	// 						[theme.breakpoints.up('md')]: {
	// 							top: 'unset',
	// 							right: 'auto',
	// 							display: 'flex',
	// 							alignItems: 'center',
	// 							left: theme.spacing(3),
	// 							bottom: theme.spacing(3),
	// 						},
	// 					}}
	// 				>
	// 					<label htmlFor="logo-file-upload">
	// 						<input
	// 							style={{ display: 'none' }}
	// 							accept="image/*"
	// 							id="logo-file-upload"
	// 							type="file"
	// 							//disabled={!!organizationIdState}
	// 							onChange={(event) => handleUploadImage(event, cache.setLogoCID)}
	// 						/>
	// 						<Avatar
	// 							sx={(theme) => ({
	// 								width: '7rem',
	// 								height: '7rem',
	// 								backgroundColor: theme.palette.background.default,
	// 								outline: `5px solid #000000aa`,
	// 								cursor: 'pointer',
	// 							})}
	// 							srcSet={
	// 								organizationState?.logo || cache.logoCID?.length
	// 									? parseIpfsHash(
	// 											organizationState?.logo || cache.logoCID,
	// 											config.IPFS_GATEWAY,
	// 									  )
	// 									: null
	// 							}
	// 						>
	// 							<Stack spacing={1} alignItems="center">
	// 								<AddAPhoto sx={{ height: '20px', width: '20px' }} />
	// 								<Typography>{t('label:update_photo')}</Typography>
	// 							</Stack>
	// 						</Avatar>
	// 					</label>

	// 					<Stack
	// 						spacing={2}
	// 						px={isMd ? 0 : 2}
	// 						sx={{
	// 							width: '100%',
	// 							justifyContent: { xs: 'space-between', sm: 'flex-start' },
	// 						}}
	// 						direction="row"
	// 					>
	// 						<Stack spacing={0} sx={{ flex: 0.9 }}>
	// 							<Typography variant="h4" sx={{ whiteSpace: 'nowrap' }}>
	// 								{organizationState?.name ?? cache.name ?? ''}
	// 							</Typography>
	// 							<Typography
	// 								// variant='small'
	// 								sx={{
	// 									whiteSpace: 'nowrap',
	// 								}}
	// 							>
	// 								{t('label:n_members', {
	// 									n: organizationState?.organization_members?.length ?? 1,
	// 								})}
	// 							</Typography>
	// 						</Stack>
	// 						{/*											<Stack>
	// 								{organizationState &&
	// 									!isMemberState &&
	// 									address !== organizationState?.creator && (
	// 										<Button
	// 											variant="contained"
	// 											disabled={!addMemberTx}
	// 											onClick={handleOpenTxModal}
	// 										>
	// 											{t('button:ui:join_organization')}
	// 										</Button>
	// 									)}
	// 							</Stack>
	// /*  */}

	// 					</Stack>
	// 				</Stack>

	// 				<Grid
	// 					height={isMd ? '20vh' : '40vh'}
	// 					width="100%"
	// 					display="grid"
	// 					alignItems="center"
	// 					overflow="hidden"
	// 					position="relative"
	// 					sx={{
	// 						height: '40vh',
	// 						[theme.breakpoints.up('sm')]: {
	// 							height: '25vh',
	// 						},

	// 						[theme.breakpoints.up('md')]: {
	// 							height: '20vh',
	// 						},
	// 					}}
	// 				>
	// 					<label htmlFor="header-file-upload">
	// 						<input
	// 							style={{ display: 'none' }}
	// 							accept="image/*"
	// 							id="header-file-upload"
	// 							type="file"
	// 							//disabled={!!organizationIdState}
	// 							onChange={(event) => handleUploadImage(event, cache.setHeaderCID)}
	// 							onClick={(event) => handleUploadImage(event, cache.setHeaderCID)}
	// 						/>
	// 						{!headerImageUrl ? (
	// 							<Box display="grid" justifyContent="center" alignItems="center">
	// 								<AddAPhoto sx={{ height: '44px', width: '44px', cursor: 'pointer' }} />
	// 							</Box>
	// 						) : (
	// 							<Backdrop sx={{}} src={headerImageUrl} />
	// 						)}
	// 					</label>

	// 					<Box
	// 						sx={{
	// 							position: 'absolute',
	// 							top: 0,
	// 							left: 0,
	// 							right: 0,
	// 							bottom: 0,
	// 							background: `linear-gradient(transparent 75%, #020202 100%)`,
	// 							mixBlendMode: 'multiply',
	// 							pointerEvents: 'none',
	// 						}}
	// 					></Box>
	// 				</Grid>

	// 				<Box px={4}>
	// 					<Tabs
	// 						// variant="scrollable"
	// 						// scrollButtons="auto"
	// 						// fullWidth={true}
	// 						// indicatorColor="#ff00ff"
	// 						centered
	// 						value={activeStep}
	// 						onChange={(_, value) => handleTabSelect(value)}
	// 					>
	// 						<Tab label={t('button:navigation:overview')} value={'dashboard'} />

	// 						<Tab
	// 							label={t('button:navigation:proposals')}
	// 							value={'proposals'}
	// 							disabled={!organizationIdState}
	// 						/>

	// 						<Tab
	// 							label={t('button:navigation:campaigns')}
	// 							value={'campaigns'}
	// 							disabled={!organizationIdState}
	// 						/>

	// 						<Tab
	// 							label={t('button:navigation:members')}
	// 							value={'members'}
	// 							disabled={!organizationIdState}
	// 						/>

	// 						{false && <Tab
	// 							label={t('button:navigation:treasury')}
	// 							value={'treasury'}
	// 							disabled={!organizationIdState}
	// 						/> }

	// 						{false && <Tab
	// 							label={t('button:navigation:settings')}
	// 							value={'settings'}
	// 							disabled={!organizationIdState}
	// 						/> }
	// 					</Tabs>
	// 				</Box>

	{
		/*

				<TabContext value={activeStep}>
					<Stack spacing={4}>
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
						</TabContext>
						ok.

					*/
	}
}

export default Page
