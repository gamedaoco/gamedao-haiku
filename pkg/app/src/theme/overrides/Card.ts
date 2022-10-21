import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

declare module '@mui/material/Card' {
	interface CardPropsVariantOverrides {
		glass: true
	}
}

export default function Card(theme: Theme) {
	return {
		MuiCard: {
			styleOverrides: {
				root: {
					position: 'relative',
					boxShadow: theme.customShadows.card,
					borderRadius: Number(theme.shape.borderRadius) * 20,
					// borderColor: theme.palette.grey[500],
					border: `1px solid #ffffff22`,
					zIndex: 0, // Fix Safari overflow: hidden with border radius
				},
			},
			variants: [
				{
					props: { variant: 'mask' },
					style: {
						width: '6rem',
						height: '6rem',
						boxShadow: 'none',
						borderRadius: Number(theme.shape.borderRadius) * 50,
						border: 'none',
						zIndex: 0,
					},
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
					props: { variant: 'glass' },
					style: {
						backgroundColor: `#00000011`, //theme.palette.background.neutral,
						backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,.3))`,
						backdropFilter: `blur(10px)`,
						border: `1px solid #ffffff11`,
					},
				},
			],
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
					borderRadius: Number(theme.shape.borderRadius) * 20,
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
