export function parseIpfsHash(ipfsHash: string, gateway: string = 'https://gateway.ipfs.io/') {
	let hashPart = ipfsHash.split('/')
	return gateway + 'ipfs/' + hashPart[hashPart.length - 1]
}

export async function fetchIpfsJson(ipfsHash: string, gateway: string = 'https://gateway.ipfs.io/') {
	try {
		const response = await fetch(parseIpfsHash(ipfsHash, gateway), { method: 'GET' })
		return await response.json()
	} catch (e) {
		console.error('Ipfs file can not be loaded', ipfsHash, e)
	}

	return null
}

export async function fetchIpfsBlob(ipfsHash: string, gateway: string = 'https://gateway.ipfs.io/') {
	try {
		const response = await fetch(parseIpfsHash(ipfsHash, gateway), { method: 'GET' })
		return await response.blob()
	} catch (e) {
		console.error('Ipfs file can not be loaded', ipfsHash, e)
	}

	return null
}
