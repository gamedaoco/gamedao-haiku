import { styled } from '@mui/system'
import { Paper } from '@mui/material'

export const Item = styled(Paper)(({ theme }) => ({
	// ...theme.typography.body2,
	textAlign: 'center',
	verticalAlign: 'middle',
	fontWeight: 800,
	color: theme.palette.text.secondary,
	width: 150,
	height: 150,
	borderRadius: '10rem',
	border: `1px solid fuchsia`, //${theme.palette.text.primary}`
}))
