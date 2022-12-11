import { Fragment, useEffect } from 'react'

import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useExtensionContext } from 'providers/extension/modules/context'

import { BaseDialog } from 'components/BaseDialog/baseDialog'
import { WalletCard } from 'components/WalletDialog/modules/walletCard'

import { Button, Paper, Stack, Typography } from '@mui/material'

import { useSession, signIn, signOut } from 'next-auth/react'

export const Web2Connect = () => {
	const { data: session } = useSession()
	const { selectedAccount } = useExtensionContext()

	//

	const url = `https://discord.com/api/oauth2/authorize?client_id=1049953821536833536&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=identify%20email`

	if (session) console.log(session.user.email)

	if (session && !selectedAccount)
		return (
			<Stack>
				<Typography>Signed in as {session.user.email}</Typography>
				<Button variant="outlined" size="small" onClick={() => signOut()}>
					Sign out
				</Button>
			</Stack>
		)

	return (
		<Stack pb={2}>
			<a href={url} rel="noreferrer">
				<Button variant="outlined" size="small">
					Connect with discord
				</Button>
			</a>
		</Stack>
	)
	//
}

interface ComponentProps {
	callback: (extensionName: string) => {}
	open: boolean
	onClose: () => void
}

export function WalletDialog({ open, callback, onClose }: ComponentProps) {
	const { supportedWallets, allSupportedWallets } = useExtensionContext()
	const theme = useTheme()

	useEffect(() => {
		if (open && supportedWallets?.length === 1) {
			// Automatically use the 1st wallet if only one is available
			callback(supportedWallets[0].extensionName)
		}
	}, [supportedWallets, open, callback])

	// No There is no wallet available
	if (!allSupportedWallets?.length) {
		return null
	}

	const redirect_url = process.env
		.NEXT_PUBLIC_VERCEL_URL`https://discord.com/api/oauth2/authorize?client_id=1049953821536833536&redirect_uri=${encodeURI(
		process.env.NEXT_PUBLIC_VERCEL_URL,
	)}%2Fapi%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=identify%20email`

	return (
		<BaseDialog title="" open={open} onClose={onClose}>
			<Typography
				variant="h4"
				sx={{
					background: '-webkit-linear-gradient(45deg, #ffcc00 30%, #ffff99 90%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					fontWeight: 800,
				}}
			>
				Get started: Connect with your socials
			</Typography>
			<Grid
				display={'grid'}
				gridTemplateColumns="repeat(auto-fit, minmax(300px, 500px))"
				justifyContent="space-around"
				gap={'1rem'}
				maxWidth={{ xs: 'auto', md: '50vw', lg: theme.breakpoints.values.lg }}
			>
				<Fragment key={'discord'}>
					<WalletCard
						imageSrc={
							'https://repository-images.githubusercontent.com/486722660/7ef9a610-b65a-48b7-ba4a-f4da081b90ad'
						}
						name={'Discord'}
						url={redirect_url}
						connectable={true}
					/>
				</Fragment>
				<Fragment key={'twitter'}>
					<WalletCard
						imageSrc={'https://avatars.githubusercontent.com/u/50278?s=200&v=4'}
						name={'Twitter'}
						url={`https://discord.com/api/oauth2/authorize?client_id=1049953821536833536&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=identify%20email`}
						connectable={true}
					/>
				</Fragment>
			</Grid>
			<Typography
				variant="h4"
				sx={{
					background: '-webkit-linear-gradient(45deg, #ff00cc 30%, #ff9900 90%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					fontWeight: 800,
				}}
			>
				Full control: Connect with your web3 wallet
			</Typography>
			<Grid
				display={'grid'}
				gridTemplateColumns="repeat(auto-fit, minmax(300px, 500px))"
				justifyContent="space-around"
				gap={'1rem'}
				maxWidth={{ xs: 'auto', md: '50vw', lg: theme.breakpoints.values.lg }}
			>
				{allSupportedWallets.map((wallet) => {
					return (
						<Fragment key={wallet.extensionName}>
							<WalletCard
								imageSrc={wallet.logo?.src}
								name={wallet.title || wallet.extensionName}
								url={wallet.installUrl}
								callback={() => callback(wallet.extensionName)}
								connectable={wallet.installed}
							/>
						</Fragment>
					)
				})}
			</Grid>
		</BaseDialog>
	)
}
