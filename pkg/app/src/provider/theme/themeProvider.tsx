import { ReactNode, useMemo } from 'react'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { useSettings } from 'src/hooks/useSettings'
import shape from 'src/theme/shape'
import palette from 'src/theme/palette'
import typography from 'src/theme/typography'
import breakpoints from 'src/theme/breakpoints'
import componentsOverride from 'src/theme/overrides'
import shadows, { customShadows } from 'src/theme/shadows'
import { ToastContainer } from 'react-toastify'
import { ThemePrimaryColor } from 'src/components'

// ----------------------------------------------------------------------

type ComponentProps = {
	children: ReactNode
}

export function ThemeProvider({ children }: ComponentProps) {
	const { themeMode, themeDirection } = useSettings()
	const isLight = themeMode === 'light'

	const themeOptions: ThemeOptions = useMemo(
		() => ({
			palette: isLight ? { ...palette.light, mode: 'light' } : { ...palette.dark, mode: 'dark' },
			shape,
			typography,
			breakpoints,
			direction: themeDirection,
			shadows: isLight ? shadows.light : shadows.dark,
			customShadows: isLight ? customShadows.light : customShadows.dark,
		}),
		[isLight, themeDirection],
	)

	const theme = createTheme(themeOptions)
	theme.components = componentsOverride(theme)

	return (
		<MuiThemeProvider theme={theme}>
			<ToastContainer theme={themeMode} />
			<CssBaseline />
			<ThemePrimaryColor>{children}</ThemePrimaryColor>
		</MuiThemeProvider>
	)
}
