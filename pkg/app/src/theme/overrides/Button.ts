import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		secondary: true
		micro: true
		grey: true
		lemon: true
		pink: true
		glass: true
	}
}

export default function Button(theme: Theme) {
	return {
		MuiButton: {
			variants: [
				{
					props: { variant: 'micro' },
					style: {
						height: '20px',
						fontSize: '10px',
						background: 'none',
						boxShadow: theme.customShadows.primary,
						border: `1px solid ${theme.palette.grey[500_32]}`,
						borderRadius: theme.shape.borderRadiusLg,
						// p: `1rem`,
						// m: `1rem`,
					},
				},
				{
					props: { variant: 'glass' },
					style: {
						height: '44px',
						fontSize: '1rem',
						backgroundColor: `#00000011`, //theme.palette.background.neutral,
						backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,.3))`,
						backdropFilter: `blur(10px)`,
						border: `1px solid #ffffff11`,
						borderRadius: theme.shape.borderRadiusLg,
					},
				},
				{
					props: { variant: 'grey' },
					style: {
						height: '44px',
						fontSize: '1rem',
						background: '#333333',
						border: 0,
						// boxShadow: theme.customShadows.primary,
						borderRadius: theme.shape.borderRadiusSm,
					},
				},
				{
					props: { variant: 'lemon' },
					style: {
						height: '44px',
						fontSize: '1rem',
						background: '#f3cb14',
						color: '#111111',
						'&:hover': { color: '#ffffff' },
						border: 0,
						// boxShadow: theme.customShadows.primary,
						borderRadius: theme.shape.borderRadiusSm,
					},
				},
				{
					props: { variant: 'pink' },
					style: {
						height: '48px',
						fontSize: '1rem',
						background: '#ee4693ff',
						color: '#ffffff',
						'&:hover': { color: '#ffffff' },
						border: 0,
						// boxShadow: theme.customShadows.primary,
						// borderRadius: theme.shape.borderRadiusSm,
					},
				},
			],

			styleOverrides: {
				root: {
					borderRadius: theme.shape.borderRadiusLg,
					'&:hover': {
						// boxShadow: 'none',
					},
				},
				sizeLarge: {
					height: 48,
				},
				sizeXs: {
					height: '15px',
				},
				containedInherit: {
					boxShadow: theme.customShadows.z8,
					'&:hover': {
						backgroundColor: theme.palette.grey[400],
					},
				},
				containedPrimary: {
					boxShadow: theme.customShadows.primary,
					color: theme.palette.grey[800],
				},
				containedSecondary: {
					boxShadow: theme.customShadows.secondary,
					color: theme.palette.grey[800],
				},
				containedInfo: {
					boxShadow: theme.customShadows.info,
					color: theme.palette.grey[800],
				},
				containedSuccess: {
					boxShadow: theme.customShadows.success,
					color: theme.palette.grey[800],
				},
				containedWarning: {
					boxShadow: theme.customShadows.warning,
					color: theme.palette.grey[800],
				},
				containedError: {
					boxShadow: theme.customShadows.error,
					color: theme.palette.grey[800],
				},

				// outlined
				outlinedInherit: {
					height: '48px',
					fontSize: '1rem',
					'&:hover': {},
				},
				// 	textInherit: {
				// 		'&:hover': {
				// 			backgroundColor: theme.palette.action.hover,
				// 		},
				// 	},
			},
		},
	}
}
