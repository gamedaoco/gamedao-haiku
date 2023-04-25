import { useAppContext } from 'src/providers/app/modules/context'
import { Config } from '@gamedao/graph'

export function useConfig(): Config {
	return useAppContext()?.config
}
