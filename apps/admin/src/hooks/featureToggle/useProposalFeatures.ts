import { useFeatures } from 'src/hooks/useFeatures'
import { ProposalFeatures } from '@gamedao/service/src/@types/schema'
// import { ProposalFeatures } from '@gamedao/graph'

export function useProposalFeatures(): ProposalFeatures {
	return useFeatures() as ProposalFeatures
}
