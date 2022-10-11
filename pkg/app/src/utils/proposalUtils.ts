import { Proposal } from 'src/queries'

export function isProposalActive(blockTime: number, proposal: Proposal) {
	if (!proposal) return false
	return blockTime >= proposal.start && blockTime < proposal.expiry && proposal.state === 'Active'
}

export function getProposalTypesCount(proposals) {
	const types = proposals?.map((proposal) => proposal?.type)

	const count = types?.reduce((accumulator, value) => {
		return { ...accumulator, [value]: (accumulator[value] || 0) + 1 }
	}, {})

	return [count?.[0] ?? 0, count?.[1] ?? 0, count?.[2] ?? 0]
}
