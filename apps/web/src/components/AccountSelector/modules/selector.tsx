import { useCallback, useEffect, useState } from 'react'

import { useSession } from 'next-auth/react'
import { useAppContext } from 'src/providers/app/modules/context'

import { useBalanceByAddress } from 'src/hooks/useBalanceByAddress'

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
	const balances = useBalanceByAddress(address)

	const accountState = useCurrentAccountState()
	const { identity } = useIdentityByAddress(address)

	const [imageUrl, setImageUrl] = useState(null)
	const [displayName, setDisplayName] = useState(null)
	const [addressShort, setAddressShort] = useState(null)

	const [fx, setFx] = useState({ zero: 0.1, game: 0.6, play: 1 })

	useEffect(() => {
		if (!user && !address) return
		if (address) setAddressShort(shortHash(address))

		const userName =
			identity?.display_name || // on chain display name
			user?.name /*session?.user?.name*/ || // user name derived from discord
			getNameFromAccountState(accountState) || // wallet account name
			'anonymous'
		setDisplayName(userName)

		// TODO: sort out uuid flow, so we don't need to do this goofy selection
		// goal should be to have uuid, no matter if user signed in via message signing, discord, etc
		if (user?.uuid || user?.address || address) setImageUrl(avatarImageURL(user?.uuid || user?.address || address))
	}, [session, identity, user, accountState, address])

	const VerifiedBadge = () =>
		identity?.display_name ? (
			<Verified sx={{ ml: '5px', verticalAlign: 'top' }} fontSize="inherit" color="inherit" />
		) : null

	const ScreenName = () => (
		<Typography variant="subtitle2" color="white">
			{displayName}
			<VerifiedBadge />
		</Typography>
	)

	const handleCopyAddress = useCallback(() => {
		navigator.clipboard.writeText(address) // .then(() => createInfoNotification(t('notification:info:address_copied')))
	}, [address])

	// if (!isMd) {
	// 	return (
	// 		<Avatar onClick={handleCopyAddress} sx={{ width: '48px', height: '48px' }} src={avatarImageURL(address)} />
	// 	)
	// }

	const [line, setLine] = useState(0)
	const handleClickLine = () => setLine(line < 2 ? line + 1 : 0)
	const InfoLine = () => {
		if (!balances || !address) return null
		switch (line) {
			case 0:
				// fiat balance
				const balance =
					Math.round(
						balances[0].free * fx.zero + balances[2].free * fx.game + balances[1].free * fx.play * 100,
					) / 100
				return `${balance} EUR`
				break
			case 1: // network balances
				return `${Math.round(balances[0].free * 100) / 100} ${balances[0].tokenSymbol} · ${balances[2].free} ${
					balances[2].tokenSymbol
				}`
				break
			case 2: // wallet address
				return addressShort
				break
		}
	}

	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="center"
			spacing={2}
			sx={{
				overflow: 'hidden',
				width: !isMd ? '100%' : 'auto',
				// WebkitFilter: 'drop-shadow( 0 5px 10px rgba(0,0,0,1) )',
				// filter: 'drop-shadow( 0 5px 10px rgba(0,0,0,1) )',
				// backgroundBlendMode: 'multiply',
			}}
		>
			<Avatar
				sx={{
					width: '48px',
					height: '48px',
					transitionDuration: '250ms',
					':hover': { backgroundColor: '#11111133' },
					':active': { backgroundColor: '#ffffff99' },
				}}
				src={imageUrl}
				onClick={handleCopyAddress}
			/>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				spacing={2}
				sx={{ width: !isMd ? '100%' : 'auto' }}
			>
				<Stack>
					<Typography variant="subtitle2" color="white" sx={{ whiteSpace: 'nowrap', userSelect: 'none' }}>
						{displayName}
						<VerifiedBadge />
					</Typography>
					<Typography sx={{ color: theme.palette.grey[500], mb: 0 }} variant="caption">
						<Box
							onClick={handleClickLine}
							sx={{
								width: '100%',
								userSelect: 'none',
								transitionDuration: '250ms',
								color: '#ffffff66',
								':hover': { color: '#ffffff99' },
								':active': { color: '#ffffffff' },
							}}
						>
							<InfoLine />
						</Box>
					</Typography>
				</Stack>
				<Button onClick={onClick} sx={{ minWidth: 'auto' }}>
					<ExpandMore />
				</Button>
			</Stack>
		</Stack>
	)
}
