import { Fragment, useEffect, useState } from 'react'
import { Box, Card, Button, Typography, Grid, Stack } from '@mui/material'
import { Avatar, AvatarGroup } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { CardContent, CardActions } from '@mui/material'
import { BPCard } from './BPCard'
import { content } from '../content/rewards'
import { useAppContext } from 'providers/app/modules/context'
import { useGetBattlepassRewardsQuery } from 'queries/index'

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

const cidToURL = (cid) => `url(${process.env.NEXT_PUBLIC_IPFS_PUBLIC_GATEWAY}ipfs/${cid})`

type TGridItemProps = {
	index?: number
	content?: any // TODO: type content
}

export const BPRewardItem = ({ index, content }: TGridItemProps) => {
	// console.log( 'content', cidToURL(content.cid) )

	const ClaimButton = (props) => {
		const walletConnected = Math.round(Math.random() * 100) > 50
		const handleClaim = () => {}
		const handleConnect = () => {}
		return walletConnected ? (
			<Button size="small" fullWidth variant="pink">
				Claim
			</Button>
		) : (
			<Button fullWidth size="large" variant="outlined">
				Connect Wallet
			</Button>
		)
	}

	return (
		<Fragment>
			<Box sx={{ position: 'absolute', bottom: 0, left: 0, zIndex: 1000 }}>
				{index && (
					<Typography variant="poster" sx={{ opacity: 0.1 }}>
						{index}
					</Typography>
				)}
			</Box>

			<Stack
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					zIndex: 1010,
					// border: '1px solid',
					width: '100%',
					height: '100%',
					p: '24px',
				}}
				direction="column"
				justifyItems="space-between"
				spacing={2}
			>
				<Box>
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
									width: 252,
									height: 252,
									borderRadius: '2px',
									background: content.cid ? cidToURL(content.cid) : null,
									backgroundRepeat: 'no-repeat',
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
				</Box>
				<ClaimButton />
			</Stack>
		</Fragment>
	)
}

type TGridProps = {
	id?: string
}
type TArgs = {
	args?: TGridProps
}

export type TRewardItem = {
	id: number
	name: string
	description: string
	cid: string
	available: boolean
	level: number
	points: number
	total: number
	battlepassId: string
	__typename?: string
}

// id: 1
// battlepassId: 1
// name: "Free Epic NFT"
// description: null
// cid: null
// available: 100
// level: 10
// points: null
// total: 100

export const BPRewards = ({ args }: TArgs) => {
	// TODO: get content for battlepass from graph

	const { id } = args
	const { uuid } = useAppContext()
	const where = { id: id }
	const { data: rewards } = useGetBattlepassRewardsQuery({ variables: where })
	const [items, setItems] = useState([])
	const [demoMode, setDemoMode] = useState(true)

	useEffect(() => {
		if (!rewards) return
		if (!rewards?.BattlepassBot?.BattlepassRewards) return
		const res = rewards?.BattlepassBot?.BattlepassRewards.map((i) => i) // as TRewardItem[]
		setDemoMode(res.length === 0)
		setItems(res.length === 0 ? content : res)
		// console.log('r', res)
	}, [rewards])

	return (
		<Grid
			container
			// columns={{ xs: 1, md: 2 }}
			rowSpacing={2}
			columnSpacing={{ xs: 2, md: 4, lg: 6 }}
			justifyContent={{ xs: 'center', md: 'left' }}
		>
			<Grid item xs={12}>
				<Typography variant="h4"> {demoMode && `Demo `}Rewards</Typography>
			</Grid>

			{items?.map((item, index) => {
				return (
					<Grid item key={index}>
						<BPCard>
							<Card
								sx={{
									width: '348px',
									height: '480px',
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
