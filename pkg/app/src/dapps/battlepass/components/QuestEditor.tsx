import { Fragment, useState, useEffect } from 'react'

import { scoreToLevelMap } from '../content/mock'
import Delete from '@mui/icons-material/DeleteForeverOutlined'
import Edit from '@mui/icons-material/EditOutlined'
import Save from '@mui/icons-material/SaveOutlined'

import { Avatar, Card, Button, Grid, CardContent, CardActions } from '@mui/material'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Stack,
	TextField,
} from '@mui/material'
import { useGetBattlepassQuestsQuery } from 'src/queries'

// quest(
// battlepass: String!
// channelId: String
// cid: String
// daily: Boolean!
// description: String
// hashtag: String
// maxDaily: Int
// name: String
// points: Int!
// quantity: Int!
// source: Source!
// twitterId: String
// type: ActivityType!
// ): BattlepassQuest

type TData = {
	index: number
	battlepass: string
	channelId?: string
	cid?: string
	daily: boolean
	description?: string
	hashtag?: string
	maxDaily?: number
	name?: string
	points: number
	quantity: number
	source: string
	twitterId?: string
	type: string
}
const createData = (data) => {
	return { ...data }
}
const rows = scoreToLevelMap.map((item, index) => createData(item))

type TProps = {
	id: string
}
export function QuestEditor({ id }: TProps) {
	const { data } = useGetBattlepassQuestsQuery({ variables: { id } })

	const enableEdit = false
	const enableDelete = false

	// set battlepass id
	// get current quests
	// create new quest
	// delete quest
	// edit quest
	// save quest

	// const [editMode, setEditMode] = useState(false)
	// const [editRow, setEditRow] = useState(null)
	// const [rowState, setRowState] = useState(initialRowState)
	// const handleChange = (e) => {
	// 	const update = { ...rowState, [e.target.name]: e.target.value }
	// 	setRowState(update)
	// }
	// const handleEditRow = (row) => {
	// 	setEditRow(row)
	// 	setEditMode(true)
	// 	setRowState(data[row])
	// 	console.log('edit row', row, data[row])
	// }
	// const handleSaveRow = (row) => {
	// 	const update = { ...data[row], ...rowState }
	// 	const merge = data.map((item, index) => (index !== row ? item : update))
	// 	setData((prevState) => merge)
	// 	setEditRow(null)
	// 	setRowState(initialRowState)
	// 	setEditMode(false)
	// }
	// const handleDeleteRow = (row) => {
	// 	const update = data
	// 		.filter((i) => i.id !== row)
	// 		.map((item, index) => {
	// 			item.id = index
	// 			return item
	// 		})
	// 	setData((prevState) => update)
	// }
	// const handleReset = () => {
	// 	setRowState(null)
	// 	setEditRow(null)
	// 	setEditMode(false)
	// 	setData(null)
	// }

	// TODO handle send mutation

	// useEffect(() => {
	// 	if (!data)
	// 		setData(
	// 			rows.map((row, index) => {
	// 				row.id = index
	// 				return row
	// 			}),
	// 		)
	// }, [data])

	return !id || !data ? null : <Fragment></Fragment>
}
