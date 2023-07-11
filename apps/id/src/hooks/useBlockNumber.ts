import { useBlockNumberSubscription } from 'src/queries'

export function useBlockNumber(): number {
	const { data } = useBlockNumberSubscription()

	return data?.ChainInfo?.[0]?.blockNumber ?? 0
}
