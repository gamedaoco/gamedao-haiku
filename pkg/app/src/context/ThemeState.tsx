import { createContext, useContext, useEffect, useState } from 'react'
import { useStore } from './Store'

export type ThemeState = {
	darkmodeEnabled: boolean
	setDarkmodeEnabled: (enabled: boolean) => void
}

const INITIAL_STATE: ThemeState = {
	darkmodeEnabled: true,
	setDarkmodeEnabled: (enabled: boolean) => {},
}

const ThemeContext = createContext<ThemeState>(INITIAL_STATE)
export const useThemeState = () => useContext(ThemeContext)

export const ThemeStateProvider = ({ children }: { children: React.ReactNode }) => {
	const { darkModeState, updateStore } = useStore()
	const [state, setState] = useState(INITIAL_STATE)

	useEffect(() => {
		setState({ ...state, darkmodeEnabled: darkModeState })
	}, [darkModeState])

	function handleSetDarkModeEnabled(enabled: boolean) {
		updateStore({ darkModeState: enabled })
	}

	return (
		<ThemeContext.Provider
			value={{
				...state,
				setDarkmodeEnabled: handleSetDarkModeEnabled,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
