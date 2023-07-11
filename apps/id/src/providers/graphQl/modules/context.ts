import { createContext, useContext } from 'react'
import { GraphQlState } from 'src/@types/graphql'

export const GraphQlContext = createContext<GraphQlState>({
	selectedEndpoint: null,
	endpoints: null,
	selectEndpoint: () => {},
})

export function useGraphQlContext(): GraphQlState {
	return useContext(GraphQlContext)
}
