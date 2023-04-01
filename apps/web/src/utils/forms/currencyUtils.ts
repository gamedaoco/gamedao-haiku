export function getCurrenciesForSelect(selectedApiProvider) {
	if (!selectedApiProvider || !selectedApiProvider.systemProperties) return []

	const { tokenSymbol } = selectedApiProvider.systemProperties

	return tokenSymbol.map((symbol, i) => {
		return {
			key: symbol,
			text: symbol,
			value: i,
		}
	})
}
