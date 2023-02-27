import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Layout } from 'layouts/default/layout'
import { Button, Paper, Stack, Typography } from '@mui/material'

export function NoWalletConnected() {
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
					Connect your wallet to use GameDAO's native web3 functionality. This will allow you to take true
					control over your personal data and collectable items.
				</Typography>
				<Stack direction="row" justifyContent="space-between" spacing={4}>
					<Button size="large" color="secondary" onClick={() => openUrl('https://docs.gamedao.co/')}>
						{t('button:ui:learn_more')}
					</Button>
					<Stack direction="row" justifyContent="end" spacing={4}>
						<Button
							size="large"
							variant="outlined"
							color="secondary"
							onClick={() => openUrl('https://polkadot.js.org/extension/')}
						>
							Download Polkadot Wallet
						</Button>
						<Button size="large" variant="pink" onClick={() => openUrl('https://www.talisman.xyz/')}>
							Download Talisman Wallet
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
