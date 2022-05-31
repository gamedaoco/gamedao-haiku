import React, { FC, useEffect, useState } from 'react'

import { Box, Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Collectable } from 'src/@types/collectable'
import { fetchIpfsJson, parseIpfsHash } from 'src/utils/ipfs'

import { ModelDialog } from 'components/Collectable/modules/modelDialog'

import LoadingCollectableCard from './loadingCollectableCard'

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

const CollectableCard: FC<ComponentProps> = ({ item }) => {
	const [ipfsMetadata, setIpfsMetadata] = useState<IpfsMetadata>(null)
	const [openModel, setOpenModel] = useState<boolean>(false)
	const theme = useTheme()

	useEffect(() => {
		if (item) {
			fetchIpfsJson(item.metadata, RMRK_GATEWAY).then((json) => setIpfsMetadata(json as IpfsMetadata))
		}
	}, [item])

	if (!item) {
		return null
	}

	return (
		<>
			{ipfsMetadata ? (
				<Card sx={{ maxWidth: '95%', backgroundColor: theme.palette.grey[700] }}>
					<CardMedia
						component="img"
						sx={{ width: '100%', padding: 0.7, borderRadius: '16px' }}
						image={parseIpfsHash(ipfsMetadata.thumbnailUri, RMRK_GATEWAY)}
						alt="collectable_image"
						onClick={() => setOpenModel(true)}
					/>
					<CardContent sx={{ padding: 2 }}>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
							<Typography variant="body2" fontWeight={700}>
								{ipfsMetadata.name} {item.sn}
							</Typography>
							<Typography variant="body2">GameDao</Typography>
						</Box>
					</CardContent>
					<ModelDialog
						open={openModel}
						mediaUrl={ipfsMetadata.mediaUri}
						handleClose={() => setOpenModel(false)}
						poster={parseIpfsHash(ipfsMetadata.thumbnailUri, RMRK_GATEWAY)}
						alt={ipfsMetadata.description}
					/>
				</Card>
			) : (
				<LoadingCollectableCard />
			)}
		</>
	)
}

export default CollectableCard
