import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { useConfig } from 'src/hooks/useConfig'

import { useActiveBattlepassSubscription } from 'src/queries'
// import { useJoinBattlePassTX } from 'hooks/tx/useJoinBattlePassTX'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'

import { useTheme } from '@mui/material/styles'
import { Box, Card, Button, Typography, Grid, Stack, Paper } from '@mui/material'
import { CardContent, CardActions } from '@mui/material'

import { Invitational } from './Invitational'
import { BPCard } from './BPCard'

type TOverviewCardProps = {
	index?: number
	content?: any // TODO: type content
	handler?: Function
	buy?: Function
	join?: Function
}
type TArgs = {
	args: TOverviewCardProps
}

export const OverviewCard = ({ args }: TArgs) => {
	const config = useConfig()
	const { content, join, buy } = args

	const [cardImage, setCardImage] = useState(null)
	useEffect(() => {
		if (!content) return
		const cid = content?.cid ? content?.cid : content?.organization.header
		// console.log('cid', content)
		const url = parseIpfsHash(cid, config.IPFS_GATEWAY)
		setCardImage(`url(${url})`)
	}, [content?.cid])

	console.log('content', content)

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
						transitionDuration: '0.5s',
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
							background: `linear-gradient(to top, #111111ff, #11111122 75% )`,
							// background: `url(${parseIpfsHash(content.organization.logo,config.IPFS_GATEWAY)})`,
							// backgroundSize: 'cover',
							// backgroundPosition: 'center center',
							height: '512px',
							borderRadius: '2px',
							// backdropFilter: `blur(${content.cid ? 2 : 16}px)`,
							// webkitBackdropFilter: `blur(${content.cid ? 2 : 16}px)`,
							'&:hover': {
								// 	backdropFilter: `blur(${content.cid ? 0 : 8}px)`,
								// 	webkitBackdropFilter: `blur(${content.cid ? 0 : 8}px)`,
								background: `linear-gradient(to top, #111111ff, #11111122 0% )`,
							},
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
			<Stack p={1} direction="row" alignContent="center" justifyContent="center" spacing={1}>
				{join && (
					<Button variant="xs" color="lemon" onClick={() => join()}>
						{' '}
						Join{' '}
					</Button>
				)}
				{buy && (
					<Button variant="xs" color="pink" onClick={() => buy()}>
						{' '}
						Buy{' '}
					</Button>
				)}
			</Stack>
		</CardContent>
	)
}
