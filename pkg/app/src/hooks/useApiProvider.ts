import { useNetworkContext } from 'providers/network/modules/context'
import { ApiProvider } from 'src/@types/network'

export function useApiProvider(): ApiProvider {
	const { selectedApiProvider } = useNetworkContext()
	return selectedApiProvider
}
