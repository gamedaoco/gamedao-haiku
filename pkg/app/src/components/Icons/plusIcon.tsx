import React from 'react'

import { Add } from '@mui/icons-material'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export function PlusIcon() {
	const theme = useTheme()
	return (
		<Box
			sx={{
				borderRadius: theme.shape.borderRadiusLg,
				maxWidth: 56,
				maxHeight: 56,
				padding: 2,
				backgroundColor: theme.palette.grey[900],
			}}
		>
			<Add sx={{ color: theme.palette.grey[600] }} />
		</Box>
	)
}
