import { ControlOrgUpdatedEvent } from '../../../types/events';
import { upsertIdentity } from '../../../database/identity';
import { getOrg } from '../../../database/getters';
import { addressCodec, hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';

async function handleOrgUpdatedEvent(context: EventHandlerContext) {
	let eventName = 'Control.OrgCreated';
	if (!context.extrinsic) {
		console.error(`No extrinsic in the context: ${eventName}`);
		return;
	}
	let raw_event = new ControlOrgUpdatedEvent(context);
	if (!raw_event.isV62) {
		console.error(`Unknown version: ${eventName}`);
		return;
	}
	let store = context.store;
	let event = raw_event.asV62;

	let orgId = hashToHexString(event.orgId);
	let org = await getOrg(store, orgId);
	if (!org) return;

	if (event.primeId) {
		let primeId = addressCodec.encode(event.primeId);
		org.prime = primeId;
		org.primeIdentity = await upsertIdentity(store, primeId, null);
	}
	if (event.orgType) {
		org.type = event.orgType.__kind;
	}
	if (event.accessModel) {
		org.accessModel = event.accessModel.__kind;
	}
	if (event.feeModel) {
		org.feeModel = event.feeModel.__kind;
	}
	if (event.memberLimit) {
		org.memberLimit = event.memberLimit;
	}
	if (event.memberLimit) {
		org.membershipFee = event.membershipFee;
	}
	org.updatedAtBlock = context.block.height;

	await store.save(org);
}

export { handleOrgUpdatedEvent };
