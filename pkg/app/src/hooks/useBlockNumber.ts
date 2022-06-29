import { useEffect, useRef, useState } from 'react'

import { useApiProvider } from 'hooks/useApiProvider'
import { unsubRef } from 'src/utils/hooks'

export function useBlockNumber(): number {
	const provider = useApiProvider()
	const unsubscribeRef = useRef(null)
	const [blockNumberState, setBlockNumberState] = useState<number>()

	useEffect(() => {
		unsubRef(unsubscribeRef)

		if (setBlockNumberState && provider?.apiProvider && provider.systemProperties) {
			provider.apiProvider.derive.chain
				.bestNumberFinalized((result) => {
					const data = result?.toNumber()
					setBlockNumberState(data ? data : null)
				})
				.then((unsub) => {
					unsubRef(unsubscribeRef)
					unsubscribeRef.current = unsub
				})
		}
	}, [provider, setBlockNumberState])

	return blockNumberState
}
