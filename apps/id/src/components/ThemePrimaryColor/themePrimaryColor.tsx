import componentsOverride from '../../theme/overrides'
import { ThemeProvider, alpha, createTheme, useTheme } from '@mui/material/styles'
import { ReactNode, useMemo } from 'react'
import { useSettings } from 'src/hooks/useSettings'

type ThemePrimaryColorProps = {
	children: ReactNode
}

export function ThemePrimaryColor({ children }: ThemePrimaryColorProps) {
	const defaultTheme = useTheme()
	const { setColor } = useSettings()

	const themeOptions = useMemo(
		() => ({
			...defaultTheme,
			palette: {
				...defaultTheme.palette,
				primary: setColor,
			},
			customShadows: {
				...defaultTheme.customShadows,
				primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)}`,
			},
		}),
		[setColor, defaultTheme],
	)

	const theme = createTheme(themeOptions)
	theme.components = componentsOverride(theme)

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
