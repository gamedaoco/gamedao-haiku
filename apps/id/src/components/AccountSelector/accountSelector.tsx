import { Box, Button, useMediaQuery, useTheme, Stack } from '@mui/material'
import { useSession } from 'next-auth/react'
import { useCallback, useRef, useState } from 'react'
import { Flyout } from 'src/components/AccountSelector/modules/flyout'
import { Selector } from 'src/components/AccountSelector/modules/selector'
import { useExtensionContext } from 'src/providers/extension/modules/context'

export function AccountSelector() {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const { data: session } = useSession()
	const { selectedAccount, connectWallet } = useExtensionContext()

	const anchorRef = useRef(null)
	const [flyoutOpenState, setFlyoutOpenState] = useState<boolean>(false)
	const handleToggleFlyout = useCallback(() => {
		setFlyoutOpenState(!flyoutOpenState)
	}, [flyoutOpenState, setFlyoutOpenState])
	const handleCloseFlyout = useCallback(() => {
		setFlyoutOpenState(false)
	}, [setFlyoutOpenState])

	return !session && !selectedAccount ? (
		<Box width="100%">
			<Button variant="outlined" size="medium" fullWidth={!isMd ? true : false} onClick={connectWallet as any}>
				Sign in
			</Button>
		</Box>
	) : (
		<Box ref={anchorRef}>
			<Stack direction="row" alignItems="center" spacing={2}>
				<Selector onClick={handleToggleFlyout} />
			</Stack>
			<Flyout
				anchorEl={anchorRef?.current}
				open={flyoutOpenState}
				handleClose={handleCloseFlyout}
				connectWallet={connectWallet as any}
			/>
		</Box>
	)
}
