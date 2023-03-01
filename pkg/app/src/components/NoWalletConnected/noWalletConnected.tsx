import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Layout } from 'layouts/default/layout'
import { Button, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'

export function NoWalletConnected() {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const openUrl = useCallback((url: string) => {
		window.open(url, '_blank', 'noreferrer,noopener').focus()
	}, [])
	const { t } = useTranslation()
	return (
		<Layout showHeader showFooter showSidebar title={t('label:dashboard')}>
			<Stack component={Paper} elevation={10} spacing={4} padding={4} marginY={4}>
				<Typography
					variant="h3"
					sx={{
						background: '-webkit-linear-gradient(45deg, #ff00cc 30%, #ff9900 90%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						fontWeight: 800,
					}}
				>
					{/* {t('label:connect_wallet')} */}
					Connect your wallet to use GameDAO&apos;s native web3 functionality. This will allow you to take
					true control over your personal data and collectable items.
				</Typography>
				<Stack direction={isMd ? 'row' : 'column-reverse'} justifyContent="space-between" spacing={[2, 4]}>
					<Button
						fullWidth={isMd ? false : true}
						size="large"
						color="secondary"
						onClick={() => openUrl('https://docs.gamedao.co/')}
					>
						{t('button:ui:learn_more')}
					</Button>
					<Stack direction={isMd ? 'row' : 'column-reverse'} justifyContent="end" spacing={[2, 4]}>
						<Button
							fullWidth={isMd ? false : true}
							size="large"
							variant="outlined"
							color="secondary"
							onClick={() => openUrl('https://polkadot.js.org/extension/')}
						>
							Get Polkadot Wallet
						</Button>
						<Button
							fullWidth={isMd ? false : true}
							size="large"
							variant="pink"
							onClick={() => openUrl('https://www.talisman.xyz/')}
						>
							Get Talisman Wallet
							{/* {t('button:ui:download_extension', {
								extension: 'Talisman',
							})}*/}
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Layout>
	)
}
