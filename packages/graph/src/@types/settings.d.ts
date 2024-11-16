export type ThemeMode = 'light' | 'dark'
export type ThemeDirection = 'rtl' | 'ltr'
export type ThemeColor = 'default' | 'purple' | 'cyan' | 'blue' | 'orange' | 'red'

export type SettingsContextProps = {
	themeMode: ThemeMode
	themeDirection: ThemeDirection
	themeColor: ThemeColor
	themeStretch: boolean
	setColor: {
		name: string
		lighter: string
		light: string
		main: string
		dark: string
		darker: string
		contrastText: string
	}
	colorOption: {
		name: string
		value: string
	}[]
	changeThemeMode: (mode: ThemeMode) => void
	changeThemeDirection: (event: React.ChangeEvent<HTMLInputElement>) => void
	changeThemeColor: (event: React.ChangeEvent<HTMLInputElement>) => void
	toggleThemeStretch: VoidFunction
}

export interface SettingsState {
	themeMode: ThemeMode
	themeDirection: ThemeDirection
	themeColor: ThemeColor
	themeStretch: boolean
}
