import { OrganizationFeatures } from '@gamedao-haiku/service/src/@types/schema'
import { useFeatures } from 'hooks/useFeatures'

export function useOrganizationFeatures(): OrganizationFeatures {
	return useFeatures() as OrganizationFeatures
}
