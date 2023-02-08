import { Fragment, useState, useEffect } from 'react'
import { scoreToLevelMap } from '../content/mock'
import { BattlepassViews } from 'constants/battlepass'

import { Loader } from 'components/Loader'
import Delete from '@mui/icons-material/DeleteForeverOutlined'
import Edit from '@mui/icons-material/EditOutlined'
import Save from '@mui/icons-material/SaveOutlined'
import { useTheme } from '@mui/material/styles'
import { Grid, useMediaQuery } from '@mui/material'
import { TextField } from '@mui/material'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Button } from '@mui/material'

import { useGetLeaderboardQuery } from 'src/queries'

const createRow = (points: number, quests: number, name: string, uuid: string) => {
	return { points, quests, name, uuid }
}

const initialRowState = { points: 0, quests: 0, name: '', uuid: '' }

type TProps = {
	id: string
}

export function LeaderboardView({ id }: TProps) {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const { loading, data } = useGetLeaderboardQuery({ variables: { id } })
	const [leaderboard, setLeaderboard] = useState(null)

	useEffect(() => {
		if (!data) return
		const points = data?.BattlepassBot?.BattlepassPoints
		if (points.length === 0) return
		const rows = points
			.map((item, index) => createRow(item.points, item.quests, item.identity.discord, item.identityUuid)) //.sort((a, b) => a.points.toString().localeCompare(b.points.toString()))
			.sort((a, b) => (a.points > b.points ? -1 : a.points < b.points ? 1 : 0))
		setLeaderboard(rows)
	}, [data, data?.BattlepassBot?.BattlepassPoints])

	return loading ? (
		<Loader />
	) : (
		<Grid container alignItems="center" justifyContent="space-between" spacing={theme.spacing(2)}>
			<Grid item xs={12} pb={[2, 0]}>
				<TableContainer component={Paper} variant="glass">
					<Table sx={{ minWidth: 650 }} aria-label="score-to-level">
						<TableHead>
							<TableRow>
								<TableCell align="left">Rank</TableCell>
								<TableCell align="left">Name</TableCell>
								<TableCell align="right">Quests</TableCell>
								<TableCell align="right">Score</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{leaderboard &&
								leaderboard.map((row, index) => (
									<TableRow
										key={index}
										sx={{
											'td,th': { borderBottom: '1px dotted #ffffff33' },
											'&:last-child td, &:last-child th': { border: 0 },
										}}
									>
										<TableCell align="left" component="th" scope="row">
											{' '}
											{index + 1}{' '}
										</TableCell>
										<TableCell align="left">{row.name}</TableCell>
										<TableCell align="right">{row.quests}</TableCell>
										<TableCell align="right">{row.points}</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Grid>
	)
}
