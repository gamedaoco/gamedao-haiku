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
	Typography,
} from '@mui/material'

import { useGetBattlepassQuestsQuery } from 'src/queries'

import { TInitialState } from '../Create'

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
	index?: number
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
// const rows = quests.map((item, index) => createData(item))

type TProps = {
	formState: TInitialState
	setFormState: (object) => void
}

export function QuestEditor({ formState, setFormState }: TProps) {
	// get battlepass id
	const { battlepassId: id } = formState
	const { data } = useGetBattlepassQuestsQuery({ variables: { id } })

	const handleChange = (e) => {
		// console.log('input', e.target.name, e.target.value, formState)
		const update = { ...formState, [e.target.name]: e.target.value }
		setFormState(update)
		localStorage.setItem('quests', JSON.stringify(update))
	}

	// get current quests
	// delete quest
	// edit quest
	// save quest

	// create new quest
	const CreateQuest = (props) => {
		// cid: String

		// name: String
		// description: String

		// daily: Boolean!
		// maxDaily: Int
		// points: Int!
		// quantity: Int!

		// source: Source!
		//	discord | twitter
		// type: ActivityType!
		//	post | react | retweet | comment | follow | unfollow

		// discord
		//		channelId: String
		// twitter
		//		twitterId: String
		//		hashtag: String

		return (
			<Fragment>
				<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
					<TextField
						name={'name'}
						onChange={handleChange}
						value={formState.subscribers}
						label="Quest Name"
						variant="outlined"
						fullWidth
					/>
					<TextField
						name={'description'}
						onChange={handleChange}
						value={formState.price}
						label="Short Description"
						variant="outlined"
						fullWidth
					/>
				</Stack>
				<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
					<TextField
						name={'name'}
						onChange={handleChange}
						value={formState.subscribers}
						label="Quest Name"
						variant="outlined"
						fullWidth
					/>
					<TextField
						name={'description'}
						onChange={handleChange}
						value={formState.price}
						label="Short Description"
						variant="outlined"
						fullWidth
					/>
				</Stack>
				<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
					<Button size="large" variant="outlined" fullWidth>
						Create Quest
					</Button>
				</Stack>
			</Fragment>
		)
	}

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

	return !id || !data ? null : (
		<Fragment>
			<CreateQuest />
		</Fragment>
	)
}
