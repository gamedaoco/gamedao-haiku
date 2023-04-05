import { useEffect, useState, useCallback } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { ENVIRONMENT } from 'src/constants'
import { AppContext } from 'src/providers/app/modules/context'

import { useApiProviderConfigQuery, useConfigQuery, useFeaturesQuery } from 'src/queries'
import { useGetIdentityByDiscordQuery, useConnectIdentityMutation } from 'src/queries'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useCurrentAccountState } from 'src/hooks/useCurrentAccountState'

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
	const [bpid, setBpid] = useState<string>(null)
	const [processing, setProcessing] = useState<boolean>(false)
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
		if (!session.user.discord || user.discord === session?.user?.discord) return
		console.log('================================================================')
		console.log('app', 'connect', 'discord ->', session.user.discord)
		// setDiscord(session?.user?.discord)
		const updateUser = {
			...user,
			discord: session?.user?.discord,
			twitter: session?.user?.twitter,
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
				variables: { discord: user.discord, name: user.name, email: user.email, twitter: user.twitter },
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
		if (!user.address || !user.uuid) return
		console.log('user', user)
		const update = async () => {
			console.log('app', 'writing address...', user.address, 'for', user.uuid)
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
			console.log('link address', user, adr)
			if (user.address) {
				console.log('app', 'already linked')
				return
			}
			if (!user.address && user.uuid) {
				console.log('app', 'linking address...', adr)
				// setAddress(adr)
				setUser({ ...user, address: adr })
			} else {
				console.log('app', 'linking address rejected.')
			}
		},
		[user],
	)

	const linkBpid = useCallback(
		(id) => {
			console.log('set bpid', bpid, id)
			setBpid(id)
		},
		[bpid],
	)

	const [twa, setTwa] = useState<boolean>(false)
	const setTwitterAuthorized = useCallback((authorized) => {
		console.log('set twitter authorized', authorized)
		setTwa(authorized)
	}, [])

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

	const flush = async () => {
		console.log('kill session')
		await signOut({ callbackUrl: '/' })
		setUser(initialUserState)
		setConnected(false)
		console.log('reset complete')
	}

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
				linkBpid: linkBpid,
				bpid: bpid,
				processing: processing,
				setProcessing: setProcessing,
				twa: twa,
				setTwitterAuthorized: setTwitterAuthorized,
				flush: flush,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
