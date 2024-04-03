import { createContext, useContext } from 'react'

export interface DAppContext {
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
}

export const DAppContext = createContext<DAppContext>({
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
})

export function useDAppContext(): DAppContext {
	return useContext(DAppContext)
}
