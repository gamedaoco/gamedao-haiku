import { createContext, useContext, useState } from 'react'

export type HookState = {
	balance: object
	gameDaoControl: any
	updateState: (stateData: object) => void
}

const INITIAL_STATE: HookState = {
	balance: {},
	gameDaoControl: {},
	updateState: () => {},
}

const HookContext = createContext<HookState>(INITIAL_STATE)
const useHookState = () => useContext<HookState>(HookContext)

const HookProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, setState] = useState<HookState>(INITIAL_STATE)

	const hanldeUpdateHookState = (stateData) => {
		Object.keys(stateData).forEach((key) => {
			setState({ ...state, [key]: { ...(state[key] || {}), ...(stateData[key] || {}) } })
		})
	}

	return (
		<HookContext.Provider
			value={{
				...state,
				updateState: hanldeUpdateHookState,
			}}
		>
			{children}
		</HookContext.Provider>
	)
}

export { HookContext, HookProvider, useHookState }
