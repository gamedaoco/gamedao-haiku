import { ReactNode, useCallback, useMemo } from 'react'

import dynamic from 'next/dynamic'

import { Box, BoxProps, Typography } from '@mui/material'
import { ImageDrop } from 'lib/quillImageDropModule'
import { ImageResize } from 'lib/quillImageResizerModule/ImageResize'
import { ReactQuillProps } from 'react-quill'
import { uploadBase64File } from 'src/utils/file'
import { parseIpfsHash } from 'src/utils/ipfs'

import { EditorWrapper } from 'components/Editor/editorWrapper'

import EditorToolbar, { formats } from './editorToolbar'

const ReactQuill = dynamic(
	async () => {
		const QuillImport = await import('react-quill')
		const Quill = QuillImport.default.Quill
		Quill.register('modules/imageDrop', ImageDrop)
		Quill.register('modules/imageResize', ImageResize)
		;(window as any).Quill = Quill
		return QuillImport
	},
	{
		ssr: false,
		loading: () => (
			<Box>
				<Typography variant={'subtitle1'}>Loading...</Typography>
			</Box>
		),
	},
)

export interface Props extends ReactQuillProps {
	error?: boolean
	simple?: boolean
	helperText?: ReactNode
	sx?: BoxProps
}

let _id = 1
export default function Editor({ error, value, onChange, simple = false, helperText, sx, ...other }: Props) {
	const id = useMemo(() => `teq${_id++}`, [])

	const modules = useMemo(() => {
		const data = {
			history: {
				delay: 500,
				maxStack: 100,
				userOnly: true,
			},
			syntax: false,
			clipboard: {
				matchVisual: false,
			},
		} as any

		if (!other.readOnly) {
			data.toolbar = {
				container: `#${id}`,
				modules: ['image'],
			}
			data.imageResize = {
				displaySize: true,
			}
			data.imageDrop = true
		}

		return data
	}, [other])

	const handleChange = useCallback(
		async (text, delta, source, editor) => {
			if (other.readOnly) return

			const quillContainer = document.querySelector(`#${id}`).parentNode.nextSibling.childNodes[0] as Element

			const images = Array.from(quillContainer.querySelectorAll('img[src^="data:"]:not(.loading)')) as any
			for (const img of images) {
				// Possibility to show loading spinner while upload
				img.classList.add('loading')
				img.setAttribute('src', parseIpfsHash(await uploadBase64File(img.getAttribute('src'))))
				img.classList.remove('loading')
			}

			if (onChange) {
				onChange(text, delta, source, editor)
			}
		},
		[onChange],
	)

	return (
		<div>
			<EditorWrapper
				sx={{
					...(error && {
						border: (theme) => `solid 1px ${theme.palette.error.main}`,
					}),
					...sx,
				}}
				readOnly={other.readOnly}
			>
				{!other.readOnly && <EditorToolbar id={id} isSimple={simple} />}
				<ReactQuill
					value={value}
					onChange={handleChange}
					modules={modules}
					formats={formats}
					placeholder="Write something awesome..."
					theme={other.readOnly ? 'bubble' : 'snow'}
					{...other}
				/>
			</EditorWrapper>

			{helperText && helperText}
		</div>
	)
}
