import { Fragment, useState, useEffect, useCallback } from 'react'
import { scoreToLevelMap } from '../content/mock'
import { useCreateBattlepassLevelsMutation, Level } from 'src/queries'

import Delete from '@mui/icons-material/DeleteForeverOutlined'
import Edit from '@mui/icons-material/EditOutlined'
import Save from '@mui/icons-material/SaveOutlined'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Button } from '@mui/material'
import { TextField } from '@mui/material'

import { gql, useMutation } from '@apollo/client'

type TRowData = {
	id: number
	name: string
	score: number
	level: number
}
const createData = (id: number, name: string, level: number, score: number): TRowData => {
	return { id, name, level, score }
}
const rows = scoreToLevelMap.map((item, index) => createData(index, item.name, item.level, item.score))
const initialRowState: TRowData = { id: 0, name: '', level: 0, score: 0 }

export function LevelEditor(id) {
	const enableEdit = true
	const enableDelete = true
	const [enableSend, setEnableSend] = useState(true)

	const [data, setData] = useState(rows)
	const [editMode, setEditMode] = useState(false)
	const [editRow, setEditRow] = useState(null)
	const [rowState, setRowState] = useState(initialRowState)

	const handleChange = (e) => {
		const update = { ...rowState, [e.target.name]: e.target.value }
		setRowState(update)
	}

	const handleEditRow = (row) => {
		setEditRow(row)
		setEditMode(true)
		setRowState(data[row])
		console.log('edit row', row, data[row])
	}

	const handleSaveRow = (row) => {
		const update = { ...data[row], ...rowState }
		const merge = data.map((item, index) => (index !== row ? item : update))
		setData((prevState) => merge)
		setEditRow(null)
		setRowState(initialRowState)
		setEditMode(false)
	}

	const handleDeleteRow = (row) => {
		const update = data
			.filter((i) => i.id !== row)
			.map((item, index) => {
				item.id = index
				return item
			})
		setData((prevState) => update)
	}

	const handleReset = () => {
		setRowState(null)
		setEditRow(null)
		setEditMode(false)
		setData(null)
	}

	const [battlepassId, setBattlepassID] = useState(id.id as string)
	const [levels, setLevels] = useState(null)

	useEffect(() => {
		if (!battlepassId) return
		console.log('battlepass id', battlepassId)
	}, [battlepassId])

	useEffect(() => {
		if (!data) return
		const levels = data?.map((i): Level => ({ level: Number(i.level), name: i.name, points: Number(i.score) }))
		setLevels(levels)
	}, [data])

	const [payload, setPayload] = useState<any>({ id: battlepassId, levels: levels })

	useEffect(() => {
		if (!levels) return
		const payload = { id: id.id, levels: levels }
		setPayload(payload)
	}, [id, levels])

	const [createBattlepassLevelsMutation] = useCreateBattlepassLevelsMutation({
		variables: payload,
	})

	// const [createLevels, { loading, error }] = useMutation(gql`
	// 	mutation CreateLevels($id: String!, $levels: [Level!]!) {
	// 		BattlepassBot {
	// 			levels(battlepass: $id, levels: $levels) {
	// 				battlepassId
	// 			}
	// 		}
	// 	}
	// `)
	// console.log('createBattlepassLevelsMutation', createBattlepassLevelsMutation)

	const handleSend = useCallback(() => {
		console.log('create', payload)
		const create = async () => {
			const response = await createBattlepassLevelsMutation({ variables: payload }).then((res) => {
				try {
					// const _id = res?.data?.BattlepassBot?.levels
					console.log('create', 'id ->', res)
					setEnableSend(false)
				} catch (e) {
					console.log(e)
				}
			})
		}
		create()
	}, [levels, payload])

	useEffect(() => {
		if (!data)
			setData(
				rows.map((row, index) => {
					row.id = index
					return row
				}),
			)
	}, [data])

	return !data ? null : (
		<Fragment>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="score-to-level" size="small">
					<TableHead>
						<TableRow>
							<TableCell align="right">Id</TableCell>
							<TableCell align="right">Name</TableCell>
							<TableCell align="right">Level</TableCell>
							<TableCell align="right">Score</TableCell>
							<TableCell align="right">fn</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row) => (
							<TableRow
								key={`${row.id}${Math.random() * 1000}`}
								sx={{
									'td,th': { borderBottom: '1px dotted #ffffff33' },
									'&:last-child td, &:last-child th': { border: 0 },
								}}
							>
								<TableCell align="left" component="th" scope="row">
									{' '}
									{row.id}{' '}
								</TableCell>
								<TableCell align="right">
									{row.id === editRow ? (
										<TextField
											name={'name'}
											size="small"
											fullWidth
											label="Name"
											variant="outlined"
											onChange={handleChange}
											value={rowState.name}
										/>
									) : (
										row.name
									)}
								</TableCell>
								<TableCell align="right">
									{row.id === editRow ? (
										<TextField
											name={'level'}
											size="small"
											fullWidth
											label="Level"
											variant="outlined"
											onChange={handleChange}
											value={rowState.level}
											type="number"
										/>
									) : (
										row.level
									)}
								</TableCell>
								<TableCell align="right">
									{row.id === editRow ? (
										<TextField
											name={'score'}
											size="small"
											fullWidth
											label="Score"
											variant="outlined"
											onChange={handleChange}
											value={rowState.score}
											type="number"
										/>
									) : (
										row.score
									)}
								</TableCell>
								<TableCell align="right">
									{row.id === editRow ? (
										<Button onClick={() => handleSaveRow(row.id)}>
											<Save />
										</Button>
									) : (
										!editMode &&
										enableEdit && (
											<Button onClick={() => handleEditRow(row.id)}>
												<Edit />
											</Button>
										)
									)}
									{enableDelete && (
										<Button onClick={() => handleDeleteRow(row.id)}>
											<Delete />
										</Button>
									)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			{rows !== data && (
				<Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
					<Button color="warning" variant="outlined" onClick={handleReset}>
						Reset
					</Button>
					<Stack direction="row" spacing={2}>
						<Button color="success" variant="contained" onClick={handleSend} disabled={!enableSend}>
							Save
						</Button>
					</Stack>
				</Stack>
			)}
		</Fragment>
	)
}
