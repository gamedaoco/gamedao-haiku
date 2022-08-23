export function isProposalActive(blockTime: number, proposalStartBlockTime: number, proposalExpiryBlockTime: number) {
	return blockTime >= proposalStartBlockTime && blockTime < proposalExpiryBlockTime
}

export function getProposalTypesCount(proposals) {
	const types = proposals?.map((proposal) => proposal?.type)

	const count = types?.reduce((accumulator, value) => {
		return { ...accumulator, [value]: (accumulator[value] || 0) + 1 }
	}, {})

	return [count?.[0] ?? 0, count?.[1] ?? 0, count?.[2] ?? 0]
}
