import { Fragment, useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { use } from 'i18next'
import { String } from 'lodash'

import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { useAppContext } from 'providers/app/modules/context'
import {
	useGetBattlepassQuestsQuery,
	useGetBattlepassAchievementsQuery,
	useGetAchievementsSubscription,
} from 'src/queries'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { Box, Card, Button, Typography, Grid, Stack } from '@mui/material'
import { Avatar, AvatarGroup } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { CardContent, CardActions } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

import { BaseDialog } from 'components/BaseDialog/baseDialog'

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
}

const getIconUrl = (item) => {
	const name = `${item.source}-${item.type}`.toLowerCase()
	const url = `/bp/icons/${name}.svg`
	return url
}

export const BPQuestItem = ({ index, item, achievement }: TGridItemProps) => {
	const { uuid, user, linkAddress } = useAppContext()
	const { data: session } = useSession()
	const address = useCurrentAccountAddress()

	// eslint-disable-next-line @next/next/no-img-element
	const Icon = () => <img src={getIconUrl(item)} height="45px" alt={item.description} />

	const p = item.points // Math.round(Math.random() * 5) * 250 + 250
	const v = achievement?.progress || 0
	const t = item.maxDaily || 1
	const completed = Math.round((v / t) * 100)

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

	if (item.source === 'twitter' && !session?.user?.twitter) {
		actionString = `${Actions.CONNECT} ${item.source}`
		action = () => signIn(item.source)
		showAction = true
	}

	if (item.source === 'twitter' && item.type === 'follow') {
		actionString = `${Actions.FOLLOW} ${item.source}`
		const str = `https://twitter.com/intent/follow?screen_name=${item.twitterId}`
		action = () => {
			// console.log('follow', str)
			window.open(str, '_blank')
		}
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
				window.open(str, '_blank')
			}
			showAction = true
		}
	}

	console.log(item)
	if (item.source === 'gamedao' && item.type === 'connect' && v === 0 && user.uuid) {
		console.log('link wallet', item, address, user.address)
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
		<Stack p={2} sx={{ width: ['100%'], height: 150 }} direction="column" justifyContent="space-between">
			<Stack direction="row">
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

			{showAction ? (
				<Button fullWidth variant="outlined" sx={{ height: 36 }} onClick={action}>
					{`${actionString}`}
				</Button>
			) : (
				<>
					<Typography variant="cardMicro" align="right" sx={{ color: '#f3cb14' }}>
						{v}/{t}
					</Typography>
					<BorderLinearProgress variant="determinate" value={completed < 100 ? completed : 100} />
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
	const { data: quests } = useGetBattlepassQuestsQuery({ variables: where })
	const [userAchievements, setUserAchievements] = useState([])
	// const { data: achievements } = useGetBattlepassAchievementsQuery({ variables: where })
	const { data: achievements } = useGetAchievementsSubscription({ variables: { id: id, uuid: uuid } })

	useEffect(() => {
		if (!quests) return
		const _quests = quests.BattlepassBot.BattlepassQuests as TQuestItem[]
		// console.log('q', _quests)
		setItems(_quests)
	}, [quests])

	useEffect(() => {
		if (!achievements) return
		// const a = achievements.BattlepassBot.BattlepassProgresses
		const a = achievements.QuestProgresses
		if (!a) return
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

	function FadeInWhenVisible({ children }) {
		return (
			<motion.div
				initial="hidden"
				whileInView="visible"
				// whileHover={{ scale: 1 }}
				// whileTap={{ opacity: 0.8 }}
				viewport={{ once: true }}
				transition={{
					delay: 0.1,
					duration: 0.1,
				}}
				variants={{
					visible: { opacity: 1, scale: 1 },
					hidden: { opacity: 0, scale: 0.9 },
				}}
			>
				{children}
			</motion.div>
		)
	}

	const [showDialog, setShowDialog] = useState(false)
	const handleClose = () => setShowDialog(false)
	const handleShow = () => setShowDialog(true)

	return (
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

				{items.length > 0 ? (
					items.map((item, index) => {
						// TODO: rm when twitter is fixed
						// if (item.source === 'twitter') return null

						return (
							<Grid item key={index} xs={12} md={6} lg={4}>
								<FadeInWhenVisible>
									<Card sx={{ border: 0, backgroundColor: '#11111122' }}>
										<BPQuestItem
											item={item}
											index={index}
											achievement={getAchievementForQuest(item.id)}
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
