import { useAppContext } from '../providers/app/components/context'
import { Features } from '@gamedao/graph'

export function useFeatures(): Features {
	return useAppContext()?.features
}
