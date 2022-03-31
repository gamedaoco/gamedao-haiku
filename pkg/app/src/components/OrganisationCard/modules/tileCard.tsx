import { useMemo } from 'react'
import { useExtensionContext } from 'src/provider/extension/modules/context'
import { NavLink } from 'src/components/NavLink/navLink'
import { useTheme } from '@mui/material/styles'
import { Typography, Card, Box, CardHeader, CardContent, Avatar } from '@mui/material'
import { Person, Key, KeyOff, Check } from '@mui/icons-material'

const gateway = 'https://ipfs.gamedao.co/gateway/'
const toLink = '/app/organisations/'

export const TileCard = ({ item, metadata }) => {
	const { selectedAccount } = useExtensionContext()
	const theme = useTheme()
	const bgPlain = { backgroundColor: theme.palette.grey[500_16] }
	const address = selectedAccount?.account.address

	const SubHeader = useMemo(() => {
		return (
			<Box sx={{ display: 'flex', gap: '5px', alignItems: 'stretch' }}>
				<Person />
				<span>{`${item?.members.length} ${item?.members.length > 1 ? 'Members' : 'Member'} `}</span>
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
		)
	}, [item, address])

	return (
		<NavLink href={`${toLink}${item.id}`}>
			<Card
				sx={{
					width: '344px',
					height: '172px',
					borderRadius: '16px',
					background: '#212B36',
					'&:hover': { borderColor: 'primary.main' },
					...bgPlain,
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
