import { useAppContext } from 'src/providers/app/modules/context'
import { Features } from '@gamedao/graph'

export function useFeatures(): Features {
	return useAppContext()?.features
}
