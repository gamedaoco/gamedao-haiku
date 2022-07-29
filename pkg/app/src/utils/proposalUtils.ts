export function isProposalActive(blockTime: number, proposalStartBlockTime: number) {
	return blockTime >= proposalStartBlockTime
}
