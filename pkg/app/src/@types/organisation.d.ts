export interface TMPOrganisation {
	type: number
	name: string
	mode: number
	feeMode: number
	memberLimit: number
	feeAmount: number
	hasWhitelist: boolean
	hasApplication: boolean
}

export interface TMPOrganisationState extends TMPOrganisation {
	setType: (boolen) => void
	setName: (name) => void
	setMode: (number) => void
	setFeeMode: (number) => void
	setMemberLimit: (number) => void
	setFeeAmount: (number) => void
	setHasWhitelist: (boolen) => void
	setHasApplication: (boolen) => void
}
