import { ApiProvider } from 'src/@types/network'
import { useNetworkContext } from 'provider/network/modules/context'
import f from '../../../translations/src/app/en-US.json'

export function useApiProvider(): ApiProvider {
	const { selectedApiProvider } = useNetworkContext()
	console.log(f)
	return selectedApiProvider
}
