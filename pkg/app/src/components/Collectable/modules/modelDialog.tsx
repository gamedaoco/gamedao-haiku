import { Box, Dialog, Paper } from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchIpfsBlob } from 'src/utils/ipfs'

interface ComponentProps {
	open: boolean
	mediaUrl: string
	handleClose: () => void
	poster: string
	alt: string
}

// TODO extract to app config
const RMRK_GATEWAY = 'https://rmrk.mypinata.cloud/'

async function blobToBase64(blob) {
	const reader = new FileReader()
	reader.readAsDataURL(blob)
	return new Promise((resolve) => {
		reader.onloadend = () => {
			resolve(reader.result)
		}
	})
}

export function ModelDialog({ open, mediaUrl, handleClose, alt, poster }: ComponentProps) {
	const [fileState, setFileState] = useState<string>()
	const [is3DModel, setIs3DModel] = useState<boolean>(false)
	const [isImage, setIsImage] = useState<boolean>(false)
	const [isVideo, setIsVideo] = useState<string>(null)

	useEffect(() => {
		if (open && mediaUrl) {
			fetchIpfsBlob(mediaUrl, RMRK_GATEWAY).then((data: Blob) => {
				if (data.type.indexOf('model') != -1) {
					setIs3DModel(true)
				} else if (data.type.indexOf('image') != -1) {
					setIsImage(true)
				} else if (data.type.indexOf('video') != -1) {
					setIsVideo(data.type)
				} else {
					// Todo add other media types
					// Close dialog for now
					handleClose()
				}

				blobToBase64(data).then(setFileState)
			})
		}
	}, [open])

	return (
		<Dialog open={open} onClose={handleClose}>
			<Paper>
				<Box padding={4}>
					{is3DModel && (
						<>
							{/* @ts-ignore */}
							<model-viewer
								src={fileState}
								ios-src=""
								poster={poster}
								alt={alt}
								shadow-intensity="1"
								camera-controls
								auto-rotate
								ar
							/>
						</>
					)}

					{isImage && (
						<Box
							sx={{
								width: '100%',
							}}
							component="img"
							src={fileState ?? poster}
							alt={alt}
						/>
					)}

					{isVideo && (
						<Box
							sx={{
								width: '100%',
							}}
						>
							<video width="320" height="240" controls>
								<source src={fileState} type={isVideo} />
							</video>
						</Box>
					)}
				</Box>
			</Paper>
		</Dialog>
	)
}
