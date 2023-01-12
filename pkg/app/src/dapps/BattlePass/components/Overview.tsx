import Link from 'next/link'
import { Fragment, useState, useEffect } from 'react'
import { Box, Card, Button, Typography, Grid, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { CardContent, CardActions } from '@mui/material'

import { useActiveBattlepassSubscription } from 'src/queries'
import { useJoinBattlePassTX } from 'hooks/tx/useJoinBattlePassTX'

type TGridItemProps = {
	index?: number
	content?: any // TODO: type content
	handler?: Function // TODO: type content
}

export const BPGridItem = ({ index, content, handler }: TGridItemProps) => {
	const joinTX = useJoinBattlePassTX(content.organization.id)
	const handleJoin = (id) => {
		console.log('join', id)
	}
	return (
		<CardContent>
			<Link href={`/v1/${content.organization.id}`}>
				<Box
					p={'24px'}
					sx={{
						borderRadius: '2px',
						background: `linear-gradient(
										to top,
										#ee4693ff,
										#ee469300 75%
									)`,
						boxShadow: `0px 20px 30px #00000033`,
					}}
				>
					{/*
					TODO:
					- load gltf pack
					- map background image
				*/}

					<Box
						sx={{
							width: 250,
							height: 250,
							borderRadius: '2px',
							// background: 'url(https://pbs.twimg.com/media/EcBPYBRWsAAH6v8.jpg:large)',
							// fallback icon:
							background: `url(${content.item_url})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center center',
						}}
					></Box>
				</Box>
			</Link>
			<Box py={2}>
				<Typography variant="h6">{content.organization.name}</Typography>
				<Typography pt={2} m={0} variant="h5">
					{content.name}
				</Typography>
				<Typography variant="h6">Season {content.season}</Typography>
				{/*<Typography variant="body1" sx={{ opacity: 0.5 }}>{content.description}</Typography>*/}
				{/*<Typography>{(content.price===0)?`free`:`\$ ${content.price}`}</Typography>*/}
			</Box>
			<Button fullWidth variant="pink" onClick={() => handleJoin(content.organization.id)}>
				Join
			</Button>
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
				<Typography variant="h4">Open Battlepasses</Typography>
			</Grid>

			{content &&
				content.map((item, index) => {
					return (
						<Grid item key={index}>
							<Card sx={{ width: '348px', height: '560px', border: 0, backgroundColor: '#11111122' }}>
								<BPGridItem index={index} content={item} />
							</Card>
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
