import React, { FC, useEffect, useState } from 'react'

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Collectable as CollectableInterface } from 'src/@types/collectable'
import { fetchIpfsJson, parseIpfsHash } from 'src/utils/ipfs'

import LoadingCollectableCard from 'src/dapps/account/components/CollectablesList/loadingCollectableCard'
import { ModelDialog } from 'src/components/Collectable/modules/modelDialog'

interface IpfsMetadata {
	description: string
	name: string
	mediaUri: string
	thumbnailUri: string
}

interface ComponentProps {
	item: CollectableInterface
}

// TODO extract to app config
const IPFS_GATEWAY = 'https://dweb.link/'

const Collectable: FC<ComponentProps> = ({ item }) => {
	const [ipfsMetadata, setIpfsMetadata] = useState<IpfsMetadata>(null)
	const [openModel, setOpenModel] = useState<boolean>(false)
	const theme = useTheme()

	useEffect(() => {
		if (item) {
			fetchIpfsJson(item.metadata, IPFS_GATEWAY).then((json) => setIpfsMetadata(json as IpfsMetadata))
		}
	}, [item])

	if (!item) {
		return null
	}

	return (
		<>
			{ipfsMetadata ? (
				<Card
					variant="primary"
					sx={{
						minHeight: '310px',
					}}
				>
					<CardMedia
						component="img"
						sx={{ padding: 0.75 }}
						image={parseIpfsHash(ipfsMetadata.thumbnailUri, IPFS_GATEWAY)}
						alt="collectable_image"
						onClick={() => setOpenModel(true)}
					/>
					<CardContent sx={{ padding: 2 }}>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
							<Typography variant="subtitle1">
								{ipfsMetadata.name} {item.sn}
							</Typography>
							<Typography variant="body2" color={theme.palette.common.white}>
								GameDao
							</Typography>
						</Box>
					</CardContent>
					<Box display="flex" justifyContent="center" alignItems="center">
						<ModelDialog
							open={openModel}
							mediaUrl={ipfsMetadata.mediaUri}
							handleClose={() => setOpenModel(false)}
							poster={parseIpfsHash(ipfsMetadata.thumbnailUri, IPFS_GATEWAY)}
							alt={ipfsMetadata.description}
						/>
					</Box>
				</Card>
			) : (
				<LoadingCollectableCard />
			)}
		</>
	)
}

export default Collectable
