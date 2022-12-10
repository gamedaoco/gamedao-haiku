import { useCallback, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { Box, Stack, Button, useMediaQuery, Typography, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useExtensionContext } from 'src/providers/extension/modules/context'

import { Flyout } from './modules/flyout'
import { Selector } from './modules/selector'
// import { SelectAccountDialog } from 'components/SelectAccountDialog/selectAccountDialog'
// import { SelectNetworkDialog } from 'components/SelectNetworkDialog/selectNetworkDialog'

// import { useSession, signIn, signOut } from "next-auth/react"
// export const Connect = () => {

// 	const { data: session } = useSession()
// 	const { selectedAccount } = useExtensionContext()

// 	//

// 	const url = `https://discord.com/api/oauth2/authorize?client_id=1049953821536833536&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=identify%20email`

// 	if (session) console.log(session.user.email)

// 	if (session && !selectedAccount) return (
// 		<Stack>
// 			<Typography>Signed in as {session.user.email}</Typography>
// 			<Button variant="outlined" size="small" onClick={() => signOut()}>Sign out</Button>
// 		</Stack>
// 	)

// 	return (
// 		<Stack pb={2}>
// 			<a href={url} rel='noreferrer'>
// 				<Button variant="outlined" size="small">
// 					Connect with discord
// 				</Button>
// 			</a>
// 		</Stack>
// 	)
// 	//
// }

type TProps = {
	flip?: boolean
}

export function AccountSelector({ flip }: TProps) {
	const { t } = useTranslation()
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const { push } = useRouter()

	const session = false
	// const { data: session } = useSession()
	const { w3Enabled, selectedAccount, connectWallet, supportedWallets } = useExtensionContext()

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
	if ((!session && w3Enabled === false) || selectedAccount === null) {
		return isMd ? (
			<Stack>
				<Button variant="outlined" size="small" onClick={connectWallet as any}>
					Sign in
				</Button>
			</Stack>
		) : (
			<Box width="100%">
				<Button variant="outlined" size="medium" fullWidth onClick={connectWallet as any}>
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
					<Selector
						onClick={handleOpenFlyout}
						// onClick={ () => push(`/account`) }
						open={flyoutOpenState}
						flip={flip ? true : false}
					/>
				</Box>
				<Flyout
					anchorEl={anchorRef?.current}
					open={flyoutOpenState}
					handleClose={handleCloseFlyout}
					openAccountSelect={handleOpenAccountSelect}
					openNetworkSelect={handleOpenNetworkSelect}
				/>
				{/*				<SelectAccountDialog open={accountSelectOpenState} onClose={handleCloseAccountSelect} />
				<SelectNetworkDialog open={networkSelectOpenState} onClose={handleCloseNetworkSelect} />
*/}{' '}
			</>
		)
	}

	return null
}

export default AccountSelector
