import type { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import type { ISubmittableResult } from '@polkadot/types/types'
import { TFunction } from 'i18next'
import { useCallback } from 'react'
import type { PromiseMsg } from 'src/@types/promiseMsg'
import { useExtensionContext } from 'src/providers/extension/modules/context'
import { useNetworkContext } from 'src/providers/network/modules/context'

export function useTransaction(): (
	tx: SubmittableExtrinsic,
	msg: PromiseMsg,
	callback?: (state: boolean, result: ISubmittableResult) => void,
	t?: TFunction,
) => void {
	const { selectedApiProvider } = useNetworkContext()
	const { signAndNotify, selectedAccount } = useExtensionContext()

	return useCallback(
		(
			tx: SubmittableExtrinsic,
			msg: PromiseMsg,
			callback?: (state: boolean, result: ISubmittableResult) => void,
			t?: TFunction,
		) => {
			return signAndNotify(selectedApiProvider.apiProvider, selectedAccount, tx, msg, callback, t)
		},
		[signAndNotify, selectedApiProvider?.apiProvider, selectedAccount],
	)
}
