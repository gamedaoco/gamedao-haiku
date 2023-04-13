import { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'

import { useAppContext } from 'src/providers/app/modules/context'
import { useExtensionContext } from 'src/providers/extension/modules/context'

import { Grid, Button, Box, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { BaseDialog } from 'src/components/BaseDialog/baseDialog'
import { WalletCard } from 'src/components/WalletDialog/modules/walletCard'
import Device from 'src/components/Device'

import { getTwitterAuthorizationURL } from 'src/lib/getTwitterAuthorizationURL'

export const Web2Connect = () => {
	const { data: session } = useSession()
	const { selectedAccount } = useExtensionContext()

	const url = `https://discord.com/api/oauth2/authorize?client_id=1049953821536833536&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=identify%20email`

	if (session && !selectedAccount)
		return (
			<Stack>
				<Typography>{`Signed in as ${session.user.email}`}</Typography>
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
}

interface ComponentProps {
	callback: (extensionName: string) => {}
	open: boolean
	onClose: () => void
}

export function WalletDialog({ open, callback, onClose }: ComponentProps) {
	const theme = useTheme()
	const { supportedWallets, allSupportedWallets } = useExtensionContext()
	const { user, twa } = useAppContext()
	const { data: session } = useSession()
	const { asPath } = useRouter()

	useEffect(() => {
		if (open && supportedWallets?.length === 1) {
			// Automatically use the 1st wallet if only one is available
			callback(supportedWallets[0].extensionName)
		}
	}, [supportedWallets, open, callback])

	if (!allSupportedWallets?.length) return null

	async function openTwitterAuthorization() {
		if (!session && !user.uuid) return
		const url = await getTwitterAuthorizationURL(user.uuid, asPath)
		window.open(url, '_self', 'noopener')?.focus()
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
						connected={user.discord ? true : false}
						callback={() => signIn('discord')}
					/>
				</Fragment>
				<Fragment key={'twitter'}>
					{/* <Box sx={{ pointerEvents: `${user.uuid ? 'auto' : 'none'}`, opacity: `${user.uuid ? 1 : 0.5}` }}>
						<WalletCard
							imageSrc={'https://avatars.githubusercontent.com/u/50278?s=200&v=4'}
							name={'Twitter'}
							connectable={true}
							connected={twa ? true : false}
							callback={() => openTwitterAuthorization()}
							buttonText={'Authorize'}
						/>
					</Box> */}
				</Fragment>
			</Grid>
			<Typography
				variant="h4"
				sx={{
					background: '-webkit-linear-gradient(45deg, #ff00cc 30%, #ff9900 90%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					fontWeight: 800,
					opacity: `${user.uuid ? 1 : 0.5}`,
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
				sx={{ pointerEvents: `${user.uuid ? 'auto' : 'none'}`, opacity: `${user.uuid ? 1 : 0.5}` }}
			>
				{allSupportedWallets.map((wallet) => {
					return (
						<Device key={wallet.extensionName}>
							{({ isMobile }) => {
								if (
									(isMobile &&
										(wallet.extensionName === 'polkawallet' ||
											wallet.extensionName === 'novawallet')) ||
									(!isMobile &&
										wallet.extensionName !== 'polkawallet' &&
										wallet.extensionName !== 'novawallet')
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
