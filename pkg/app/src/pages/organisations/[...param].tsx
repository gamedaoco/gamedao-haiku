import React, { useCallback, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { useOrganizationByIdLazyQuery } from '@gamedao-haiku/graphql/dist'
import type { Organization } from '@gamedao-haiku/graphql/dist/types'
import { AddAPhoto } from '@mui/icons-material'
import { TabContext, TabPanel } from '@mui/lab'
import { Avatar, Card, CardContent, CardMedia, Grid, Stack, Tab, Tabs, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { useConfig } from 'hooks/useConfig'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'
import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notificationUtils'

import { Layout } from 'components/Layouts/default/layout'
import { ProposalOverview } from 'components/ProposalOverview/proposalOverview'
import { Overview } from 'components/TabPanels/Organization/overview'
import { TmpOverview } from 'components/TabPanels/Organization/tmpOverview'

export function OrganisationById() {
	const { query, push } = useRouter()
	const [routeState, setRouteState] = useState<string>(null)
	const [organizationIdState, setOrganizationIdState] = useState<string>(null)
	const [activeStep, setActiveStep] = useState<string>('dashboard')
	const [queryOrganization, { data }] = useOrganizationByIdLazyQuery()
	const [organizationState, setOrganizationState] = useState<Organization>()
	const theme = useTheme()
	const config = useConfig()
	const tmpOrg = useTmpOrganisationState()
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
				queryOrganization({ variables: { orgId: param[0] } })
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
			setOrganizationState(data?.organizations?.[0] as Organization)
		}
	}, [data])

	return (
		<Layout showHeader showFooter showSidebar title="Organisation">
			<Box width="100%" height="100%" minHeight="90vh" padding={{ xs: 2, sm: 4 }}>
				<TabContext value={activeStep}>
					<Stack spacing={4}>
						<Card
							sx={{
								position: 'relative',
							}}
						>
							<Grid
								minHeight="20vh"
								maxHeight="20vh"
								display="grid"
								justifyContent="center"
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
									{!tmpOrg.headerCID?.length && (
										<AddAPhoto sx={{ height: '44px', width: '44px', cursor: 'pointer' }} />
									)}
									{!!tmpOrg.headerCID?.length && (
										<CardMedia
											component="img"
											src={parseIpfsHash(tmpOrg.headerCID, config.IPFS_GATEWAY)}
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
											organizationState?.metadata?.logo || tmpOrg.logoCID?.length
												? parseIpfsHash(
														organizationState?.metadata?.logo || tmpOrg.logoCID,
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
									<Typography variant="h4">{tmpOrg.name ?? ''}</Typography>
									<Typography>1 Member</Typography>
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
						<TabPanel value={'dashboard'}>{organizationIdState ? <Overview /> : <TmpOverview />}</TabPanel>
						<TabPanel value={'proposals'}>
							{organizationIdState && <ProposalOverview organizationId={organizationIdState} />}
						</TabPanel>
					</Stack>
				</TabContext>
			</Box>
		</Layout>
	)
}

export default OrganisationById
