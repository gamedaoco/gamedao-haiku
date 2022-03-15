import { Box, Card, CircularProgress, Typography } from '@mui/material'
import { Collectable } from 'src/@types/collectable'
import React, { useEffect, useState } from 'react'
import { fetchIpfsJson, parseIpfsHash } from 'src/utils/ipfs'

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

	useEffect(() => {
		if (item) {
			fetchIpfsJson(item.metadata, RMRK_GATEWAY).then((json) => setIpfsMetadata(json as IpfsMetadata))
		}
	}, [item])

	if (!item) {
		return null
	}

	return (
		<Card sx={{ width: '240px', minHeight: '240px', alignItems: 'center', justifyContent: 'center' }}>
			{ipfsMetadata ? (
				<>
					<img
						src={parseIpfsHash(ipfsMetadata.thumbnailUri, RMRK_GATEWAY)}
						alt="collectable_image"
						width="100%"
						height="auto"
					/>
					<Typography sx={{ pt: 1, px: 2, fontFamily: 'PT Serif Regular' }}>{ipfsMetadata.name}</Typography>
					<Typography sx={{ pb: 1, px: 2, fontFamily: 'PT Serif Regular' }}>{item.sn}</Typography>
				</>
			) : (
				<Box display="flex" justifyContent="center" height="100%" alignItems="center">
					<CircularProgress />
				</Box>
			)}
		</Card>
	)
}
