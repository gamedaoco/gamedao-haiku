import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { useConfig } from 'src/hooks/useConfig'

import { useActiveBattlepassSubscription } from 'src/queries'
// import { useJoinBattlePassTX } from 'hooks/tx/useJoinBattlePassTX'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'

import { useTheme } from '@mui/material/styles'
import { Box, Card, Button, Typography, Grid, Stack, Paper } from '@mui/material'
import { CardContent, CardActions } from '@mui/material'

import { Invitational } from './components/Invitational'
import { BPCard } from './components/BPCard'
import { OverviewCard } from './components/OverviewCard'

export const Overview = () => {
	const theme = useTheme()
	const { push } = useRouter()

	const address = useCurrentAccountAddress()
	const [canJoin, setCanJoin] = useState(false)
	useEffect(() => {
		if (!address) return
		if (address) setCanJoin(true)
	}, [address])

	// get content
	const [content, setContent] = useState(null)
	const { loading, data, error } = useActiveBattlepassSubscription()
	useEffect(() => {
		if (!data) return
		setContent(data.battlepass)
	}, [data])

	const handleJoin = (id) => {
		console.log('join', id)
	}
	const handleBuy = async (id) => {
		console.log('buy', id)
	}

	return (
		<Grid
			container
			// columns={{ xs: 1, md: 2 }}
			rowSpacing={2}
			columnSpacing={{ xs: 2, md: 4, lg: 6 }}
			justifyContent={{ xs: 'center', md: 'left' }}
		>
			<Grid item xs={12} md={12}>
				<Invitational
					args={{
						id: '0x60134570092f28b3d3500152e7bfded8348521e46a83e24d664e2af0b63c6532',
						items: null,
					}}
				/>

				{false && (
					<Paper sx={{ p: 2, height: '100%' }} variant="glass">
						<Stack direction="column" justifyContent="space-between">
							<Typography variant="teaserTitle" pb={2}>
								WAVEPASS CASH CUP
							</Typography>
							<Typography variant="teaserText" pb={2}>
								Join top players from around the globe in this first invitational on Fortnite. To take
								part make sure to join WAVEPASS Beta, which will close end of April and put you on the
								shortlist.
							</Typography>
							<Stack direction="row" justifyContent="end">
								{/* <Button color="secondary">Learn More</Button> */}
								<Button
									variant="lemon"
									onClick={() =>
										handleJoin('0x60134570092f28b3d3500152e7bfded8348521e46a83e24d664e2af0b63c6532')
									}
								>
									Join
								</Button>
							</Stack>
						</Stack>
					</Paper>
				)}
			</Grid>
			{false && (
				<Grid item xs={12} md={6}>
					<Paper sx={{ p: 2, height: '100%' }} variant="glass">
						<Stack direction="column" justifyContent="space-between">
							<Typography variant="teaserTitle" pb={2}>
								GAMEDAO Netrunner
							</Typography>
							<Typography variant="teaserText" pb={2}>
								The ultimate ambassador program for game enthusiasts: Get cash and token rewards for
								giving GAMEDAO a hand with testing, posting, story telling and more!
							</Typography>
							<Stack direction="row" justifyContent="end">
								{/* <Button color="secondary">Learn More</Button> */}
								{/* <Button disabled variant="glass" onClick={() => handleJoin('')}>
								Soon
							</Button> */}
							</Stack>
						</Stack>
					</Paper>
				</Grid>
			)}

			<Grid item xs={12}>
				<Typography variant="h4" pb={2}>
					Open Battlepasses
				</Typography>
			</Grid>

			{content &&
				content.map((item, index) => {
					return (
						<Grid item key={index}>
							<BPCard>
								<Card
									sx={{
										width: '348px',
										height: '560px',
										border: 0,
										backgroundColor: '#11111144',
										cursor: 'pointer',
									}}
								>
									<OverviewCard
										args={{
											index,
											content: item,
											// canJoin,
											join: () => handleJoin(item.id),
											buy: () => handleBuy(item.id),
										}}
									/>
								</Card>
							</BPCard>
						</Grid>
					)
				})}

			{/*			{content.map((item, index) => {
				return (
					<Grid item key={index}>
						<Card sx={{ width: '348px', height: '560px', border: 0, backgroundColor: '#11111122' }}>
							<BPGridItem index={index + 1} content={item} />
						</Card>
					</Grid>
				)
			})}
*/}
		</Grid>
	)
}
