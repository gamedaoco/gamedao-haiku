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
		nano: true
		xs: true
		sm: true
		md: true
	}
	interface ButtonPropsColorOverrides {
		white: true
		lemon: true
		pink: true
	}
}

const large = '48px'
export default function Button(theme: Theme) {
	return {
		MuiButton: {
			variants: [
				{
					props: { variant: 'xs', color: 'lemon' },
					style: {
						height: '15px',
						background: '#f3cb14',
						color: 'black',
						fontSize: '10px',
						// boxShadow: theme.customShadows.primary,
						border: `1px solid transparent`,
						borderRadius: theme.shape.borderRadiusSm,
						p: `5px`,
						'&:hover': {
							color: '#f3cb14',
							background: 'black',
							border: `1px solid #f3cb14`,
						},
					},
				},
				{
					props: { variant: 'sm', color: 'lemon' },
					style: {
						// height: '15px',
						background: '#f3cb14',
						color: 'black',
						fontSize: '10px',
						// boxShadow: theme.customShadows.primary,
						// border: `1px solid transparent`,
						borderRadius: theme.shape.borderRadiusSm,
						p: 0,
						m: 0,
						opacity: 1,
						'&:hover': {
							opacity: 0.8,
							background: '#f3cb14',
							color: 'black',
							// border: `1px solid #000000`,
						},
					},
				},
				{
					props: { variant: 'xs', color: 'pink' },
					style: {
						height: '15px',
						background: '#ee4693ff',
						color: 'black',
						fontSize: '10px',
						// boxShadow: theme.customShadows.primary,
						border: `1px solid transparent`,
						borderRadius: theme.shape.borderRadiusSm,
						p: `5px`,
						'&:hover': {
							color: '#ee4693ff',
							background: 'black',
							border: `1px solid #ee4693ff`,
						},
					},
				},
				{
					props: { variant: 'xs', color: 'white' },
					style: {
						height: '15px',
						background: 'white',
						color: 'black',
						fontSize: '10px',
						// boxShadow: theme.customShadows.primary,
						border: `1px solid transparent`,
						borderRadius: theme.shape.borderRadiusSm,
						p: `5px`,
					},
				},
				{
					props: { variant: 'micro' },
					style: {
						height: '20px',
						fontSize: '10px',
						background: 'none',
						boxShadow: theme.customShadows.primary,
						border: `1px solid ${theme.palette.grey[500_32]}`,
						borderRadius: theme.shape.borderRadiusLg,
						p: `5px`,
						// m: `1rem`,
					},
				},
				{
					props: { variant: 'nano' },
					style: {
						fontSize: '10px',
						backgroundColor: `#00000011`, //theme.palette.background.neutral,
						backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,.3))`,
						backdropFilter: `blur(10px)`,
						// border: `1px solid #ffffff11`,
						borderRadius: theme.shape.borderRadiusLg,
					},
				},
				{
					props: { variant: 'glass' },
					style: {
						// height: large,
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
						// height: large,
						fontSize: '1rem',
						background: '#333333',
						border: 0,
						// boxShadow: theme.customShadows.primary,
						borderRadius: theme.shape.borderRadiusSm,
					},
				},
				{
					props: { variant: 'md', color: 'white' },
					style: {
						// height: large,
						fontSize: '1rem',
						background: '#eeeeee',
						color: '#111111',
						'&:hover': {
							color: '#000000',
							background: '#ffffff',
						},
						border: 0,
						borderRadius: theme.shape.borderRadiusSm,
					},
				},
				{
					props: { variant: 'md', color: 'lemon' },
					style: {
						fontSize: '.75rem',
						padding: '.5rem',
						background: 'none',
						color: '#f3cb14',
						border: '1px solid #f3cb14',
						borderRadius: theme.shape.borderRadiusSm,
						'&:hover': {
							color: '#000000',
							background: '#f3cb14',
						},
					},
				},
				{
					props: { variant: 'lemon' },
					style: {
						// height: large,
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
						// height: large,
						fontSize: '1rem',
						background: '#ee4693ff',
						color: '#ffffff',
						'&:hover': { color: '#ffffff' },
						border: 0,
						// boxShadow: theme.customShadows.primary,
						// borderRadius: theme.shape.borderRadiusSm,
					},
				},
				{
					props: { variant: 'outlined' },
					style: {
						// height: large,
						// fontSize: '1rem',
						// background: '#ee4693ff',
						// color: '#ffffff',
						// '&:hover': { color: '#ffffff' },
						// border: 0,
						// boxShadow: theme.customShadows.primary,
						// borderRadius: theme.shape.borderRadiusSm,
					},
				},
			],

			styleOverrides: {
				root: {
					borderRadius: theme.shape.borderRadiusSm,
					'* >': { transformDuration: '1000ms' },
					'&:hover': {
						// boxShadow: 'none',
					},
				},
				sizeLarge: {
					height: large,
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
					height: large,
					fontSize: '1rem',
					'&:hover': {},
				},
				// textInherit: {
				// 	'&:hover': {
				// 		backgroundColor: theme.palette.action.hover,
				// 	},
				// },
			},
		},
	}
}
