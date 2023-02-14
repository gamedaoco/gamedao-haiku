import { useCallback } from 'react'
import md5 from 'md5'

import { useExtensionContext } from 'providers/extension/modules/context'
import { useIdentityByAddress } from 'hooks/useIdentityByAddress'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { getAccountName, shortAccountAddress, getNameFromAccountState } from 'src/utils/accountUtils'

import { ExpandMore, Verified } from '@mui/icons-material'
import { Avatar, Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { avatarImageURL } from 'utils/avatars'

interface ComponentProps {
	onClick: () => void
}

export function Selector({ onClick }: ComponentProps) {
	const { selectedAccount } = useExtensionContext()
	const {
		selectedAccount: {
			account: { address },
		},
	} = useExtensionContext()
	const theme = useTheme()
	const { identity } = useIdentityByAddress(selectedAccount?.account?.address)
	const accountState = useCurrentAccountState()

	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const handleCopyAddress = useCallback(() => {
		navigator.clipboard.writeText(address).then(() => console.log('address copied!')) //createInfoNotification(t('notification:info:address_copied')))
	}, [address])

	if (!selectedAccount) {
		return null
	}

	if (!isMd) {
		return (
			<Avatar onClick={handleCopyAddress} sx={{ width: '48px', height: '48px' }} src={avatarImageURL(address)} />
		)
	}

	return (
		<Stack
			direction="row"
			alignItems="center"
			spacing={2}
			sx={{
				overflow: 'hidden',
				borderRadius: '0.5rem',
				borderBottomLeftRadius: '2rem',
				borderTopLeftRadius: '2rem',
			}}
		>
			<Avatar sx={{ width: '48px', height: '48px' }} src={avatarImageURL(address)} onClick={handleCopyAddress} />
			<Stack
				direction="row"
				alignItems="center"
				spacing={2}
				onClick={onClick}
				sx={{
					borderBottomRightRadius: '0.5rem',
					borderTopRightRadius: '0.5rem',
				}}
			>
				<Stack>
					<Typography variant="subtitle2">
						{identity?.display_name || getNameFromAccountState(accountState)}
						&nbsp;
						{identity?.display_name && (
							<Verified sx={{ verticalAlign: 'top' }} fontSize="inherit" color="disabled" />
						)}
					</Typography>
					<Stack direction="row" alignItems="center" spacing={1} pr={2}>
						<Typography sx={{ color: theme.palette.grey[700] }} variant="body2">
							{shortAccountAddress(selectedAccount?.account)}
						</Typography>
					</Stack>
				</Stack>
			</Stack>
			<Box display="grid">
				<ExpandMore />
			</Box>
			<Box />
		</Stack>
	)
}
