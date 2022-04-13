import { useAppContext } from 'provider/app/modules/context'
import { Config } from '@gamedao-haiku/graphql/dist'

export function useConfig(): Config {
	return useAppContext()?.config
}
