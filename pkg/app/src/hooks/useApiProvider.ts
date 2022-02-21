import { ApiProvider } from 'src/@types/network'
import { useNetworkContext } from 'provider/network/modules/context'

export function useApiProvider(): ApiProvider {
	const { selectedApiProvider } = useNetworkContext()
	return selectedApiProvider
}
