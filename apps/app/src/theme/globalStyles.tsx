// material
import { GlobalStyles as GlobalThemeStyles } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function GlobalStyles() {
	const theme = useTheme()

	return (
		<GlobalThemeStyles
			styles={{
				'*': {
					margin: 0,
					padding: 0,
					boxSizing: 'border-box',
				},
				html: {
					width: '100%',
					height: '100%',
					overflowX: 'hidden',
					scrollBehavior: 'smooth',
					WebkitOverflowScrolling: 'touch',
					scrollbarWidth: 'thin',
					scrollbarColor: theme.palette.primary.darker,
				},
				hr: {
					background: 'none',
					border: `1px dotted #ffffff66`,
				},
				body: {
					lineStyle: 'dashed',
				},
				'::-webkit-scrollbar': {
					width: '8px',
					background: 'transparent',
				},
				'::-webkit-scrollbar-thumb': {
					background: theme.palette.primary.darker,
				},
				body: {
					width: '100%',
					height: '100%',
					background: `transparent`,
				},
				'#__next': {
					width: '100%',
					height: '100%',
				},
				input: {
					'&[type=number]': {
						MozAppearance: 'textfield',
						'&::-webkit-outer-spin-button': {
							margin: 0,
							WebkitAppearance: 'none',
						},
						'&::-webkit-inner-spin-button': {
							margin: 0,
							WebkitAppearance: 'none',
						},
					},
				},
				textarea: {
					'&::-webkit-input-placeholder': {
						color: theme.palette.text.disabled,
					},
					'&::-moz-placeholder': {
						opacity: 1,
						color: theme.palette.text.disabled,
					},
					'&:-ms-input-placeholder': {
						color: theme.palette.text.disabled,
					},
					'&::placeholder': {
						color: theme.palette.text.disabled,
					},
				},

				img: { display: 'block', maxWidth: '100%' },

				// Lazy Load Img
				'.blur-up': {
					WebkitFilter: 'blur(5px)',
					filter: 'blur(5px)',
					transition: 'filter 400ms, -webkit-filter 400ms',
				},
				'.blur-up.lazyloaded ': {
					WebkitFilter: 'blur(0)',
					filter: 'blur(0)',
				},
				a: {
					color: theme.palette.text.primary,
					textDecoration: 'none',
				},
				'a:hover': {
					color: theme.palette.primary.main,
					textDecoration: 'none',
				},
			}}
		/>
	)
}
