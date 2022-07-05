import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

declare module '@mui/material/Skeleton' {
	interface SkeletonPropsVariantOverrides {
		primary: true,
		circle: true
	}
}

export default function Skeleton(theme: Theme) {
	return {
		MuiSkeleton: {
			defaultProps: {
				animation: 'wave',
			},

			styleOverrides: {
				root: {
					backgroundColor: theme.palette.background.neutral,
				},
			},
			variants: [
				{
					props: { variant: 'circle' },
					style: {
						width: '4rem',
						height: '4rem',
						borderRadius: Number(theme.shape.borderRadius) * 40,
						top: -115,
					},
				},
				{
					props:{ variant: 'primary'},
					style:{
						borderRadius: theme.shape.borderRadiusMd
					}
				}
			],
		},
	}
}
