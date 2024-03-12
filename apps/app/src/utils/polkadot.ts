//  utility functions to interact with substrate based chains

import { cryptoWaitReady, decodeAddress, signatureVerify } from '@polkadot/util-crypto'
import { naclDecrypt, naclEncrypt, randomAsU8a } from '@polkadot/util-crypto'
import { stringToU8a, u8aToString, u8aToHex } from '@polkadot/util'

const encrypt = (message, secret) => {
	const { encrypted, nonce } = naclEncrypt(stringToU8a(message), secret)
	return { encrypted, nonce }
}

const decrypt = (hash, nonce, secret) => {
	const messageDecrypted = naclDecrypt(encrypted, nonce, secret)
	return null
}

// sign a message with a secret key
const sign

// verify a message with a public key

// encrypt a message with a secret
const message = 'Hello World!'
const secret = randomAsU8a()
const { encrypted, nonce } = naclEncrypt(stringToU8a(message), secret)
console.log(message, encrypted, nonce, secret)

// decrypt a message with a secret
const decrypted = decrypt(encrypted, nonce, secret)
console.log(decrypted, u8aToString(decrypted))

const isValidSignature = (signedMessage, signature, address) => {
	const publicKey = decodeAddress(address)
	const hexPublicKey = u8aToHex(publicKey)

	return signatureVerify(signedMessage, signature, hexPublicKey).isValid
}

const main = async () => {
	//Some interfaces, such as using sr25519 however are only available via WASM
	await cryptoWaitReady()
	const isValid = isValidSignature(
		'This is a text message',
		'0x2aeaa98e26062cf65161c68c5cb7aa31ca050cb5bdd07abc80a475d2a2eebc7b7a9c9546fbdff971b29419ddd9982bf4148c81a49df550154e1674a6b58bac84',
		'5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
	)
	console.log(isValid)
	// true
}

main()
