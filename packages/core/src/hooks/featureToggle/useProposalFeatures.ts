import { ProposalFeatures } from '../../../../../services/graph-api/@gamedao/core/@types/schema'
import { useFeatures } from '../hooks/useFeatures'

// import { ProposalFeatures } from '@gamedao/graph'

export function useProposalFeatures(): ProposalFeatures {
	return useFeatures() as ProposalFeatures
}
