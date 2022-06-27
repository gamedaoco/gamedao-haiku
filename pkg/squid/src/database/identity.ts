// Imports
// 3rd
// Types
import { IdentityUpsertData } from '../@types/pallets/identity/identityUpsertData';
// Database
import { Identity } from '../model';
// Helpers
import { get } from './helper';
import { Store } from '@subsquid/substrate-processor';

// Functions
function getIdentity(store: Store, identity: string): Promise<Identity | null> {
	return get(store, Identity, identity);
}

async function upsertIdentity(store: Store, identity: string, data: IdentityUpsertData | null): Promise<Identity> {
	/*
	 * 1) Get existing identity
	 * 2) If not found, create new one
	 */
	let entity = await getIdentity(store, identity);
	if (!entity) {
		entity = new Identity();
		entity.id = identity;
		entity.address = identity;
	}

	// Set data
	if (data) {
		entity.displayName = data.displayName;
		entity.legalName = data.legalName;
		entity.email = data.email;
		entity.riot = data.riot;
		entity.image = data.image;
		entity.twitter = data.twitter;
	}

	// Save identity
	await store.save(entity);

	return entity;
}

// Exports
export { getIdentity, upsertIdentity };
