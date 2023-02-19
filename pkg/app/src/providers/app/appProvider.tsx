import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { ENVIRONMENT } from 'src/constants'
import { AppContext } from 'providers/app/modules/context'

import { useApiProviderConfigQuery, useConfigQuery, useFeaturesQuery } from 'src/queries'
import { useGetIdentityByDiscordQuery, useConnectIdentityMutation } from 'src/queries'

const initialUserState = { uuid: null, address: null, discord: null }
const initialContext = { dapp: null, id: null }

export function AppProvider({ children }) {
	// session + user handling
	// resolve uuid and persist in app state
	const context = initialContext

	const { data: session } = useSession()
	const [connected, setConnected] = useState(false)

	const [uuid, setUuid] = useState(null)
	const [address, setAddress] = useState(null)
	const [discord, setDiscord] = useState(null)
	const [twitter, setTwitter] = useState(null)
	const [user, setUser] = useState({ uuid: uuid, address: address, discord: discord })

	const [connectIdentityMutation] = useConnectIdentityMutation({ variables: { discord } })

	// get discord id
	useEffect(() => {
		if (!session) return
		if (!session.user.discord) return
		console.log('app', 'set discord', session.user.discord)
		setDiscord(session?.user?.discord)
	}, [session])

	// get uuid
	useEffect(() => {
		if (!discord) return
		console.log('app', 'connecting', discord, twitter, '...')

		const connect = async () => {
			const response = await connectIdentityMutation().then((res) => {
				try {
					const _uuid = res?.data?.BattlepassBot?.identity?.uuid
					console.log('app', 'uuid ->', _uuid)

					const _user = {
						discord: discord,
						twitter: twitter,
						address: address,
						uuid: _uuid,
					}
					console.log('app', 'user ->', _user)
					setUser(_user)
					setUuid(_uuid)
				} catch (e) {
					console.log(e)
				}
			})
		}
		connect()
		setConnected(true)
	}, [session, discord])

	// rm uuid when session is null
	useEffect(() => {
		if (session) {
			console.log('app', 'found a session', session, uuid)
		} else {
			console.log('app', 'no session, rm uuid')
			setUuid(null)
			setUser(initialUserState)
		}
	}, [session])

	// ping back when connected
	useEffect(() => {
		if (connected) console.log('app', `connected`, connected)
	}, [connected])

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
				context: context,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
