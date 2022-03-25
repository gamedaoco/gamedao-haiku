import { Button, Fab, Tooltip } from '@mui/material'
import { AttachFile, Delete } from '@mui/icons-material'
import { ChangeEvent, useState } from 'react'
import { uploadFromDevice, uploadToIpfs, parseFileSummary } from 'src/utils/FileAttachmentUtils'

export interface FileAttachment {
	name: string
	ipfsPath?: string
	buffer: Buffer
}

interface FileUploadButtonProps {
	onCapture: any
	onUncapture?: () => void
	className?: string
}

export function FileUploadButton(props: FileUploadButtonProps) {
	const [fileName, setFileName] = useState<string>()
	const [file, setFile] = useState<FileAttachment>()
	const captureFile = async (event) => {
		const files = event.target.files
		if (files && files[0]) {
			const name = files[0].name
			await uploadFromDevice(files[0], (buffer) => {
				setFile({ name, buffer })
        uploadFile({name, buffer})
			})
      setFileName(name)
		}
	}

	const uncaptureFile = () => {
		props.onUncapture && props.onUncapture()
		setFileName(undefined)
	}

	const uploadFile = async (info:FileAttachment) => {
		if (info) {
			try {
				const fileinfo = await uploadToIpfs(info)
        const filepath = parseFileSummary(fileinfo).ipfsPath;
				props.onCapture(`${filepath}`)
			} catch (err) {
				console.log(err)
			}
		}
		return ''
	}

	return (
		<div className={props.className}>
			<label style={{ marginRight: '10px' }}>
				<Tooltip title={'tooltips.upload-button'} placement="top">
					<Fab color="secondary" variant="extended" component="span" size="medium">
						<AttachFile />
						{'input-labels.upload-button'}
					</Fab>
				</Tooltip>
				<input type="file" hidden onChange={captureFile} />
			</label>
			{fileName && (
				<Tooltip title={'tooltips.discard-file-button'} placement="top">
					<Button color="secondary" size="small" endIcon={<Delete />} onClick={uncaptureFile}>
						<u>{fileName}</u>
					</Button>
				</Tooltip>
			)}
		</div>
	)
}
