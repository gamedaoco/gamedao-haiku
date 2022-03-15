import { SettingsContext } from './modules/context'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import { SettingsState, ThemeColor, ThemeDirection, ThemeMode } from 'src/@types/settings'
import { useCallback } from 'react'
import { PRIMARY_COLOR } from 'src/theme/palette'

function SetColor(themeColor: ThemeColor) {
	let color
	const DEFAULT = PRIMARY_COLOR[0]
	const PURPLE = PRIMARY_COLOR[1]
	const CYAN = PRIMARY_COLOR[2]
	const BLUE = PRIMARY_COLOR[3]
	const ORANGE = PRIMARY_COLOR[4]
	const RED = PRIMARY_COLOR[5]

	switch (themeColor) {
		case 'purple':
			color = PURPLE
			break
		case 'cyan':
			color = CYAN
			break
		case 'blue':
			color = BLUE
			break
		case 'orange':
			color = ORANGE
			break
		case 'red':
			color = RED
			break
		default:
			color = DEFAULT
	}
	return color
}

export function SettingsProvider({ children }) {
	const [settings, setSettings] = useLocalStorage<SettingsState>('settings', {
		themeMode: 'dark',
		themeDirection: 'ltr',
		themeColor: 'purple',
		themeStretch: false,
	})

	const handleChangeThemeMode = useCallback(
		(mode: ThemeMode) => {
			setSettings({
				...settings,
				themeMode: mode,
			})
		},
		[settings, setSettings],
	)

	const handleChangeThemeDirection = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setSettings({
				...settings,
				themeDirection: (event.target as HTMLInputElement).value as ThemeDirection,
			})
		},
		[settings, setSettings],
	)

	const handleChangeThemeColor = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setSettings({
				...settings,
				themeColor: (event.target as HTMLInputElement).value as ThemeColor,
			})
		},
		[settings, setSettings],
	)

	const handleToggleThemeStretch = useCallback(() => {
		setSettings({
			...settings,
			themeStretch: !settings.themeStretch,
		})
	}, [settings, setSettings])

	return (
		<SettingsContext.Provider
			value={{
				...settings,
				changeThemeMode: handleChangeThemeMode,
				changeThemeDirection: handleChangeThemeDirection,
				changeThemeColor: handleChangeThemeColor,
				toggleThemeStretch: handleToggleThemeStretch,
				setColor: SetColor(settings.themeColor),
				colorOption: PRIMARY_COLOR.map((color) => ({
					name: color.name,
					value: color.main,
				})),
			}}
		>
			{children}
		</SettingsContext.Provider>
	)
}
