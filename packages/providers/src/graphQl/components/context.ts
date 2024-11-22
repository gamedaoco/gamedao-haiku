import { createContext, useContext } from 'react'

import { GraphQlState } from '@gamedao/core/@types/graphql'

export const GraphQlContext = createContext<GraphQlState>({
	selectedEndpoint: null,
	endpoints: null,
	selectEndpoint: () => {},
})

export function useGraphQlContext(): GraphQlState {
	return useContext(GraphQlContext)
}
