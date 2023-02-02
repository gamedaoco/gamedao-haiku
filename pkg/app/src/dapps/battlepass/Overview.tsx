import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { useConfig } from 'hooks/useConfig'

import { useActiveBattlepassSubscription } from 'src/queries'
import { useJoinBattlePassTX } from 'hooks/tx/useJoinBattlePassTX'

import { useTheme } from '@mui/material/styles'
import { Box, Card, Button, Typography, Grid, Stack } from '@mui/material'
import { CardContent, CardActions } from '@mui/material'

import { BPCard } from './components/BPCard'

type TGridItemProps = {
	index?: number
	content?: any // TODO: type content
	handler?: Function // TODO: type content
}

export const BPGridItem = ({ index, content, handler }: TGridItemProps) => {
	const config = useConfig()
	const joinTX = useJoinBattlePassTX(content.id)

	const handleJoin = (id) => {
		console.log('join', id)
	}

	// TODO: check if already member, show/hide join/view

	// TODO: add join bp extrinsic

	// TODO: load battlepass image

	return (
		<CardContent>
			<Link href={`/battlepass/${content.id}`}>
				<Box
					sx={{
						height: '470px',
						borderRadius: '2px',
						boxShadow: `0px 20px 30px #00000033`,
						background: `url(${parseIpfsHash(content.organization.header, config.IPFS_GATEWAY)})`,
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
							backdropFilter: 'blur(32px)',
							webkitBackdropFilter: 'blur(32px)',
							background: `linear-gradient(to top, #111111ff, #11111122 75% )`,
							height: '512px',
							borderRadius: '2px',
							// background: `url(${parseIpfsHash(content.organization.logo,config.IPFS_GATEWAY)})`,
							// backgroundSize: 'cover',
							// backgroundPosition: 'center center',
						}}
					>
						<Box justifyContent="center">
							<Typography variant="h6">{content.organization.name}</Typography>
							<Typography pt={2} m={0} variant="h5">
								{content.name}
							</Typography>
							<Typography variant="h6">Season {content.season}</Typography>
							{/*<Typography variant="body1" sx={{ opacity: 0.5 }}>{content.description}</Typography>*/}
							{/*<Typography>{(content.price===0)?`free`:`\$ ${content.price}`}</Typography>*/}
						</Box>
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
