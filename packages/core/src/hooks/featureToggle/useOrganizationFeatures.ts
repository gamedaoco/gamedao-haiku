import { OrganizationFeatures } from '../../../../../services/api/@gamedao/core/@types/schema'
import { useFeatures } from '../hooks/useFeatures'

export function useOrganizationFeatures(): OrganizationFeatures {
	return useFeatures() as OrganizationFeatures
}
