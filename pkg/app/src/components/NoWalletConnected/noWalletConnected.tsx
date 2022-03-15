import { Layout } from 'layouts/default/layout'
import { Box, Paper, Typography, Button, useTheme, Stack } from '@mui/material'
import { useCallback } from 'react'

export function NoWalletConnected() {
	const openUrl = useCallback((url: string) => {
		window.open(url, '_blank', 'noopener').focus()
	}, [])

	return (
		<Layout showHeader showFooter showSidebar title="Dashboard">
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
					To use GameDAO DApp, the Polkadot or Talisman Extension is required. Please connect your wallet or
					install the Extension.
				</Typography>
				<Stack direction="row" justifyContent="end" spacing={4}>
					<Button size="small" onClick={() => openUrl('https://docs.gamedao.co/')}>
						Learn More
					</Button>
					<Button
						size="small"
						variant="outlined"
						onClick={() => openUrl('https://polkadot.js.org/extension/')}
					>
						Download Polkadot Extension
					</Button>
					<Button
						size="small"
						variant="outlined"
						onClick={() => openUrl('https://polkadot.js.org/extension/')}
					>
						Download Talisman Extension
					</Button>
				</Stack>
			</Stack>
		</Layout>
	)
}
