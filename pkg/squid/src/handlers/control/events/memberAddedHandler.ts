import { ControlMemberAddedEvent } from '../../../types/events';
import { getOrg, getOrgMember } from '../../../database/getters';
import { upsertIdentity } from '../../../database/identity';
import { OrganizationMember } from '../../../model';
import { hashToHexString, addressCodec } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';

async function handleMemberAddedEvent(context: EventHandlerContext) {
	let eventName = 'Control.MemberAdded';
	let raw_event = new ControlMemberAddedEvent(context);
	if (!raw_event.isV61) {
		console.error(`Unknown version: ${eventName}`);
		return;
	}
	let store = context.store;
	let event = raw_event.asV61;

	let orgId = hashToHexString(event.orgId);
	let address = addressCodec.encode(event.who);

	let member_exists = await getOrgMember(store, orgId, address);
	if (member_exists) return;

	const org = await getOrg(store, orgId);
	if (!org) return;

	const member = new OrganizationMember();
	member.id = `${orgId}-${address}`.toLowerCase();
	member.organization = org;
	member.address = address;
	member.identity = await upsertIdentity(store, address, null);

	await store.save(member);
}

export { handleMemberAddedEvent };
