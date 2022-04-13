import { useMemo } from 'react'
import { useExtensionContext } from 'src/provider/extension/modules/context'
import { NavLink } from 'src/components/NavLink/navLink'
import { BodyData } from 'src/@types/bodydata'
import { IpfsMetadata } from 'src/@types/ipfsmetadata'
import { useTheme } from '@mui/material/styles'
import { Typography, Card, Box, CardHeader, CardContent, Avatar, CircularProgress } from '@mui/material'
import { Person, Key, Check } from '@mui/icons-material'

interface ComponentsPros {
	item: BodyData
	metadata: IpfsMetadata
	loading?: boolean
}

const gateway = 'https://ipfs.gamedao.co/gateway/'
const toLink = '/app/organisations/'

export const TileCard = ({ item, metadata }: ComponentsPros) => {
	const { selectedAccount } = useExtensionContext()
	const theme = useTheme()
	const bgPlain = { backgroundColor: '#212B36' }
	const address = selectedAccount?.account.address

	const SubHeader = useMemo(() => {
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
					<Person fontSize={'small'} />
					<span>{`${item?.members.length} ${item?.members.length > 1 ? 'Members' : 'Member'} `}</span>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '.25rem',
					}}
				>
					{item.members.find((member) => member.identity.id === address) ? (
						<>
							<span>
								<Check />
							</span>
							<span>{'Joined'}</span>
						</>
					) : (
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								flexDirection: 'row',
								gap: '0.25rem',
								alignItems: 'center',
							}}
						>
							<Key fontSize={'small'} />
							<span>{item?.access === 0 ? 'Open' : 'Invitation'}</span>
						</Box>
					)}
				</Box>
			</Box>
		)
	}, [item, address])

	return (
		<NavLink href={`${toLink}${item.id}`}>
			<Card
				sx={{
					minHeight: '164px',
					maxWidth: '344px',
					borderRadius: '16px',
					'&:hover': { background: theme.palette.grey[500_32] },
					...bgPlain,
					cursor: 'pointer',
				}}
			>
				{!item || !metadata ? (
					<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<CircularProgress color="inherit" />
					</Box>
				) : (
					<>
						<CardHeader
							avatar={
								<Avatar src={`${gateway}${metadata?.logo}`} sx={{ width: 64, height: 64 }}>
									{metadata?.name?.slice(0, 1)}
								</Avatar>
							}
							title={
								<Typography variant={'body2'} fontWeight={'700'} noWrap>
									{metadata?.name}
								</Typography>
							}
							subheader={SubHeader}
						/>
						<CardContent>
							<Typography
								variant={'caption'}
								fontWeight={'400'}
								color={'#DCDEE0'}
								sx={{
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									display: '-webkit-box',
									'-webkit-line-clamp': '2',
									'-webkit-box-orient': 'vertical',
								}}
							>
								{metadata?.description}
							</Typography>
						</CardContent>
					</>
				)}
			</Card>
		</NavLink>
	)
}
