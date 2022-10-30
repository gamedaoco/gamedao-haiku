import * as React from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface ComponentProps {
	state: boolean
	callback: typeof Function
	title?: string
	message?: string
	buttonText?: string
}

export default function AlertDialog({ state = false, callback, title, message, buttonText }: ComponentProps) {
	const [open, setOpen] = React.useState(state)

	return (
		<Dialog
			open={open}
			onClose={callback}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{title || 'An error occured'}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">{message || ''}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={callback} autoFocus>
					{buttonText || 'Dismiss'}
				</Button>
			</DialogActions>
		</Dialog>
	)
}
