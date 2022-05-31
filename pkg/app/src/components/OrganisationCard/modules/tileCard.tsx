import { useMemo } from 'react'

import type { Organization } from '@gamedao-haiku/graphql/dist'
import { Check, Key, Person } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { NavLink } from 'src/components/NavLink/navLink'
import { useExtensionContext } from 'src/provider/extension/modules/context'

interface ComponentsPros {
	item: Organization
}

const gateway = 'https://ipfs.gamedao.co/gateway/'
const toLink = '/app/organisations/'

export const TileCard = ({ item }: ComponentsPros) => {
	const theme = useTheme()

	const { selectedAccount } = useExtensionContext()
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
								<span>{item?.access === 'Open' ? 'Open' : 'Invitation'}</span>
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
					border: '1px solid transparent',
					'&:hover': {
						border: `1px solid ${theme.palette.grey[500_32]}`,
						background: theme.palette.grey[500_16],
					},
					backgroundColor: theme.palette.grey[500_16],
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
						<div>
							<Typography
								variant={'caption'}
								fontWeight={'400'}
								sx={{
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									display: '-webkit-box',
									WebkitLineClamp: '2',
									WebkitBoxOrient: 'vertical',
								}}
							>
								{item?.metadata?.description}
							</Typography>
						</div>
					</CardContent>
				</>
			</Card>
		</NavLink>
	)
}
