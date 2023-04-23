import { useCallback, useMemo } from 'react'

import Check from '@mui/icons-material/CheckOutlined'
import Verified from '@mui/icons-material/Verified'
import { Avatar, Button, Card, Skeleton, Stack, Typography } from '@mui/material'
import { useIdentityByAddress } from 'src/hooks/useIdentityByAddress'
import md5 from 'md5'
import { useExtensionContext } from 'src/providers/extension/modules/context'
import type { AccountState } from 'src/@types/extension'
import { getAccountName, getAddressFromAccountState, shortAccountAddress } from 'src/utils/accountUtils'
import { createInfoNotification } from 'src/utils/notificationUtils'

interface ComponentProps {
	accountState: AccountState
	active?: boolean
	selectable?: boolean
	callback: () => void
}

export function AccountCard({ accountState, active, selectable, callback }: ComponentProps) {
	const { accounts, selectAccount, selectedAccount } = useExtensionContext()
	const { identity, loading } = useIdentityByAddress(accountState?.account?.address)
	const avatarHash = useMemo(() => md5(getAddressFromAccountState(accountState)), [accountState])

	const handleCopyAddress = useCallback(() => {
		// TODO: Add i18n
		navigator.clipboard
			.writeText(getAddressFromAccountState(selectedAccount))
			.then(() => createInfoNotification('Address Copied to Clipboard'))
	}, [selectedAccount])

	const handleButtonClick = useCallback(
		(event) => {
			event.stopPropagation()

			if (selectable) {
				const address = accountState.account.address
				const newAccountState = accounts?.find(
					(accountState) => getAddressFromAccountState(accountState) === address,
				)
				if (newAccountState) {
					selectAccount(newAccountState)
					callback()
				}
			} else {
				callback()
			}
		},
		[selectAccount, accounts, accountState, callback, selectable],
	)

	if (!accountState) {
		return null
	}

	return (
		<Card sx={{ maxWidth: '312px', boxShadow: 'none' }} onClick={handleCopyAddress}>
			<Stack p={{ xs: 3, sm: 3.5 }} justifyContent="" direction="row" alignItems="center">
				{
					// loading && <Skeleton variant="rectangular" height="3rem" width={'100%'} />
				}
				{!loading && (
					<>
						<Avatar
							sx={{
								// WTF!!!1!?!?
								width: { md: '48px !important' },
								height: { md: '48px !important' },
							}}
							src={
								identity?.email
									? `https://avatars.dicebear.com/api/pixel-art/${md5(identity?.email)}.svg`
									: `https://avatars.dicebear.com/api/pixel-art/${avatarHash}.svg`
							}
						/>
						<Stack>
							<Typography variant="h6">
								{getAccountName(accountState?.account)}
								&nbsp;
								{identity?.email && (
									<Verified sx={{ verticalAlign: 'middle' }} fontSize="small" color="disabled" />
								)}
							</Typography>
							<Stack direction="row" alignItems="center" spacing={0.5} pr={2}>
								<Typography variant="body2">{shortAccountAddress(accountState?.account)}</Typography>
							</Stack>
						</Stack>
						{active ? (
							<Check sx={{ display: 'block', marginLeft: 'auto !important' }} />
						) : (
							accounts?.length > 1 && (
								<Button
									onClick={handleButtonClick as any}
									variant="outlined"
									sx={{ marginLeft: 'auto !important' }}
								>
									<Typography variant="body2">{selectable ? 'Select' : 'Change'}</Typography>
								</Button>
							)
						)}
					</>
				)}
			</Stack>
		</Card>
	)
}
