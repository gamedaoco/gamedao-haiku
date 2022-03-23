import { useTheme } from '@mui/material'
import React, { DragEvent } from 'react'
import { Paper, Box, Button } from '@mui/material'

import { useThemeState } from 'src/context/ThemeState'

export const FileDropZone: React.FC<
	React.PropsWithChildren<{
		onDroppedFiles: (files: File[], e: any) => void
		accept: string
		onDeleteItem: () => void
	}>
> = (props) => {
	const [hover, setHover] = React.useState(false)

	const onDragOver = React.useCallback((e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setHover(true)
	}, [])

	const onDrop = React.useCallback((e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		if (e.dataTransfer.files?.length) props.onDroppedFiles(Array.from(e.dataTransfer.files), e)
	}, [])

	const onDragLeave = React.useCallback((e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setHover(false)
	}, [])

	const onFileInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.files) {
			props.onDroppedFiles(Array.from(e.currentTarget.files), e)
		}
	}, [])

	const theme = useTheme()
	const { darkmodeEnabled } = useThemeState()
	const fileInputRef = React.useRef<HTMLInputElement>(null)

	return (
		<>
			{fileInputRef.current && fileInputRef.current.value !== '' && (
				<Box sx={{ mb: '-52px', display: 'flex', justifyContent: 'end' }}>
					<Button
						sx={{ zIndex: '9999' }}
						onClick={() => {
							// const inputElem = document.getElementsByClassName("gamedao_filedrop_input_"+props.name)[0]
							// inputElem.value = ""
							fileInputRef.current.value = ''
							props.onDeleteItem ? props.onDeleteItem() : null
							//updateHeaderCID({})
						}}
					>
						x
					</Button>
				</Box>
			)}
			<input
				//@ts-ignore
				className={'gamedao_filedrop_input_' + props.name}
				//@ts-ignore
				name={props.name}
				style={{ position: 'absolute', left: '-9999999px' }}
				multiple
				type={'file'}
				accept={props.accept}
				onChange={onFileInputChange}
				ref={fileInputRef}
			/>
			<Paper
				//@ts-ignore
				name={props.name}
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
				onClick={() => fileInputRef.current?.click()}
				onDrop={onDrop}
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
					border: `1px dashed ${theme.palette.grey[500]}`,
					display: 'flex',
					flexDirection: 'column',
					opacity: hover ? 1 : 0.6,
					cursor: 'pointer',
					transition: 'all 0.2s linear',
					padding: 4,
					background: hover
						? theme.palette.background.neutral
						: darkmodeEnabled
						? theme.palette.grey[900]
						: theme.palette.background.neutral,
					['&:hover']: {
						background: theme.palette.background.neutral,
						opacity: 1,
					},
				}}
				component={'div'}
			>
				<Box style={{ width: '100%', pointerEvents: 'none' }}>{props.children}</Box>
			</Paper>
		</>
	)
}

export default FileDropZone
