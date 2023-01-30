import { Fragment, useEffect, useState } from 'react'

import { useGetBattlepassQuestsQuery } from 'src/queries'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { Box, Card, Button, Typography, Grid, Stack } from '@mui/material'
import { Avatar, AvatarGroup } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { CardContent, CardActions } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { useAppContext } from 'providers/app/modules/context'
import { use } from 'i18next'

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

type TQuestItem = {
	battlepassId: number
	channelId: string
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
}

export const BPQuestItem = ({ index, item }: TGridItemProps) => {
	const icons = ['Join', 'Follow', 'Twitter', 'Wallet']
	const key = icons[index % 4] // icons[ Math.round( Math.random() * 4 ) ]
	const url = `/bp/icons/${key.toLowerCase()}-gold.svg`
	// eslint-disable-next-line @next/next/no-img-element
	const Icon = () => <img src={url} height="45px" alt={key} />

	const ButtonOrBar = !item.progress ? false : true //Math.random() > 0.5

	const p = item.points // Math.round(Math.random() * 5) * 250 + 250
	const t = item.quantity
	const v = Math.round(Math.random() * t) // progress
	const completed = Math.round((v / t) * 100)

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
						{capitalize(item.source)} {capitalize(item.type)}
					</Typography>
					<Typography variant="cardBody" sx={{ opacity: 0.5 }}>
						Get a limited edition WAVE banner for your socials
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
	const { loading, data } = useGetBattlepassQuestsQuery({ variables: where })

	const [items, setItems] = useState([])

	useEffect(() => {
		if (!data) return
		const _quests = data.BattlepassBot.BattlepassQuests as TQuestItem[]
		console.log('q', _quests)
		setItems(_quests)
	}, [data])

	// const items = 4
	// const arr1: number[] = new Array(items).fill(0)

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

			{items.map((item, index) => {
				return (
					<Grid item key={index} xs={12} md={6} lg={3}>
						<Card sx={{ border: 0, backgroundColor: '#11111122' }}>
							<BPQuestItem item={item} index={index} />
						</Card>
					</Grid>
				)
			})}
		</Grid>
	)
}
