import { styled } from '@mui/system'
import { Typography } from '@mui/material'
import { GRADIENT } from '../styles'

export const Teaser = styled(Typography)(({ theme }) => ({
	background: GRADIENT.blue,
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	width: '100%',
	// color: theme.palette.text.secondary,
	// fontWeight: 900,
	lineHeight: '85%',
	textTransform: 'uppercase',
	justifyContent: 'middle',
	verticalAlign: 'center',
	textAlign: 'center',
}))
