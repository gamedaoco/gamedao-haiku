import { useBlockNumberSubscription } from 'src/queries'

export function useBlockNumber(): number {
	const { data } = useBlockNumberSubscription()

	return data?.chain_info?.[0]?.blockNumber ?? 0
}
