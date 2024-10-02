import { createContext, useContext, useEffect, useState, useCallback } from 'react'

export interface IContext {
	ready: boolean
	id: string
	proposalId: string
	draftMode: boolean

	name: string
	description: string
	website: string
	tags: string[]
	img_logo: string
	img_header: string

	members: string[]

	address: string
	isAdmin: boolean
	isCreator: boolean
	isMember: boolean

	updateContext: (context: Partial<IContext>) => void
}

const initialState: IContext = {
	ready: false,
	id: null,
	proposalId: null,
	draftMode: false,

	name: null,
	description: null,
	website: null,
	tags: null,
	img_logo: null,
	img_header: null,

	members: null,

	address: null,
	isAdmin: false,
	isCreator: false,
	isMember: false,

	updateContext: () => {},
}

export const AppContext = () => {
	return createContext<IContext>(initialState)
}

export const useDAppContext = (context) => useContext(context)

export const AppProvider = ({ children }) => {
	const [context, setContext] = useState(initialState)

	return null
	// (
	// <AppContext.Provider
	// value={{context, setContext}}
	// >
	// {children}
	// </AppContext.Provider>
	// )
}
