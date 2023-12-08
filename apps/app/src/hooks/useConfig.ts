import { useAppContext } from 'src/providers/app/components/context'
import { Config } from 'src/queries'

export function useConfig(): Config {
	return useAppContext()?.config
}
