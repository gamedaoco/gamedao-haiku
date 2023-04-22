import { uploadFileToIpfs } from 'utils/ipfs'
import { v4 as uuidv4 } from 'uuid'

export async function uploadBase64File(dataUrl) {
	const arr = dataUrl.split(',')
	const mime = arr[0].match(/:(.*?);/)[1]
	const bytes = atob(arr[1])
	let n = bytes.length
	const u8arr = new Uint8Array(n)

	while (n--) {
		u8arr[n] = bytes.charCodeAt(n)
	}

	const file = new File([u8arr], uuidv4(), { type: mime })
	const cid = await uploadFileToIpfs(file)

	return cid.toString()
}
