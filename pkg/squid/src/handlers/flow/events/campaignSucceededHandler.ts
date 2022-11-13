import { FlowSucceededEvent } from '../../../types/events'
import { hashToHexString } from '../../../utils'
import { EventHandlerContext } from '@subsquid/substrate-processor'
import { getCampaign } from '../../../database/getters'

async function handleCampaignSucceededEvent(context: EventHandlerContext) {
	let eventName = 'Flow.Succeeded'
	let raw_event = new FlowSucceededEvent(context)

	if (!raw_event.isV62) {
		console.error(`Unknown version: ${eventName}`)
		return
	}
	let store = context.store
	let event = raw_event.asV62

	let campaignId = hashToHexString(event.campaignId)

	let campaign = await getCampaign(store, campaignId)
	if (!campaign) return

	campaign.state = 'Succeeded'
	await store.save(campaign)
}

export { handleCampaignSucceededEvent }
