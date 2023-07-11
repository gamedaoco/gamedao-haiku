import { ApiPromise } from '@polkadot/api'
import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import type { ISubmittableResult } from '@polkadot/types/types'
import { to } from 'await-to-js'
import { TFunction } from 'i18next'
import { AccountState } from 'src/@types/extension'
import { PromiseMsg } from 'src/@types/promiseMsg'
import {
	createErrorNotification,
	createPromiseNotification,
	createSuccessNotification,
} from 'src/utils/notificationUtils'

export async function SignAndNotify(
	ApiProvider: ApiPromise,
	accountState: AccountState,
	tx: SubmittableExtrinsic,
	msg: PromiseMsg,
	callback?: (state: boolean, result: ISubmittableResult) => void,
	t?: TFunction,
) {
	const promise = new Promise(async (resolve, reject) => {
		if (!ApiProvider) {
			createErrorNotification('No valid network connections was found')
			if (callback) callback(false, null)
			return reject()
		}
		if (!accountState?.account?.address || !accountState?.signer) {
			createErrorNotification('No valid signer was found')
			if (callback) callback(false, null)
			return reject()
		}

		const [error] = await to(
			tx.signAndSend(accountState.account.address, { nonce: -1, signer: accountState.signer }, (result) => {
				if (result.status.isFinalized) {
					let hasError = false
					result.events
						.filter(({ event }) => ApiProvider.events.system.ExtrinsicFailed.is(event))
						.forEach(
							({
								event: {
									data: [error, info],
								},
							}) => {
								hasError = true
								if ((error as any).isModule) {
									const decoded = ApiProvider.registry.findMetaError((error as any).asModule)
									const { docs, method, section } = decoded
									const docsMessage = docs.join(' ')
									const translationMessage = t
										? t(`notification:transactions:errors:${section}:${method}`)
										: null
									const errorMessage = translationMessage || docsMessage
									console.log(
										`Wallet Transaction Result : LOG ${section}.${method}: ${[
											translationMessage,
											docsMessage,
										].join('; ')}`,
									)
									createErrorNotification(
										`${section}.${method}${errorMessage ? ': ' + errorMessage : ''}.`,
									)
								} else {
									// Other, CannotLookup, BadOrigin, no extra info
									console.log('Wallet Transaction Result:', error.toString())
									createErrorNotification(error.toString())
								}
							},
						)

					if (hasError) {
						if (callback) callback(false, result)
						return reject()
					} else {
						createSuccessNotification(`${result.txHash}`)
						if (callback) callback(true, result)
						return resolve('')
					}
				}
			}),
		)

		if (error) {
			console.log('Transaction failed:', error)
			createErrorNotification(error.message)
			if (callback) callback(false, null)
			return reject()
		}
	})

	await createPromiseNotification(promise, msg.pending, msg.success, msg.error)
}
