import { fetch } from 'cross-undici-fetch'
import { print } from 'graphql'
import { introspectSchema } from '@graphql-tools/wrap'

interface Executor {
	document: any
	variables: any
}

async function remoteExecutor({ document, variables }: Executor) {
	const query = print(document)
	const fetchResult = await fetch('https://gql-rmrk2-prod.graphcdn.app/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query, variables }),
	})
	return fetchResult.json()
}

export async function getRmrkSubSchema() {
	return {
		schema: await introspectSchema(remoteExecutor as any),
		executor: remoteExecutor,
	}
}
