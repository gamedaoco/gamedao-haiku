import { ReactNode } from 'react'
import { Button, Dialog, Paper, Stack, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'

interface ComponentProps {
	children: ReactNode
	title: string
	open: boolean
	fullWidth?: boolean
	onClose?: () => void
}

export function BaseDialog({ children, title, open, fullWidth, onClose }: ComponentProps) {
	return (
		<Dialog open={open} maxWidth="lg" fullWidth={fullWidth}>
			<Stack component={Paper} p={4} spacing={4} elevation={5}>
				<Stack direction="row" justifyContent="space-between">
					<Typography variant="h6">{title}</Typography>
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
