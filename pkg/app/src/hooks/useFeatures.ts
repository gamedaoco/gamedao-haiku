import { useAppContext } from 'providers/app/modules/context'
import { Features } from 'src/queries'

export function useFeatures(): Features {
	return useAppContext()?.features
}
