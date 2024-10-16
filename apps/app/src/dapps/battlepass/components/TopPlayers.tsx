import { useState, useEffect } from 'react'
import { useGetLeaderboardQuery } from 'src/queries'

import { useTheme } from '@mui/material/styles'
import { Avatar, Grid, Typography, Paper, Stack, useMediaQuery } from '@mui/material'
import { Loader } from 'components/atoms/Loader'

export type TArgs = {
	id?: string
}

type TProps = {
	args?: TArgs
}

export function TopPlayers({ args }: TProps) {
	const { id } = args
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const { loading, data } = useGetLeaderboardQuery({ variables: { id } })
	const [leaderboard, setLeaderboard] = useState(null)

	useEffect(() => {
		if (!id || loading || !data?.battlepassBot?.points) return

		const allPlayers = data?.battlepassBot?.points
		if (allPlayers.length === 0) return

		console.log('id', id)
		console.log('allPlayers', allPlayers)

		const players = allPlayers
			.map((item, index) => item)
			.sort((a, b) => (a.points > b.points ? -1 : a.points < b.points ? 1 : 0))
			.slice(0, 5)

		console.log(players)
		setLeaderboard(players)
	}, [data, data?.battlepassBot?.points])

	if (loading) return <Loader />
	if (!leaderboard) return null
	return (
		<Grid container alignItems="center" justifyContent="space-between" spacing={theme.spacing(2)} pb={[2, 2]}>
			<Grid item xs={12}>
				<Typography variant="micro">Top Players</Typography>
			</Grid>

			<Grid item xs={12}>
				<Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
					{leaderboard.map((player, index) => (
						<Paper key={index} sx={{ p: 1, width: '160px' }} variant="glass">
							<Stack direction="row" spacing={1} justifyContent="left" alignItems="center">
								<Avatar></Avatar>
								<Stack>
									<Typography sx={{ fontSize: '12px' }}>{player.identity.name}</Typography>
									<Typography sx={{ fontSize: '10px' }}>{player.points}</Typography>
								</Stack>
							</Stack>
						</Paper>
					))}
				</Stack>
			</Grid>
		</Grid>
	)
}
