import { createContext, useContext, useEffect, useState } from 'react'
import { useStore } from './Store'
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { web3FromSource } from '@polkadot/extension-dapp'
import { ISubmittableResult, Signer } from '@polkadot/types/types'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { to } from 'await-to-js'
import { createErrorNotification, createPromiseNotification } from 'src/utils/notification'
import { useApiProvider } from '@substra-hooks/core'

export type WalletState = {
	allowConnect: boolean
	address: string
	account: InjectedAccountWithMeta
	connected: boolean
	signer: Signer
	updateWalletState: Function
	signAndNotify: (
		tx: SubmittableExtrinsic<'promise', ISubmittableResult>,
		msg: SignMSG,
		callback?: Function
	) => void
}

export type SignMSG = {
	success: string
	error: string
	pending: string
}

const INITIAL_STATE: WalletState = {
	allowConnect: false,
	address: null,
	account: null,
	connected: false,
	signer: null,
	updateWalletState: () => {},
	signAndNotify: () => {},
}

const WalletContext = createContext<WalletState>(INITIAL_STATE)
const useWallet = () => useContext<WalletState>(WalletContext)

const WalletProvider = ({ children }) => {
	const [state, setState] = useState<WalletState>(INITIAL_STATE)
	const { allowConnection } = useStore()
	const ApiProvider = useApiProvider()

	const handleUpdateWalletState = (stateData) => {
		setState({ ...state, ...stateData })
	}

	const handleSignAndNotify = async (
		tx: SubmittableExtrinsic<'promise', ISubmittableResult>,
		msg: SignMSG,
		callback?: Function
	) => {
		const promise = new Promise(async (resolve, reject) => {
			if (!state.address || !state.signer) {
				createErrorNotification('No valid signer was found')
				if (callback) callback(false)
				return reject()
			}
			const [error] = await to(
				tx.signAndSend(state.address, { signer: state.signer }, (result) => {
					console.log('🚀 ~ file: Wallet.tsx ~ line 64 ~ tx.signAndSend ~ result', result)

					if (result.status.isFinalized) {
						let hasError = false
						result.events
							// find/filter for failed events
							.filter(({ event }) =>
								ApiProvider.events.system.ExtrinsicFailed.is(event)
							)
							// we know that data for system.ExtrinsicFailed is
							// (DispatchError, DispatchInfo)
							.forEach(
								({
									event: {
										data: [error, info],
									},
								}) => {
									hasError = true
									if ((error as any).isModule) {
										// for module errors, we have the section indexed, lookup
										const decoded = ApiProvider.registry.findMetaError(
											(error as any).asModule
										)
										const { docs, method, section } = decoded

										console.log(
											`Wallet Transaction Result : LOG ${section}.${method}: ${docs.join(
												' '
											)}`
										)

										createErrorNotification(docs.join(' '))
									} else {
										// Other, CannotLookup, BadOrigin, no extra info
										console.log('Wallet Transaction Result:', error.toString())
									}
								}
							)

						result.events.forEach(
							({ event: { data, method, section, meta, typeDef } }) => {
								console.log(
									'Wallet Transaction Result:',
									method,
									section,
									data.toHuman(),
									meta.toHuman(),
									typeDef
								)
							}
						)

						if (hasError) {
							if (callback) callback(false, result)
							return reject()
						} else {
							if (callback) callback(true, result)
							return resolve('')
						}
					}
				})
			)
			if (error) {
				console.log('Transaction failing with', error)
				if (callback) callback(false)
				return reject()
			}
		})

		const [errPRO, dataPRO] = await to(
			createPromiseNotification(promise, msg.pending, msg.success, msg.error)
		)
		// TODO Remove only for testing / debug
		console.log('🚀 ~ file: Wallet.tsx ~ line 79 ~ WalletProvider ~ dataPRO', dataPRO)
		console.log('🚀 ~ file: Wallet.tsx ~ line 79 ~ WalletProvider ~ errPRO', errPRO)
	}

	useEffect(() => {
		setState({ ...state, allowConnect: allowConnection })
	}, [allowConnection])

	useEffect(() => {
		if (state?.account?.meta?.source) {
			;(async () => {
				setState({
					...state,
					signer: (await web3FromSource(state.account.meta.source))?.signer,
					connected: true,
				})
			})()
		} else {
			setState({ ...state, signer: null, connected: false })
		}
	}, [state.account])

	return (
		<WalletContext.Provider
			value={{
				...state,
				updateWalletState: handleUpdateWalletState,
				signAndNotify: handleSignAndNotify,
			}}
		>
			{children}
		</WalletContext.Provider>
	)
}

export { WalletContext, WalletProvider, useWallet }
