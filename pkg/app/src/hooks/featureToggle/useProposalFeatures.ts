import { useFeatures } from 'hooks/useFeatures'
import { ProposalFeatures } from 'src/queries'

export function useProposalFeatures(): ProposalFeatures {
	return useFeatures() as ProposalFeatures
}
