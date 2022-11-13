import { ReactNode, useEffect } from 'react'

import { styled } from '@mui/material/styles'
import { DropzoneOptions, useDropzone } from 'react-dropzone'

interface ComponentProps {
	options: DropzoneOptions
	children: ReactNode
	onFilesSelected: (files: File[]) => void
}

const StyledDropzone = styled('div')(({ theme }) => ({
	outline: 'none',
	overflow: 'hidden',
	position: 'relative',
	borderRadius: theme.shape.borderRadiusSm,
	transition: theme.transitions.create('padding'),
	backgroundColor: theme.palette.background.neutral,
	border: `1px dashed ${theme.palette.grey[500_32]}`,
	'&:hover': { opacity: 0.72, cursor: 'pointer' },
}))

export function Dropzone({ children, options, onFilesSelected }: ComponentProps) {
	const { getRootProps, acceptedFiles } = useDropzone(options ?? {})

	useEffect(() => {
		onFilesSelected(acceptedFiles)
	}, [acceptedFiles, onFilesSelected])

	return <StyledDropzone {...getRootProps()}>{children}</StyledDropzone>
}
