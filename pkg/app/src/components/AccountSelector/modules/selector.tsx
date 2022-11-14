import { ExpandMore, ExpandLess, Verified } from '@mui/icons-material'
import { Avatar, Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useIdentityByAddress } from 'hooks/useIdentityByAddress'
import md5 from 'md5'
import { useExtensionContext } from 'providers/extension/modules/context'
import { getAccountName, shortAccountAddress } from 'src/utils/accountUtils'

interface ComponentProps {
	onClick: () => void
	open?: boolean
}

export function Selector({ onClick, open }: ComponentProps) {
	const { selectedAccount } = useExtensionContext()
	const theme = useTheme()
	const { identity } = useIdentityByAddress(selectedAccount?.account?.address)
	const avatarHash = md5(selectedAccount?.account?.address)

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
				sx={{ width: '48px', height: '48px' }}
				src={
					identity?.email
						? `https://avatars.dicebear.com/api/pixel-art/${md5(identity?.email)}.svg`
						: `https://avatars.dicebear.com/api/pixel-art/${avatarHash}.svg`
				}
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
				<Avatar
					sx={{ width: '48px', height: '48px' }}
					src={
						identity?.email
							? `https://avatars.dicebear.com/api/pixel-art/${md5(identity?.email)}.svg`
							: `https://avatars.dicebear.com/api/pixel-art/${avatarHash}.svg`
					}
				/>
				<Stack>
					<Typography variant="subtitle2">
						{getAccountName(selectedAccount?.account)}
						&nbsp;
						{identity?.email && (
							<Verified sx={{ verticalAlign: 'middle' }} fontSize="small" color="disabled" />
						)}
					</Typography>
					<Stack direction="row" alignItems="center" spacing={1} pr={2}>
						<Typography sx={{ color: theme.palette.grey[700] }} variant="body2">
							{shortAccountAddress(selectedAccount?.account)}
						</Typography>
					</Stack>
				</Stack>
			</Stack>
			<Box display="grid">{open ? <ExpandLess /> : <ExpandMore />}</Box>
			<Box />
		</Stack>
	)
}
