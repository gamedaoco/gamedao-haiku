import { useNetworkContext } from 'src/providers/network/components/context'
import { SystemProperties } from 'src/@types/network'

export function useSystemProperties(): SystemProperties {
	return useNetworkContext()?.selectedApiProvider?.systemProperties
}
