import type { ProposalFeatures } from '@gamedao-haiku/graphql/dist/types'
import { useFeatures } from 'hooks/useFeatures'

export function useProposalFeatures(): ProposalFeatures {
	return useFeatures() as ProposalFeatures
}
