// epic authorization flow
// reference: https://dev.epicgames.com/docs/web-api-ref/authentication

// import { generateHash } from './randomHash'

const client = process.env.NEXT_PUBLIC_EPIC_CLIENT_ID
const callback = `${process.env.NEXT_PUBLIC_VERCEL_URL}/callback/epic`

console.log('client', client, 'callback', callback)

// async function sha256(source) {
// 	const sourceBytes = new TextEncoder().encode(source)
// 	const digest = await crypto.subtle.digest('SHA-256', sourceBytes)
// 	const resultBytes = [...new Uint8Array(digest)]
// 	return resultBytes.map((x) => x.toString(16).padStart(2, '0')).join('')
// }

export const encode = (str: string): string => Buffer.from(str, 'binary').toString('base64')
export const decode = (str: string): string => Buffer.from(str, 'base64').toString('binary')

export async function getEpicAuthorizationURL(uuid = '', callerURL = 'noredirect') {
	// const challenge = await sha256(uuid)
	const caller = encodeURI(encode(callerURL + '::::' + callback))

	const url = encodeURI(
		[
			`https://www.epicgames.com/id/authorize`,
			`?client_id=${client}`,
			`&redirect_uri=${callback}?redirect=${encodeURI(callerURL)}`,
			`&scope=basic_profile`,
			`&response_type=code`,
			// `&code_challenge_method=plain`,
			// `&code_challenge=${challenge}`,
			// `&state=${state}`,
		].join(''),
	)

	console.log('url', url)

	return url
}
