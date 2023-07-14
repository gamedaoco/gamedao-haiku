import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'

interface ComponentProps {
	title: string
	description?: string
	confirmButtonText: string
	cancelButtonText: string
	confirmButtonCallback: () => void
	closeCallback?: () => void
	cancelButtonCallback: () => void
	open: boolean
}
export function ConfirmationModal({
	title,
	description,
	confirmButtonText,
	cancelButtonText,
	confirmButtonCallback,
	closeCallback = () => {},
	cancelButtonCallback,
	open,
}: ComponentProps) {
	return (
		<Modal
			open={open}
			onClose={closeCallback}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box
				sx={{
					position: 'absolute' as 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 400,
					bgcolor: 'background.paper',
					border: '2px solid #000',
					boxShadow: 24,
					p: 4,
				}}
			>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					{title}
				</Typography>
				{description && (
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{description}
					</Typography>
				)}
				<Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
					<Button variant="contained" color="error" onClick={confirmButtonCallback}>
						{confirmButtonText}
					</Button>
					<Button variant="contained" color="primary" onClick={cancelButtonCallback}>
						{cancelButtonText}
					</Button>
				</Box>
			</Box>
		</Modal>
	)
}
