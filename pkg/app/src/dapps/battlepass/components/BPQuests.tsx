import { Fragment, useEffect, useState } from 'react'

import { useGetBattlepassQuestsQuery, useGetBattlepassAchievementsQuery } from 'src/queries'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { Box, Card, Button, Typography, Grid, Stack } from '@mui/material'
import { Avatar, AvatarGroup } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { CardContent, CardActions } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { useAppContext } from 'providers/app/modules/context'
import { use } from 'i18next'
import { String } from 'lodash'

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
	channelId: string
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
}

type TGridItemProps = {
	index: number
	item: TQuestItem
	achievement: any
}

export const BPQuestItem = ({ index, item, achievement }: TGridItemProps) => {
	const icons = ['Join', 'Follow', 'Twitter', 'Wallet']
	const key = icons[index % 4] // icons[ Math.round( Math.random() * 4 ) ]
	const url = `/bp/icons/${key.toLowerCase()}-gold.svg`
	// eslint-disable-next-line @next/next/no-img-element
	const Icon = () => <img src={url} height="45px" alt={key} />

	const ButtonOrBar = !item.progress ? false : true //Math.random() > 0.5

	const p = item.points // Math.round(Math.random() * 5) * 250 + 250
	const v = achievement?.progress || 0
	const t = item.maxDaily || 1
	const completed = Math.round((v / t) * 100)

	console.log(v, t, completed)
	console.log(item.id, item.maxDaily, 'achievement', achievement)

	const action = () => {
		switch (key) {
			case 'Wallet':
				return 'Talisman Wallet'
				break
			case 'Follow':
				return 'Twitch'
				break
			case 'Twitter':
				return 'Twitter'
				break
			default:
				return 'Discord'
				break
		}
	}

	return (
		<Stack p={2} sx={{ width: ['100%'], height: 150 }} direction="column" justifyContent="space-between">
			<Stack direction="row">
				<Box sx={{ width: '56px' }}>
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

			{ButtonOrBar ? (
				<Button fullWidth variant="grey" sx={{ height: 36 }}>
					{`Connect ${action()}`}
				</Button>
			) : (
				<>
					<Typography variant="cardMicro" align="right" sx={{ color: '#f3cb14' }}>
						{v}/{t}
					</Typography>
					<BorderLinearProgress variant="determinate" value={completed} />
				</>
			)}
		</Stack>
	)
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
	const { data: achievements } = useGetBattlepassAchievementsQuery({ variables: where })

	useEffect(() => {
		if (!quests) return
		const _quests = quests.BattlepassBot.BattlepassQuests as TQuestItem[]
		console.log('q', _quests)
		setItems(_quests)
	}, [quests])

	useEffect(() => {
		if (!achievements) return
		const a = achievements.BattlepassBot.BattlepassProgresses
		if (!a) return
		// console.log('a', a)
		setUserAchievements(a as any[])
	}, [achievements])

	const getAchievementForQuest = (id) => {
		const x = userAchievements.find((q) => q.questId === id)
		// console.log(userAchievements, x, id)
		return x
	}

	return (
		<Grid
			container
			// p={0}
			// m={0}
			// columns={{ xs: 1, md: 2 }}
			// rowSpacing={2}
			// columnSpacing={{ xs: 2, md: 4, lg: 6 }}
			spacing={{ xs: 2, md: 4, lg: 6 }}
			justifyContent={{ xs: 'center', md: 'center' }}
		>
			<Grid item xs={12}>
				<Typography variant="h4">Quests</Typography>
			</Grid>

			{items.length > 0 ? (
				items.map((item, index) => (
					<Grid item key={index} xs={12} md={6} lg={3}>
						<Card sx={{ border: 0, backgroundColor: '#11111122' }}>
							<BPQuestItem item={item} index={index} achievement={getAchievementForQuest(item.id)} />
						</Card>
					</Grid>
				))
			) : (
				<Box>
					<Typography variant="body1">No Quests yet, message the organization!</Typography>
				</Box>
			)}
		</Grid>
	)
}
