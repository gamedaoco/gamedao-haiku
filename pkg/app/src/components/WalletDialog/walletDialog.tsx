import { Fragment, useEffect } from 'react'

import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useExtensionContext } from 'providers/extension/modules/context'

import { BaseDialog } from 'components/BaseDialog/baseDialog'
import { WalletCard } from 'components/WalletDialog/modules/walletCard'
import Device from 'components/Device'

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

	return (
		<BaseDialog title="Connect GameDAO" open={open} onClose={onClose}>
			<Typography
				variant="h4"
				sx={{
					background: '-webkit-linear-gradient(45deg, #ffcc00 30%, #ffff99 90%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					fontWeight: 800,
				}}
			>
				Get started and connect with your socials
			</Typography>
			<Grid
				display={'grid'}
				gridTemplateColumns={{ xs: '100%', lg: 'repeat(auto-fit, minmax(300px, 500px))' }}
				justifyContent="start"
				gap={'1rem'}
				maxWidth={{ xs: 'auto', lg: theme.breakpoints.values.lg }}
			>
				<Fragment key={'discord'}>
					<WalletCard
						imageSrc={
							'https://repository-images.githubusercontent.com/486722660/7ef9a610-b65a-48b7-ba4a-f4da081b90ad'
						}
						name={'Discord'}
						connectable={true}
						callback={() => signIn('discord')}
					/>
				</Fragment>
				{/* <Fragment key={'twitter'}>
					<WalletCard
						imageSrc={'https://avatars.githubusercontent.com/u/50278?s=200&v=4'}
						name={'Twitter'}
						connectable={true}
						callback={() => signIn('twitter')}
					/>
				</Fragment> */}
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
				gridTemplateColumns={{ xs: '100%', lg: 'repeat(auto-fit, minmax(300px, 500px))' }}
				justifyContent="space-around"
				gap={'1rem'}
				maxWidth={{ xs: 'auto', lg: theme.breakpoints.values.lg }}
			>
				{allSupportedWallets.map((wallet) => {
					return (
						<Device key={wallet.extensionName}>
							{({ isMobile }) => {
								console.log(wallet.title, isMobile)
								if (
									(isMobile && wallet.title === 'Polkawallet') ||
									(!isMobile && wallet.title !== 'Polkawallet')
								)
									return (
										<Fragment>
											<WalletCard
												imageSrc={wallet.logo?.src}
												name={wallet.title || wallet.extensionName}
												url={wallet.installUrl}
												callback={() => callback(wallet.extensionName)}
												connectable={wallet.installed}
											/>
										</Fragment>
									)
							}}
						</Device>
					)
				})}
			</Grid>
		</BaseDialog>
	)
}
