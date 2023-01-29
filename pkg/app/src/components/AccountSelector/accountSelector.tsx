import { useCallback, useRef, useState, useEffect } from 'react'

// session management
import { useSession, signIn, signOut } from 'next-auth/react'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useGetIdentityByDiscordQuery } from 'src/queries'
import { useConnectIdentityMutation } from 'src/queries'

//
import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useExtensionContext } from 'src/providers/extension/modules/context'

import { Flyout } from 'components/AccountSelector/modules/flyout'
import { Selector } from 'components/AccountSelector/modules/selector'
import { SelectAccountDialog } from 'components/SelectAccountDialog/selectAccountDialog'
import { SelectNetworkDialog } from 'components/SelectNetworkDialog/selectNetworkDialog'

export function AccountSelector() {
	const { w3Enabled, selectedAccount, connectWallet, supportedWallets } = useExtensionContext()

	// session + user handling

	const [connected, setConnected] = useState(false)

	const currentAddress = useCurrentAccountAddress()
	const { data: session } = useSession()
	const [uuid, setUuid] = useState(null)
	const [address, setAddress] = useState(null)
	const [discord, setDiscord] = useState(null)

	const [user, setUser] = useState({ uuid: uuid, address: address, discord: discord })
	const [connectIdentityMutation, { data }] = useConnectIdentityMutation({ variables: { discord } })

	// get discord id
	useEffect(() => {
		if (!session) return
		if (!session.user.discord) return
		setDiscord(session.user.discord)
		setConnected(true)
		// console.log('connecting', session.user.discord, '...')
		const connect = async () => {
			const response = await connectIdentityMutation().then((res) => {
				console.log('connection', res)
			})
		}
		connect().catch(console.error)
	}, [session])

	// 	console.log(`================================================================`)
	// 	console.log(uuid, discord, address)
	// 	console.log(`================================================================`)

	useEffect(() => {
		if (connected) console.log(`connected`, connected)
	}, [connected])

	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const { t } = useTranslation()
	const [flyoutOpenState, setFlyoutOpenState] = useState<boolean>(false)
	const [accountSelectOpenState, setAccountSelectOpenState] = useState<boolean>(false)
	const [networkSelectOpenState, setNetworkSelectOpenState] = useState<boolean>(false)
	const anchorRef = useRef(null)

	// Change selected account
	const handleOpenFlyout = useCallback(() => {
		setFlyoutOpenState(true)
	}, [setFlyoutOpenState])

	const handleCloseFlyout = useCallback(() => {
		setFlyoutOpenState(false)
	}, [setFlyoutOpenState])

	const handleOpenAccountSelect = useCallback(() => {
		setAccountSelectOpenState(true)
	}, [setAccountSelectOpenState])

	const handleCloseAccountSelect = useCallback(() => {
		setAccountSelectOpenState(false)
	}, [setAccountSelectOpenState])

	const handleOpenNetworkSelect = useCallback(
		(event) => {
			event.stopPropagation()
			setNetworkSelectOpenState(true)
		},
		[setNetworkSelectOpenState],
	)

	const handleCloseNetworkSelect = useCallback(() => {
		setNetworkSelectOpenState(false)
	}, [setNetworkSelectOpenState])

	// Show connect button
	if (w3Enabled === false || selectedAccount === null) {
		return isMd ? (
			<Button variant="outlined" size="medium" onClick={connectWallet as any}>
				Sign in
			</Button>
		) : (
			<Box width="100%">
				<Button variant="outlined" size="medium" fullWidth={true} onClick={connectWallet as any}>
					Sign in
				</Button>
			</Box>
		)
	}

	// Show account selector
	if (selectedAccount) {
		return (
			<>
				<Box ref={anchorRef}>
					<Selector onClick={handleOpenFlyout} />
				</Box>
				<Flyout
					anchorEl={anchorRef?.current}
					open={flyoutOpenState}
					handleClose={handleCloseFlyout}
					openAccountSelect={handleOpenAccountSelect}
					openNetworkSelect={handleOpenNetworkSelect}
				/>
				<SelectAccountDialog open={accountSelectOpenState} onClose={handleCloseAccountSelect} />
				<SelectNetworkDialog open={networkSelectOpenState} onClose={handleCloseNetworkSelect} />
			</>
		)
	}

	return null
}
