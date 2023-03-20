import React, { useCallback, useEffect, useState } from 'react'
import { BattlepassViews } from 'constants/battlepass'

import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganizationState } from 'hooks/useTmpOrganizationState'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notificationUtils'

import { useGetBattlepassNameQuery } from 'src/queries'

// import Navigation from './Navigation'

import { Add } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { Typography, Avatar, Box, Grid, Stack, useMediaQuery } from '@mui/material'

import { Organization, useOrganizationByIdSubscription } from 'src/queries'

import { Image } from 'components/Image/image'
import { useAppContext } from 'providers/app/modules/context'
import { Navigation } from './Navigation'

import { useGetBattlepassUsersQuery } from 'src/queries'

import { Join } from './JoinBtn'

type TProps = {
	orgId: string
	id: string
	view: BattlepassViews
}

export const Header = ({ orgId, id, view }: TProps) => {
	const { query, push } = useRouter()
	const { uuid } = useAppContext()
	const config = useConfig()
	const theme = useTheme()
	const { t } = useTranslation()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
		defaultMatches: true,
	})

	// name
	const [name, setName] = useState('')
	const { data: names } = useGetBattlepassNameQuery({ variables: { id: id } })
	useEffect(() => {
		if (!names) return
		setName(names?.battlepass[0]?.name)
	}, [names?.battlepass])

	// member count
	const [memberCount, setMemberCount] = useState('No members yet.')
	const where = { chainId: id }
	const { data: members } = useGetBattlepassUsersQuery({ variables: { id: id } })
	useEffect(() => {
		if (!members) return
		const _memberCount = members?.BattlepassBot?.Battlepasses[0]?.members.length || 0
		if (_memberCount === 0) return
		setMemberCount(`${_memberCount} member${_memberCount > 1 ? 's' : ''}`)
		// console.log('members', members?.BattlepassBot?.Battlepasses[0]?.members.length)
	}, [members])

	// organization + membership
	const [organization, setOrganization] = useState<Organization>(null)
	const [isMember, setIsMember] = useState<boolean>(false)
	const { loading, data, error } = useOrganizationByIdSubscription({
		variables: { orgId: orgId as string },
	})

	const address = useCurrentAccountAddress()
	const cache = useTmpOrganizationState()

	// join tx
	const [showTxModalType, setShowTxModalType] = useState<boolean>(false)
	// const addMemberTx = useAddMemberTransaction(organizationIdState)
	// const handleOpenTxModal = useCallback(() => {
	// 	setShowTxModalType(true)
	// }, [setShowTxModalType])
	// const handleCloseTxModal = useCallback(() => {
	// 	setShowTxModalType(false)
	// }, [setShowTxModalType])

	// content

	// const handleUploadImage = useCallback(async (event, setter) => {
	// 	const files = event.target.files
	// 	if (!files || files.length === 0) {
	// 		return createWarningNotification('No file selected')
	// 	}

	// 	const cid = await uploadFileToIpfs(files[0])
	// 	setter(cid.toString())
	// }, [])

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

	useEffect(() => {
		if (!data?.organization[0]) return
		// console.log('org', data?.organization[0])
		setOrganization(data.organization?.[0] as Organization)
	}, [data?.organization])

	useEffect(() => {
		if (address && organization) {
			setIsMember(organization.organization_members.some((member) => member.address === address))
		}
	}, [organization, address])

	const avatarImageUrl =
		organization?.logo || cache.logoCID
			? parseIpfsHash(organization?.logo || cache.logoCID, config.IPFS_GATEWAY)
			: null

	const headerImageUrl =
		organization?.header || cache.headerCID
			? parseIpfsHash(organization?.header ?? cache.headerCID, config.IPFS_GATEWAY)
			: null

	return (
		<Box>
			<Box sx={{}}>
				<Stack
					spacing={2}
					direction={isMd ? 'row' : 'column'}
					alignItems={isMd ? 'end' : 'center'}
					justifyContent={isMd ? 'start' : 'end'}
					pb={isMd ? 6 : 12}
					pl={isMd ? 4 : 0}
					sx={{
						position: 'absolute',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 'auto',
						zIndex: 99, //, border: '1px solid pink'
						WebkitFilter: 'drop-shadow( 0 5px 10px rgba(0,0,0,1) )',
						filter: 'drop-shadow( 0 5px 10px rgba(0,0,0,1) )',
						backgroundBlendMode: 'multiply',
					}}
				>
					<Stack alignItems="center" justifyContent={isMd ? 'left' : 'center'}>
						<Avatar
							sx={(theme) => ({
								width: '5rem',
								height: '5rem',
								backgroundColor: theme.palette.background.default,
								border: `3px solid #111111aa`,
								// outline: `3px solid #111111aa`,
							})}
							srcSet={avatarImageUrl}
						/>
					</Stack>

					<Stack
						alignItems={isMd ? 'space-between' : 'center'}
						justifyContent={isMd ? 'left' : 'center'}
						direction={isMd ? 'column' : 'column'}
						pl={isMd ? 2 : 0}
						pb={isMd ? 2 : 0}
					>
						<Typography
							variant="header1"
							sx={{
								whiteSpace: 'nowrap',
							}}
						>
							{name?.toUpperCase()}
						</Typography>
						<Typography variant="header2" sx={{ whiteSpace: 'nowrap' }}>
							{organization?.name ?? cache.name ?? ''} ·{' '}
							{/* {t('label:n_members', {
								n: organization?.organization_members?.length ?? 1,
							})} */}
							{memberCount}
						</Typography>
					</Stack>
				</Stack>
			</Box>

			{/*
			 */}

			{/* HEADER IMAGE */}
			{/* HEADER IMAGE */}

			{/*
			 */}

			<Grid
				height={isXs ? '60vh' : '40vh'}
				width="100%"
				display="grid"
				alignItems="center"
				overflow="hidden"
				position="relative"
				sx={{
					// border: '1px solid blue',
					backgroundColor: '#010101ee',
					borderRadius: `${theme.shape.borderRadiusLg} ${theme.shape.borderRadiusLg} 0 0`,
					height: '20vh',
					[theme.breakpoints.up('xs')]: { height: '60vh' },
					[theme.breakpoints.up('md')]: { height: '30vh' },
				}}
			>
				{/* header image */}
				{!organization?.header && !cache.headerCID?.length ? (
					<Box display="grid" justifyContent="center" alignItems="center">
						<Add sx={{ height: '40px', width: '40px', cursor: 'pointer' }} />
					</Box>
				) : (
					<Image
						src={headerImageUrl}
						alt="logo"
						layout="fill"
						sx={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
						}}
					/>
				)}
				<Box
					sx={{
						zIndex: 100,
						position: 'absolute',
						// top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						// background: 'linear-gradient(200deg, #03002000 60%, #030020ee 80%)',
						// backgroundBlendMode: 'darken',
					}}
				>
					<Navigation id={id} view={view} org={orgId} />
				</Box>
				{/* <Box
					sx={{
						zIndex: 100,
						position: 'absolute',
						// top: 0,
						// left: 0,
						right: 0,
						bottom: 0,
						// background: 'linear-gradient(200deg, #03002000 60%, #030020ee 80%)',
						// backgroundBlendMode: 'darken',
					}}
				>
					<Join args={{ id: id }} />
				</Box> */}
				{/* gradient */}
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: 'linear-gradient(180deg, #03002000 50%, #030020ee 100%)',
						backgroundBlendMode: 'darken',
						pointerEvents: 'none',
					}}
				></Box>
				{/*
				 */}
			</Grid>
		</Box>
	)
}

export default Header
