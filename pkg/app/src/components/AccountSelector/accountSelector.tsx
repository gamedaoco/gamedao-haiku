import { Fragment, useCallback, useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useAppContext } from 'providers/app/modules/context'
import { useExtensionContext } from 'providers/extension/modules/context'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useConnectIdentityMutation } from 'src/queries'

import { Box, Button, useMediaQuery, useTheme, Stack } from '@mui/material'

import { Flyout } from 'components/AccountSelector/modules/flyout'
import { Selector } from 'components/AccountSelector/modules/selector'
import { SelectAccountDialog } from 'components/SelectAccountDialog/selectAccountDialog'
import { SelectNetworkDialog } from 'components/SelectNetworkDialog/selectNetworkDialog'

import Logout from '@mui/icons-material/Logout'

export function AccountSelector() {
	const { w3Enabled, selectedAccount, connectWallet, supportedWallets } = useExtensionContext()
	const currentAddress = useCurrentAccountAddress()
	const { data: session } = useSession()
	const { user } = useAppContext()

	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const { t } = useTranslation()

	const [flyoutOpenState, setFlyoutOpenState] = useState<boolean>(false)
	const [accountSelectOpenState, setAccountSelectOpenState] = useState<boolean>(false)
	const [networkSelectOpenState, setNetworkSelectOpenState] = useState<boolean>(false)

	const anchorRef = useRef(null)

	const handleToggleFlyout = useCallback(() => {
		setFlyoutOpenState(!flyoutOpenState)
	}, [flyoutOpenState, setFlyoutOpenState])

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

	if (!session && !selectedAccount)
		return (
			<Box width="100%">
				<Button
					variant="outlined"
					size="medium"
					fullWidth={!isMd ? true : false}
					onClick={connectWallet as any}
				>
					Connect
				</Button>
			</Box>
		)

	return (
		<Box ref={anchorRef}>
			<Stack direction="row" alignItems="center" spacing={2}>
				<Selector onClick={handleToggleFlyout} />

				{/*
				{(session || selectedAccount) && (
					<Button size="medium" onClick={() => signOut()}>
						<Logout />
					</Button>
				)}
*/}
			</Stack>
			{/*
			<SelectAccountDialog open={accountSelectOpenState} onClose={handleCloseAccountSelect} />
			<SelectNetworkDialog open={networkSelectOpenState} onClose={handleCloseNetworkSelect} />
		*/}
			<Flyout
				anchorEl={anchorRef?.current}
				open={flyoutOpenState}
				handleClose={handleCloseFlyout}
				openAccountSelect={handleOpenAccountSelect}
				openNetworkSelect={handleOpenNetworkSelect}
				connectWallet={connectWallet}
			/>
		</Box>
	)

	return null
}
