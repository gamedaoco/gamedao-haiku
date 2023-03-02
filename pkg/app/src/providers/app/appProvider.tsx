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
	const [user, setUser] = useState<TAppUser>(initialUserState)
	const [connected, setConnected] = useState(false)

	const [connectIdentityMutation] = useConnectIdentityMutation({
		variables: {
			uuid: user.uuid,
			address: user.address,
			discord: user.discord,
			twitter: user.twitter,
		},
	})

	useEffect(() => {
		if (!session || connected) return
		if (!session.user.discord) return
		console.log('================================================================')
		console.log('app', 'connect', 'discord ->', session.user.discord)
		// setDiscord(session?.user?.discord)
		const updateUser = {
			...user,
			discord: session?.user?.discord,
			name: session?.user?.name,
			email: session?.user?.email,
		}
		setUser(updateUser)
	}, [session])

	useEffect(() => {
		if (!session || connected) return
		if (!session.user.twitter) return
		console.log('================================================================')
		console.log('app', 'connect', 'twitter ->', session.user.twitter)
		// setTwitter(session?.user?.twitter)
		const updateUser = {
			...user,
			discord: session?.user?.twitter_id,
			name: session?.user?.name,
			email: session?.user?.email,
		}
		setUser(updateUser)
	}, [session])

	useEffect(() => {
		if (!session || connected) return
		if (!user.discord && !user.address) return

		const connect = async () => {
			console.log('================================================================')
			console.log('app', 'fetching id', '...')

			const response = await connectIdentityMutation({
				variables: { discord: user.discord, name: user.name, email: user.email || null },
			}).then((res) => {
				try {
					const identity = res?.data?.BattlepassBot?.identity
					console.log('app', 'identity', '->', identity)
					const updateUser = {
						...user,
						uuid: identity.uuid,
						address: identity.address,
						discord: identity.discord,
						twitter: identity.twitter,
						name: identity.name,
						email: identity.email,
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

	useEffect(() => {
		if (connected) console.log('\napp', `connected`, connected)
	}, [connected])

	useEffect(() => {
		if (connected && !session) {
			console.log('================================================================')
			console.log('app', 'disconnected, rm uuid')
			setUser(initialUserState)
			setConnected(false)
		}
	}, [session, connected])

	useEffect(() => {
		if (!user.address) return

		console.log('user', user)

		const update = async () => {
			console.log('app', 'writing address...', user.address)
			const res = await connectIdentityMutation({
				variables: {
					uuid: user.uuid,
					address: user.address,
				},
			}).then((res) => {
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
			console.log('link address', user, adr)

			if (user.address) {
				console.log('app', 'already linked')
				return
			}
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
			'\nemail',
			user.email,
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
