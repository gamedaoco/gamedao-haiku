import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { fetchIpfsBlob } from 'src/utils/ipfs'
import { Box, Modal, Paper } from '@mui/material'
import '@google/model-viewer'

interface ComponentProps {
	mediaUrl: string
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

export function CollectableViewer({ mediaUrl, alt, poster }: ComponentProps) {
	const [fileState, setFileState] = useState<string>()
	const [is3DModel, setIs3DModel] = useState<boolean>(false)
	const [isImage, setIsImage] = useState<boolean>(false)
	const [isVideo, setIsVideo] = useState<string>(null)

	useEffect(() => {
		if (!mediaUrl) return

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
	}, [mediaUrl])

	console.log(mediaUrl, fileState, poster)

	// tried and failed:
	// 1	style="height:100%;width:100%;"
	// 2	wrapper with
	// 		<Box sx={{ 'model-viewer': { width: '100%', height: '100%', border: '1px solid red' }}}>
	// 3	width / height

	return (
		<Box>
			{is3DModel && fileState && (
				<Box
					sx={{
						width: '100%',
						'* &': { width: '100%', height: '100%', border: '1px solid red' },
					}}
				>
					<model-viewer
						src={fileState}
						ios-src=""
						poster={poster}
						alt={alt}
						shadow-intensity="1"
						camera-controls
						auto-rotate
						autoplay
						environment-image="neutral"
					/>
				</Box>
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
	)
}
