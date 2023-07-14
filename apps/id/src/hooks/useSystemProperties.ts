import { SystemProperties } from 'src/@types/network'
import { useNetworkContext } from 'src/providers/network/modules/context'

export function useSystemProperties(): SystemProperties {
	return useNetworkContext()?.selectedApiProvider?.systemProperties
}
