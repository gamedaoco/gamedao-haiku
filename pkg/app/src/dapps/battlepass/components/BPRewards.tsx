import { Fragment } from 'react'
import { Box, Card, Button, Typography, Grid, Stack } from '@mui/material'
import { Avatar, AvatarGroup } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { CardContent, CardActions } from '@mui/material'
import { BPCard } from './BPCard'
import { content } from '../content/rewards'

const IconGroupVisible = false

const IconGroup = () => {
	if (!IconGroupVisible) return null

	return (
		<Fragment>
			<Box py={1} sx={{ opacity: 0.2 }}>
				<hr />
			</Box>
			<AvatarGroup max={3} total={24} spacing="small">
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
				<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
				<Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
				<Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
			</AvatarGroup>
		</Fragment>
	)
}

type TGridItemProps = {
	index?: number
	content?: any // TODO: type content
}

export const BPRewardItem = ({ index, content }: TGridItemProps) => {
	return (
		<Fragment>
			<Box sx={{ position: 'absolute', bottom: 0, left: 0, zIndex: 1000 }}>
				{index && (
					<Typography variant="poster" sx={{ opacity: 0.1 }}>
						{index}
					</Typography>
				)}
			</Box>
			<Box sx={{ position: 'absolute', top: 0, left: 0, zIndex: 1010 }}>
				<CardContent>
					<Box sx={{ border: '0px solid red' }}>
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
									height: 350,
									borderRadius: '2px',
									// background: 'url(https://pbs.twimg.com/media/EcBPYBRWsAAH6v8.jpg:large)',
									// fallback icon:
									background: `url(${content.banner_url})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center center',
								}}
							></Box>
						</Box>
					</Box>
					<Typography pt={2} m={0} variant="h5">
						{content.name}
					</Typography>
					<Typography variant="body1" sx={{ opacity: 0.5 }}>
						{content.description}
					</Typography>

					<IconGroup />
				</CardContent>
				<Button fullWidth variant="pink">
					Claim
				</Button>
			</Box>
		</Fragment>
	)
}

type TGridProps = {
	id?: string
}
type TArgs = {
	args?: TGridProps
}

export const BPRewards = ({ args }: TArgs) => {
	const theme = useTheme()

	// TODO: get content for battlepass from graph

	const items = content.length
	// const arr1: number[] = new Array(items).fill(0)

	return (
		<Grid
			container
			// columns={{ xs: 1, md: 2 }}
			rowSpacing={2}
			columnSpacing={{ xs: 2, md: 4, lg: 6 }}
			justifyContent={{ xs: 'center', md: 'left' }}
		>
			<Grid item xs={12}>
				<Typography variant="h4">Rewards</Typography>
			</Grid>

			{content.map((item, index) => {
				return (
					<Grid item key={index}>
						<BPCard>
							<Card
								sx={{
									width: '348px',
									height: '560px',
									border: 0,
									backgroundColor: '#11111122',
									cursor: 'pointer',
								}}
							>
								<BPRewardItem index={index + 1} content={item} />
							</Card>
						</BPCard>
					</Grid>
				)
			})}
		</Grid>
	)
}
