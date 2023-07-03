import { OrganizationFeatures } from '@gamedao/graph-api/src/@types/schema'
import { useFeatures } from 'src/hooks/useFeatures'

export function useOrganizationFeatures(): OrganizationFeatures {
	return useFeatures() as OrganizationFeatures
}
