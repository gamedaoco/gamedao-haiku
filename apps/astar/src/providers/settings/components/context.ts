import { ChangeEvent, createContext, useContext } from 'react'

import { SettingsContextProps, ThemeMode } from '@gamedao/types'
import { PRIMARY_COLOR } from 'src/theme/palette'

export const SettingsContext = createContext<SettingsContextProps>({
	themeMode: 'dark',
	themeDirection: 'ltr',
	themeColor: 'purple',
	themeStretch: false,
	changeThemeMode: (mode: ThemeMode) => {},
	changeThemeDirection: (event: ChangeEvent<HTMLInputElement>) => {},
	changeThemeColor: (event: ChangeEvent<HTMLInputElement>) => {},
	toggleThemeStretch: () => {},
	setColor: PRIMARY_COLOR[0],
	colorOption: [],
})

export function useSettingsContext() {
	return useContext(SettingsContext)
}
