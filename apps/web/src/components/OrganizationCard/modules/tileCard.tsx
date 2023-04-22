import { useMemo } from 'react'

import { Check, Key, Person } from '@mui/icons-material'
import { Stack, Avatar, Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useConfig } from 'src/hooks/useConfig'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'src/components/NavLink/navLink'
import { Organization } from 'src/queries'
import { parseIpfsHash } from 'utils/ipfs'

interface ComponentPros {
	item: Organization
}

export const TileCard = ({ item }: ComponentPros) => {
	const theme = useTheme()
	const config = useConfig()
	const address = useCurrentAccountAddress()
	const { t } = useTranslation()
	const subheader = useMemo(() => {
		return (
			<Box
				sx={{
					display: 'flex',
					gap: '1.25rem',
					flexWrap: 'wrap',
					justifyContent: 'flex-start',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '.25rem',
					}}
				>
					<Person fontSize={'inherit'} />
					<span>{`${item?.organization_members?.length} ${t(
						`label:${item?.organization_members?.length > 1 ? 'members' : 'member'}`,
					)} `}</span>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '.25rem',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							flexDirection: 'row',
							gap: '0.25rem',
							alignItems: 'center',
						}}
					>
						{item?.organization_members?.find((member) => member.address === address) ? (
							<>
								<Check fontSize={'inherit'} />
								<span>{t('label:joined')}</span>
							</>
						) : (
							<>
								<Key fontSize={'inherit'} />
								<span>{t(`label:${item?.access_model === 'Open' ? 'open' : 'invitation'}`)}</span>
							</>
						)}
					</Box>
				</Box>
			</Box>
		)
	}, [item, address])

	const avatarImgUrl = item?.logo ? parseIpfsHash(item?.logo, config.IPFS_GATEWAY) : null
	const bgImgUrl = item?.header ? parseIpfsHash(item?.header, config.IPFS_GATEWAY) : null

	return (
		<NavLink href={`/organizations/${item.id}/dashboard`}>
			<Box
				sx={{
					width: '100%',
					height: '480px',
					backgroundImage: `url(${bgImgUrl})`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					// backdropFilter: 'blur(32px)',
					// webkitBackdropFilter: 'blur(32px)',
					transformStyle: 'preserve-3d',
					willChange: 'transform',
					'&:hover': {
						transform: 'translateZ(12px)',
					},
				}}
			>
				<Card
					sx={{
						position: 'relative',
						zIndex: 1,
						transition: 'transform 0.3s ease',

						backgroundColor: `#11111133`,
						border: '1px solid transparent',
						borderRadius: theme.shape.borderRadiusLg,
						'&:hover': {
							border: `1px solid ${theme.palette.primary}`,
							boxShadow: theme.customShadows.primary,
						},
						cursor: 'pointer',
						width: '100%',
						height: '100%',
						p: '2rem',
					}}
					variant={'glass'}
				>
					<Stack
						direction="column"
						spacing={2}
						alignItems="center"
						justifyContent="end"
						sx={{
							height: '100%',
							WebkitFilter: 'drop-shadow( 0 5px 15px rgba(0,0,0,1) )',
							filter: 'drop-shadow( 0 5px 15px rgba(0,0,0,1) )',
							// backgroundBlendMode: 'multiply',
						}}
					>
						<Stack direction="column" alignItems="center" justifyContent="end" sx={{ height: '100%' }}>
							<Avatar src={avatarImgUrl} sx={{ width: 64, height: 64 }}>
								{item?.name?.slice(0, 1)}
							</Avatar>
							<Typography variant={'body1'} fontWeight={'700'} pt={2}>
								{item?.name}
							</Typography>
							{subheader}
						</Stack>
						<Stack
							p={[2, 4]}
							direction="column"
							alignItems="center"
							justifyContent="center"
							sx={{ height: '100%' }}
						>
							<Typography
								variant={'caption'}
								fontWeight={'400'}
								sx={{
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									display: '-webkit-box',
									WebkitLineClamp: '5',
									WebkitBoxOrient: 'vertical',
								}}
							>
								{item?.description}
							</Typography>
						</Stack>
					</Stack>
				</Card>
			</Box>
		</NavLink>
	)
}
