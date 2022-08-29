export interface Endpoint {
	image: string
	name: string
	url: string
	healthCheck: string
	default?: boolean
}

export type Endpoints = Array<Endpoint>

export interface GraphQlState {
	selectedEndpoint: Endpoint
	endpoints: Endpoints
	selectEndpoint: Function<Endpoint>
}
