import React, { FC, useCallback } from 'react'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Avatar, Box, Button, Chip, Grid, IconButton, Typography } from '@mui/material'
import { useIdentityByAddress } from 'hooks/useIdentityByAddress'
import md5 from 'md5'
import { AccountTabs } from 'src/@types/account'
import { AccountState } from 'src/@types/extension'
import {
	getAddressFromAccountState,
	getInitials,
	getNameFromAccountState,
	shortAccountAddress,
} from 'src/utils/accountUtils'
import { createInfoNotification } from 'src/utils/notificationUtils'
import { useRouter } from 'next/router'

interface IdentitySectionProps {
	accountState: AccountState
}

const IdentitySection: FC<IdentitySectionProps> = ({ accountState }) => {
	const { push } = useRouter()
	const handleButtonClick = useCallback(() => {
		push(`/account/${AccountTabs.IDENTITY}`)
	}, [push])
	const { identity } = useIdentityByAddress(getAddressFromAccountState(accountState))
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
					src={
						identity?.email
							? `https://www.gravatar.com/avatar/${md5(identity?.email)}`
							: 'https://picsum.photos/200'
					}
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
						border: '3px gray solid',
					}}
				>
					{getInitials(getNameFromAccountState(accountState))}
				</Avatar>
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

export default IdentitySection
