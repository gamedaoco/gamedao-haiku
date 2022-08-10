export function isProposalActive(blockTime: number, proposalStartBlockTime: number, proposalExpiryBlockTime: number) {
	return blockTime >= proposalStartBlockTime && blockTime < proposalExpiryBlockTime
}
