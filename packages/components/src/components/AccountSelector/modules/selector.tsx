import { useCallback, useEffect, useState } from 'react'

import { useSession } from 'next-auth/react'
import { useAppContext } from 'src/providers/app/modules/context'

import { useBalanceByAddress } from 'src/hooks/useBalanceByAddress'
import { formatBalanceString } from 'src/utils/balance'

import { shortHash, getNameFromAccountState } from 'src/utils/accountUtils'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useCurrentAccountState } from 'src/hooks/useCurrentAccountState'
import { useIdentityByAddress } from 'src/hooks/useIdentityByAddress'

import { useTheme } from '@mui/material/styles'
import { Button, Avatar, Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { ExpandMore, Verified } from '@mui/icons-material'
import { avatarImageURL } from 'src/utils/avatars'

import REPIcon from '@mui/icons-material/FavoriteBorder'
import XPIcon from '@mui/icons-material/EmojiEventsOutlined'
import TIcon from '@mui/icons-material/ShieldOutlined'

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
	const [sense, setSense] = useState({ xp: 9000, rep: 1337, t: 42 })
	const [imageUrl, setImageUrl] = useState(null)
	const [displayName, setDisplayName] = useState(null)
	const [addressShort, setAddressShort] = useState(null)

	const [fx, setFx] = useState({ zero: 0.1, game: 0.6, play: 1 })

	useEffect(() => {
		if (!user && !address) return
		if (address) setAddressShort(shortHash(address))

		const userName =
			identity?.displayName || // on chain display name
			user?.name /*session?.user?.name*/ || // user name derived from discord
			getNameFromAccountState(accountState) || // wallet account name
			'anonymous'
		setDisplayName(userName)

		// TODO: sort out uuid flow, so we don't need to do this goofy selection
		// goal should be to have uuid, no matter if user signed in via message signing, discord, etc
		if (user?.uuid || user?.address || address) setImageUrl(avatarImageURL(user?.uuid || user?.address || address))
	}, [session, identity, user, accountState, address])

	const VerifiedBadge = () =>
		identity?.displayName ? (
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

	// TODO: normalize and interpolate balances
	// const [ displayBalances, setDisplayBalances ] = useState([])
	// useEffect(() => {
	// 	const defaultBalances = [
	// 		{ tokenSymbol: 'ZERO', free: 0, locked: 0, reserved: 0 },
	// 		{ tokenSymbol: 'PLAY', free: 0, locked: 0, reserved: 0 },
	// 		{ tokenSymbol: 'GAME', free: 0, locked: 0, reserved: 0 },
	// 		{ tokenSymbol: 'EUR', free: 0, locked: 0, reserved: 0 },
	// 	]
	// },[balances])

	const [line, setLine] = useState(0)
	const handleClickLine = () => setLine(line < 4 ? line + 1 : 0)
	const InfoLine = () => {
		if (!balances || !address) return null

		switch (line) {
			case 0:
				// fiat balance
				const balance = Math.round(
					(balances[0]?.free || 0) * fx.zero +
						(balances[1]?.free || 0) * fx.play +
						(balances[2]?.free || 0) * fx.game,
				).toFixed(2)
				return `${balance} EUR`
				break
			case 1: // network balances
				return `${(balances[0]?.free || 0).toFixed(2)} ${balances[0]?.tokenSymbol || 'ZERO'} · ${(
					balances[2]?.free || 0
				).toFixed(2)} ${balances[2]?.tokenSymbol || 'GAME'}`
				break
			case 2: // stable balances
				return `${(balances[1]?.free || 0).toFixed(2)} ${balances[1]?.tokenSymbol || 'PLAY'}`
				break
			case 3: // wallet address
				return (
					<>
						{sense.xp}
						{` `}
						<XPIcon fontSize="inherit" sx={{ mt: '-2px', verticalAlign: 'middle' }} />
						{` · `}
						{sense.rep}
						{` `}
						<REPIcon fontSize="inherit" sx={{ mt: '-2px', verticalAlign: 'middle' }} />
						{` · `}
						{sense.t}
						{` `}
						<TIcon fontSize="inherit" sx={{ mt: '-2px', verticalAlign: 'middle' }} />
					</>
				)
				break
			case 4: // XP REP TRUST
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
					transition: '250ms ease-in-out',
					':hover': { backgroundColor: '#111111cc' },
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
								minWidth: '176px',
								userSelect: 'none',
								transition: '250ms ease-in-out',
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
