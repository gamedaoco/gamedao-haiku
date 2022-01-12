import { createTheme } from '@mui/material/styles'
import { responsiveFontSizes } from '@mui/material/styles'
import { grey, pink } from '@mui/material/colors'

let theme = createTheme({
	palette: {
		// mode: 'dark',
		primary: pink,
		secondary: pink,
	},
})

theme = responsiveFontSizes(theme)

export default theme
