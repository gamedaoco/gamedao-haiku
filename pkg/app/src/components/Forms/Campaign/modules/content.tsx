import React, { useCallback, useState } from 'react'

import { AddAPhoto } from '@mui/icons-material'
import { CardMedia, Input, Paper, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useConfig } from 'hooks/useConfig'
import { parseIpfsHash } from 'src/utils/ipfs'
import * as Yup from 'yup'

import Editor from 'components/Editor'

import { Dropzone } from '../../../Dropzone/dropzone'

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

	const onBannerSelected = useCallback((files: File[]) => {
		if (files.length === 0) return
		uploadBannerImage(files[0])
	}, [])

	const handleContentChanged = useCallback((value) => {
		if (setContent) {
			try {
				validationContentSchema.validateSync(value)
				setErrorState(null)
			} catch (err) {
				setErrorState(err.message)
			}

			setContent(value)
		}
	}, [])

	return (
		<Stack component={Paper} p={{ xs: 3, sm: 6 }} spacing={{ xs: 2, sm: 4 }} gap={2} width="100%" height="100%">
			<Typography variant={'h6'}>Campaign Content</Typography>

			{/* Upload Banner */}
			<Stack gap={3}>
				<Typography variant="subtitle2">Banner</Typography>
				<section className="container">
					<Dropzone onFilesSelected={onBannerSelected} options={{ maxFiles: 1, accept: { 'image/*': [] } }}>
						{bannerCid ? (
							<CardMedia
								sx={{ height: '155px' }}
								component="img"
								src={parseIpfsHash(bannerCid, config.IPFS_GATEWAY)}
								alt="logo"
							/>
						) : (
							<Box display="grid" justifyContent="center" alignItems="center" padding={6}>
								<AddAPhoto sx={{ width: '100%', height: '35px' }} />
								<Typography variant="body2">Upload your Campaign Banner</Typography>
							</Box>
						)}
					</Dropzone>
				</section>
			</Stack>

			{/*	Editor */}
			<Stack gap={3}>
				<Typography variant="subtitle2">Content</Typography>
				<Editor onChange={handleContentChanged} error={!!errorState} value={content} />
			</Stack>
		</Stack>
	)
}
