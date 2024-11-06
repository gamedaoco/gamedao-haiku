import md5 from 'md5'

// create an avatar url based on the wallet address
export const avatarImageURL = (address) => {
	// const baseURL = `https://api.dicebear.com/5.x/big-smile/`
	// const baseURL = `https://avatars.dicebear.com/api/big-smile/`
	const baseURL = `/api/avatar/${md5(address)}`
	// const avatarHash = md5(address)
	// const avatarBackground = ${avatarHash.slice(0,6).toUpperCase()}`
	return `${baseURL}` // ?b=%23${avatarBackground}`
}
