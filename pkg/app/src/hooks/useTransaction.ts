import { useCallback } from 'react'

import type { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import type { ISubmittableResult } from '@polkadot/types/types'
import { useExtensionContext } from 'provider/extension/modules/context'
import { useNetworkContext } from 'provider/network/modules/context'
import type { PromiseMsg } from 'src/@types/promiseMsg'

export function useTransaction(): (
	tx: SubmittableExtrinsic,
	msg: PromiseMsg,
	callback?: (state: boolean, result: ISubmittableResult) => void,
) => void {
	const { selectedApiProvider } = useNetworkContext()
	const { signAndNotify, selectedAccount } = useExtensionContext()

	return useCallback(
		(
			tx: SubmittableExtrinsic,
			msg: PromiseMsg,
			callback?: (state: boolean, result: ISubmittableResult) => void,
		) => {
			return signAndNotify(selectedApiProvider.apiProvider, selectedAccount, tx, msg, callback)
		},
		[signAndNotify, selectedApiProvider.apiProvider, selectedAccount],
	)
}
