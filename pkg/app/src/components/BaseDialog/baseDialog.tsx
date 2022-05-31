import { ReactNode } from 'react'

import { Close } from '@mui/icons-material'
import { Button, Dialog, Paper, Stack, Typography } from '@mui/material'

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
				<Stack direction="row" justifyContent="space-between" alignItems="center">
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
