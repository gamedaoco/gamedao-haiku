import { createErrorNotification } from 'src/utils/notificationUtils'
import { CID, create } from 'ipfs-http-client'

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

export async function uploadFileToIpfs(file: File): Promise<CID> {
	try {
		const auth =
			'Basic ' +
			Buffer.from('1v04L2wj5JmI0JgKF5KztV0oN8o' + ':' + '85547c6003abb67a6335469d1aa6a3a3').toString('base64')
		console.log(auth)
		const client = await create({
			url: 'https://ipfs.infura.io:5001/api/v0',
			headers: {
				authorization: auth,
			},
		})

		const ipfsResult = await client.add(file, { pin: true })
		return ipfsResult.cid
	} catch (err) {
		console.error(err)
		createErrorNotification('Ipfs upload failed')
	}

	return null
}
