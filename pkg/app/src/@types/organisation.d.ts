export interface TMPOrganisation {
	type: number
	name: string
	mode: number
	feeMode: number
	memberLimit: number
	feeAmount: number
	hasWhitelist: boolean
	hasApplication: boolean
	headerCID: string
	logoCID: string
	description: string
	metaDataCID: string
	deposit: number
}

export interface TMPOrganisationState extends TMPOrganisation {
	setType: (number) => void
	setName: (name) => void
	setMode: (number) => void
	setFeeMode: (number) => void
	setMemberLimit: (number) => void
	setFeeAmount: (number) => void
	setHasWhitelist: (boolen) => void
	setHasApplication: (boolen) => void
	setHeaderCID: (string) => void
	setLogoCID: (string) => void
	setDescription: (string) => void
	setMetaDataCID: (string) => void
	setDeposit: (number) => void
	clearAll: () => void
}
