import { CID, create } from 'ipfs-http-client'
import { createErrorNotification } from 'src/utils/notificationUtils'

const ipfsGateway = process.env.NEXT_PUBLIC_IPFS_PUBLIC_GATEWAY || ''

export function parseIpfsHash(ipfsHash: string, gateway: string = ipfsGateway) {
	let hashPart = ipfsHash?.split('/')
	return gateway + 'ipfs/' + hashPart?.[hashPart?.length - 1]
}

export async function fetchIpfsJson(ipfsHash: string, gateway: string = process.env.NEXT_PUBLIC_IPFS_PUBLIC_GATEWAY) {
	try {
		const response = await fetch(parseIpfsHash(ipfsHash, gateway), { method: 'GET' })
		return await response.json()
	} catch (e) {
		console.error('Ipfs file can not be loaded', ipfsHash, e)
	}

	return null
}

export async function fetchIpfsBlob(ipfsHash: string, gateway: string = ipfsGateway) {
	try {
		const response = await fetch(parseIpfsHash(ipfsHash, gateway), { method: 'GET' })
		return await response.blob()
	} catch (e) {
		console.error('Ipfs file can not be loaded', ipfsHash, e)
	}

	return null
}

export async function uploadFileToIpfs(file: File): Promise<CID> {
	console.log(process.env.NEXT_PUBLIC_IPFS_HOST)

	try {
		const auth =
			'Basic ' +
			Buffer.from(process.env.NEXT_PUBLIC_IPFS_KEY + ':' + process.env.NEXT_PUBLIC_IPFS_SECRET).toString('base64')
		const client = await create({
			url: process.env.NEXT_PUBLIC_IPFS_HOST,
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
