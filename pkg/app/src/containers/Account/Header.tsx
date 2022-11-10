import React, { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import md5 from 'md5'

import { AccountTabs } from 'src/@types/account'

import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useIdentityByAddress } from 'hooks/useIdentityByAddress'

import { getAddressFromAccountState, getNameFromAccountState, shortAccountAddress } from 'src/utils/accountUtils'
import { createInfoNotification } from 'src/utils/notificationUtils'

import Verified from '@mui/icons-material/Verified'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Avatar, Box, Button, Chip, Grid, IconButton, Typography, Stack } from '@mui/material'

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
import FavoriteIcon from '@mui/icons-material/FavoriteBorder'
import EmojiEventsIcon from '@mui/icons-material/EmojiEventsOutlined'
import ShieldIcon from '@mui/icons-material/ShieldOutlined'

export function Header() {
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
		<Grid container justifyContent="space-between" spacing={[2, 4]}>
			<Grid item sx={{ alignItems: { sm: 'top', md: 'center' }, display: 'flex', overflow: 'hidden' }}>
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
				<Box>
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
			>
				<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2.5, pr: 3 }}>
					<Avatar variant="achievement">
						<EmojiEventsIcon />
					</Avatar>
					<Typography fontWeight="700">9000 XP</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2, pr: 3 }}>
					<Avatar variant="achievement">
						<FavoriteIcon />
					</Avatar>
					<Typography fontWeight="700">1337 Reputation</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 3 }}>
					<Avatar variant="achievement">
						<ShieldIcon />
					</Avatar>
					<Typography fontWeight="700">42 Trust</Typography>
				</Box>
			</Grid>
		</Grid>
	)
}
