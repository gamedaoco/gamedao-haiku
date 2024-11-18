import { useNetworkContext } from 'src/providers/network/components/context'
import { ApiProvider } from '@gamedao/core/@types/network'

export function useApiProvider(): ApiProvider {
	const { selectedApiProvider } = useNetworkContext()
	return selectedApiProvider
}
