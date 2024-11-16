import { create } from 'ipfs-http-client'
import { Stream } from 'stream'

export async function singleUpload(_: any, { fileStream }: any): Promise<string> {
	try {
		const { createReadStream, filename, mimetype, encoding } = await fileStream

		const stream: Stream = createReadStream()

		const chunks: any = []
		const fileBuffer: any = await new Promise((resolve, reject) => {
			stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)))
			stream.on('error', (err) => reject(err))
			stream.on('end', () => resolve(Buffer.concat(chunks)))
		})

		const auth =
			'Basic ' + Buffer.from(process.env.IPFS_CLIENT_ID + ':' + process.env.IPFS_CLIENT_SECRET).toString('base64')

		const client = await create({
			url: process.env.IPFS_API_URL,
			headers: {
				authorization: auth,
			},
		})

		const ipfsResult = await client.add({ path: filename, content: fileBuffer }, { pin: true })
		return ipfsResult.cid.toString()
	} catch (err) {
		console.error(err)
	}

	return ''
}
