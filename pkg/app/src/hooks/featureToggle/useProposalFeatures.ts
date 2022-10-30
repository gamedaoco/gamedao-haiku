import { useFeatures } from 'hooks/useFeatures'
import { ProposalFeatures } from 'queries'

export function useProposalFeatures(): ProposalFeatures {
	return useFeatures() as ProposalFeatures
}
