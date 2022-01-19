import { useExtensionContext } from 'src/provider/extension/modules/context'
import { Button, IconButton, MenuItem, Paper, Select, SelectChangeEvent, Stack } from '@mui/material'
import { FavoriteBorder, Logout } from '@mui/icons-material'
import { AccountState } from 'src/@types/extension'
import { getAccountName, getAddressFromAccountState } from 'src/utils/accountUtils'
import { useCallback } from 'react'

export function AccountSelector() {
	const { w3Enabled, selectedAccount, accounts, connectWallet, disconnectWallet, selectAccount } =
		useExtensionContext()

	// Change selected account
	const handleAccountChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			const address = event?.target?.value
			const newAccountState = accounts?.find(
				(accountState) => getAddressFromAccountState(accountState) === address,
			)
			if (newAccountState) {
				selectAccount(newAccountState)
			}
		},
		[selectAccount, accounts],
	)

	const handleCopyAddress = useCallback(() => {
		navigator.clipboard.writeText(getAddressFromAccountState(selectedAccount))
	}, [selectedAccount])

	// Show connect button
	if (w3Enabled === false) {
		return (
			<Button variant={'text'} onClick={connectWallet as any}>
				Connect
			</Button>
		)
	}

	// Show account selector
	if (selectedAccount) {
		return (
			<Paper>
				<Stack direction="row" alignItems="center">
					<IconButton size="small" aria-label="disconnect" onClick={handleCopyAddress}>
						<FavoriteBorder />
					</IconButton>
					<Select value={getAddressFromAccountState(selectedAccount)} onChange={handleAccountChange}>
						{accounts?.map((accountState: AccountState) => {
							const address = getAddressFromAccountState(accountState)
							return (
								<MenuItem value={address} key={address}>
									{getAccountName(accountState?.account)}
								</MenuItem>
							)
						})}
					</Select>
					<IconButton size="small" aria-label="disconnect" onClick={disconnectWallet as any}>
						<Logout />
					</IconButton>
				</Stack>
			</Paper>
		)
	}

	return null
}
