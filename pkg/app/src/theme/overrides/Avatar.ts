import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

declare module '@mui/material/Avatar' {
	interface AvatarPropsVariantOverrides {
		primary: true
		achievement: true
	}
}

export default function Avatar(theme: Theme) {
	return {
		MuiAvatar: {
			styleOverrides: {
				colorDefault: {
					color: theme.palette.text.secondary,
					backgroundColor: theme.palette.grey[400],
				},
			},
			variants: [
				{
					props: { variant: 'primary' },
					style: {
						width: '4rem',
						height: '4rem',
					},
				},
				{
					props: { variant: 'achievement' },
					style: {
						backgroundColor: 'transparent',
						outline: `1px solid ${theme.palette.primary.main}`,
						color: theme.palette.primary.main,
					},
				},
			],
		},
		MuiAvatarGroup: {
			styleOverrides: {
				avatar: {
					fontSize: 16,
					fontWeight: theme.typography.fontWeightMedium,
					'&:first-of-type': {
						fontSize: 14,
						color: theme.palette.primary.main,
						backgroundColor: theme.palette.primary.lighter,
					},
				},
			},
		},
	}
}
