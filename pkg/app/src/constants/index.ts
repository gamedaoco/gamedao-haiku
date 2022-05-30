import type { Environment } from '@gamedao-haiku/graphql/dist'
import type { TMPOrganisation } from 'src/@types/organisation'
import { TMPProposal } from 'src/@types/proposal'

export const ENVIRONMENT: Environment = (
	process.env.NEXT_PUBLIC_ENVIRONMENT || 'production'
).toUpperCase() as Environment

export const defaultValuesTmpOrganisation: TMPOrganisation = {
	type: 0,
	name: '',
	mode: 0,
	feeMode: 0,
	memberLimit: 0,
	feeAmount: 1,
	hasWhitelist: true,
	hasApplication: false,
	headerCID: '',
	logoCID: '',
	description: '',
	metaDataCID: '',
	deposit: 5,
}

export const defaultValuesTMPProposal: TMPProposal = {
	type: 0,
	name: '',
	description: '',
	startDate: new Date(),
	endDate: new Date(),
	majority: 0,
	deposit: 1,
}
