import { Fragment, useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { use } from 'i18next'
import { String } from 'lodash'
import { useRouter } from 'next/router'

// import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { useAppContext } from 'src/providers/app/components/context'
import {
	useGetBattlepassQuestsQuery,
	useGetBattlepassAchievementsQuery,
	useGetAchievementsSubscription,
	useBattlepassSubscription,
} from 'src/queries'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'

import { Box, Card, Button, Typography, Grid, Stack } from '@mui/material'
import { Avatar, AvatarGroup } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { CardContent, CardActions } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

import { BaseDialog } from 'components/molecules/BaseDialog'
import { FadeInWhenVisible } from './FadeInWhenVisible'

import { getTwitterAuthorizationURL } from 'src/utils/getTwitterAuthorizationURL'
import { getEpicAuthorizationURL } from 'src/utils/getEpicAuthorizationURL'
import { Loader } from 'components/atoms/Loader'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 4,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		borderRadius: 1,
		backgroundColor: theme.palette.grey[700],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 1,
		background: 'linear-gradient( to right, #f3cb14, #ffee66 85%, #ffffff 95% )',
		boxShadow: '0 0 10px #ffff00',
	},
}))
// import { Invitational } from './Invitational'

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export type TQuestItem = {
	battlepassId: number
	channelId?: string
	guildId?: string
	twitterId?: string
	name: string
	description: string
	id: number
	maxDaily: number
	points: number
	quantity: number
	repeat: boolean
	source: string
	type: string
	progress?: number
	link?: string
}

type TGridItemProps = {
	index: number
	item: TQuestItem
	achievement: any
	active: boolean
}

const getIconUrl = (item) => {
	const name = `${item.source}-${item.type}`.toLowerCase()
	const url = `/bp/icons/${name}.svg`
	return url
}

async function authorizeEpic(uuid, path) {
	console.log('authorizeEpic')
	const url = await getEpicAuthorizationURL(uuid, path)
	return window.open(url, '_self')
}

async function authorizeTwitter(uuid, path) {
	console.log('authorizeTwitter')
	const url = await getTwitterAuthorizationURL(uuid, path)
	return window.open(url, '_self')
}

export const BPQuestItem = ({ index, item, achievement, active }: TGridItemProps) => {
	const { uuid, user, linkAddress } = useAppContext()
	const { data: session } = useSession()
	const address = useCurrentAccountAddress()
	const router = useRouter()

	// eslint-disable-next-line @next/next/no-img-element
	const Icon = () => <img src={getIconUrl(item)} height="45px" alt={item.description} />

	const p = item?.points || 0 // Math.round(Math.random() * 5) * 250 + 250
	const v = achievement?.progress || 0
	const a = item?.quantity * v
	const percent = v * 100

	let progressText =
		achievement?.progress === 1
			? 'done'
			: item?.maxDaily
			  ? `${a} of ${item?.maxDaily}`
			  : `${a} of ${item?.quantity}`

	enum Source {
		Wallet,
		Twitter,
		Discord,
		Instagram,
		Facebook,
		TikTok,
		SnapChat,
		Twitch,
		Game,
		epicGames,
	}

	enum Actions {
		DEFAULT = '',
		CONNECT = 'connect your',
		DISCONNECT = 'disconnect',
		JOIN = 'join',
		FOLLOW = 'follow us on',
		POST = 'post',
		LIKE = 'like',
		SHARE = 'share',
		LINK = 'link wallet',
	}

	let actionString = ''
	let showAction = false
	let action

	console.log(item.source, item.type)

	// TODO: check for existing twitter token
	// if (item.source === 'twitter' && !session?.user?.twitter) {
	if (item.source === 'twitter' && item.type === 'connect' && !user.twitter && v === 0) {
		actionString = `${Actions.CONNECT} ${item.source}`
		action = () => authorizeTwitter(uuid, router.asPath)
		showAction = true
	}

	if (item.source === 'twitter' && item.type === 'follow' && v === 0) {
		actionString = `${Actions.FOLLOW} ${item.source}`
		const str = `https://twitter.com/intent/follow?screen_name=${item.twitterId}`
		action = () => {
			// console.log('follow', str)
			window.open(str, '_blank')
		}
		showAction = true
	}

	//  connect epic games to gamedao

	if (item.source === 'epicGames' && !user.epicGames && v === 0) {
		console.log('epic games not connected', !user.epicGames)
		actionString = `Connect with Epic Games`
		action = () => authorizeEpic(uuid, router.asPath)
		showAction = true
	}

	//  connect discord to gamedao

	if (item.source === 'discord' && !session?.user?.discord) {
		// console.log('Discord not logged in', session?.user?.discord)
		actionString = `${Actions.CONNECT} ${item.source}`
		action = () => signIn(item.source)
		showAction = true
	}

	// join a discord server

	if (item.source === 'discord' && item.type === 'join') {
		// console.log('join discord', item.guildId, item.link)
		if (v === 0) {
			actionString = `${Actions.JOIN} ${item.source} SERVER`
			const str = item.link
				? item.link.startsWith('http')
					? `${item.link}`
					: `https://discord.gg/${item.link}`
				: null

			action = () => {
				window.open(str, '_self')
			}
			showAction = true
		}
	}

	if (item.source === 'gamedao' && item.type === 'connect' && v === 0 && user.uuid) {
		// console.log('link wallet', item, address, user.address)
		actionString = `${Actions.LINK}`
		action = () => {
			// console.log('link address', '->', address, user.uuid)
			linkAddress(address)
		}
		showAction = true
	}

	// console.log(item, achievement)
	// console.log(v, t, completed)
	// console.log(item.id, item.maxDaily, 'achievement', achievement)

	return (
		<Stack
			p={2}
			spacing={2}
			sx={{ width: ['100%'], height: 192 }}
			direction="column"
			justifyContent="space-between"
		>
			<Stack direction="row" height={'100%'}>
				<Box sx={{ minWidth: '64px' }}>
					<Icon />
					<Typography pt={1} variant="cardMicro" sx={{ color: '#f3cb14' }}>
						{p} BP
					</Typography>
				</Box>
				<Box pl={2}>
					<Typography variant="cardHeader">
						{item.name}
						{/*  {capitalize(item.source)} {capitalize(item.type)} */}
					</Typography>
					<Typography variant="cardBody" sx={{ opacity: 0.5 }}>
						{item.description}
					</Typography>
				</Box>
			</Stack>

			{active && showAction ? (
				<Button fullWidth variant="outlined" sx={{ height: 36 }} onClick={action}>
					{`${actionString}`}
				</Button>
			) : (
				<>
					<Typography variant="cardMicro" align="right" sx={{ color: '#f3cb14' }}>
						{progressText}
					</Typography>
					<BorderLinearProgress variant="determinate" value={percent < 100 ? percent : 100} />
				</>
			)}
		</Stack>
	)
}

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.5,
			staggerChildren: 1,
			type: 'tween',
			ease: 'easeInOut',
		},
	},
}

const containerItem = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
}

type TGridProps = {
	id?: string
}
type TArgs = {
	args?: TGridProps
}

export const BPQuests = ({ args }: TArgs) => {
	const { id } = args
	const { uuid } = useAppContext()
	const where = { id: id }
	const [items, setItems] = useState([])

	const [active, setActive] = useState(false)
	const { data: battlepass } = useBattlepassSubscription({ variables: { id: id } })
	useEffect(() => {
		if (!battlepass || !battlepass?.Battlepasses.length) return
		const pass = battlepass?.Battlepasses[0]
		setActive(pass.active)
	}, [battlepass])

	const { loading, data: quests } = useGetBattlepassQuestsQuery({ variables: where })
	const [userAchievements, setUserAchievements] = useState([])
	// const { data: achievements } = useGetBattlepassAchievementsQuery({ variables: where })
	const { data: achievements } = useGetAchievementsSubscription({ variables: { id: id, uuid: uuid } })

	useEffect(() => {
		if (!quests) return
		const _quests = quests.battlepassBot.BattlepassQuests as TQuestItem[]
		if (_quests === items) return
		// console.log('q', _quests)
		setItems(_quests)
	}, [quests])

	useEffect(() => {
		if (!achievements) return
		// const a = achievements.battlepassBot.BattlepassProgresses
		const a = achievements.QuestProgresses
		if (!a || a === userAchievements) return
		// console.log('a', a)
		setUserAchievements(a as any[])
	}, [achievements])

	const getAchievementForQuest = (id) => {
		const x = userAchievements.find((q) => q.questId === id)
		// console.log(userAchievements, x, id)
		return x
	}

	const { ref, inView } = useInView({
		threshold: 0.8,
	})

	// function FadeInWhenVisible({ d, children }) {
	// 	return (
	// 		<motion.div
	// 			initial="hidden"
	// 			whileInView="visible"
	// 			// whileHover={{ scale: 1 }}
	// 			// whileTap={{ opacity: 0.8 }}
	// 			viewport={{ once: true }}
	// 			transition={{
	// 				delay: ( 0.1 + d / 10 ),
	// 				duration: 0.1,
	// 			}}
	// 			variants={{
	// 				visible: { opacity: 1, scale: 1 },
	// 				hidden: { opacity: 0, scale: 0.9 },
	// 			}}
	// 		>
	// 			{children}
	// 		</motion.div>
	// 	)
	// }

	const [showDialog, setShowDialog] = useState(false)
	const handleClose = () => setShowDialog(false)
	const handleShow = () => setShowDialog(true)

	return loading ? (
		<Loader />
	) : (
		<Fragment>
			<BaseDialog title="Hello" open={showDialog} onClose={handleClose}>
				Hello
			</BaseDialog>
			<Grid
				container
				// p={0}
				// m={0}
				// columns={{ xs: 1, md: 2 }}
				// rowSpacing={2}
				// columnSpacing={{ xs: 2, md: 4, lg: 6 }}
				spacing={{ xs: 2, md: 4, lg: 6 }}
				justifyContent={{ xs: 'center', md: 'start' }}
			>
				<Grid item xs={12}>
					<Typography variant="h4">Quests</Typography>
				</Grid>

				{/* <Grid item xs={12}>
					<Invitational args={{ id, items }} />
				</Grid> */}

				{items?.length > 0 ? (
					items.map((item, index) => {
						// TODO: rm when twitter is fixed
						// if (item.source === 'twitter') return null

						return (
							<Grid item key={index} xs={12} md={6} lg={4}>
								<FadeInWhenVisible d={index}>
									<Card sx={{ border: 0, backgroundColor: '#11111122' }}>
										<BPQuestItem
											item={item}
											index={index}
											achievement={getAchievementForQuest(item.id)}
											active={active}
										/>
									</Card>
								</FadeInWhenVisible>
							</Grid>
						)
					})
				) : (
					<Grid item xs={12}>
						<Typography align="center" variant="body1">
							No Quests yet, message the organization!
						</Typography>
					</Grid>
				)}
			</Grid>
		</Fragment>
	)
}
