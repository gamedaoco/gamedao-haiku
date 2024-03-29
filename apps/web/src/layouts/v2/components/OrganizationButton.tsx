import { memo, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useConfig } from 'src/hooks/useConfig'
import { parseIpfsHash } from 'src/utils/ipfs'

import { Avatar, Box, Tooltip } from '@mui/material'

interface ComponentProps {
	id: string
	logo: string
	name: string
	active?: boolean
	notification?: boolean
}

export function OrganizationButton({ id, logo, name, active, notification }: ComponentProps) {
	const { push } = useRouter()
	const config = useConfig()
	// const url = `/v1/${id}`
	const url = `/organizations/${id}/dashboard`

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
						width: '1px',
						backgroundColor: active ? '#00ffcc55' : 'transparent',
						borderColor: '#ff00ff',
						borderRadius: '2px 0px 0px 2px',
						boxShadow: active ? '-5px 0px 10px 3px #00ffcc' : 'none',
						top: '25%',
						bottom: '25%',
						right: '0',
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
							margin: 'auto',
							width: '48px',
							height: '48px',
							cursor: 'pointer',
							transition: 'border-radius .5s',
							'&:hover': {
								border: `2px solid ${primary}`,
								borderRadius: '30%',
							},
							'&': {
								border: `2px solid ${active ? primary : 'transparent'}`,
								borderRadius: '50%',
							},
						})}
						alt={name}
						src={parseIpfsHash(logo ?? '', config.IPFS_GATEWAY)}
					>
						{/*						<Image
							src={parseIpfsHash('QmSbag4j9xwaSWzxAMLRvzT9MDmWkAnwy7Fu3pYTKRTXYM')}
							width={48}
							height={48}
							alt={name}
						/>*/}
					</Avatar>
				</Link>
			</Box>
		</Tooltip>
	)
}

export const OrganizationButtonMemoized = memo(OrganizationButton)
