import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

declare module '@mui/material/Skeleton' {
	interface SkeletonPropsVariantOverrides {
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
						//TODO: add border radius
						borderRadius: Number(theme.shape.borderRadius) * 40,
						top: -115,
					},
				},
			],
		},
	}
}
