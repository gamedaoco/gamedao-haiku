import { Fragment, useEffect } from 'react'

import { useBattlepassByIdQuery } from 'src/queries'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { Box, Card, Button, Typography, Grid, Stack } from '@mui/material'
import { Avatar, AvatarGroup } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { CardContent, CardActions } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

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

type TGridItemProps = {
	index?: number
}

export const BPQuestItem = ({ index }: TGridItemProps) => {
	const icons = ['Join', 'Follow', 'Twitter', 'Wallet']
	const key = icons[index] // icons[ Math.round( Math.random() * 4 ) ]
	const url = `/bp/icons/${key}-gold.svg`
	// eslint-disable-next-line @next/next/no-img-element
	const Icon = () => <img src={url} height="45px" alt={key} />

	const ButtonOrBar = Math.random() > 0.5

	const p = Math.round(Math.random() * 5) * 250 + 250
	const t = 100
	const v = Math.round(Math.random() * t)

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
					<Typography variant="cardHeader">{key}</Typography>
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
					<BorderLinearProgress variant="determinate" value={v} />
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
	const address = useCurrentAccountAddress()
	const variables = { address, battlepass: id, identity: null }
	const { loading, data, error } = useBattlepassByIdQuery({ variables })

	useEffect(() => {
		console.log('loading content:', id, loading, data)
	}, [loading, data])

	const theme = useTheme()

	const items = 4
	const arr1: number[] = new Array(items).fill(0)

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

			{arr1.map((item, index) => {
				return (
					<Grid item key={index} xs={12} md={6} lg={3}>
						<Card sx={{ border: 0, backgroundColor: '#11111122' }}>
							<BPQuestItem index={index} />
						</Card>
					</Grid>
				)
			})}
		</Grid>
	)
}
