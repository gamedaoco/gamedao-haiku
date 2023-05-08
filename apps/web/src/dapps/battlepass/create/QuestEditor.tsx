import { Fragment, useState, useEffect } from 'react'
import { ContentPanel, ContentTitle, Section, SectionTitle, SectionDescription } from 'src/components/content'

import { scoreToLevelMap } from '../content/mock'
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

import { TInitialState } from './const'

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
	epicGames,
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
	battlepass: '',
	cid: '',
	name: 'New Quest 0',
	description: 'A Quest for you',
	// required
	points: 0,
	quantity: 1,
	daily: false,
	max: 0,
	maxDaily: 0,
	//
	total_points: 0,
	total_quantity: 0,
	param: null,

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

//

type EnumType = { [key: string]: string | number }
type EnumAsArrayType = {
	key: string
	value: string | number
}[]
const enumToArray = (data: EnumType): EnumAsArrayType =>
	Object.keys(data)
		.filter((key) => Number.isNaN(+key))
		.map((key: string) => ({ key, value: data[key] }))

//

export function QuestEditor({ formState, setFormState }: TProps) {
	// get battlepass id
	const { battlepassId: id } = formState
	const { data } = useGetBattlepassQuestsQuery({ variables: { id } })

	const [questCounter, setQuestCounter] = useState(0)
	const [questList, updateQuestList] = useState([]) // on save store here
	const [currentQuestState, setCurrentQuestState] = useState(initialQuestState) // current quest

	const updateQuestState = (k, v) => {
		const update = { ...currentQuestState, [k]: v }
		console.log('update', k, v, update)
		setCurrentQuestState(update)
		localStorage.setItem('quests', JSON.stringify(update))
	}
	const handleChange = (e) => {
		console.log(e.target.name, e.target.value)
		updateQuestState(e.target.name, e.target.value)
	}

	const addQuest = () => {
		const updateQuests = questList.concat([
			{
				...currentQuestState,
				index: questCounter,
			},
		])
		updateQuestList(updateQuests)
		setCurrentQuestState({
			...initialQuestState,
			name: initialQuestState.name + ' ' + (questCounter + 2),
		})
		setQuestCounter(questCounter + 1)
	}

	// upstream
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

				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="quest-list" size="small">
						<TableHead>
							<TableRow>
								<TableCell align="left">#</TableCell>
								<TableCell align="left">Name</TableCell>
								<TableCell align="left">Source</TableCell>
								<TableCell align="left">Type</TableCell>
								<TableCell align="right">BP</TableCell>
								<TableCell align="right">Max BP</TableCell>
								<TableCell align="right">T</TableCell>
								<TableCell align="right">Max T</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{questList?.map((row, i) => {
								return (
									<TableRow
										key={`${row.id}${Math.random() * 1000}`}
										sx={{
											'td,th': { borderBottom: '1px dotted #ffffff33' },
											'&:last-child td, &:last-child th': { border: 0 },
										}}
									>
										<TableCell align="left" component="th" scope="row">
											{row.index + 1}
										</TableCell>
										<TableCell align="left" component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="left" component="th" scope="row">
											{row.source}
										</TableCell>
										<TableCell align="left" component="th" scope="row">
											{row.type}
										</TableCell>
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</TableContainer>

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
					aria-labelledby="source"
					name="source"
					value={currentQuestState.source}
					onChange={handleChange}
				>
					<Stack direction={'row'}>
						{enumToArray(QuestSources).map(({ key, value }) => (
							<FormControlLabel key={key} value={key} control={<Radio />} label={key} />
						))}
					</Stack>
				</RadioGroup>
				<RadioGroup aria-labelledby="type" name="type" value={currentQuestState.type} onChange={handleChange}>
					<Stack direction={'row'}>
						{enumToArray(QuestTypes).map(({ key, value }) => (
							<FormControlLabel key={key} value={key} control={<Radio />} label={key} />
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
					<Button
						size="large"
						variant="outlined"
						fullWidth
						onClick={addQuest}
						disabled={!currentQuestState.source || !currentQuestState.type}
					>
						Add Quest
					</Button>
				</Stack>
			</ContentPanel>
		)
	}

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
