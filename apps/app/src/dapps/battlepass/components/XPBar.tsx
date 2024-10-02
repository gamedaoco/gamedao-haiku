import React, { useCallback, useEffect, useState } from 'react'
import { useAppContext } from 'src/providers/app/components/context'
import { useGetLevelsQuery, useGetScoreQuery, useLevelsSubscription, useScoreSubscription } from 'src/queries'

import { styled, useTheme } from '@mui/material/styles'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { Loader } from 'components/atoms/Loader'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		borderRadius: 3,
		backgroundColor: '#66006622',
		boxShadow: '0 0 10px #ee469399',
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 3,
		background: 'linear-gradient( to right, #ee4693, #ee4693 90%, #ffffff 100% )',
		boxShadow: '0 0 10px #ee4693',
	},
}))

// eslint-disable-next-line @next/next/no-img-element
const Shield = () => <img src="/bp/shield-default.svg" height="45px" alt="GameDAO" />

const closest = (counts: Array<number>, goal: number) =>
	counts.reduce((prev, curr) => (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev))

const nFormat = (num, limit = 10000, unit = 'k') =>
	Math.abs(num) > limit - 1
		? Math.sign(num) * Number((Math.abs(num) / limit).toFixed(1)) + unit
		: Math.sign(num) * Math.abs(num)

const below = (arr: Array<number>, num: number) => arr.findIndex((e) => e > num)

export type TArgs = {
	id?: string
	isBattlePass?: boolean
}

type TProps = {
	args?: TArgs
}

export const XPBar = ({ args }: TProps) => {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const { id } = args
	const { uuid } = useAppContext()

	const [levels, setLevels] = useState(null)
	const [level, setLevel] = useState(0)
	const [displayLevel, setDisplayLevel] = useState(0)

	const [points, setPoints] = useState(0)
	const [displayPoints, setDisplayPoints] = useState(0)
	const [maxPoints, setMaxPoints] = useState(0) // points until next level

	const [progress, setProgress] = useState(0)
	const [rank, setRank] = useState(null)

	const { data: levelsData } = useLevelsSubscription({ variables: { id: id } })
	const { data } = useScoreSubscription({ variables: { id: id, uuid: uuid } })

	// useEffect(() => {
	// 	if (!data || !uuid) return
	// 	setPoints(0)
	// }, [data, uuid])

	useEffect(() => {
		if (!levelsData?.BattlepassLevels.length) return
		const _levels = levelsData?.BattlepassLevels?.map((l) => {
			return { level: l.level || 0, points: l.points || 0, name: l.name }
		})
		// console.log('levels', _levels)
		setLevels(_levels)
	}, [levelsData])

	useEffect(() => {
		if (!data || !data?.BattlepassParticipants.length) return
		const _points = data?.BattlepassParticipants[0].points
		// console.log('xp', 'updatePoints', _points, maxPoints, level)
		setPoints(_points)
		setDisplayLevel(Math.round(_points / 100))

		const updateProgress = Math.round((_points / maxPoints) * 100)
		setProgress(updateProgress)
		// console.log('xp', 'updateProgress', updateProgress)
	}, [data?.BattlepassParticipants, maxPoints, level])

	useEffect(() => {
		if (!points) return
		if (points != displayPoints) {
			const updatePoints = Math.round((displayPoints + points) / 2)
			setDisplayPoints(updatePoints)
		}
	}, [points, displayPoints])

	useEffect(() => {
		if (!levels || !levels.length) return
		const updateRank =
			levels[
				below(
					levels.map((l) => l.points),
					points,
				)
			]
		// console.log('xp', 'updateRank', updateRank)
		// console.log('xp','next rank',updateRank.points, levels[updateRank])
		setMaxPoints(updateRank.points)
		setRank(updateRank.name)
		setLevel(updateRank.level)
	}, [levels, points])

	useEffect(() => {
		if (level != displayLevel) {
			const updateLevel = Math.floor((displayLevel + level) / 2)
			setDisplayLevel(updateLevel)
		}
	}, [level, displayLevel])

	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Stack direction="row" spacing={theme.spacing(2)} alignItems="center">
				<Button
					sx={{
						height: '64px',
						width: 'auto',
						backgroundImage: 'url(/bp/shield-default.svg)',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
						backgroundSize: 'contain',
					}}
				>
					<Typography variant="shield" color="white">
						{displayLevel}
					</Typography>
				</Button>
				<Stack direction="column" alignItems="bottom">
					<Typography color="white">{`${displayPoints}${maxPoints > 0 ? ` / ${nFormat(maxPoints)}` : ``} BP`}</Typography>
					<Typography variant="body1" color="white">
						{rank}
					</Typography>
				</Stack>
			</Stack>
			<BorderLinearProgress
				sx={{
					transitionDuration: '0.5s',
					WebkitFilter: 'drop-shadow( 0 5px 10px rgba(255,0,255,0.2) )',
					filter: 'drop-shadow( 0 1px 10px rgba(255,0,255,0.2) )',
					'&:hover': {
						WebkitFilter: 'drop-shadow( 0 5px 10px rgba(255,0,255,.5) )',
						filter: 'drop-shadow( 0 1px 10px rgba(255,0,255,.5) )',
					},
				}}
				variant="determinate"
				value={progress}
			/>
		</Stack>
	)
}
