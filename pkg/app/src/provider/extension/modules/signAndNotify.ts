import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { AccountState } from 'src/@types/extension'
import { createErrorNotification, createPromiseNotification } from 'src/utils/notificationUtils'
import { to } from 'await-to-js'
import { ApiPromise } from '@polkadot/api'
import { PromiseMsg } from 'src/@types/promiseMsg'

export async function SignAndNotify(
	ApiProvider: ApiPromise,
	accountState: AccountState,
	tx: SubmittableExtrinsic,
	msg: PromiseMsg,
	callback?: (state, result) => void,
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
			tx.signAndSend(accountState.account.address, { signer: accountState.signer }, (result) => {
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
									console.log(
										`Wallet Transaction Result : LOG ${section}.${method}: ${docs.join(' ')}`,
									)

									createErrorNotification(docs.join(' '))
								} else {
									// Other, CannotLookup, BadOrigin, no extra info
									console.log('Wallet Transaction Result:', error.toString())
								}
							},
						)

					if (hasError) {
						if (callback) callback(false, result)
						return reject()
					} else {
						if (callback) callback(true, result)
						return resolve('')
					}
				}
			}),
		)
		if (error) {
			console.log('Transaction failing with', error)
			createErrorNotification(error.message)
			if (callback) callback(false, null)
			return reject()
		}
	})

	await createPromiseNotification(promise, msg.pending, msg.success, msg.error)
}
