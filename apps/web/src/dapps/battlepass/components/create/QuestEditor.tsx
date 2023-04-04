import { Fragment, useState, useEffect } from 'react'
import { ContentPanel, ContentTitle, Section, SectionTitle, SectionDescription } from 'src/components/content'

import { scoreToLevelMap } from '../../content/mock'
import Delete from '@mui/icons-material/DeleteForeverOutlined'
import Edit from '@mui/icons-material/EditOutlined'
import Save from '@mui/icons-material/SaveOutlined'

import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

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
	Radio,
	RadioGroup,
} from '@mui/material'
import { RadioItem } from 'src/components/Forms/modules/radioItem'

import { useGetBattlepassQuestsQuery } from 'src/queries'

import { TInitialState } from '../../Create'

// quest(
// battlepass: String!
// channelId: String
// cid: Sring
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

enum QuestSources {
	gamedao,
	twitter,
	discord,
	// twitch,
	// wallet,
	// fortnite,
	// csgo,
	// valorant,
}

enum QuestTypes {
	connect,
	follow,
	join,
	like,
	retweet,
	comment,
	post,
	react,
}

// mutation
// quest(
// 	battlepass: String!
// 	channelId: String
// 	cid: String
// 	daily: Boolean!
// 	description: String
// 	guildId: String
// 	hashtag: String
// 	link: String
// 	max: Int
// 	maxDaily: Int
// 	name: String
// 	points: Int!
// 	quantity: Int!
// 	source: Source!
// 	twitterId: String
// 	type: ActivityType!
// 	): BattlepassQuest

type TQuestArgs = {
	battlepass: string

	cid?: string
	name?: string
	description?: string

	points: number // points per task
	quantity: number // tasks per run
	daily: boolean // can be either run daily or
	maxDaily?: number // total quantity
	max?: number // total points

	// source: Source!
	//	discord | twitter
	source: string // source: Source!
	// type: ActivityType!
	//	post | react | retweet | comment | follow | unfollow
	type: string // action: ActivityType!
	// param can be depending on context:
	// channelId, guildId, hashtag, link, twitterId
	param: string

	// this can be merged to param ^^^
	channelId?: string // discord
	guildId?: string // discord
	hashtag?: string // any
	link?: string // url
	twitterId?: string // twitter
}
function createQuest(args: TQuestArgs) {}

// { source, action, }

const initialQuestState = {
	index: 0,
	battlepass: null,
	cid: null,
	name: 'New Quest',
	description: 'A Quest for you',
	//
	points: null,
	quantity: null,
	daily: false,
	max: 0,
	maxDaily: 0,
	//
	source: null,
	type: null,
	//
	channelId: null,
	guildId: null,
	hashtag: null,
	link: null,
	twitterId: null,
}

type EnumType = { [key: string]: string | number }
type EnumAsArrayType = {
	key: string
	value: string | number
}[]
const enumToArray = (data: EnumType): EnumAsArrayType =>
	Object.keys(data)
		.filter((key) => Number.isNaN(+key))
		.map((key: string) => ({ key, value: data[key] }))

export function QuestEditor({ formState, setFormState }: TProps) {
	// get battlepass id
	const { battlepassId: id } = formState
	const { data } = useGetBattlepassQuestsQuery({ variables: { id } })

	const [questCounter, setQuestCounter] = useState(0)
	const [questList, updateQuestList] = useState([])

	const [currentQuestState, setCurrentQuestState] = useState({ ...initialQuestState, index: questCounter })

	const handleChange = (e) => {
		// console.log('input', e.target.name, e.target.value, formState)
		const update = { ...currentQuestState, [e.target.name]: e.target.value }
		setCurrentQuestState(update)
		localStorage.setItem('quests', JSON.stringify(update))
	}
	const updateFormState = () => {
		// const update = { ...formState, ...currentQuestState }
		// setFormState(update)
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
		//		guildId: string
		//		channelId: String
		// twitter
		//		twitterId: String
		//		hashtag: String

		return (
			<ContentPanel>
				<ContentTitle>Quests</ContentTitle>

				{questList}

				<SectionTitle>Add quest {questCounter + 1}</SectionTitle>

				<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
					<TextField
						name={'name'}
						onChange={handleChange}
						value={currentQuestState.name}
						label="Name"
						variant="outlined"
						fullWidth
					/>
					<TextField
						name={'description'}
						onChange={handleChange}
						value={currentQuestState.description}
						label="Description"
						variant="outlined"
						fullWidth
					/>
				</Stack>

				{/* <SectionDescription>
					A quest consists of one or multiple tasks and can repeatable every n days.
				</SectionDescription> */}

				<Stack direction={{ sm: 'row', md: 'row' }} spacing={2} justifyContent="space-evenly">
					<TextField
						name={'points'}
						onChange={handleChange}
						value={currentQuestState.points}
						label="Points per task"
						variant="outlined"
						fullWidth
					/>
					<TextField
						name={'quantity'}
						onChange={handleChange}
						value={currentQuestState.quantity}
						label="Qty of tasks"
						variant="outlined"
						fullWidth
					/>
					<TextField
						name={'total_points'}
						onChange={handleChange}
						value={currentQuestState.total_points}
						label="Total points"
						variant="outlined"
						fullWidth
					/>
					<TextField
						name={'maximum_qty'}
						onChange={handleChange}
						value={currentQuestState.total_quantity}
						label="Max Total tasks"
						variant="outlined"
						fullWidth
					/>
				</Stack>

				<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
					<FormControlLabel control={<Checkbox defaultChecked />} label="Repeatable" />
					{/* <FormControlLabel  control={<Checkbox />} label="Disabled" /> */}
				</Stack>

				<hr />

				<RadioGroup
					aria-labelledby="source-radio"
					name="source-radio-group"
					value={currentQuestState.source}
					onChange={handleChange}
				>
					<Stack direction={'row'}>
						{enumToArray(QuestSources).map(({ key, value }) => (
							<FormControlLabel key={key} value={value} control={<Radio />} label={key} />
						))}
					</Stack>
				</RadioGroup>
				<RadioGroup
					aria-labelledby="action-radio"
					name="action-radio-group"
					value={currentQuestState.type}
					onChange={handleChange}
				>
					<Stack direction={'row'}>
						{enumToArray(QuestTypes).map(({ key, value }) => (
							<FormControlLabel key={key} value={value} control={<Radio />} label={key} />
						))}
					</Stack>
				</RadioGroup>
				<TextField
					name={'param'}
					onChange={handleChange}
					value={currentQuestState.param}
					label="Parameter"
					variant="outlined"
					fullWidth
				/>
				{/* <SectionDescription>Who can claim Battlepass rewards?</SectionDescription>
				<RadioGroup
					aria-labelledby="claim-radio"
					name="claim-radio-group"
					value={currentQuestState.claim}
					onChange={handleChange}
				>
					<Stack direction={'row'}>
						<FormControlLabel value={0} control={<Radio />} label="daily" />
						<FormControlLabel value={1} control={<Radio />} label="weekly" />
						<FormControlLabel value={2} control={<Radio />} label="monthly" />
					</Stack>
				</RadioGroup> */}

				<hr />

				<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
					<Button size="large" variant="outlined" fullWidth>
						Add Quest
					</Button>
				</Stack>
			</ContentPanel>
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
