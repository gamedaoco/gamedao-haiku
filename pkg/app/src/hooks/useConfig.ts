import { Config } from '@gamedao-haiku/graphql/dist'
import { useAppContext } from 'provider/app/modules/context'

export function useConfig(): Config {
	return useAppContext()?.config
}
