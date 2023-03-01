import { useEffect, useState, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { ENVIRONMENT } from 'src/constants'
import { AppContext } from 'providers/app/modules/context'

import { useApiProviderConfigQuery, useConfigQuery, useFeaturesQuery } from 'src/queries'
import { useGetIdentityByDiscordQuery, useConnectIdentityMutation } from 'src/queries'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'

export type TAppContext = {
	dapp?: string
	bpid?: string
}
const initialContextState = { dapp: null, bpid: null }

export type TAppUser = {
	uuid?: string
	address?: string
	discord?: string
	twitter?: string
	email?: string
	name?: string
}
const initialUserState: TAppUser = {
	uuid: null,
	address: null,
	discord: null,
	twitter: null,
	email: null,
	name: null,
}

export function AppProvider({ children }) {
	const context = initialContextState

	const { data: session } = useSession()
	// const [uuid, setUuid] = useState(null)
	// const [address, setAddress] = useState(null)
	// const [discord, setDiscord] = useState(null)
	// const [twitter, setTwitter] = useState(null)
	// const [email, setEmail] = useState(null)
	// const [name, setName] = useState(null)
	const [user, setUser] = useState<TAppUser>(initialUserState)
	const [connected, setConnected] = useState(false)

	const [connectIdentityMutation] = useConnectIdentityMutation({
		variables: {
			uuid: user.uuid,
			address: user.address,
			discord: user.discord,
			twitter: user.twitter,
			// uuid: uuid,
			// address: address,
			// discord: discord,
			// twitter: twitter,
		},
	})

	// useEffect(() => {
	// 	if (!connectedAddress) return
	// 	console.log('app', 'account ->', connectedAddress, user.address)
	// 	if(!address) {
	// 		setAddress(connectedAddress)
	// 		setUser({ ...user, address: connectedAddress })
	// 	}
	// }, [connectedAddress, session])

	useEffect(() => {
		if (!session || connected) return
		if (!session.user.discord) return
		console.log('================================================================')
		console.log('app', 'connect', 'discord ->', session.user.discord)
		// setDiscord(session?.user?.discord)
		const updateUser = { ...user, discord: session?.user?.discord, name: session?.user?.name }
		setUser(updateUser)
	}, [session])

	useEffect(() => {
		if (!session || connected) return
		if (!session.user.twitter) return
		console.log('================================================================')
		console.log('app', 'connect', 'twitter ->', session.user.twitter)
		// setTwitter(session?.user?.twitter)
		const updateUser = { ...user, discord: session?.user?.twitter_id, name: session?.user?.name }
		setUser(updateUser)
	}, [session])

	useEffect(() => {
		if (!session || connected) return
		if (!user.discord && !user.address) return

		console.log('================================================================')
		console.log('app', 'connecting', '...')

		const connect = async () => {
			const response = await connectIdentityMutation({
				variables: { discord: user.discord, name: user.name },
			}).then((res) => {
				try {
					const identity = res?.data?.BattlepassBot?.identity

					// console.log('app', 'session', session)
					console.log('app', 'identity', identity)
					// console.log('app', 'uuid ->', identity?.uuid)

					// if (identity.uuid) setUuid(identity.uuid)
					// if (identity.address) setAddress(identity.address)
					// if (identity.discord) setDiscord(identity.discord)
					// if (identity.twitter) setTwitter(identity.twitter)
					// if (session.user.email) setEmail(session.user.email)
					// if (session.user.name) setName(session.user.name)

					const updateUser = {
						...user,
						uuid: identity.uuid,
						address: identity.address,
						discord: identity.discord,
						twitter: identity.twitter,
						name: identity.name,
					}

					console.log('app', 'user ->', updateUser)

					setUser(updateUser)
				} catch (e) {
					console.log(e)
				}
			})
		}
		connect()
		setConnected(true)
	}, [session, user])
	// }, [session, discord, uuid, address])

	//

	useEffect(() => {
		console.log('================================================================')
		if (session) {
			// console.log('app', 'found a session', session, user)
		} else {
			if (connected) {
				console.log('app', 'disconnected, rm uuid')
				// setUuid(null)
				setUser(initialUserState)
				setConnected(false)
			}
		}
	}, [session, connected])

	useEffect(() => {
		if (connected) console.log('\napp', `connected`, connected)
	}, [connected])

	useEffect(() => {
		if (!user.address) return
		const update = async () => {
			console.log('app', 'writing address...', user.address)
			const res = await connectIdentityMutation().then((res) => {
				try {
					const _uuid = res?.data?.BattlepassBot?.identity?.address
					console.log('app', 'linked address', user.address)
				} catch (e) {
					console.log(e)
				}
			})
		}
		update()
	}, [user.address])

	const linkAddress = useCallback(
		(adr) => {
			// already set
			console.log('app', 'already linked')
			if (user.address) return
			//
			if (!user.address) {
				console.log('app', 'linking address...', adr)
				// setAddress(adr)
				setUser({ ...user, address: adr })
			} else {
				console.log('app', 'linking address rejected.')
			}
		},
		[user.address],
	)

	useEffect(() => {
		if (!user.uuid && !user.discord) return
		console.log('================================================================')
		console.log(
			'app',
			'\nuuid',
			user.uuid,
			'\naddress',
			user.address,
			'\ndiscord',
			user.discord,
			'\ntwitter',
			user.twitter,
			'\nname',
			user.name,
		)
	}, [user])

	//
	//
	//
	//
	//

	//
	const configQueryResult = useConfigQuery({
		variables: { env: ENVIRONMENT },
	})

	const featureQueryResult = useFeaturesQuery({
		variables: { env: ENVIRONMENT },
	})

	const apiProviderConfigQueryResult = useApiProviderConfigQuery()

	useEffect(() => {
		if (configQueryResult.error) {
			console.error('The app config could not be retrieved', 'error', configQueryResult.error)
		}
	}, [configQueryResult.error])

	useEffect(() => {
		if (featureQueryResult.error) {
			console.error('The app features could not be retrieved', 'error', featureQueryResult.error)
		}
	}, [featureQueryResult.error])

	return (
		<AppContext.Provider
			value={{
				ready: !!configQueryResult.data && !!featureQueryResult.data && !!apiProviderConfigQueryResult.data,
				config: configQueryResult.data?.config ?? null,
				features: featureQueryResult.data?.features ?? null,
				apiProviderConfig: apiProviderConfigQueryResult.data?.apiProvider ?? null,
				uuid: user.uuid,
				user: user,
				linkAddress: linkAddress,
				context: context,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
