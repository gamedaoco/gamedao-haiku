// Imports
import { getIpfsUrlByCid } from '../constants/ipfs';
import { isCIDValid } from '../utils';
import { to } from 'await-to-js';
import fetch from 'node-fetch';

// Functions
async function fetchJsonByCid(cid: string): Promise<any | null> {
	const [errFetch, response] = await to(fetch(getIpfsUrlByCid(cid)));
	if (errFetch) return null;

	const [errJson, json] = await to(response!.json());
	if (errJson) return null;

	return json;
}

async function fetchMetadataByCid<TEntityMetadata>(cid: string, errorMessage: string): Promise<TEntityMetadata | null> {
	try {
		if (!isCIDValid(cid)) {
			console.error(`Couldn't fetch metadata from IPFS, invalid cid! ${errorMessage}`);
		} else {
			const metadata = await fetchJsonByCid(cid as string);
			if (metadata) return metadata;

			console.error(`Couldn't fetch metadata from IPFS! ${errorMessage}`);
		}
	} catch (e) {
		console.error(e);
	}

	return null;
}

export { fetchJsonByCid, fetchMetadataByCid };
