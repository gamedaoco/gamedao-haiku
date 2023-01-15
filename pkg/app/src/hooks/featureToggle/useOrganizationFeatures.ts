import { OrganizationFeatures } from '@gamedao/service/src/@types/schema'
import { useFeatures } from 'hooks/useFeatures'

export function useOrganizationFeatures(): OrganizationFeatures {
	return useFeatures() as OrganizationFeatures
}
