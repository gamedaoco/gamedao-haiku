import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import md5 from 'md5'

import { AccountTabs } from 'constants/account'

import type { Identity } from 'src/queries'
import { useIdentityByAddressSubscription } from 'src/queries'

import { getAddressFromAccountState, getNameFromAccountState, shortAccountAddress } from 'src/utils/accountUtils'
import { createInfoNotification } from 'src/utils/notificationUtils'

import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useIdentityByAddress } from 'hooks/useIdentityByAddress'

import Verified from '@mui/icons-material/Verified'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import FavoriteIcon from '@mui/icons-material/FavoriteBorder'
import EmojiEventsIcon from '@mui/icons-material/EmojiEventsOutlined'
import ShieldIcon from '@mui/icons-material/ShieldOutlined'
import {
	PanoramaFishEyeOutlined as Dashboard, // or DashboardOutlined
	CastleOutlined as Folder, // or AccountBalanceOutlined
	Logout,
	MoreVert,
	ExtensionOutlined as NotificationsNone, //or CategoryOultined
	Fingerprint as Identity,
	SettingsOutlined as Settings,
	SportsEsportsOutlined as Topic,
} from '@mui/icons-material'

import { Avatar, Box, Button, Chip, Grid, IconButton, Typography, Stack } from '@mui/material'

export function Header() {
	const { push } = useRouter()
	const { t } = useTranslation()

	const address = useCurrentAccountAddress()

	// subscribe to identity
	const { loading, data, error } = useIdentityByAddressSubscription({
		variables: { address: address },
	})
	const [identity, setIdentity] = useState<Identity>(data?.identity_by_pk)

	useEffect(() => {
		if (!data?.identity_by_pk || data?.identity_by_pk === identity) return
		setIdentity(data?.identity_by_pk)
	}, [data?.identity_by_pk])

	const avatarHash = useMemo(() => md5(address), [address])

	const accountState = useCurrentAccountState()

	const handleCopyAddress = useCallback(() => {
		navigator.clipboard.writeText(address).then(() => createInfoNotification(t('notification:info:address_copied')))
	}, [address, t])

	return (
		<Grid container justifyContent="space-between" spacing={[2, 4]}>
			<Grid item sx={{ alignItems: { sm: 'top', md: 'center' }, display: 'flex', overflow: 'hidden' }}>
				<Avatar
					sx={{ height: { md: 48, sx: 24 }, mr: 2, width: { md: 48, sx: 24 } }}
					src={
						identity?.email
							? `https://avatars.dicebear.com/api/pixel-art/${md5(identity?.email)}.svg`
							: `https://avatars.dicebear.com/api/pixel-art/${avatarHash}.svg`
					}
				/>
				<Box>
					<Typography variant="h6">
						{identity?.display_name || getNameFromAccountState(accountState)}&nbsp;
						{identity?.display_name && <Verified sx={{ verticalAlign: 'middle' }} fontSize="10px" />}
					</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						{shortAccountAddress(accountState?.account)}
						<IconButton aria-label="copy" onClick={handleCopyAddress}>
							<ContentCopyIcon fontSize="small" />
						</IconButton>
					</Box>
				</Box>
			</Grid>
			<Grid
				item
				sx={{
					alignItems: {
						sm: 'middle',
						md: 'center',
					},
					display: 'flex',
				}}
			></Grid>
		</Grid>
	)
}
