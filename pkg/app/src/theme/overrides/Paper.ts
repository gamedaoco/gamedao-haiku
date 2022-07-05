import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------
declare module '@mui/material/Paper' {
	interface PaperPropsVariantOverrides {
		dashed: true
		mask: true
		primary: true
	}
}

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
				{
					props: { variant: 'primary' },
					style: { backgroundColor: theme.palette.background.default },
				},
			],

			styleOverrides: {
				root: {
					backgroundImage: 'none',
					position: 'relative',
					boxShadow: theme.customShadows.card,
					borderRadius: Number(theme.shape.borderRadius) * 20,
					backgroundColor: theme.palette.background.paper,
					zIndex: 0, // Fix Safari overflow: hidden with border radius
				},
			},
		},
	}
}
