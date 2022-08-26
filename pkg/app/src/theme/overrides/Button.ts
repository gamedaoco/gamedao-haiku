import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		secondary: true
	}
}

export default function Button(theme: Theme) {
	return {
		MuiButton: {

			variants: [
				// {
				// 	props: { variant: 'outlined' },
				// 	style: {
				// 		color: 'primary' ? theme.palette.common.white : theme.palette.text.secondary,
				// 	},
				// },
				// {
				// 	props: { variant: 'secondary' },
				// 	style: {
				// 		color: theme.palette.common.white,
				// 	},
				// },
			],

			styleOverrides: {
				root: {
					borderRadius: Number(theme.shape.borderRadius) * 10,
					'&:hover': {
						boxShadow: 'none',
					},
				},

				sizeLarge: {
					height: 48,
				},

			// 	// contained

				containedInherit: {
					color: theme.palette.grey[800],
					boxShadow: theme.customShadows.z8,
					'&:hover': {
						backgroundColor: theme.palette.grey[400],
					},
				},

				containedPrimary: {
					boxShadow: theme.customShadows.primary,
				},
				containedSecondary: {
					boxShadow: theme.customShadows.secondary,
				},
				containedInfo: {
					boxShadow: theme.customShadows.info,
				},
				containedSuccess: {
					boxShadow: theme.customShadows.success,
				},
				containedWarning: {
					boxShadow: theme.customShadows.warning,
				},
				containedError: {
					boxShadow: theme.customShadows.error,
				},

			// 	// outlined
			// 	outlinedInherit: {
			// 		border: `1px solid ${theme.palette.grey[500_32]}`,
			// 		'&:hover': {
			// 			backgroundColor: theme.palette.action.hover,
			// 		},
			// 	},
			// 	textInherit: {
			// 		'&:hover': {
			// 			backgroundColor: theme.palette.action.hover,
			// 		},
			// 	},

			},
		},
	}
}
