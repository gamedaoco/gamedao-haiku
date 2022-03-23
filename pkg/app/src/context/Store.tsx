import { createContext, useContext, useEffect, useState } from 'react'

export type StoreState = {
	darkModeState: boolean
	allowConnection: boolean
	lastAccountIndex: number
	updateStore: Function
}

const INITIAL_STATE: StoreState = {
	darkModeState: true, // false = light mode, true = dark mode
	allowConnection: false, // false = no connection, true = connection
	lastAccountIndex: null,
	updateStore: (opt) => {},
}

const StoreContext = createContext<StoreState>(INITIAL_STATE)
export const useStore = () => useContext(StoreContext)

export const StoreProvider = ({ children }: any) => {
	const [storeState, setStoreState] = useState<StoreState>()

	const handleUpdateStoreState = (opt) => {
		if (!opt) return
		const tmpState = { ...storeState, ...opt }
		setStoreState(tmpState)
		localStorage.setItem('STORE_STATE', JSON.stringify(tmpState))
	}

	useEffect(() => {
		const localStorageState = localStorage.getItem('STORE_STATE')
		setStoreState(localStorageState ? JSON.parse(localStorageState) : INITIAL_STATE)
	}, [])

	return (
		<StoreContext.Provider
			value={{
				...storeState,
				updateStore: handleUpdateStoreState,
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}
