import md5 from 'md5'

// create an avatar url based on the wallet address
export const avatarImageURL = (address) => {
	console.log('address', address)
	const baseURL = `https://avatars.dicebear.com/api/big-smile/`
	const avatarHash = md5(address)
	// const avatarBackground = ${avatarHash.slice(0,6).toUpperCase()}`
	return `${baseURL}${avatarHash}.svg` // ?b=%23${avatarBackground}`
}
