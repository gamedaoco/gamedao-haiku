import { useAppContext } from 'src/providers/app/modules/context'
import { Config } from 'src/queries'

export function useConfig(): Config {
	return useAppContext()?.config
}
