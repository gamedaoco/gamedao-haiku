import React, { useCallback, useEffect, useState } from 'react'
import { Layout } from 'src/components/Layouts/default/layout'
import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Stack,
	Tab,
	Tabs,
	Typography,
	useMediaQuery,
} from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab'
import { AddAPhoto } from '@mui/icons-material'
import { createWarningNotification } from 'src/utils/notificationUtils'
import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { useConfig } from 'hooks/useConfig'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'
import { useTheme } from '@mui/material/styles'
import { TmpOverview } from 'components/TabPanels/Organization/tmpOverview'

export function OrganisationDetailsPage() {
	const [activeStep, setActiveStep] = useState<string>('organization-overview')
	const theme = useTheme()
	const config = useConfig()
	const tmpOrg = useTmpOrganisationState()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

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
											tmpOrg.logoCID?.length
												? parseIpfsHash(tmpOrg.logoCID, config.IPFS_GATEWAY)
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
									onChange={(_, value) => setActiveStep(value)}
									scrollButtons="auto"
								>
									<Tab label="Overview" value={'organization-overview'} />
									<Tab label="Campaigns" value={'organization-campaigns'} disabled />
									<Tab label="Votings" value={'organization-votings'} disabled />
									<Tab label="Members" value={'organization-members'} disabled />
									<Tab label="Treasury" value={'organization-treasury'} disabled />
									<Tab label="Settings" value={'organization-settings'} disabled />
								</Tabs>
							</CardContent>
						</Card>
						<TabPanel value={'organization-overview'}>
							<TmpOverview />
						</TabPanel>
					</Stack>
				</TabContext>
			</Box>
		</Layout>
	)
}

export default OrganisationDetailsPage
