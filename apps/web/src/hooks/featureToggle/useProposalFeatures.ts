import { ProposalFeatures } from '@gamedao/graph-api/src/@types/schema'
import { useFeatures } from 'src/hooks/useFeatures'

// import { ProposalFeatures } from 'src/queries'

export function useProposalFeatures(): ProposalFeatures {
	return useFeatures() as ProposalFeatures
}
