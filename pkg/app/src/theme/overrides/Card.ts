import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Card(theme: Theme) {
	return {
		MuiCard: {
			styleOverrides: {
				root: {
					position: 'relative',
					boxShadow: theme.customShadows.card,
					borderRadius: Number(theme.shape.borderRadius) * 20,
					borderColor: theme.palette.grey[500],
					zIndex: 0, // Fix Safari overflow: hidden with border radius
				},
			},
			variants:[
				{
					props:{variant:'mask'},
					style:{
						borderRadius: Number(theme.shape.borderRadius) * 50,
						boxShadow: 'none'
					}
				}
			]
		},
		MiCardHeader: {
			defaultProps: {
				titleTypographyProps: { variant: 'h6' },
				subheaderTypographyProps: { variant: 'body2', marginTop: theme.spacing(0.5) },
			},
			styleOverrides: {
				root: {
					padding: theme.spacing(3, 3, 0),
				},
			},
		},
		MuiCardMedia: {
			styleOverrides: {
				root: {
					position: 'relative',
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					padding: theme.spacing(3),
				},
			},
		},
	}
}
