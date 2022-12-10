import { CID, create } from 'ipfs-http-client'
import { createErrorNotification } from 'src/utils/notificationUtils'

export function parseIpfsHash(ipfsHash: string, gateway: string = 'https://gateway.ipfs.io/') {
	let hashPart = ipfsHash?.split('/')
	return gateway + 'ipfs/' + hashPart?.[hashPart?.length - 1]
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
		const auth = 'Basic ' + Buffer.from(process.env.IPFS_KEY + ':' + process.env.IPFS_SECRET).toString('base64')

		const client = await create({
			url: process.env.IPFS_HOST,
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
