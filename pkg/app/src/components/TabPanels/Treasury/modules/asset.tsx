// libs
import { Stack, Paper, Box, Typography } from '@mui/material'

interface ComponentProps {
	name: string
	quantity: number
	image: string
}

export function Asset({ name, quantity, image }: ComponentProps) {
	return (
		<Stack component={Paper} padding={4} spacing={6} sx={{ boxShadow: 'none', textAlign: 'center' }}>
			<Box mb={2}>
				<img src={`/img/currency/${image}`} style={{ margin: 'auto' }} />
			</Box>
			<Box style={{ marginTop: 0 }}>
				<Typography variant="h6">{quantity.toLocaleString()}</Typography>
			</Box>
			<Box style={{ marginTop: 0 }}>
				<Typography variant="caption">{name}</Typography>
			</Box>
		</Stack>
	)
}
