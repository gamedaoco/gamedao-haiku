import React, { useCallback, useState } from 'react'
import * as Yup from 'yup'

import { createWarningNotification } from 'src/utils/notification'
import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { useConfig } from 'src/hooks/useConfig'
import { useTmpCampaignState } from 'src/hooks/useTmpCampaignState'

import AddPhoto from '@mui/icons-material/AddPhotoAlternateOutlined'
// import { AddAPhoto } from '@mui/icons-material'
import { CardMedia, Input, Paper, Stack, Typography, Box } from '@mui/material'

import Editor from 'components/organisms/Editor'
import { Dropzone } from 'components/molecules/Dropzone'

interface ComponentProps {
	bannerCid: string
	content: string
	uploadBannerImage: (file: File) => void
	setContent: (content: string) => void
}

const validationContentSchema = Yup.string().required('* Campaign Content is required')

export const validationSchema = Yup.object().shape({
	banner: Yup.string().required(),
	content: Yup.string().required(),
})

export function Content({ bannerCid, content, uploadBannerImage, setContent }: ComponentProps) {
	const [errorState, setErrorState] = useState<string>()
	const config = useConfig()
	const cache = useTmpCampaignState()

	const onBannerSelected = useCallback(
		(files: File[]) => {
			if (files.length === 0) return
			uploadBannerImage(files[0])
		},
		[uploadBannerImage],
	)

	const handleContentChanged = useCallback(
		(value) => {
			if (setContent) {
				try {
					validationContentSchema.validateSync(value)
					setErrorState(null)
				} catch (err) {
					setErrorState(err.message)
				}

				setContent(value)
			}
		},
		[setContent],
	)

	const handleUploadImage = useCallback(async (event, setter) => {
		const files = event.target.files
		if (!files || files.length === 0) {
			return createWarningNotification('No file selected')
		}
		const cid = await uploadFileToIpfs(files[0])
		setter(cid.toString())
	}, [])

	console.warn('cache', cache.bannerCid, bannerCid)

	return (
		<Stack
			component={Paper}
			p={{ xs: 3, sm: 6 }}
			spacing={{ xs: 2, sm: 4 }}
			gap={2}
			width="100%"
			height="100%"
			variant="glass"
		>
			<Typography variant={'h6'}>Campaign Content</Typography>

			{/* Upload Banner */}
			<Stack gap={2}>
				<Typography variant="subtitle2">Banner</Typography>
				{/*
				<Box>
*/}
				<Dropzone onFilesSelected={onBannerSelected} options={{ maxFiles: 1, accept: { 'image/*': [] } }}>
					<label htmlFor="header-file-upload">
						<input
							style={{ display: 'none', pointerEvents: 'auto' }}
							accept="image/*"
							id="header-file-upload"
							type="file"
							onChange={(event) => handleUploadImage(event, cache.setBannerCid)}
						/>
						{cache.bannerCid || bannerCid ? (
							<CardMedia
								sx={{ height: '155px', cursor: 'pointer' }}
								component="img"
								src={parseIpfsHash(bannerCid, config.IPFS_GATEWAY)}
								alt="campaign image"
							/>
						) : (
							<Box
								display="grid"
								justifyContent="center"
								alignItems="center"
								padding={6}
								sx={{ cursor: 'pointer' }}
							>
								<AddPhoto sx={{ width: '100%', height: '35px' }} />
								<Typography variant="body2">Upload your Campaign Image</Typography>
							</Box>
						)}
					</label>
				</Dropzone>
				{/*
				</Box>
						*/}
			</Stack>

			{/*	Editor */}
			<Stack gap={2}>
				<Typography variant="subtitle2">Campaign Description</Typography>
				<Editor onChange={handleContentChanged} error={!!errorState} value={content} />
			</Stack>
		</Stack>
	)
}
