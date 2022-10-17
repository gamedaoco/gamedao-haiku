// libs
import { Stack, Paper, Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

interface ComponentProps {
	name: string
	quantity: number
	image: string
}

export function Asset({ name, quantity, image }: ComponentProps) {
	const theme = useTheme()

	return (
		<Stack component={Paper} padding={4} spacing={6} sx={{ boxShadow: 'none', textAlign: 'center' }}>
			<Box mb={2}>
				<img src={`/svg/coins/${image}.svg`} style={{ margin: 'auto', height: '40px' }} />
			</Box>
			<Box style={{ marginTop: 0 }}>
				<Typography variant="h6">{quantity.toLocaleString()}</Typography>
			</Box>
			<Box style={{ marginTop: 0 }}>
				<Typography variant="caption" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
					{name}
				</Typography>
			</Box>
		</Stack>
	)
}
