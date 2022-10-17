import React, { useCallback, useMemo } from 'react'

import { useRouter } from 'next/router'

import Verified from '@mui/icons-material/Verified'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Avatar, Box, Button, Chip, Grid, IconButton, Typography } from '@mui/material'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useIdentityByAddress } from 'hooks/useIdentityByAddress'
import md5 from 'md5'
import { useTranslation } from 'react-i18next'
import { AccountTabs } from 'src/@types/account'
import { getAddressFromAccountState, getNameFromAccountState, shortAccountAddress } from 'src/utils/accountUtils'
import { createInfoNotification } from 'src/utils/notificationUtils'

export function IdentitySection() {
	const { push } = useRouter()
	const { t } = useTranslation()
	const accountState = useCurrentAccountState()
	const handleButtonClick = useCallback(() => {
		push(`/account/${AccountTabs.IDENTITY}`)
	}, [push])
	const { identity } = useIdentityByAddress(getAddressFromAccountState(accountState))
	const avatarHash = useMemo(() => md5(getAddressFromAccountState(accountState)), [accountState])

	const handleCopyAddress = useCallback(() => {
		navigator.clipboard
			.writeText(getAddressFromAccountState(accountState))
			.then(() => createInfoNotification(t('notification:info:address_copied')))
	}, [accountState, t])
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
					src={
						identity?.email
							? `https://avatars.dicebear.com/api/pixel-art/${md5(identity?.email)}.svg`
							: `https://avatars.dicebear.com/api/pixel-art/${avatarHash}.svg`
					}
				/>
				<div>
					<Typography variant="h6">
						{getNameFromAccountState(accountState)}&nbsp;
						{identity?.email && <Verified sx={{ verticalAlign: 'middle' }} fontSize="inherit" />}
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
