import { useCallback, useRef, useState } from 'react'
import { useExtensionContext } from 'src/provider/extension/modules/context'
import { Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Flyout } from 'components/AccountSelector/modules/flyout'
import { Selector } from 'components/AccountSelector/modules/selector'
import { SelectAccountDialog } from 'components/SelectAccountDialog/selectAccountDialog'
import { SelectNetworkDialog } from 'components/SelectNetworkDialog/selectNetworkDialog'

export function AccountSelector() {
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

	const handleOpenAccountSelect = useCallback(
		(event) => {
			event.stopPropagation()
			setAccountSelectOpenState(true)
		},
		[setAccountSelectOpenState],
	)

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

	// There is no wallet available
	if (!supportedWallets?.length) {
		return null
	}
	// Show connect button
	if (w3Enabled === false) {
		return (
			<Button variant={'text'} onClick={connectWallet as any}>
				{t('button:ui:connect-wallet')}
			</Button>
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
