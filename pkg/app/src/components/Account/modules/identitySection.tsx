import React, { useCallback } from 'react'

import { useRouter } from 'next/router'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Avatar, Box, Button, Chip, Grid, IconButton, Typography } from '@mui/material'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useIdentityByAddress } from 'hooks/useIdentityByAddress'
import md5 from 'md5'
import { useExtensionContext } from 'provider/extension/modules/context'
import { AccountTabs } from 'src/@types/account'
import { getAddressFromAccountState, getNameFromAccountState, shortAccountAddress } from 'src/utils/accountUtils'
import { createInfoNotification } from 'src/utils/notificationUtils'

export function IdentitySection() {
	const { push } = useRouter()
	const accountState = useCurrentAccountState()
	const handleButtonClick = useCallback(() => {
		push(`/account/${AccountTabs.IDENTITY}`)
	}, [push])
	const { selectedAccount } = useExtensionContext()
	const { identity } = useIdentityByAddress(selectedAccount?.account?.address)
	const avatarHash = md5(selectedAccount?.account?.address)
	const handleCopyAddress = useCallback(() => {
		// TODO: Add i18n
		navigator.clipboard
			.writeText(getAddressFromAccountState(accountState))
			.then(() => createInfoNotification('Address Copied to Clipboard'))
	}, [accountState])

	return (
		<Grid container justifyContent="space-between" spacing={3}>
			<Grid
				item
				sx={{
					alignItems: {
						sm: 'top',
						md: 'center',
					},
					display: 'flex',
					overflow: 'hidden',
				}}
			>
				<Avatar
					sx={{
						height: {
							md: 128,
							sx: 48,
						},
						mr: 2,
						width: {
							md: 128,
							sx: 48,
						},
					}}
					src={
						identity?.email
							? `https://avatars.dicebear.com/api/pixel-art-neutral/${md5(identity?.email)}.svg`
							: `https://avatars.dicebear.com/api/pixel-art-neutral/${avatarHash}.svg`
					}
				/>
				<div>
					<Typography sx={{ typography: { sm: 'body1', md: 'h4' } }} fontWeight="700">
						{getNameFromAccountState(accountState)}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Chip label={shortAccountAddress(accountState?.account)} size="medium" />
						<IconButton aria-label="copy" onClick={handleCopyAddress}>
							<ContentCopyIcon fontSize="small" />
						</IconButton>
					</Box>
					<Button
						sx={{
							mt: 1,
							px: 5,
						}}
						style={{ borderRadius: 50 }}
						variant="contained"
						onClick={handleButtonClick}
					>
						Set On-Chain Identity
					</Button>
				</div>
			</Grid>
		</Grid>
	)
}
