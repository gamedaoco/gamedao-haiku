// twitter authorization flow
// reference: https://developer.twitter.com/en/docs/authentication/oauth-2-0/user-access-token

// https://twitter.com/i/oauth2/authorize?response_type=code
// &client_id=M1M5R3BMVy13QmpScXkzTUt5OE46MTpjaQ
// &redirect_uri=https://www.example.com
// &scope=tweet.read%20users.read%20follows.read%20follows.write
// &state=state
// &code_challenge=challenge
// &code_challenge_method=plain
import { generateHash } from './randomHash'

const client = process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID_V2
const callback = process.env.NEXT_PUBLIC_VERCEL_URL + '/callback/twitter'

console.log(process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID_V2)

async function sha256(source) {
	const sourceBytes = new TextEncoder().encode(source)
	const digest = await crypto.subtle.digest('SHA-256', sourceBytes)
	const resultBytes = [...new Uint8Array(digest)]
	return resultBytes.map((x) => x.toString(16).padStart(2, '0')).join('')
}

export async function getTwitterAuthorizationURL(uuid = '') {
	const rnd = generateHash(8)
	const state = await sha256(uuid)

	const url = encodeURI(
		[
			'https://twitter.com/i/oauth2/authorize',
			'?client_id=',
			client,
			'&redirect_uri=',
			callback,
			'&scope=tweet.read users.read follows.read follows.write',
			'&state=',
			state,
			'&response_type=code&code_challenge_method=plain',
			'&code_challenge=',
			rnd,
		].join(''),
	)
	return url
}
