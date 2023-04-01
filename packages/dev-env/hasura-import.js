const metadata = require('./hasura_metadata.json')
const fetch = require('node-fetch')
const superagent = require('superagent')

async function main() {
	await fetch('http://localhost:9080/v1/metadata', {
		method: 'POST',
		headers: {
			'x-hasura-admin-secret': 'mypassword123',
			'Content-Type': 'application/json',
		},
		body: {
			args: metadata,
			type: 'replace_metadata',
		},
	})
}

main().finally(() => {
	console.log('Goodbye')
})
