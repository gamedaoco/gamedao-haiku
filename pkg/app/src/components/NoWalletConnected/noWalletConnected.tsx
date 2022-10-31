import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Layout } from 'layouts/default/layout'
import { Button, Paper, Stack, Typography } from '@mui/material'

export function NoWalletConnected() {
	const openUrl = useCallback((url: string) => {
		window.open(url, '_blank', 'noopener').focus()
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
					{t('label:connect_wallet')}
				</Typography>
				<Stack direction="row" justifyContent="end" spacing={4}>
					<Button size="small" onClick={() => openUrl('https://docs.gamedao.co/')}>
						{t('button:ui:learn_more')}
					</Button>
					<Button
						size="small"
						variant="outlined"
						onClick={() => openUrl('https://polkadot.js.org/extension/')}
					>
						{t('button:ui:download_extension', {
							extension: 'Polkadot',
						})}
					</Button>
					<Button
						size="small"
						variant="outlined"
						onClick={() => openUrl('https://polkadot.js.org/extension/')}
					>
						{t('button:ui:download_extension', {
							extension: 'Talisman',
						})}
					</Button>
				</Stack>
			</Stack>
		</Layout>
	)
}
