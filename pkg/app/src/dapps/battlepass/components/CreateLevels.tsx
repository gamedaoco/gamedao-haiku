import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { scoreToLevelMap } from '../content/mock'
function createData(id: number, name: string, level: number, score: number) {
	return { id, name, level, score }
}
const rows = scoreToLevelMap.map((item, index) => createData(index, item.name, item.level, item.score))

export function LevelEditor() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="score-to-level" size="small">
				<TableHead>
					<TableRow>
						<TableCell align="right">Id</TableCell>
						<TableCell align="right">Name</TableCell>
						<TableCell align="right">Level</TableCell>
						<TableCell align="right">Score</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.id}
							sx={{
								'td,th': { borderBottom: '1px dotted #ffffff33' },
								'&:last-child td, &:last-child th': { border: 0 },
							}}
						>
							<TableCell align="left" component="th" scope="row">
								{' '}
								{row.id}{' '}
							</TableCell>
							<TableCell align="right">{row.name}</TableCell>
							<TableCell align="right">{row.level}</TableCell>
							<TableCell align="right">{row.score}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
