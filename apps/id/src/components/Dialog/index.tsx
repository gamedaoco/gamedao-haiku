import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import * as React from 'react'

interface ComponentProps {
	state: boolean
	title?: string
	message?: string
	buttonText?: string
}

export default function AlertDialog({ state = false, title, message, buttonText }: ComponentProps) {
	const [open, setOpen] = React.useState(state)

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{title || 'An error occured'}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">{message || ''}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} autoFocus>
					{buttonText || 'Dismiss'}
				</Button>
			</DialogActions>
		</Dialog>
	)
}
