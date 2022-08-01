import { useMemo } from 'react'

import { Check, Key, Person } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'src/components/NavLink/navLink'
import { Organization } from 'src/queries'
import { parseIpfsHash } from 'src/utils/ipfs'

interface ComponentPros {
	item: Organization
}

export const TileCard = ({ item }: ComponentPros) => {
	const theme = useTheme()
	const config = useConfig()
	const address = useCurrentAccountAddress()
	const { t } = useTranslation()
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
								<Check fontSize={'small'} />
								<span>{t('label:joined')}</span>
							</>
						) : (
							<>
								<Key fontSize={'small'} />
								<span>{t(`label:${item?.access === 'Open' ? 'open' : 'invitation'}`)}</span>
							</>
						)}
					</Box>
				</Box>
			</Box>
		)
	}, [item, address])

	return (
		<NavLink href={`/organisations/${item.id}/dashboard`}>
			<Card
				sx={{
					border: '1px solid transparent',
					'&:hover': {
						border: `1px solid ${theme.palette.grey[500_32]}`,
					},
					cursor: 'pointer',
					width: '100%',
					height: '100%',
				}}
			>
				<CardHeader
					avatar={
						<Avatar
							src={parseIpfsHash(item?.organization_metadata?.logo, config.IPFS_GATEWAY)}
							sx={{ width: 64, height: 64 }}
						>
							{item?.organization_metadata?.name?.slice(0, 1)}
						</Avatar>
					}
					title={
						<Typography variant={'body2'} fontWeight={'700'} noWrap>
							{item?.organization_metadata?.name}
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
							{item?.organization_metadata?.description}
						</Typography>
					</div>
				</CardContent>
			</Card>
		</NavLink>
	)
}
