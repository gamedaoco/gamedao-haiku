// epic authorization flow
// reference: https://dev.epicgames.com/docs/web-api-ref/authentication

const client = process.env.NEXT_PUBLIC_EPIC_CLIENT_ID
const callback = `${process.env.NEXT_PUBLIC_VERCEL_URL}/callback/epic`

export const encode = (str: string): string => Buffer.from(str, 'binary').toString('base64')
export const decode = (str: string): string => Buffer.from(str, 'base64').toString('binary')

export async function getEpicAuthorizationURL(uuid = '', callerURL = 'noredirect') {
	const url = encodeURI(
		[
			`https://www.epicgames.com/id/authorize`,
			`?client_id=${client}`,
			`&redirect_uri=${callback}?redirect=${encodeURI(callerURL)}`,
			`&scope=basic_profile`,
			`&response_type=code`,
		].join(''),
	)

	// console.log('client', client, 'callback', callback)
	// console.log('url', url)

	return url
}
