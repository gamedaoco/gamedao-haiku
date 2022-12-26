import { memo, useCallback } from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useConfig } from 'hooks/useConfig'
import { parseIpfsHash } from 'src/utils/ipfs'
import { Avatar, Box, Tooltip } from '@mui/material'
import Unknown from '@mui/icons-material/QuestionMarkOutlined'

interface ComponentProps {
	id: string
	logo: string
	name: string
	active?: boolean
	notification?: boolean
}

export function OrganizationButton({ id, logo, name, active, notification }: ComponentProps) {

	const config = useConfig()
	const { push } = useRouter()
	const url = `/organizations/${id}/dashboard`
	const navigateCall = useCallback(() => push(url), [push,url])

	return (
		<Tooltip title={name}>
			<Box
				sx={({
					palette: {
						text: { primary },
						error: { main },
					},
				}) => ({
					width: '90px',
					position: 'relative',
					'&::after': {
						content: '""',
						position: 'absolute',
						width: '4px',
						backgroundColor: active ? primary : 'transparent',
						borderRadius: '2px 0px 0px 2px',
						boxShadow: `0 0 15px 1px ${active ? primary : 'transparent'}`,
						top: '40%',
						bottom: '40%',
						right: '0px',
					},
					'&': {
						'&::before': {
							backgroundColor: notification ? main : 'transparent',
							position: 'absolute',
							width: '13px',
							height: '13px',
							borderRadius: '50%',
							bottom: '0px',
							right: '22px',
							zIndex: '5',
							content: '""',
						},
					},
				})}
			>
				<Link href={url}>
					<Avatar
						// onClick={navigateCall}
						sx={({
							palette: {
								text: { primary },
							},
						}) => ({
							backgroundColor: '#00000033',
							margin: 'auto',
							width: '48px',
							height: '48px',
							cursor: 'pointer',
							transition: 'border-radius .1s',
							'&:hover': {
								outline: `2px solid ${primary}`,
								borderRadius: '30%',
							},
							'&': {
								outline: `2px solid ${active ? primary : 'transparent'}`,
								borderRadius: '50%',
							},
						})}
						alt={'name'}
						src={parseIpfsHash( logo ?? '', config.IPFS_GATEWAY )}
					>
						{ <Unknown/> }
					</Avatar>
				</Link>
			</Box>
		</Tooltip>
	)
}

export const OrganizationButtonMemoized = memo(OrganizationButton)
