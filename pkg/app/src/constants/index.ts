import { TMPCampaign } from 'src/@types/campaign'
import type { TMPOrganisation } from 'src/@types/organisation'
import { TMPProposal } from 'src/@types/proposal'
import { Environment } from 'src/queries'

export const ENVIRONMENT: Environment = (
	process.env.NEXT_PUBLIC_ENVIRONMENT || 'production'
).toUpperCase() as Environment

// Durations will be converted to blocks
// where 1 day == (60 / 3) * 60 * 24 == 28800 blocks
export const blockTime: number = 3
export const blocksPerDay: number = (24 * 60 * 60) / blockTime
export const blockFactor: number = blockTime * (60 / blockTime) * 60 * 24

export const sessionUpdateInterval: number = 5 * 60 * 1000

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
	campaignId: '',
	amount: 0,
	metaDataCID: '',
}

export const defaultValuesTmpCampaign: TMPCampaign = {
	name: '',
	description: '',
	bannerCid: '',
	content: '',
	target: 0,
	deposit: 0,
	email: '',
	protocol: 0,
}
