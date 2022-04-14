import { Avatar, Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { useExtensionContext } from 'provider/extension/modules/context'
import { useEffect, useState } from 'react'
import { createErrorNotification } from 'src/utils/notificationUtils'
import { ExpandMore, Verified } from '@mui/icons-material'
import { useIdentityByAddressLazyQuery } from '@gamedao-haiku/graphql/dist'
import type { Identity } from '@gamedao-haiku/graphql/dist/types'
import md5 from 'md5'
import { getAccountName, shortAccountAddress } from 'src/utils/accountUtils'
import { useTheme } from '@mui/material/styles'

interface ComponentProps {
	onClick: () => void
}

export function Selector({ onClick }: ComponentProps) {
	const { selectedAccount } = useExtensionContext()
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const [identityState, setIdentityState] = useState<Identity>(null)
	const [queryIdentity, { data, error, loading }] = useIdentityByAddressLazyQuery()

	useEffect(() => {
		if (selectedAccount?.account) {
			queryIdentity({ variables: { address: selectedAccount.account.address } })
		}
	}, [selectedAccount])

	useEffect(() => {
		if (data?.identities?.length >= 1) {
			setIdentityState(data.identities.slice()[0] as any)
		}
	}, [data])

	useEffect(() => {
		if (error) {
			console.error(error)
			createErrorNotification('Identity could not be loaded ')
		}
	}, [error])

	if (!selectedAccount) {
		return null
	}

	if (!isMd) {
		return (
			<Avatar
				onClick={onClick}
				sx={{ width: '48px', height: '48px' }}
				src={
					identityState?.email
						? `https://www.gravatar.com/avatar/${md5(identityState?.email)}`
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
						identityState?.email
							? `https://www.gravatar.com/avatar/${md5(identityState?.email)}`
							: 'https://picsum.photos/200'
					}
				/>
				<Stack>
					<Typography color="secondary" variant="subtitle2">
						{getAccountName(selectedAccount?.account)}
					</Typography>
					<Stack direction="row" alignItems="center" spacing={1}>
						<Verified color="secondary" />
						<Typography color="secondary" variant="body2">
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
