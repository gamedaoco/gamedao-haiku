import { ControlOrgCreatedEvent } from '../../../types/events';
import { ControlCreateOrgCall } from '../../../types/calls';
import { fetchOrgMetadata } from '../../../ipfs/getters';
import { upsertIdentity } from '../../../database/identity';
import { getOrg } from '../../../database/getters';
import { upsertOrganizationMetadata } from '../../../database/metadata';
import { Organization } from '../../../model';
import { addressCodec, encodeSigner, hashToHexString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';


async function handleOrgCreatedEvent(context: EventHandlerContext) {
	let eventName = 'Control.OrgCreated';
	if (!context.extrinsic) {
		console.error(`No extrinsic in the context: ${eventName}`);
		return;
	}
	let raw_event = new ControlOrgCreatedEvent(context);
	let raw_call = new ControlCreateOrgCall({
		_chain: context._chain,
		block: context.block,
		extrinsic: context.extrinsic,
	});
	if (!raw_event.isV61 || !raw_call.isV61) {
		console.error(`Unknown version: ${eventName}`);
		return;
	}
	let store = context.store;
	let event = raw_event.asV61;
	let call = raw_call.asV61;

	let orgId = hashToHexString(event.orgId);
	let treasury = addressCodec.encode(event.treasuryId) as string;
	let signer = encodeSigner(context.extrinsic!.signer);
	let signerIdentity = await upsertIdentity(store, signer, null);
	let treasuryIdentity = await upsertIdentity(store, treasury, null);

	let org_exists = await getOrg(store, orgId);
	if (org_exists) return;
	
	let org = new Organization();
	org.id = orgId;
	org.creator = signer;
	org.creatorIdentity = signerIdentity;
	org.prime = signer;
	org.primeIdentity = signerIdentity;
	org.treasury = treasury;
	org.treasuryIdentity = treasuryIdentity;
	org.accessModel = call.accessModel.__kind;
	org.feeModel = call.feeModel.__kind;
	org.type = call.orgType.__kind;
	org.membershipFee = call.membershipFee;
	org.createdAtBlock = context.block.height;
	org.updatedAtBlock = context.block.height;

	// TODO: migrate to FireSquid => use typegen Constants
	org.state = 'Active';
	org.govCurrency = call.govCurrency?.value.__kind ?? 'GAME';		// ProtocolTokenId
	org.payCurrency = call.payCurrency?.value.__kind ?? 'PLAY';		// PaymentTokenId
	org.memberLimit = call.memberLimit ?? 1000;						// MaxMembers
	org.deposit = call.deposit ?? BigInt(10^10);					// 1 GAME Dollar

	// Check if cid is valid, fetch metadata from ipfs
	let metadata = await fetchOrgMetadata(call.cid.toString(), orgId);
	if (metadata) {
		org.metadata = await upsertOrganizationMetadata(store, call.cid.toString(), metadata);
	}

	await store.save(org);
}

export { handleOrgCreatedEvent };