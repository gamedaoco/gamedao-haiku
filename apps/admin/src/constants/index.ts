import { TMPCampaign } from 'src/@types/campaign'
import type { TMPOrganization } from 'src/@types/organization'
import { TMPProposal } from 'src/@types/proposal'

import type { Environment } from '@gamedao/graph'

export const ENVIRONMENT: Environment = (
	process.env.NEXT_PUBLIC_ENVIRONMENT || 'Development'
).toUpperCase() as Environment

export const sessionUpdateInterval: number = 5 * 60 * 1000

export const defaultValuesTmpOrganization: TMPOrganization = {
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
	url: '',
	location: '',
	tags: [],
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
	currencyId: 0,
	beneficiaryAddress: '',
}

export const defaultValuesTmpCampaign: TMPCampaign = {
	orgId: '',
	name: '',
	description: '',
	bannerCid: '',
	content: '',
	target: null,
	deposit: null,
	protocol: 0,
	governance: 0,
	usageOfFunds: '',
	startDate: new Date(),
	endDate: new Date(),
	currencyId: -1,
	metadataCid: '',
}
