import { useMemo } from 'react'
import { useExtensionContext } from 'src/provider/extension/modules/context'
import { NavLink } from 'src/components/NavLink/navLink'
import type { Body } from '@gamedao-haiku/graphql/dist'
import { Avatar, Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { Check, Key, Person } from '@mui/icons-material'

interface ComponentsPros {
	item: Body
}

const gateway = 'https://ipfs.gamedao.co/gateway/'
const toLink = '/app/organisations/'

export const TileCard = ({ item }: ComponentsPros) => {
	const { selectedAccount } = useExtensionContext()
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
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							flexDirection: 'row',
							gap: '0.25rem',
							alignItems: 'center',
						}}
					>
						{item?.members?.find((member) => member.address === address) ? (
							<>
								<Check fontSize={'small'} />
								<span>{'Joined'}</span>
							</>
						) : (
							<>
								<Key fontSize={'small'} />
								<span>{item?.access === 0 ? 'Open' : 'Invitation'}</span>
							</>
						)}
					</Box>
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
					'&:hover': {
						// transform: '',
						outline: 'rgba(255, 255, 255, 0.24) 1px solid',
					},
					...bgPlain,
					cursor: 'pointer',
				}}
			>
				<>
					<CardHeader
						avatar={
							<Avatar src={`${gateway}${item?.metadata?.logo}`} sx={{ width: 64, height: 64 }}>
								{item?.metadata?.name?.slice(0, 1)}
							</Avatar>
						}
						title={
							<Typography variant={'body2'} fontWeight={'700'} noWrap>
								{item?.metadata?.name}
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
							}}
						>
							{item?.metadata?.description}
						</Typography>
					</CardContent>
				</>
			</Card>
		</NavLink>
	)
}
