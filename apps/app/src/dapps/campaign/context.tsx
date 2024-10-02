import { Object, String } from 'lodash'
import { createContext, useContext } from 'react'

export interface ICampaign {
	name: string
	description: string
	website: string
	tags: string[]

	logoImgCid: string
	headerImgCid: string
	contentCid: string

	authorId: string
	collectiveId: string

	contributors: string[]
	contributions: object

	currencyId: string
	collectedFunds: number
	targetfunds: number

	milestones: object
}

export interface ICampaignContext {
	ready: boolean
	campaigns: ICampaign[]

	address: string
	isAdmin: boolean
	isCreator: boolean
	isMember: boolean
}

export const CampaignContext = createContext<ICampaignContext>({
	ready: false,
	campaigns: null,

	address: null,

	isAdmin: false,
	isCreator: false,
	isMember: false,
})

export function useDAppContext(): ICampaignContext {
	return useContext(CampaignContext)
}
