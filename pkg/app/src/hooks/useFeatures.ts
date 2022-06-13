import type { Features } from '@gamedao-haiku/graphql/dist/types'
import { useAppContext } from 'provider/app/modules/context'

export function useFeatures(): Features {
	return useAppContext()?.features as Features
}
