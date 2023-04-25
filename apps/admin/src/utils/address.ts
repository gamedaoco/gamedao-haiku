export function formatAddressShort(address: string, charactersBeforeDots = 4): string {
	return `${address.slice(0, 4)}...${address.slice(-4)}`
}
