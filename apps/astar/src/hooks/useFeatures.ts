import { useAppContext } from 'src/providers/app/components/context'
import { Features } from 'src/queries'

export function useFeatures(): Features {
	return useAppContext()?.features
}
