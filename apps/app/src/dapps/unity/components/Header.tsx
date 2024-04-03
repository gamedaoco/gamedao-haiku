import React, { lazy, useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { useTranslation } from 'react-i18next'
import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notification'

import { useConfig } from 'src/hooks/useConfig'
import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useTmpOrganizationState } from 'src/hooks/useTmpOrganizationState'
import { Organization, useOrganizationByIdSubscription } from 'src/queries'

import { useTheme } from '@mui/material/styles'
import { AddAPhoto } from '@mui/icons-material'
import { Avatar, Box, Button, Grid, Paper, Stack, Typography, useMediaQuery } from '@mui/material'

import { Image } from 'components/atoms/Image/image'
import { Loader } from 'components/atoms/Loader'
import { Navigation } from './Navigation'

import { TProps } from '../views/Unity'

export function Header({ args }: TProps) {
	const { id, organization, openTx, isMember, isPrime } = args

	const { query, push } = useRouter()
	const config = useConfig()
	const theme = useTheme()
	const { t } = useTranslation()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	// const [routeState, setRouteState] = useState<string>(null)
	// const [activeStep, setActiveStep] = useState<string>('dashboard')
	// const [organizationIdState, setOrganizationIdState] = useState<string>(null)
	// const [proposalIdState, setProposalIdState] = useState<string>(null)
	// const [organizationState, setOrganizationState] = useState<Organization>()

	// const [isMemberState, setIsMemberState] = useState<boolean>(false)
	// const [isPrime, setIsPrime] = useState<boolean>(false)
	// const [treasury, setTreasury] = useState(null)

	// const { loading, data, error } = useOrganizationByIdSubscription({
	// 	variables: { orgId: organizationIdState },
	// })

	const addMemberTx = useAddMemberTransaction(id)
	const address = useCurrentAccountAddress()
	// const cache = useTmpOrganizationState()

	// const [showTxModalType, setShowTxModalType] = useState<boolean>(false)
	// const handleOpenTxModal = useCallback(() => {
	// 	setShowTxModalType(true)
	// }, [setShowTxModalType])
	// const handleCloseTxModal = useCallback(() => {
	// 	setShowTxModalType(false)
	// }, [setShowTxModalType])

	const handleUploadImage = useCallback(async (event, setter) => {
		const files = event.target.files
		if (!files || files.length === 0) {
			return createWarningNotification('No file selected')
		}
		const cid = await uploadFileToIpfs(files[0])
		console.log('cid created', cid)
		setter(cid.toString())
	}, [])

	// useEffect(() => {
	// 	const metaData = {
	// 		name: cache.name,
	// 		description: cache.description,
	// 		logo: cache.logoCID,
	// 		header: cache.headerCID,
	// 		url: cache.url,
	// 		location: cache.location,
	// 		tags: cache.tags,
	// 	}

	// 	console.log('================================')
	// 	console.log('organization metadata', metaData)
	// 	console.log('================================')
	// 	;(async (): Promise<string> => {
	// 		const file = new File([JSON.stringify(metaData)], `${cache.name}-metadata.json`, {
	// 			type: 'text/plain',
	// 		})
	// 		const cid = await uploadFileToIpfs(file)
	// 		return cid.toString()
	// 	})().then((cid) => {
	// 		// console.log(cid, cache)
	// 		cache.setMetaDataCID(cid)
	// 	})
	// }, [cache])

	// get organization data
	// useEffect(() => {
	// 	if (!data || !data.organization?.length) return
	// 	setOrganizationState(data?.organization?.[0] as Organization)
	// }, [data])

	// useEffect(() => {
	// 	if (!address || !organizationState) return
	// 	setIsMemberState(organizationState?.organization_members?.some((member) => member.address === address))
	// 	setIsPrime(organizationState?.prime === address)
	// 	setTreasury(organizationState?.treasury)
	// }, [organizationState, address])

	console.log('================================\n', parseIpfsHash(organization.header, config.IPFS_GATEWAY))

	return organization ? (
		<Paper
			variant={'glass'}
			sx={{
				position: 'relative',
				background: '#000000aa',
				backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), #000000aa)`,
			}}
		>
			{/* Logo Id Section */}

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
						// disabled={!!organizationIdState}
						onChange={(event) => handleUploadImage(event, cache.setLogoCID)}
					/>
					<Avatar
						sx={(theme) => ({
							width: '5rem',
							height: '5rem',
							backgroundColor: theme.palette.background.default,
							outline: `5px solid #000000aa`,
							cursor: 'pointer',
						})}
						srcSet={organization.logo ? parseIpfsHash(organization.logo, config.IPFS_GATEWAY) : null}
					>
						<Stack spacing={1} alignItems="center">
							<AddAPhoto sx={{ height: '20px', width: '20px' }} />
						</Stack>
					</Avatar>
				</label>

				<Stack
					spacing={2}
					px={isMd ? 0 : 2}
					sx={{
						width: '100%',
						justifyContent: 'space-between',
					}}
					justifyContent="space-between"
					direction="row"
				>
					<Stack spacing={0} sx={{ flex: 0.9 }}>
						<Typography variant="h4" sx={{ whiteSpace: 'nowrap' }}>
							{organization.name}
						</Typography>
						<Typography
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
						{organization && !isMember && !isPrime && (
							<Button
								// variant="outline"
								// size="sm"
								// disabled={!addMemberTx}
								onClick={() => openTx(addMemberTx)}
							>
								{t('button:ui:join_organization')}
							</Button>
						)}
					</Stack>
				</Stack>
			</Stack>

			{/* background panel */}

			<Grid
				height={isMd ? '20vh' : '40vh'}
				width="100%"
				// display="grid"
				// alignItems="center"
				// overflow="hidden"
				position="relative"
				// sx={{
				// 	height: '40vh',
				// 	[theme.breakpoints.up('sm')]: {
				// 		height: '25vh',
				// 	},

				// 	[theme.breakpoints.up('md')]: {
				// 		height: '20vh',
				// 	},
				// }}
			>
				{/* <label htmlFor="header-file-upload">
					<input
						style={{ display: 'none' }}
						accept="image/*"
						id="header-file-upload"
						type="file"
						//disabled={!!organizationIdState}
						// onChange={(event) => handleUploadImage(event, cache.setHeaderCID)}
						// onClick={(event) => handleUploadImage(event, cache.setHeaderCID)}
					/> */}
				{organization.header ? (
					<Image
						src={parseIpfsHash(organization.header, config.IPFS_GATEWAY)}
						alt={`${organization.name}`}
						sx={{
							// backgroundImage: `url(${parseIpfsHash(organization.header, config.IPFS_GATEWAY)})`,
							// backgroundPosition: 'center',
							// backgroundSize: 'cover',
							// backgroundRepeat: 'no-repeat',
							width: '100%',
							height: '100%',
							// borderRadius: Number(theme.shape.borderRadius) * 20,
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
						}}
					/>
				) : (
					<Box display="grid" justifyContent="center" alignItems="center">
						<AddAPhoto sx={{ height: '44px', width: '44px', cursor: 'pointer' }} />
					</Box>
				)}
				{/* </label> */}
				{/* <Box
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
				/> */}
			</Grid>

			{/* <Box px={4}>
				<Navigation args={args} />
			</Box> */}
		</Paper>
	) : (
		<Loader />
	)
}

export default Header
