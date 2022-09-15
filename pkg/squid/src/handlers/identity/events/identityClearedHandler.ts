// Imports
import { IdentityUpsertData } from '../../../@types/pallets/identity/identityUpsertData';
import { upsertIdentity } from '../../../database/identity';
import { encodeSigner, hexStringToString } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';

// Logic
async function handleIdentityClearedEvent(context: EventHandlerContext) {
	if (!context.extrinsic) return;

	const upsertData: IdentityUpsertData = {
		address: encodeSigner(context.extrinsic.signer),
		displayName: null,
		legalName: null,
		email: null,
		riot: null,
		image: null,
		twitter: null,
		web: null,
		web3name: null,
		discord: null,
	};

	await upsertIdentity(context.store, upsertData.address, upsertData);
}

// Exports
export { handleIdentityClearedEvent };
