import { useCallback, useEffect, useState } from 'react'

import { useSession } from 'next-auth/react'
import { useAppContext } from 'src/providers/app/modules/context'

import { shortHash, getNameFromAccountState } from 'src/utils/accountUtils'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useCurrentAccountState } from 'src/hooks/useCurrentAccountState'
import { useIdentityByAddress } from 'src/hooks/useIdentityByAddress'

import { useTheme } from '@mui/material/styles'
import { Button, Avatar, Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { ExpandMore, Verified } from '@mui/icons-material'
import { avatarImageURL } from 'src/utils/avatars'

interface IComponentProps {
	onClick: () => void
}

export function Selector({ onClick }: IComponentProps) {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), { defaultMatches: true })

	const { user } = useAppContext()
	const { data: session } = useSession()

	const address = useCurrentAccountAddress()
	const accountState = useCurrentAccountState()
	const { identity } = useIdentityByAddress(address)

	const [imageUrl, setImageUrl] = useState(null)
	const [displayName, setDisplayName] = useState(null)
	const [addressShort, setAddressShort] = useState(null)

	useEffect(() => {
		if (!user && !address) return
		if (address) setAddressShort(shortHash(address))

		const userName =
			identity?.display_name || user?.name /*session?.user?.name*/ || getNameFromAccountState(accountState)

		setDisplayName(userName)
		if (address || user?.uuid) {
			setImageUrl(avatarImageURL(address || user?.uuid))
		}
	}, [session, identity, user, accountState, address])

	const VerifiedBadge = () =>
		identity?.display_name ? <Verified sx={{ verticalAlign: 'top' }} fontSize="inherit" color="inherit" /> : null

	const handleCopyAddress = useCallback(() => {
		navigator.clipboard.writeText(address) // .then(() => createInfoNotification(t('notification:info:address_copied')))
	}, [address])

	// if (!isMd) {
	// 	return (
	// 		<Avatar onClick={handleCopyAddress} sx={{ width: '48px', height: '48px' }} src={avatarImageURL(address)} />
	// 	)
	// }

	return (
		<Stack
			direction="row"
			alignItems="center"
			spacing={2}
			sx={{
				overflow: 'hidden',
				width: !isMd ? '100%' : 'auto',
				// WebkitFilter: 'drop-shadow( 0 5px 10px rgba(0,0,0,1) )',
				// filter: 'drop-shadow( 0 5px 10px rgba(0,0,0,1) )',
				// backgroundBlendMode: 'multiply',
			}}
		>
			<Avatar sx={{ width: '48px', height: '48px' }} src={imageUrl} onClick={handleCopyAddress} />
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				spacing={2}
				onClick={onClick}
				sx={{ width: !isMd ? '100%' : 'auto' }}
			>
				<Stack>
					<Typography variant="subtitle2" color="white">
						{displayName}
						&nbsp;
						<VerifiedBadge />
					</Typography>
					<Stack direction="row" alignItems="center" spacing={1} pr={2}>
						<Typography sx={{ color: theme.palette.grey[500] }} variant="body2" onClick={handleCopyAddress}>
							{addressShort}
						</Typography>
					</Stack>
				</Stack>
				<Box display="grid">
					<ExpandMore />
				</Box>
			</Stack>
		</Stack>
	)
}