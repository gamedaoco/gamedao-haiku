import { useCallback } from 'react'
import { Avatar, Tooltip, Box, Badge } from '@mui/material'
import { parseIpfsHash } from 'src/utils/ipfs'
import { useRouter } from 'next/router'

interface ComponentProps {
	id: string
	logo: string
	name: string
	active?: boolean
	notification?: boolean
}

export function BodyButton({ id, logo, name, active, notification }: ComponentProps) {
	const { push } = useRouter()
	const navigateCall = useCallback(() => {
		push(`app/organisations/${id}`)
	}, [id, push])

	return (
		<Tooltip title={name}>
			<Box
				sx={({
					palette: {
						text: { primary },
						error: { main },
					},
				}) => ({
					width: '100%',
					position: 'relative',
					'&::after': {
						content: '""',
						position: 'absolute',
						width: '4px',
						backgroundColor: active ? primary : 'transparent',
						borderRadius: '2px 0px 0px 2px',
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
				<Avatar
					onClick={navigateCall}
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
					src={parseIpfsHash(logo ?? '')}
				>
					<img src={parseIpfsHash('QmSbag4j9xwaSWzxAMLRvzT9MDmWkAnwy7Fu3pYTKRTXYM')} />
				</Avatar>
			</Box>
		</Tooltip>
	)
}
