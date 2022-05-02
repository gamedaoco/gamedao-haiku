import { useExtensionContext } from 'provider/extension/modules/context'
import { useNetworkContext } from 'provider/network/modules/context'
import { useCallback } from 'react'
import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { PromiseMsg } from 'src/@types/promiseMsg'

export function useTransaction(): (
	tx: SubmittableExtrinsic,
	msg: PromiseMsg,
	callback?: (state, result) => void,
) => void {
	const { selectedApiProvider } = useNetworkContext()
	const { signAndNotify, selectedAccount } = useExtensionContext()

	return useCallback(
		(tx: SubmittableExtrinsic, msg: PromiseMsg, callback?: (state, result) => void) => {
			return signAndNotify(selectedApiProvider.apiProvider, selectedAccount, tx, msg, callback)
		},
		[selectedApiProvider, signAndNotify, selectedApiProvider],
	)
}
