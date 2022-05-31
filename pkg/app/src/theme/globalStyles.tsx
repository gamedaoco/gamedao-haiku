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

					transitionDuration: 'border 250ms, opacity 250ms, color 250ms',
					transitionTimingFunction: 'ease-in-out',

					// overflow: 'scroll',
					// overflowX: 'hidden',
					// scrollBehavior: 'smooth',
					// WebkitOverflowScrolling: 'touch',
					// scrollbarWidth: 'thin',
					// scrollbarColor: 'rgba( 255, 0, 255, 1 )',
				},
				'::-webkit-scrollbar': {
					width: '2px',
					background: 'black',
				},
				'::-webkit-scrollbar-thumb': {
					background: 'rgba( 255, 0, 255, 1 )',
				},
				body: {
					width: '100%',
					height: '100%',
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
			}}
		/>
	)
}
