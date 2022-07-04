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
				{
					props: { variant: 'dashed' },
					style: {
						height: '100%',
						border: 1,
						borderStyle: 'dashed',
						':hover': { opacity: 0.8 },
					},
				},
				{
					props: { variant: 'mask' },
					style: {
						width: '6rem',
						height: '6rem',
						boxShadow:'none',
						borderRadius: Number(theme.shape.borderRadius) * 40,
						border:'none',
						zIndex: 0,
					},
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
