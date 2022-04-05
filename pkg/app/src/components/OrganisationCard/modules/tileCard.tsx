import { useMemo } from 'react'
import { useExtensionContext } from 'src/provider/extension/modules/context'
import { NavLink } from 'src/components/NavLink/navLink'
import { BodyData } from 'src/@types/bodydata'
import { IpfsMetadata } from 'src/@types/ipfsmetadata'
import { useTheme } from '@mui/material/styles'
import { Typography, Card, Box, CardHeader, CardContent, Avatar, CircularProgress } from '@mui/material'
import { Person, Key, KeyOff, Check } from '@mui/icons-material'

interface ComponentsPros {
	item: BodyData
	metadata: IpfsMetadata
}

const gateway = 'https://ipfs.gamedao.co/gateway/'
const toLink = '/app/organisations/'

export const TileCard = ({ item, metadata }: ComponentsPros) => {
	const { selectedAccount } = useExtensionContext()
	const theme = useTheme()
	const bgPlain = { backgroundColor: theme.palette.grey[500_16] }
	const address = selectedAccount?.account.address

	const SubHeader = useMemo(() => {
		return (
			<Box
				sx={{
					display: 'flex',
					gap: '.25rem',
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
					<Person />
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
						<>
							<span>{item?.access === 0 ? <KeyOff /> : <Key />}</span>
							<span>{item?.access === 0 ? 'Public' : 'Private'}</span>
						</>
					)}
				</Box>
			</Box>
		)
	}, [item, address])

	if (!item || !metadata) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<CircularProgress color="inherit" />
			</Box>
		)
	}

	return (
		<NavLink href={`${toLink}${item.id}`}>
			<Card
				sx={{
					minHeight: '184px',
					borderRadius: '16px',
					'&:hover': { background: theme.palette.grey[500_32] },
					...bgPlain,
					cursor: 'pointer',
				}}
			>
				<CardHeader
					avatar={
						<Avatar src={`${gateway}${metadata?.logo}`} sx={{ width: 64, height: 64 }}>
							{item?.name.slice(0, 1)}
						</Avatar>
					}
					title={<Typography noWrap>{item?.name}</Typography>}
					subheader={SubHeader}
				/>
				<CardContent>
					<Typography
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
			</Card>
		</NavLink>
	)
}
