import { IdentityUpsertData } from '../../../@types/identity';
import { upsertIdentity } from '../../../database/identity';
import { encodeSigner } from '../../../utils';
import { EventHandlerContext } from '@subsquid/substrate-processor';


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
	};

	await upsertIdentity(context.store, upsertData.address, upsertData);
}

export { handleIdentityClearedEvent };
