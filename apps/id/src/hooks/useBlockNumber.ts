import { useBlockNumberSubscription } from 'src/queries'

export function useBlockNumber(): number {
	const { data } = useBlockNumberSubscription()

	return data?.chainInfo?.[0]?.blockNumber ?? 0
}
