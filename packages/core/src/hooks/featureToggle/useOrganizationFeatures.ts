import type { OrganizationFeatures } from '@gamedao/graph'
import { useFeatures } from '../useFeatures'

export function useOrganizationFeatures(): OrganizationFeatures {
	return useFeatures() as OrganizationFeatures
}
