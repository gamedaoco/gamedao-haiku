import { avatarImageURL, convertSS58Prefix, useLogger, formatNumber } from '@gamedao/utils'
import { Stack, Typography, Avatar, Box, Paper, TextField, Grid } from '@mui/material'
import { type TStaker } from '../types'
import { DappStakerRewards } from './DappStakerRewards'
import { formatAddressShort } from 'src/utils/address'
const interpolateColor = (color1: string, color2: string, percentage: number) => {
	percentage = Math.min(Math.max(percentage, 0), 100)

	const fraction = percentage / 100

	color1 = color1.replace('#', '')
	color2 = color2.replace('#', '')

	const r1 = parseInt(color1.slice(0, 2), 16),
		g1 = parseInt(color1.slice(2, 4), 16),
		b1 = parseInt(color1.slice(4, 6), 16)

	const r2 = parseInt(color2.slice(0, 2), 16),
		g2 = parseInt(color2.slice(2, 4), 16),
		b2 = parseInt(color2.slice(4, 6), 16)

	const r = Math.round(r1 + (r2 - r1) * fraction)
	const g = Math.round(g1 + (g2 - g1) * fraction)
	const b = Math.round(b1 + (b2 - b1) * fraction)

	const hr = r.toString(16).padStart(2, '0')
	const hg = g.toString(16).padStart(2, '0')
	const hb = b.toString(16).padStart(2, '0')

	return `#${hr}${hg}${hb}`
}

export const DappStakerRow = ({ s, i, events, totalStakers, fx, block = 0, showRewards = false }) => {
	const rank = i + 1

	const address = convertSS58Prefix(s.address, 5)
	const shortAddress = formatAddressShort(address)
	const amountASTR = formatNumber(s.amount)
	const amountUSD = formatNumber(s.amount * fx)

	// console.log(i, 'events', events?.address, events?.tx.length)
	const border = interpolateColor('#00ff33', '#0033ff', (rank / totalStakers) * 100) + '99'

	return (
		<Grid container spacing={2}>
			<Grid
				item
				xs={1}
				sx={{
					display: 'flex',
					borderBottom: { xs: 'none', lg: '1px dotted #ffffff33' },
					alignItems: 'center',
					justifyContent: 'center',
					pb: { xs: 0, lg: 2 },
					mb: { xs: 0, lg: 2 },
				}}
				// pb={2}
			>
				<Typography
					alignItems="center"
					justifyContent="center"
					sx={{
						display: 'flex',
						minWidth: '4ch',
						maxWidth: '100px',
						aspectRatio: '1',
						border: '1px solid ' + border,
						boxShadow: '0 0 20px ' + border,
						borderRadius: '50%',
					}}
					variant={'h6'}
				>
					{rank}
				</Typography>
			</Grid>
			<Grid
				item
				xs={11}
				lg={5}
				sx={{
					pb: { xs: 0, lg: 2 },
					mb: { xs: 0, lg: 2 },
					borderBottom: { xs: 'none', lg: '1px dotted #ffffff33' },
				}}
				// pb={2}
				// mb={2}
			>
				<Stack direction="row" spacing={1} justifyContent="left">
					<Avatar
						sx={{
							width: '48px',
							height: '48px',
							transition: '250ms ease-in-out',
							':hover': { backgroundColor: '#111111cc' },
							':active': { backgroundColor: '#ffffff99' },
						}}
						src={avatarImageURL(address)}
					/>
					<Box>
						<Typography variant="mono" title={address}>
							{shortAddress}
						</Typography>
						<br />
						<Typography variant="micro">
							<a href={'https://astar.subscan.io/account/' + address} target="_blank" rel="noreferrer">
								SUBSCAN
							</a>
						</Typography>
						{' · '}
						<Typography variant="micro">
							<a href={'https://astar.subscan.io/account/' + address} target="_blank" rel="noreferrer">
								SUB.ID
							</a>
						</Typography>
					</Box>
				</Stack>
			</Grid>
			<Grid
				item
				xs={1}
				sx={{
					display: { xs: 'block', lg: 'none' },
					borderBottom: '1px dotted #ffffff33',
					mb: 2,
				}}
			></Grid>
			<Grid item xs={6} lg={3} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
				<Typography sx={{ display: { lg: 'none' } }} variant={'micro'}>
					Stake
				</Typography>
				<Stack direction="row" spacing={1}>
					<Typography align="right" variant="mono">
						{amountASTR}
					</Typography>
					<Typography align="left" variant="mono">
						$ASTR
					</Typography>
				</Stack>
				<Stack direction="row" spacing={1}>
					<Typography align="right" variant="mono">
						${amountUSD}
					</Typography>
					<Typography align="left" variant="mono">
						USD
					</Typography>
				</Stack>
			</Grid>
			<Grid item xs={5} lg={3} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
				{showRewards && (
					<>
						<Typography sx={{ display: { lg: 'none' } }} variant={'micro'}>
							Rewards
						</Typography>
						{events && <DappStakerRewards events={events} block={block} />}
					</>
				)}
			</Grid>
		</Grid>
	)
}
