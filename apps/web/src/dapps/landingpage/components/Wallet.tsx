import React, { useCallback } from 'react'
import { useTheme } from '@mui/material/styles'
import { Paper, Button, Stack, Typography } from '@mui/material'
import { GRADIENT } from '../styles'

export const Wallet = ({}) => {
	const theme = useTheme()

	const openUrl = useCallback((url: string) => {
		window.open(url, '_blank', 'noopener').focus()
	}, [])

	return (
		<Stack
			component={Paper}
			elevation={10}
			spacing={4}
			padding={4}
			marginY={4}
			sx={{
				backgroundColor: 'rgba(128,24,64,.5)',
				borderRadius: '1rem',
			}}
		>
			<Typography
				variant="h3"
				sx={{
					background: GRADIENT.pink,
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					fontWeight: 800,
					lineHeight: '100%',
				}}
			>
				To join and use GameDAO in your browser, a web3 wallet like PolkadotJS or Talisman is required. Please
				connect your wallet or install one from below.
			</Typography>
			<Stack direction="row" justifyContent="space-between" spacing={4}>
				<Button size="small" onClick={() => openUrl('https://docs.gamedao.co/')}>
					Learn More
				</Button>
				<Stack direction="row" justifyContent="end" spacing={4}>
					<a href="https://polkadot.js.org/extension/" target="_blank" rel="noreferrer">
						<Button size="small">Get Polkadot Extension</Button>
					</a>
					<a href="https://talisman.xyz/" target="_blank" rel="noreferrer">
						<Button size="small" variant="outlined">
							Get Talisman Extension
						</Button>
					</a>
				</Stack>
			</Stack>
		</Stack>
	)
}
