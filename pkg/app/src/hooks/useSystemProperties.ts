import { useNetworkContext } from 'providers/network/modules/context'
import { SystemProperties } from 'src/@types/network'

export function useSystemProperties(): SystemProperties {
	return useNetworkContext()?.selectedApiProvider?.systemProperties
}
