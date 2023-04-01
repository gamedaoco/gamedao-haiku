import { useAppContext } from 'src/providers/app/modules/context'
import { Features } from 'src/queries'

export function useFeatures(): Features {
	return useAppContext()?.features
}
