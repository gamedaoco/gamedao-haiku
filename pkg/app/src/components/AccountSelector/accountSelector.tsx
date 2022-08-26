import { useCallback, useRef, useState } from 'react'

import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useExtensionContext } from 'src/provider/extension/modules/context'

import { Flyout } from 'components/AccountSelector/modules/flyout'
import { Selector } from 'components/AccountSelector/modules/selector'
import { SelectAccountDialog } from 'components/SelectAccountDialog/selectAccountDialog'
import { SelectNetworkDialog } from 'components/SelectNetworkDialog/selectNetworkDialog'

export function AccountSelector() {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const { w3Enabled, selectedAccount, connectWallet, supportedWallets } = useExtensionContext()
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
			<Button variant="outlined" color="primary" size="small" onClick={connectWallet as any}>
				{t('button:ui:connect_wallet')}
			</Button>
		) : (
			<Box width="100%">
				<Button variant="outlined" size="small" fullWidth={true} onClick={connectWallet as any}>
					{t('button:ui:connect_wallet')}
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
