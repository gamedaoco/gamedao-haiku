import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import { fetchIpfsJson, parseIpfsHash } from 'src/utils/ipfs'
import { Collectable } from 'src/@types/collectable'
import { Box, Card, CircularProgress, Typography, CardMedia, CardContent, Modal } from '@mui/material'
// import { CollectableViewer } from './modules/CollectableViewer'

const CollectableViewer = dynamic(() => import('./modules/CollectableViewer').then((mod) => mod.CollectableViewer), {
	ssr: false,
})

interface IpfsMetadata {
	description: string
	name: string
	mediaUri: string
	thumbnailUri: string
}

interface ComponentProps {
	item: Collectable
}

// TODO extract to app config
const RMRK_GATEWAY = 'https://rmrk.mypinata.cloud/'

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90vw',
	height: '90vh',
	bgcolor: 'black',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	outline: 0,
}

export function Collectable({ item }: ComponentProps) {
	const [ipfsMetadata, setIpfsMetadata] = useState<IpfsMetadata>(null)
	const [showViewer, setShowViewer] = useState(false)
	const handleOpen = () => setShowViewer(true)
	const handleClose = () => setShowViewer(false)

	console.log(ipfsMetadata)

	useEffect(() => {
		if (item) {
			fetchIpfsJson(item.metadata, RMRK_GATEWAY).then((json) => setIpfsMetadata(json as IpfsMetadata))
		}
	}, [item])

	return !item ? null : (
		<Card sx={{ width: '100%' }}>
			{ipfsMetadata ? (
				<>
					<CardMedia
						component="img"
						sx={{ width: '100%' }}
						image={parseIpfsHash(ipfsMetadata.thumbnailUri, RMRK_GATEWAY)}
						alt="collectable_image"
						onClick={handleOpen}
					/>
					<CardContent>
						<Typography sx={{ pt: 1, px: 2, fontFamily: 'PT Serif Regular' }}>
							{ipfsMetadata.name}
						</Typography>
						<Typography sx={{ pb: 1, px: 2, fontFamily: 'PT Serif Regular' }}>{item.sn}</Typography>
					</CardContent>
					{showViewer && (
						<Modal
							open={showViewer}
							onClose={handleClose}
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
						>
							<Box sx={{ ...style }}>
								<CollectableViewer
									mediaUrl={ipfsMetadata.mediaUri}
									poster={parseIpfsHash(ipfsMetadata.thumbnailUri, RMRK_GATEWAY)}
									alt={ipfsMetadata.description}
								/>
							</Box>
						</Modal>
					)}
				</>
			) : (
				<Box display="flex" justifyContent="center" height="100%" alignItems="center">
					<CircularProgress />
				</Box>
			)}
		</Card>
	)
}
