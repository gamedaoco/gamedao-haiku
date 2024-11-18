import { useAppContext } from 'src/providers/app/components/context'
import { Config } from '@gamedao/graph'

export function useConfig(): Config {
	return useAppContext()?.config
}
