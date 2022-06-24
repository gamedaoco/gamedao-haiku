import { useCallback } from 'react'

import { Check, Verified } from '@mui/icons-material'
import { Avatar, Button, Card, Skeleton, Stack, Typography } from '@mui/material'
import { useIdentityByAddress } from 'hooks/useIdentityByAddress'
import md5 from 'md5'
import { useExtensionContext } from 'provider/extension/modules/context'
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
		<Card variant="primary" sx={{ maxWidth: '312px' }} onClick={handleCopyAddress}>
			<Stack p={{ xs: 3, sm: 3.5 }} justifyContent="" direction="row" alignItems="center">
				{loading && <Skeleton variant="rectangular" height="3rem" width={'100%'} />}
				{!loading && (
					<>
						<Avatar
							sx={{
								width: { md: '48px !important' },
								height: { md: '48px !important' },
							}}
							src={
								identity?.email
									? `https://www.gravatar.com/avatar/${md5(identity?.email)}`
									: 'https://picsum.photos/200'
							}
						/>
						<Stack>
							<Typography variant="subtitle2">{getAccountName(accountState?.account)}</Typography>
							<Stack direction="row" alignItems="center" spacing={0.5} pr={2}>
								{identity?.email && <Verified color="disabled" />}
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
