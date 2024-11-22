import { ProposalFeatures } from '@gamedao/graph'
import { useFeatures } from '../useFeatures'

export function useProposalFeatures(): ProposalFeatures {
	return useFeatures() as ProposalFeatures
}
