import { ExpandMore, Verified } from '@mui/icons-material'
import { Avatar, Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useIdentityByAddress } from 'hooks/useIdentityByAddress'
import md5 from 'md5'
import { useExtensionContext } from 'provider/extension/modules/context'
import { getAccountName, shortAccountAddress } from 'src/utils/accountUtils'

interface ComponentProps {
	onClick: () => void
}

export function Selector({ onClick }: ComponentProps) {
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
				sx={{ width: '48px', height: '48px' }}
				src={
					identity?.email
						? `https://www.gravatar.com/avatar/${md5(identity?.email)}`
						: 'https://picsum.photos/200'
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
				border: `2px solid ${theme.palette.text.primary}`,
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
					border: `2px solid ${theme.palette.text.primary}`,
					backgroundColor: theme.palette.text.primary,
					borderBottomRightRadius: '0.5rem',
					borderTopRightRadius: '0.5rem',
				}}
			>
				<Avatar
					sx={{ width: '48px', height: '48px' }}
					src={
						identity?.email
							? `https://www.gravatar.com/avatar/${md5(identity?.email)}`
							: 'https://picsum.photos/200'
					}
				/>
				<Stack>
					<Typography sx={{ color: theme.palette.grey[700] }} variant="subtitle2">
						{getAccountName(selectedAccount?.account)}
					</Typography>
					<Stack direction="row" alignItems="center" spacing={1} pr={2}>
						{identity?.email && <Verified color="secondary" />}
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
