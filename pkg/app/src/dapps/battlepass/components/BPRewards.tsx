import { Fragment, useEffect, useState, useCallback } from 'react'
import {
	useGetBattlepassRewardsQuery,
	useGetScoreQuery,
	useScoreSubscription,
	useClaimRewardMutation,
} from 'queries/index'
import { useAppContext } from 'providers/app/modules/context'
import { useTheme } from '@mui/material/styles'
import { Box, Card, Button, Typography, Grid, Stack } from '@mui/material'
import { Avatar, AvatarGroup } from '@mui/material'
import { BaseDialog } from 'components/BaseDialog/baseDialog'
import { BPCard } from './BPCard'
import { content } from '../content/rewards'
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
}

export const BPRewardItem = ({ index, content, score, handleClaim }: TGridItemProps) => {
	const { uuid } = useAppContext()
	const {
		user: { address },
	} = useAppContext()

	const walletConnected = address !== null || !score.premium
	const requiredPoints = score.score >= content.points

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
									width: '260px',
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
						<Typography p={1} m={0} variant="h5">
							{content.name}
						</Typography>
						{/* <Typography variant="caption" sx={{ opacity: 0.5 }}>
							{content.description}
						</Typography> */}
					</Stack>

					<IconGroup />
				</Box>

				{requiredPoints && walletConnected ? (
					<Button size="large" fullWidth variant="pink" onClick={handleClaim}>
						Claim
					</Button>
				) : (
					<Button fullWidth size="large" disabled>
						Go Premium to Claim
					</Button>
				)}
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
		console.log('scoreData', scoreData?.BattlepassParticipants[0])
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
	const { data: rewards } = useGetBattlepassRewardsQuery({ variables: { id: id } })
	useEffect(() => {
		if (!rewards) return
		if (!rewards?.BattlepassBot?.BattlepassRewards) return
		const res = rewards?.BattlepassBot?.BattlepassRewards.map((i) => i) // as TRewardItem[]
		setDemoMode(res.length === 0)
		setItems(res.length === 0 ? content : res)
		console.log('r', res)
	}, [rewards])

	const [chainId, setChainId] = useState(null)
	const [claimRewardMutation] = useClaimRewardMutation({
		variables: { id: chainId, uuid: uuid },
	})

	const [open, setOpen] = useState(false)
	const handleClaim = useCallback(
		(id) => {
			if (!id) return
			setOpen(true)

			console.log('claiming reward', chainId, 'for', uuid)
			setChainId(id)
			console.log(id)

			const connect = async () => {
				console.log('connecting')
				const response = await claimRewardMutation().then((res) => {
					try {
						console.log('res', res)
						setOpen(false)
					} catch (e) {
						console.log(e)
					}
				})
			}
			if (chainId) connect()
		},
		[setChainId, chainId, uuid, claimRewardMutation],
	)

	return (
		<Fragment>
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
										width: '360px',
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
									/>
								</Card>
							</BPCard>
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
