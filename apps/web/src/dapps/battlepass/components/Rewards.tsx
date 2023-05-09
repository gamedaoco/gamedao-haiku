import { Fragment, useEffect, useState, useCallback } from 'react'
import {
	useGetBattlepassRewardsQuery,
	useGetScoreQuery,
	useScoreSubscription,
	useClaimRewardMutation,
	useRewardsSubscription,
	useBattlepassSubscription,
} from 'src/queries'
import { useAppContext } from 'src/providers/app/modules/context'
import { useTheme } from '@mui/material/styles'
import { Box, Card, Button, Typography, Grid, Stack } from '@mui/material'
import { Avatar, AvatarGroup } from '@mui/material'
import { BaseDialog } from 'src/components/BaseDialog/baseDialog'
import { BPCard } from './Card'
import { FadeInWhenVisible } from './FadeInWhenVisible'

import demoContent from '../content/rewards'
import mockCIDJSON from '../content/mock-cid.json'

import { CircularProgress } from '@mui/material'

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
	score?: any
	handleClaim: Function
	active: boolean
}

export const BPRewardItem = ({ index, content, score, handleClaim, active }: TGridItemProps) => {
	const { uuid } = useAppContext()
	const {
		user: { address },
	} = useAppContext()

	const metadata = mockCIDJSON
	// TODO: load metadata from CID, instead of image
	// TODO: parse metadata to get card content
	useEffect(() => {
		if (!metadata) return
	}, [metadata])

	const isPremium = score.premium ? true : false
	const isConnected = address !== null
	const requiredPoints = score.score >= content.points

	const goPremium = () => {
		console.log('goPremium')
	}
	const claimReward = () => handleClaim(content.chainId)

	const isClaimed = content?.RewardClaims?.filter((i) => i.syncStatus === 'synced').length > 0 ? true : false

	const ClaimSection = () => {
		if (!active)
			return (
				<Button size="large" fullWidth variant="glass" disabled>
					Season ended
				</Button>
			)

		if (isClaimed)
			return (
				<Typography p={1} m={0} variant="body1">
					You have claimed this reward
				</Typography>
			)
		if (!isPremium)
			return (
				<Button fullWidth size="large" variant="pink" onClick={() => goPremium()}>
					Go Premium to Claim
				</Button>
			)
		if (!isConnected)
			return (
				<Typography p={1} m={0} variant="h5">
					Connect your Wallet to claim rewards
				</Typography>
			)
		if (requiredPoints)
			return (
				<Button size="large" fullWidth variant="glass" onClick={() => claimReward()}>
					Claim Now
				</Button>
			)
		return (
			<Typography p={1} m={0} variant="caption">
				Keep grinding, player!
			</Typography>
		)
	}

	return (
		<Fragment>
			<Box
				sx={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					zIndex: 1000,
				}}
			>
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
					width: '100%',
					height: '100%',
					p: '24px',
					// border: `1px solid blue`,
				}}
				direction="column"
				justifyItems="space-between"
				spacing={2}
			>
				<Box>
					<Box>
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
							<Box
								sx={{
									width: '256px',
									height: '340px',
									borderRadius: '2px',
									background: content.cid ? cidToURL(content.cid) : null,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
									backgroundPosition: 'center center',
									// border: `1px solid yellow`,
								}}
							></Box>
						</Box>
					</Box>

					<Stack>
						<Typography pt={1} px={1} m={0} variant="caption">
							{content.name}
							<br />
							LEVEL {content.level} · {content.points}BP
						</Typography>
						{/* <Typography px={1} m={0} variant="caption" sx={{ opacity: 0.5 }}>
							{content.description}
						</Typography> */}
					</Stack>

					<IconGroup />
				</Box>
				<ClaimSection />
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
	const { id } = args
	const { uuid } = useAppContext()

	const [score, setScore] = useState({ score: 0, premium: false })
	const { data: scoreData } = useScoreSubscription({ variables: { id: id, uuid: uuid } })
	useEffect(() => {
		if (!scoreData?.BattlepassParticipants.length) return
		// console.log('scoreData', scoreData?.BattlepassParticipants[0])
		if (scoreData.BattlepassParticipants) {
			setScore({
				...score,
				score: scoreData?.BattlepassParticipants[0].points,
				premium: scoreData?.BattlepassParticipants[0].premium,
			})
		}
	}, [scoreData?.BattlepassParticipants])

	const [items, setItems] = useState([])
	const [demoMode, setDemoMode] = useState(true)

	const [active, setActive] = useState(false)
	const { data: battlepass } = useBattlepassSubscription({ variables: { id: id } })
	useEffect(() => {
		if (!battlepass || !battlepass?.Battlepasses.length) return
		const pass = battlepass?.Battlepasses[0]
		setActive(pass.active)
	}, [battlepass])

	const { loading: loadingRewards, data: rewards } = useRewardsSubscription({ variables: { id: id, uuid: uuid } })

	useEffect(() => {
		if (loadingRewards) return
		const hasRewards = rewards?.BattlepassRewards?.length > 0
		setDemoMode(!hasRewards)
		console.log(rewards)
		setItems(hasRewards ? rewards?.BattlepassRewards?.map((i) => i) : demoContent)
	}, [loadingRewards, rewards?.BattlepassRewards])

	const [chainId, setChainId] = useState(null)
	const [claimRewardMutation] = useClaimRewardMutation()
	const [open, setOpen] = useState(false)
	const handleClaim = useCallback(
		(itemId: string) => {
			if (!itemId) return
			setOpen(true)
			console.log('claiming reward', itemId, 'for', uuid)
			setChainId(itemId)
			// console.log('claim', itemId)
			const connect = async () => {
				// console.log('connecting', itemId, id, uuid)
				const response = await claimRewardMutation({
					variables: { battlepass: id, uuid: uuid, reward: itemId },
				}).then((res) => {
					try {
						console.log('res', res)
						setOpen(false)
					} catch (err) {
						console.log(err)
					}
				})
			}
			connect()
		},
		[setChainId, chainId, uuid, id, claimRewardMutation],
	)

	return (
		<Fragment>
			<Grid
				container
				// columns={{ xs: 1, md: 2 }}
				rowSpacing={{ xs: 2, md: 3, lg: 4 }}
				columnSpacing={{ xs: 2, md: 3, lg: 4 }}
				justifyContent={{ xs: 'center', md: 'center' }}
			>
				<Grid item xs={12}>
					<Typography variant="h4"> {demoMode && `Demo `}Rewards</Typography>
				</Grid>
				{items
					?.sort((a, b) => (a.points < b.points ? -1 : a.points > b.points ? 1 : 0))
					.map((item, index) => {
						return (
							<Grid item key={index}>
								<FadeInWhenVisible d={index}>
									<BPCard>
										<Card
											sx={{
												width: '352px',
												height: '512px',
												border: 0,
												backgroundColor: '#11111122',
												cursor: 'pointer',
											}}
										>
											<BPRewardItem
												index={index + 1}
												content={item}
												score={score}
												handleClaim={() => handleClaim(item.chainId)}
												active={active}
											/>
										</Card>
									</BPCard>
								</FadeInWhenVisible>
							</Grid>
						)
					})}
			</Grid>
			<BaseDialog open={open} onClose={() => setOpen(false)}>
				<Stack alignItems="center">
					<CircularProgress color="inherit" />
					<Typography
						variant="h3"
						p={4}
						sx={{
							background: '-webkit-linear-gradient(45deg, #ffcc00 30%, #ffff99 90%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							fontWeight: 800,
						}}
					>
						Claiming the reward for you!
					</Typography>
				</Stack>
			</BaseDialog>
		</Fragment>
	)
}
