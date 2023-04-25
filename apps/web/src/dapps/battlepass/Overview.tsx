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

import { BPCard } from './components/BPCard'

type TGridItemProps = {
	index?: number
	content?: any // TODO: type content
	handler?: Function // TODO: type content
}

export const BPGridItem = ({ index, content, handler }: TGridItemProps) => {
	const config = useConfig()

	const handleJoin = (id) => {
		// console.log('join', id)
	}

	// TODO: check if already member, show/hide join/view
	// TODO: add join bp extrinsic
	// TODO: load battlepass image

	const [cardImage, setCardImage] = useState(null)
	useEffect(() => {
		if (!content) return
		const cid = content?.cid ? content?.cid : content?.organization.header
		// console.log('cid', content)
		const url = parseIpfsHash(cid, config.IPFS_GATEWAY)
		setCardImage(`url(${url})`)
	}, [content?.cid])

	// console.log('content', content)

	return (
		<CardContent>
			<Link href={`/battlepass/${content.id}`}>
				<Box
					sx={{
						height: '470px',
						borderRadius: '2px',
						boxShadow: `0px 20px 30px #00000033`,
						background: cardImage,
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
					}}
				>
					{/*
					TODO:
					- load gltf pack
					- map background image
				*/}

					<Box
						p={'24px'}
						sx={{
							transitionDuration: '0.5s',
							backdropFilter: `blur(${content.cid ? 2 : 16}px)`,
							webkitBackdropFilter: `blur(${content.cid ? 2 : 16}px)`,
							'&:hover': {
								backdropFilter: `blur(${content.cid ? 0 : 8}px)`,
								webkitBackdropFilter: `blur(${content.cid ? 0 : 8}px)`,
							},
							background: `linear-gradient(to top, #111111ff, #11111122 75% )`,
							height: '512px',
							borderRadius: '2px',
							// background: `url(${parseIpfsHash(content.organization.logo,config.IPFS_GATEWAY)})`,
							// backgroundSize: 'cover',
							// backgroundPosition: 'center center',
						}}
					>
						<Stack
							direction="column"
							justifyContent="space-between"
							sx={{
								height: '100%',
								WebkitFilter: 'drop-shadow( 0 5px 10px rgba(0,0,0,1) )',
								filter: 'drop-shadow( 0 5px 10px rgba(0,0,0,1) )',
								backgroundBlendMode: 'multiply',
							}}
						>
							<Typography variant="h6">{content.organization.name}</Typography>
							<Stack direction="column" alignItems="center" justifyContent="end" sx={{ height: '100%' }}>
								<Typography align="center" variant="pass1">
									{' '}
									{content.name}{' '}
								</Typography>
								<Typography variant="caption">Season {content.season}</Typography>
								{/* <Typography variant="body1" sx={{ opacity: 0.5 }}>{content.description}</Typography> */}
								<Typography variant="caption">
									{content.price === 0 ? `free` : `EUR ${content.price / 100} / SEASON`}
								</Typography>
							</Stack>
						</Stack>
					</Box>
				</Box>
			</Link>
			{/* <Button fullWidth variant="pink" onClick={() => handleJoin(content.id)}>
				Join
			</Button> */}
		</CardContent>
	)
}

export const Overview = () => {
	const theme = useTheme()
	const { push } = useRouter()

	const address = useCurrentAccountAddress()
	const [canJoin, setCanJoin] = useState(false)
	useEffect(() => {
		if (!address) return
		if (address) setCanJoin(true)
	}, [address])

	const handleJoin = (id) => {
		console.log('join', id)
		push(`/battlepass/${id}`)
	}

	// get content
	const [content, setContent] = useState(null)
	const { loading, data, error } = useActiveBattlepassSubscription()
	useEffect(() => {
		if (!data) return
		setContent(data.battlepass)
	}, [data])

	return (
		<Grid
			container
			// columns={{ xs: 1, md: 2 }}
			rowSpacing={2}
			columnSpacing={{ xs: 2, md: 4, lg: 6 }}
			justifyContent={{ xs: 'center', md: 'left' }}
		>
			<Grid item xs={12} md={6}>
				<Paper sx={{ p: 2, height: '100%' }} variant="glass">
					<Stack direction="column" justifyContent="space-between">
						<Typography variant="teaserTitle" pb={2}>
							WAVEPASS CASH CUP
						</Typography>
						<Typography variant="teaserText" pb={2}>
							Join top players from around the globe in this first invitational on Fortnite. To take part
							make sure to join WAVEPASS Beta, which will close end of April and put you on the shortlist.
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
			</Grid>
			<Grid item xs={12} md={6}>
				<Paper sx={{ p: 2, height: '100%' }} variant="glass">
					<Stack direction="column">
						<Typography variant="teaserTitle" pb={2}>
							GAMEDAO Netrunner
						</Typography>
						<Typography variant="teaserText" pb={2}>
							The ultimate ambassador program for game enthusiasts: Get cash and token rewards for giving
							GAMEDAO a hand with testing, posting, story telling and more!
						</Typography>
						<Stack direction="row" justifyContent="end">
							{/* <Button color="secondary">Learn More</Button> */}
							<Button variant="lemon" onClick={() => handleJoin('')}>
								Join
							</Button>
						</Stack>
					</Stack>
				</Paper>
			</Grid>
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
									<BPGridItem index={index} content={item} />
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
