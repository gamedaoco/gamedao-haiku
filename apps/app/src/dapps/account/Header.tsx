import React, { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import md5 from 'md5'
import { useAppContext } from 'src/providers/app/modules/context'

import { AccountTabs } from 'src/constants/account'

import { useExtensionContext } from 'src/providers/extension/modules/context'
import { useCurrentAccountState } from 'src/hooks/useCurrentAccountState'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useIdentityByAddress } from 'src/hooks/useIdentityByAddress'

import { getAddressFromAccountState, getNameFromAccountState, shortAccountAddress } from 'src/utils/accountUtils'
import { createInfoNotification } from 'src/utils/notificationUtils'
import { avatarImageURL } from 'src/utils/avatars'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Verified from '@mui/icons-material/Verified'
import { Avatar, Box, Button, Chip, Grid, IconButton, Typography } from '@mui/material'

export function Header() {
	const { push } = useRouter()
	const { t } = useTranslation()

	const address = useCurrentAccountAddress()
	const { identity } = useIdentityByAddress(address)
	const accountState = useCurrentAccountState()
	const { user } = useAppContext()

	const handleButtonClick = useCallback(() => {
		push(`/account/${AccountTabs.IDENTITY}`)
	}, [push])

	const handleCopyAddress = useCallback(() => {
		navigator.clipboard.writeText(address).then(() => createInfoNotification(t('notification:info:address_copied')))
	}, [address, t])

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
							md: 48,
							sx: 24,
						},
						mr: 2,
						width: {
							md: 48,
							sx: 24,
						},
					}}
					src={avatarImageURL(user?.uuid || user?.address || address)}
				/>
				<div>
					<Typography variant="h6">
						{identity?.display_name || getNameFromAccountState(accountState)}&nbsp;
						{identity?.display_name && <Verified sx={{ verticalAlign: 'top' }} fontSize="inherit" />}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						{shortAccountAddress(accountState?.account)}
						<IconButton aria-label="copy" onClick={handleCopyAddress}>
							<ContentCopyIcon fontSize="small" />
						</IconButton>
					</Box>
					{/*
					<Button
						size="xs"
						variant="outlined"
						onClick={handleButtonClick}
					>
						{t('button:navigation:set_on_chain_identity')}
					</Button>
*/}
				</div>
			</Grid>
		</Grid>
	)
}
