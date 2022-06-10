import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Paper(theme: Theme) {
	return {
		MuiPaper: {
			defaultProps: {
				elevation: 0,
			},

			variants: [
				{
					props: { variant: 'outlined' },
					style: { borderColor: theme.palette.grey[500_12] },
				},
			],

			styleOverrides: {
				root: {
					backgroundImage: 'none',
					position: 'relative',
					boxShadow: theme.customShadows.card,
					borderRadius: Number(theme.shape.borderRadius) * 4,
					zIndex: 0, // Fix Safari overflow: hidden with border radius
				},
			},
		},
	}
}
