import { Close } from '@mui/icons-material'
import { Button, Dialog, Paper, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface ComponentProps {
	children: ReactNode
	title?: string
	open: boolean
	fullWidth?: boolean
	onClose?: () => void
}

export function BaseDialog({ children, title, open, fullWidth, onClose }: ComponentProps) {
	return (
		<Dialog open={open} maxWidth="lg" fullWidth={fullWidth} onClose={onClose} sx={{ zIndex: 16384 }}>
			<Stack component={Paper} p={4} spacing={4} elevation={5} variant={'glass'}>
				<Stack direction="row" justifyContent={title ? 'space-between' : 'end'} alignItems="center">
					{title && <Typography variant="h4">{title}</Typography>}
					{onClose && (
						<Button onClick={onClose}>
							<Close />
						</Button>
					)}
				</Stack>
				{children}
			</Stack>
		</Dialog>
	)
}
