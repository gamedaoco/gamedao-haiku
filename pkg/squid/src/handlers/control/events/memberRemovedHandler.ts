import { ControlMemberRemovedEvent } from '../../../types/events'
import { getOrgMember } from '../../../database/getters'
import { hashToHexString, addressCodec } from '../../../utils'
import { EventHandlerContext } from '@subsquid/substrate-processor'

async function handleMemberRemovedEvent(context: EventHandlerContext) {
	let eventName = 'Control.MemberAdded'
	let raw_event = new ControlMemberRemovedEvent(context)
	if (!raw_event.isV62) {
		console.error(`Unknown version: ${eventName}`)
		return
	}
	let store = context.store
	let event = raw_event.asV62

	let orgId = hashToHexString(event.orgId)
	let address = addressCodec.encode(event.who)

	let member = await getOrgMember(store, orgId, address)
	if (!member) return

	await store.remove(member)
}

export { handleMemberRemovedEvent }
