import { useAppContext } from 'provider/app/modules/context'
import { Features } from 'src/queries'

export function useFeatures(): Features {
	return useAppContext()?.features
}
