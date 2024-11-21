export interface Endpoint {
	image: string
	name: string
	url: string
	healthCheck: string
	chain: string
	default?: boolean
	id?: number
}

export type Endpoints = Array<Endpoint>

export interface GraphQlState {
	selectedEndpoint: Endpoint
	endpoints: Endpoints
	selectEndpoint: (endpoint: Endpoint) => void
}
