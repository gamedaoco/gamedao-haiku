import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { useConfig } from 'hooks/useConfig'
// import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'
// import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
// import { createWarningNotification } from 'src/utils/notificationUtils'

import Navigation from './Navigation'

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

import { Image } from 'components/Image/image'

export const Header = () => {
	const { query, push } = useRouter()
	const config = useConfig()
	const theme = useTheme()
	const { t } = useTranslation()

	const [routeState, setRouteState] = useState<string>(null)
	const [activeStep, setActiveStep] = useState<string>('dashboard')

	const [organizationIdState, setOrganizationIdState] = useState<string>(null)
	const [proposalIdState, setProposalIdState] = useState<string>(null)
	const [organizationState, setOrganizationState] = useState<Organization>()
	const [isMemberState, setIsMemberState] = useState<boolean>(false)

	const { loading, data, error } = useOrganizationByIdSubscription({
		variables: { orgId: organizationIdState },
	})

	const [showTxModalType, setShowTxModalType] = useState<boolean>(false)

	const addMemberTx = useAddMemberTransaction(organizationIdState)
	const address = useCurrentAccountAddress()
	const cache = useTmpOrganisationState()

	// const handleOpenTxModal = useCallback(() => {
	// 	setShowTxModalType(true)
	// }, [setShowTxModalType])
	// const handleCloseTxModal = useCallback(() => {
	// 	setShowTxModalType(false)
	// }, [setShowTxModalType])

	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	// const handleInvalidUrl = useCallback(() => {
	// 	push('/')
	// }, [push])

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
	// const handleUploadImage = useCallback(async (event, setter) => {
	// 	const files = event.target.files
	// 	if (!files || files.length === 0) {
	// 		return createWarningNotification('No file selected')
	// 	}

	// 	const cid = await uploadFileToIpfs(files[0])
	// 	setter(cid.toString())
	// }, [])

	// Query and route mapping
	// useEffect(() => {
	// 	const param = query?.param
	// 	if (param && Array.isArray(param)) {
	// 		if (param.length == 1) {
	// 			setRouteState(param[0])
	// 		} else if (param.length >= 2) {
	// 			if (!param[0].startsWith('0x')) {
	// 				handleInvalidUrl()
	// 			}
	// 			setOrganizationIdState(param[0])
	// 			setRouteState(param[1])

	// 			if (param.length >= 3) {
	// 				if (!param[2].startsWith('0x')) {
	// 					handleInvalidUrl()
	// 				}
	// 				setProposalIdState(param[2])
	// 			}
	// 		}
	// 	}
	// }, [query, handleInvalidUrl])

	// useEffect(() => {
	// 	if (routeState) {
	// 		setActiveStep(routeState)
	// 	}
	// }, [routeState])

	// Update and upload metadata
	// useEffect(() => {
	// 	if (cache.name && cache.description && cache.logoCID && cache.headerCID) {
	// 		const metaData = {
	// 			name: cache.name,
	// 			description: cache.description,
	// 			logo: cache.logoCID,
	// 			header: cache.headerCID,
	// 		}
	// 		;(async (): Promise<string> => {
	// 			const file = new File([JSON.stringify(metaData)], `${cache.name}-metadata.json`, {
	// 				type: 'text/plain',
	// 			})

	// 			const cid = await uploadFileToIpfs(file)
	// 			return cid.toString()
	// 		})().then((cid) => cache.setMetaDataCID(cid))
	// 	}
	// }, [cache, cache.name, cache.description, cache.logoCID, cache.headerCID])

	// useEffect(() => {
	// 	if (data) {
	// 		!data.organization?.[0] ? handleInvalidUrl() : setOrganizationState(data.organization?.[0] as Organization)
	// 	}
	// }, [data, handleInvalidUrl])

	// useEffect(() => {
	// 	if (address && organizationState) {
	// 		setIsMemberState(organizationState.organization_members.some((member) => member.address === address))
	// 	}
	// }, [organizationState, address])

	// if (error) console.log('==== Error ====>\n', error)

	return (
		<>
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
							organizationState?.organization_metadata?.logo || cache.logoCID?.length
								? parseIpfsHash(
										organizationState?.organization_metadata?.logo || cache.logoCID,
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
							{organizationState?.organization_metadata?.name ?? cache.name ?? ''}
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
					<Stack>
						{organizationState && isMemberState && address !== organizationState?.creator && (
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
			{/*
			 */}

			{/* HEADER IMAGE */}
			{/* HEADER IMAGE */}

			{/*
			 */}

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
						disabled={!!organizationIdState}
						onChange={(event) => handleUploadImage(event, cache.setHeaderCID)}
					/>
					{!organizationState?.organization_metadata?.header && !cache.headerCID?.length ? (
						<Box display="grid" justifyContent="center" alignItems="center">
							<AddAPhoto sx={{ height: '44px', width: '44px', cursor: 'pointer' }} />
						</Box>
					) : (
						<Image
							src={parseIpfsHash(
								organizationState?.organization_metadata?.header ?? cache.headerCID,
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
						background: 'linear-gradient(182deg, rgba(0, 0, 0, 0) -1.23%, rgba(0,0,0,.9) 80%)',
						backgroundBlendMode: 'multiply',
						pointerEvents: 'none',
					}}
				></Box>
			</Grid>
		</>
	)
}

export default Header
