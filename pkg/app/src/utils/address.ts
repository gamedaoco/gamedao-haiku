export function formatAddressShort(address: string, charactersBeforeDots = 10): string {
	return `${address.slice(0, charactersBeforeDots)}...${address.slice(-6)}`
}
