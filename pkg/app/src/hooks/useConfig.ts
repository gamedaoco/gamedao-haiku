import { useAppContext } from 'providers/app/modules/context'
import { Config } from 'queries'

export function useConfig(): Config {
	return useAppContext()?.config
}
