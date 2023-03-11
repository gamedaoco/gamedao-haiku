import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------
declare module '@mui/material/Paper' {
	interface PaperPropsVariantOverrides {
		dashed: true
		mask: true
		primary: true
		secondary: true
		glass: true
	}
}

export default function Paper(theme: Theme) {
	return {
		MuiPaper: {
			defaultProps: {
				elevation: 10,
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
					props: { variant: 'secondary' },
					style: {
						backgroundColor: theme.palette.background.neutral,
						borderBottomRightRadius: 0,
						borderBottomLeftRadius: 0,
					},
				},
				{
					props: { variant: 'glass' },
					style: {
						backgroundColor: `#00000011`, //theme.palette.background.neutral,
						backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,.3))`,
						backdropFilter: `blur(10px)`,
						border: `1px solid #ffffff11`,
						borderRadius: theme.shape.borderRadiusLg,
					},
				},
			],

			styleOverrides: {
				root: {
					backgroundImage: 'none',
					position: 'relative',
					boxShadow: theme.customShadows.card,
					borderRadius: theme.shape.borderRadiusLg,
					// backgroundColor: theme.palette.background.paper,
					backgroundColor: '#00000066',
					zIndex: 0, // Fix Safari overflow: hidden with border radius
				},
			},
		},
	}
}
