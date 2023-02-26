import { useEffect, useState, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { ENVIRONMENT } from 'src/constants'
import { AppContext } from 'providers/app/modules/context'

import { useApiProviderConfigQuery, useConfigQuery, useFeaturesQuery } from 'src/queries'
import { useGetIdentityByDiscordQuery, useConnectIdentityMutation } from 'src/queries'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'

const initialUserState = { uuid: null, address: null, discord: null, twitter: null }
const initialContext = { dapp: null, id: null }

export type TAppUser = {
	uuid?: string
	address?: string
	discord?: string
	twitter?: string
	email?: string
	name?: string
}

export function AppProvider({ children }) {
	const context = initialContext

	const { data: session } = useSession()
	const [connected, setConnected] = useState(false)

	const [uuid, setUuid] = useState(null)
	const [address, setAddress] = useState(null)
	const [discord, setDiscord] = useState(null)
	const [twitter, setTwitter] = useState(null)
	const [email, setEmail] = useState(null)
	const [name, setName] = useState(null)

	const [user, setUser] = useState<TAppUser>({
		uuid: uuid,
		address: address,
		discord: discord,
		twitter: twitter,
		email: email,
		name: name,
	})
	const [connectIdentityMutation] = useConnectIdentityMutation({
		variables: {
			uuid: uuid,
			address: address,
			discord: discord,
			twitter: twitter,
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

	// useEffect(() => {
	// 	if (!session) return
	// 	if (!session.user.discord) return
	// 	console.log('app', 'discord ->', session.user.discord, session)
	// 	setDiscord(session?.user?.discord)
	// 	setEmail(session?.user?.email)
	// 	setName(session?.user?.name)
	// 	const updateUser = { ...user, discord: session?.user?.discord }
	// 	setUser(updateUser)
	// }, [session])

	useEffect(() => {
		if (!session || connected) return
		if (!session.user.discord) return
		console.log('================================')
		console.log('app', 'connect', 'discord ->', session.user.discord)
		setDiscord(session?.user?.discord)
		const updateUser = { ...user, discord: session?.user?.discord }
		setUser(updateUser)
	}, [session])

	useEffect(() => {
		if (!session || connected) return
		if (!session.user.twitter) return
		console.log('================================')
		console.log('app', 'connect', 'twitter ->', session.user.twitter)
		setTwitter(session?.user?.twitter)
		const updateUser = { ...user, discord: session?.user?.twitter_id }
		setUser(updateUser)
	}, [session])

	useEffect(() => {
		if (!session || connected) return
		if (!discord && !address && !uuid) return

		console.log('================================')
		console.log('app', 'connecting', '...')

		const connect = async () => {
			const response = await connectIdentityMutation().then((res) => {
				try {
					const identity = res?.data?.BattlepassBot?.identity

					console.log('app', 'session', session)
					console.log('app', 'identity', identity)
					console.log('app', 'uuid ->', identity.uuid)

					setUuid(identity.uuid)
					setAddress(identity.address)
					setDiscord(identity.discord)
					setTwitter(identity.twitter)
					setEmail(session.user.email)
					setName(session.user.name)

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
	}, [session, discord, uuid, address])

	//

	useEffect(() => {
		if (session) {
			// console.log('================================')
			// console.log('app', 'found a session', session, user)
		} else {
			if (connected) {
				// console.log('================================')
				// console.log('app', 'no session, rm uuid')
				setUuid(null)
				setUser(initialUserState)
				setConnected(false)
			}
		}
	}, [session])

	useEffect(() => {
		if (connected) console.log('\napp', `connected`, connected)
	}, [connected])

	useEffect(() => {
		if (!address) return
		const update = async () => {
			// console.log( 'app', 'writing address...', address )
			const res = await connectIdentityMutation().then((res) => {
				try {
					const _uuid = res?.data?.BattlepassBot?.identity?.address
					console.log('app', 'linked address', address)
				} catch (e) {
					console.log(e)
				}
			})
		}
		update()
	}, [address])

	const linkAddress = useCallback(
		(adr) => {
			if (user.address) return

			if (!user.address) {
				console.log('app', 'linking address...', adr)
				setAddress(adr)
				setUser({ ...user, address: adr })
			} else {
				console.log('app', 'linking address rejected.')
			}
		},
		[address],
	)

	useEffect(() => {
		if (!uuid && !discord) return
		console.log('\n================================')
		console.log(
			'app',
			'\nuuid',
			uuid,
			'\naddress',
			address,
			'\ndiscord',
			discord,
			'\ntwitter',
			twitter,
			'\nname',
			name,
		)
	}, [uuid, address, discord, twitter, name])

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
				uuid: uuid,
				user: user,
				linkAddress: linkAddress,
				context: context,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
