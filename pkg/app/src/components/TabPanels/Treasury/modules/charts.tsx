// libs
import { Grid, Stack, Paper, Box } from '@mui/material'

interface ComponentProps {}

export function Charts({}: ComponentProps) {
	return (
		<Grid container spacing={3}>
			<Grid item xs={4}>
				<Stack component={Paper} padding={4} spacing={6} sx={{ boxShadow: 'none' }}>
					Chart 1
				</Stack>
			</Grid>
			<Grid item xs={8}>
				<Stack component={Paper} padding={4} spacing={6} sx={{ boxShadow: 'none' }}>
					Chart 2
				</Stack>
			</Grid>
		</Grid>
	)
}
