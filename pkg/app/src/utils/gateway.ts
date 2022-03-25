//
//	ipfs abstraction
//

import config from '../config'
import { create } from 'ipfs-http-client'
// const dev = config.dev

// put
const API_URL = config.API_URL
const API_PROTOCOL = config.API_PROTOCOL
const API_PORT = config.API_PORT
// get
const GATEWAY_URL = config.GATEWAY_URL
const GATEWAY_PROTOCOL = config.GATEWAY_PROTOCOL
const GATEWAY_PORT = config.GATEWAY_PORT

export const gateway =
	GATEWAY_PROTOCOL + '://' + GATEWAY_URL + (GATEWAY_PORT ? ':' + GATEWAY_PORT : '') + '/gateway/'

//
//	init ipfs client
//

// const auth = 'Basic ' + Buffer.from(config.IPFS_KEY + ':' + config.IPFS_SECRET).toString('base64')

// const headers = {
// 	authorization: auth,
// }

export const ipfs = create({
	protocol: API_PROTOCOL,
	url: 'https://' + API_URL + '/api/v0',
	// headers: (dev) ? null : headers,
	timeout: '2m',
})

//
//	pin json to ipfs and return cid
//

export const pinJSONToIPFS = async (payload) => {
	try {
		const cid = await ipfs.add(Buffer.from(JSON.stringify(payload)))
		console.log(cid)
		return cid.path
	} catch (error) {
		console.log(error)
	}

	// pinata.pinFileToIPFS(payload).then((result) => {
	// //handle results here
	// console.log(result);
	// }).catch((err) => {
	// //handle error here
	// console.log(err);
	// });
}

//
//	pin file to ipfs and return cid
//

export const pinFileToIPFS = async (payload) => {
	try {
		const cid = await ipfs.add(payload)
		console.log(cid)
		return cid.path
	} catch (error) {
		console.log(error)
	}
}

//
//	get json from ipfs by cid
//

export const getJSON = async (cid) => {
	try {
		const payload = await ipfs.cat(cid)
		console.log(payload)
		return payload
	} catch (error) {
		console.log(error)
	}
}
