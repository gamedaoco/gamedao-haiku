import { createErrorNotification } from 'src/utils/notificationUtils'
import { create } from 'ipfs-http-client'

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

export async function uploadFileToIpfs(apiUrl: string, file: File) {
	try {
		const client = await create({
			url: apiUrl,
		})

		const ipfsResult = await client.add(file)
	} catch (err) {
		console.error(err)
		createErrorNotification('Ipfs upload failed')
	}
}
