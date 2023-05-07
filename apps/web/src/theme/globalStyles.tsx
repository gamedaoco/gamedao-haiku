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
					overflowX: 'hidden',
					scrollBehavior: 'smooth',
					WebkitOverflowScrolling: 'touch',
					scrollbarWidth: 'thin',
					scrollbarColor: theme.palette.primary.darker,

					backgroundSize: '100% 100%',
					backgroundPosition:
						'0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px',
					backgroundImage: `
						linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)
					`,
					// backgroundImage: `
					// 	radial-gradient(18% 28% at 24% 50%, #CE00fa33 7%, #073AFF00 100%),
					// 	radial-gradient(18% 28% at 18% 71%, #00000059 6%, #073AFF00 100%),
					// 	radial-gradient(70% 53% at 36% 76%, #73003366 0%, #073AFF00 100%),
					// 	radial-gradient(42% 53% at 15% 94%, #000000ff 7%, #073AFF00 100%),
					// 	// radial-gradient(42% 53% at 34% 72%, #000000ff 7%, #073AFF00 100%),
					// 	// radial-gradient(18% 28% at 35% 87%, #000000ff 7%, #073AFF00 100%),
					// 	// radial-gradient(31% 43% at 7% 98%, #000000ff 24%, #073AFF00 100%),
					// 	// radial-gradient(21% 37% at 72% 23%, #D3006D33 24%, #073AFF00 100%),
					// 	radial-gradient(35% 56% at 91% 74%, #8A400066 9%, #073AFF00 100%),
					// 	radial-gradient(74% 86% at 67% 38%, #6D00AE66 24%, #073AFF00 100%),
					// 	linear-gradient(125deg, #220000FF 1%, #330033FF 100%)`,
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
