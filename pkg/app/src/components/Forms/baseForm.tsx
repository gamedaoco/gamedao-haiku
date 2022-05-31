import { ReactNode } from 'react'

import { Paper, Stack, Typography } from '@mui/material'

interface ComponentProps {
	title: string
	children: ReactNode
	error?: string
}

export function BaseForm({ title, children, error }: ComponentProps) {
	return (
		<Stack
			component={Paper}
			p={{ xs: 3, sm: 6 }}
			spacing={{ xs: 2, sm: 4 }}
			width="100%"
			height="100%"
			alignItems="center"
		>
			<Typography variant="h5" textAlign="center">
				{title}
			</Typography>
			{children}

			{error && (
				<Typography variant="subtitle2" width="100%" color="error">
					{error}
				</Typography>
			)}
		</Stack>
	)
}
