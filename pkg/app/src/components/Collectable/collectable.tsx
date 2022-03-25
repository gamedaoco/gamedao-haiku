import { Box, Card, CircularProgress, Typography, CardMedia, CardContent } from '@mui/material'
import { Collectable } from 'src/@types/collectable'
import React, { useEffect, useState } from 'react'
import { fetchIpfsJson, parseIpfsHash } from 'src/utils/ipfs'
import { ModelDialog } from 'components/Collectable/modules/modelDialog'

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

export function Collectable({ item }: ComponentProps) {
	const [ipfsMetadata, setIpfsMetadata] = useState<IpfsMetadata>(null)
	const [openModel, setOpenModel] = useState<boolean>(false)
	console.log(ipfsMetadata)
	useEffect(() => {
		if (item) {
			fetchIpfsJson(item.metadata, RMRK_GATEWAY).then((json) => setIpfsMetadata(json as IpfsMetadata))
		}
	}, [item])

	if (!item) {
		return null
	}

	return (
		<Card sx={{ width: '100%' }}>
			{ipfsMetadata ? (
				<>
					<CardMedia
						component="img"
						sx={{ width: '100%' }}
						image={parseIpfsHash(ipfsMetadata.thumbnailUri, RMRK_GATEWAY)}
						alt="collectable_image"
						onClick={() => setOpenModel(true)}
					/>
					<CardContent>
						<Typography sx={{ pt: 1, px: 2, fontFamily: 'PT Serif Regular' }}>
							{ipfsMetadata.name}
						</Typography>
						<Typography sx={{ pb: 1, px: 2, fontFamily: 'PT Serif Regular' }}>{item.sn}</Typography>
					</CardContent>
					<ModelDialog
						open={openModel}
						mediaUrl={ipfsMetadata.mediaUri}
						handleClose={() => setOpenModel(false)}
						poster={parseIpfsHash(ipfsMetadata.thumbnailUri, RMRK_GATEWAY)}
						alt={ipfsMetadata.description}
					/>
				</>
			) : (
				<Box display="flex" justifyContent="center" height="100%" alignItems="center">
					<CircularProgress />
				</Box>
			)}
		</Card>
	)
}
