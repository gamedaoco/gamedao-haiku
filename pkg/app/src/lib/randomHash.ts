function dec2hex(dec) {
	return dec.toString(16).padStart(2, '0')
}

export function generateHash(len = 20) {
	try {
		const arr = new Uint8Array(len / 2)
		window.crypto.getRandomValues(arr)
		return Array.from(arr, dec2hex).join('')
	} catch (e) {
		console.error(e)
	}
}
