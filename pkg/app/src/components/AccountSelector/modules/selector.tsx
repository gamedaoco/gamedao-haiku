import { ExpandMore, ExpandLess, Verified } from '@mui/icons-material'
import { Avatar, Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useIdentityByAddress } from 'hooks/useIdentityByAddress'
import { avatarImageURL } from 'src/utils/avatars'
import { useExtensionContext } from 'providers/extension/modules/context'
import { getAccountName, shortAccountAddress } from 'src/utils/accountUtils'

interface ComponentProps {
	onClick: () => void
	open?: boolean
	flip?: boolean
	iconOnly?: boolean
}

export function Selector({ onClick, open, flip, iconOnly }: ComponentProps) {
	const { selectedAccount } = useExtensionContext()
	const theme = useTheme()
	const { identity } = useIdentityByAddress(selectedAccount?.account?.address)
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	if (!selectedAccount) {
		return null
	}

	if (!isMd) {
		return (
			<Avatar
				onClick={onClick}
				sx={{ width: '32px', height: '32px' }}
				src={avatarImageURL(selectedAccount?.account?.address)}
			/>
		)
	}

	return (
		<Stack
			onClick={onClick}
			direction="row"
			alignItems="center"
			spacing={2}
			sx={{
				overflow: 'hidden',
				borderRadius: '0.5rem',
				borderBottomLeftRadius: '2rem',
				borderTopLeftRadius: '2rem',
				opacity: 1,
				transitionDuration: '150ms',
				transitionProperty: 'opacity',
				'&:hover': {
					cursor: 'pointer',
					opacity: 1,
				},
			}}
		>
			<Stack
				direction="row"
				alignItems="center"
				spacing={2}
				sx={{
					borderBottomRightRadius: '0.5rem',
					borderTopRightRadius: '0.5rem',
				}}
			>
				<Avatar sx={{ width: 32, height: 32 }} src={avatarImageURL(selectedAccount?.account?.address)} />
				{!iconOnly && (
					<Stack>
						<Typography variant="micro">
							{identity?.display_name || getAccountName(selectedAccount?.account)}&nbsp;
							{identity?.display_name && <Verified sx={{ verticalAlign: 'top' }} fontSize={'inherit'} />}
						</Typography>
						<Stack direction="row" alignItems="center" spacing={1} pr={2}>
							<Typography variant="micro">{shortAccountAddress(selectedAccount?.account)}</Typography>
						</Stack>
					</Stack>
				)}
			</Stack>
			{/*<Box display="grid">{open ? <ExpandLess /> : <ExpandMore />}</Box>*/}
		</Stack>
	)
}
