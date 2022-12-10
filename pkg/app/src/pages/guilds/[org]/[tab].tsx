import React, { useCallback, useEffect, useState, useRef } from 'react'
import type { NextRouter } from 'next/router'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { OrganizationTabs } from 'constants/organization'

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

import { Organization, useOrganizationByNameSubscription, useOrganizationByIdSubscription } from 'src/queries'

import { Layout } from 'layouts/default'
import { Image } from 'components/Image/image'
import { CampaignOverview } from 'components/TabPanels/Campaign/overview'
import { TreasuryOverview } from 'components/TabPanels/Treasury/overview'
import { OrganizationMembersTable } from 'components/TabPanels/Organization/organizationMembers'
import { Overview } from 'components/TabPanels/Organization/overview'
import { TmpOverview } from 'components/TabPanels/Organization/tmpOverview'
import { ProposalDetail } from 'components/TabPanels/Proposal/detail'
import { ProposalOverview } from 'components/TabPanels/Proposal/overview'
import { SettingsOverview } from 'components/TabPanels/Settings/overview'

export function OrganisationById() {
	const router = useRouter()
	const { query, push } = useRouter()
	const org = query.org
	const tab = query.tab

	// const hashToSlug = (hash: string) => {
	// 	const slug = (organization && organization?.organization_metadata?.name.replace(' ', '').toLowerCase()) || null
	// 	console.log('slug', slug)
	// }

	//

	const config = useConfig()
	const theme = useTheme()
	const { t } = useTranslation()

	// state

	const [route, setRoute] = useState(tab)
	const [proposalId, setProposalId] = useState<string>(null)
	const [isMember, setIsMember] = useState<boolean>(false)
	const [organization, setOrganization] = useState<Organization>(null)
	const [orgName, setOrgName] = useState('')

	const addMemberTx = useAddMemberTransaction(org)
	const address = useCurrentAccountAddress()
	const cache = useTmpOrganisationState() || null

	const [showTxModalType, setShowTxModalType] = useState<boolean>(false)

	useEffect(() => {
		if (address && organization) {
			const isMember = organization?.organization_members.some((member) => member.address === address)
			setIsMember(isMember)
			console.log('isMember', isMember)
		}
	}, [organization?.organization_members, address, organization])

	// ui

	const handleOpenTxModal = useCallback(() => {
		setShowTxModalType(true)
	}, [setShowTxModalType])

	const handleCloseTxModal = useCallback(() => {
		setShowTxModalType(false)
	}, [setShowTxModalType])

	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	// routing

	const handleTabSelect = useCallback(
		(newPath) => {
			push(`/guilds/${org}/${newPath}`)
		},
		[org, push],
	)

	// TODO: resolve based on id or slug
	const { loading, data, error } = useOrganizationByIdSubscription({ variables: { orgId: org } })
	// const { loading, data, error } = org.startsWith('0x')
	// 	? useOrganizationByIdSubscription({ variables: { orgId: org } })
	// 	: useOrganizationByNameSubscription({ variables: { name: org } })

	// content

	const handleUploadImage = useCallback(async (event, setter) => {
		const files = event.target.files
		if (!files || files.length === 0) {
			return createWarningNotification('No file selected')
		}

		const cid = await uploadFileToIpfs(files[0])
		setter(cid.toString())
	}, [])

	// Update and upload metadata
	useEffect(() => {
		if (cache.name && cache.description && cache.logoCID && cache.headerCID) {
			const metaData = {
				name: cache.name,
				description: cache.description,
				logo: cache.logoCID,
				header: cache.headerCID,
			}
			;(async (): Promise<string> => {
				const file = new File([JSON.stringify(metaData)], `${cache.name}-metadata.json`, {
					type: 'text/plain',
				})

				const cid = await uploadFileToIpfs(file)
				return cid.toString()
			})().then((cid) => cache.setMetaDataCID(cid))
		}
	}, [cache.name, cache.description, cache.logoCID, cache.headerCID, cache])

	useEffect(() => {
		if (data) {
			!data.organization?.[0] ? push('/guilds') : setOrganization(data.organization?.[0] as Organization)
		}
	}, [data, data?.organization, push])

	useEffect(() => {
		if (organization?.organization_metadata?.name || cache.name) {
			setOrgName(organization?.organization_metadata?.name || cache.name)
		} else {
			setOrgName(t('page:organisations:title'))
		}
	}, [organization?.organization_metadata?.name, cache.name, t])

	return (
		<Layout showHeader showFooter showSidebar title={orgName}>
			<TabContext value={tab || OrganizationTabs.OVERVIEW}>
				{(!loading && data) || !org ? (
					<Stack spacing={4}>
						<Paper
							variant={'glass'}
							sx={{
								position: 'relative',
								background: '#000000ee',
								backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), #000000aa)`,
							}}
						>
							{/* PROFILE PIC */}
							{/* PROFILE PIC */}

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
										disabled={!!org}
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
											organization?.organization_metadata?.logo || cache.logoCID?.length
												? parseIpfsHash(
														organization?.organization_metadata?.logo || cache.logoCID,
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
											{organization?.organization_metadata?.name ?? cache.name ?? ''}
										</Typography>
										<Typography
											// variant='small'
											sx={{
												whiteSpace: 'nowrap',
											}}
										>
											{t('label:n_members', {
												n: organization?.organization_members?.length ?? 1,
											})}
										</Typography>
									</Stack>
									<Stack>
										{organization && isMember && address !== organization?.creator && (
											<Button
												// variant="micro"
												disabled={!addMemberTx}
												onClick={handleOpenTxModal}
											>
												{
													'join' //t('button:ui:join_organization')
												}
											</Button>
										)}
									</Stack>
								</Stack>
							</Stack>

							{/* HEADER IMAGE */}
							{/* HEADER IMAGE */}

							<Grid
								height={isMd ? '20vh' : '40vh'}
								width="100%"
								display="grid"
								alignItems="center"
								overflow="hidden"
								position="relative"
								sx={{
									borderRadius: `${theme.shape.borderRadiusLg} ${theme.shape.borderRadiusLg} 0 0`,
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
										disabled={!!org}
										onChange={(event) => handleUploadImage(event, cache.setHeaderCID)}
									/>
									{!organization?.organization_metadata?.header && !cache.headerCID?.length ? (
										<Box display="grid" justifyContent="center" alignItems="center">
											<AddAPhoto sx={{ height: '44px', width: '44px', cursor: 'pointer' }} />
										</Box>
									) : (
										<Image
											src={parseIpfsHash(
												organization?.organization_metadata?.header ?? cache.headerCID,
												config.IPFS_GATEWAY,
											)}
											alt="logo"
											sx={{
												position: 'absolute',
												top: 0,
												left: 0,
												right: 0,
												bottom: 0,
											}}
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
										background:
											'linear-gradient(182deg, rgba(0, 0, 0, 0) -1.23%, rgba(0,0,0,.9) 80%)',
										backgroundBlendMode: 'multiply',
										pointerEvents: 'none',
									}}
								></Box>
							</Grid>

							<Box px={4} sx={{}}>
								<Tabs
									// variant="contentheader"
									// scrollButtons="auto"
									// fullWidth={true}
									// indicatorColor="#ff00ff"
									centered
									value={tab}
									onChange={(_, value) => handleTabSelect(value)}
								>
									<Tab label={t('button:navigation:overview')} value={OrganizationTabs.OVERVIEW} />
									<Tab
										label={t('button:navigation:campaigns')}
										value={OrganizationTabs.CAMPAIGNS}
										disabled={!org}
									/>
									<Tab
										label={t('button:navigation:proposals')}
										value={OrganizationTabs.GOVERNANCE}
										disabled={!org}
									/>
									<Tab
										label={t('button:navigation:members')}
										value={OrganizationTabs.MEMBERS}
										disabled={!org}
									/>
									<Tab
										label={t('button:navigation:treasury')}
										value={OrganizationTabs.TREASURY}
										disabled={!org}
									/>
									<Tab
										label={t('button:navigation:settings')}
										value={OrganizationTabs.SETTINGS}
										disabled={!org}
									/>
								</Tabs>
							</Box>
						</Paper>

						<TabPanel value={OrganizationTabs.OVERVIEW}>
							{org && organization ? (
								<Overview
									// organization={organization}
									id={org}
									// isMember={isMember}
									// isAdmin={address === organization?.creator}
									// handleCloseTxModal={handleCloseTxModal}
									// handleOpenTxModal={handleOpenTxModal}
									// showTxModalType={showTxModalType}
									// addMemberTx={addMemberTx}
								/>
							) : (
								<TmpOverview />
							)}
						</TabPanel>

						<TabPanel value={OrganizationTabs.CAMPAIGNS}>
							{org ? (
								<CampaignOverview organizationId={org} isAdmin={address === organization?.creator} />
							) : (
								<TmpOverview />
							)}
						</TabPanel>

						<TabPanel value={OrganizationTabs.TREASURY}>
							{organization && (
								<Typography>
									{t('label:treasury_address', { address: organization.treasury })}
								</Typography>
							)}
						</TabPanel>

						<TabPanel value={OrganizationTabs.GOVERNANCE}>
							{proposalId && organization ? (
								<ProposalDetail
									organization={organization}
									proposalId={proposalId}
									isMember={isMember}
									goBack={() => handleTabSelect('proposals')}
								/>
							) : (
								<ProposalOverview organizationId={org} isMember={isMember} />
							)}
						</TabPanel>

						<TabPanel value={'members'}>
							<OrganizationMembersTable organization={organization} />
						</TabPanel>

						<TabPanel value={OrganizationTabs.SETTINGS}>
							<SettingsOverview />
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
