import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------
declare module '@mui/material/Paper' {
	interface PaperPropsVariantOverrides {
		dashed: true
		mask: true
	}
}

export default function Paper(theme: Theme) {
	return {
		MuiPaper: {
			defaultProps: {
				elevation: 0,
			},

			styleOverrides: {
				root: {
					backgroundImage: 'none',
					position: 'relative',
					boxShadow: theme.customShadows.card,
					borderRadius: Number(theme.shape.borderRadius) * 4,
					zIndex: 0, // Fix Safari overflow: hidden with border radius
				},
			},
			variants: [
				{
					props: { variant: 'outlined' },
					style: { borderColor: theme.palette.grey[500_12] },
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
						//TODO: fix the  border radius
						borderRadius: Number(theme.shape.borderRadius) * 40,
						top: -35,
						zIndex: 0,
					},
				},
			],
		},
	}
}
