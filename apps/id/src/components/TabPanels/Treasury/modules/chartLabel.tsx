// libs
import { Grid, Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'

interface ComponentProps {
	name: string
	color: string
}

export function ChartLabel({ name, color }: ComponentProps) {
	const theme = useTheme()

	return (
		<Grid container>
			<Grid item xs={3}>
				<Box
					sx={{
						marginTop: '4px',
						backgroundColor: color,
						borderRadius: '50%',
						width: '15px',
						height: '15px',
						marginRight: 0,
					}}
				/>
			</Grid>
			<Grid item xs={9}>
				<Typography variant="caption" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
					{name}
				</Typography>
			</Grid>
		</Grid>
	)
}
