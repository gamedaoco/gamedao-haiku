import { useCallback, useState, useRef, useEffect } from 'react'
import * as Yup from 'yup'
import { TextField, Box, Stack, Typography } from '@mui/material'
import { Cancel, Tag } from '@mui/icons-material'
import { BaseForm } from 'components/Forms/baseForm'

interface ComponentProps {
	name: string
	setName: (name) => void
	description: string
	setDescription: (description) => void
	url: string
	setUrl: (url) => void
	location: string
	setLocation: (location) => void
	tags: string[]
	setTags: (tags) => void
}

const validationNameSchema = Yup.string().required('* Organization Name is required')
// Only temporary, the description will be entered later on another page
const validationDescriptionSchema = Yup.string().required('* Organization Description is required')

export const validationSchema = Yup.object().shape({
	name: Yup.string().required(),
	description: Yup.string().required(),
})

const Tags = ({ data, handleDelete }) => {
	return (
		<Box
			sx={{
				background: '#11111166',
				height: '100%',
				display: 'flex',
				padding: '0.4rem',
				margin: '0 0.5rem 0 0',
				justifyContent: 'center',
				alignContent: 'center',
				color: '#ffffff',
				borderRadius: '5px',
			}}
		>
			<Stack direction="row" gap={1}>
				<Cancel
					sx={{ cursor: 'pointer', width: '16px' }}
					onClick={() => {
						handleDelete(data)
					}}
				/>
				<Typography variant="body2">{data}</Typography>
			</Stack>
		</Box>
	)
}

const encode = (payload) => JSON.stringify(payload)
const decode = (payload) => JSON.parse(payload)
const urlRegex =
	/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm

export function Name({
	name,
	setName,
	description,
	setDescription,
	url,
	setUrl,
	location,
	setLocation,
	tags,
	setTags,
}: ComponentProps) {
	const [_tags, _setTags] = useState(tags)

	const [errorState, setErrorState] = useState<string>()

	const [formState, setFormState] = useState({
		name: { value: name, validation: Yup.string().required('A name is required'), set: setName },
		description: {
			value: description,
			validation: Yup.string().required('A description is required'),
			set: setDescription,
		},
		url: { value: url, validation: Yup.string().matches(urlRegex, 'The url is not valid.'), set: (u) => setUrl(u) },
		location: { value: location, validation: null, set: (l) => setLocation(l) },
		tags: { value: tags, validation: null },
	})

	useEffect(() => {
		if (!tags) return
		_setTags(tags)
	}, [tags])

	const handleNameChange = useCallback(
		(e) => {
			if (setName) {
				try {
					validationNameSchema.validateSync(e.target.value)
					setErrorState(null)
				} catch (err) {
					setErrorState(err.message)
				}
				setName(e.target.value)
			}
			const content = formState[e.target.name]
			setFormState({
				...formState,
				[e.target.name]: {
					...content,
					value: e.target.value,
				},
			})
		},
		[setName, setErrorState],
	)

	const handleDescriptionChange = useCallback(
		(e) => {
			if (setDescription) {
				try {
					validationDescriptionSchema.validateSync(e.target.value)
					setErrorState(null)
				} catch (err) {
					setErrorState(err.message)
				}
				setDescription(e.target.value)
			}

			const content = formState[e.target.name]
			setFormState({
				...formState,
				[e.target.name]: {
					...content,
					value: e.target.value,
				},
			})
		},
		[setDescription, setErrorState],
	)

	const tagRef = useRef()

	const handleDelete = (value) => {
		const newtags = _tags.filter((val) => val !== value)
		_setTags(newtags)
	}

	const handleChange = (e) => {
		const content = e.target.value || ''

		if (content.startsWith(' ')) {
			e.target.value = content.slice(1, -1)
		}
		if (content.endsWith(',') || content.endsWith(' ')) {
			const tag = content.slice(0, -1)
			const arr = new Array().concat(_tags).concat([tag])
			setTags(arr)
			e.target.value = ''
		}
	}

	const handleUpdate = (e) => {
		// console.log('formState[e.target.name]',formState[e.target.name])
		// try  { formState[e.target.name].validation( formState[e.target.name].value ) }
		// catch (err) { console.log( 'validation failed' ) }
		const content = formState[e.target.name]
		setFormState({
			...formState,
			[e.target.name]: {
				...content,
				value: e.target.value,
			},
		})
		// console.log(JSON.stringify(content))
		content.set(e.target.value)
	}

	console.log(url, setUrl)

	return (
		<BaseForm title={'Organization'} error={errorState}>
			<TextField
				name="name"
				fullWidth
				onChange={handleNameChange}
				value={name}
				label="Organization Name"
				required
				variant="outlined"
				error={!!errorState}
			/>
			<TextField
				name="description"
				fullWidth
				multiline
				minRows={4}
				onChange={handleDescriptionChange}
				value={description}
				label="Organization Description"
				required
				variant="outlined"
				error={!!errorState}
			/>
			<hr />
			<TextField
				name="url"
				onChange={handleUpdate}
				fullWidth
				value={url}
				label="Website"
				placeholder="https://coolsite.xyz"
				variant="outlined"
			/>
			<TextField
				name="location"
				onChange={handleUpdate}
				fullWidth
				value={location}
				label="Location"
				placeholder=""
				variant="outlined"
			/>
			<TextField
				inputRef={tagRef}
				fullWidth
				onChange={handleChange}
				// value={}
				label="Tags"
				placeholder="separate tags with space or comma"
				variant="outlined"
				InputProps={{
					startAdornment: (
						<Box sx={{ margin: '0 0.2rem 0 0', display: 'flex' }}>
							{_tags &&
								_tags.map((data, index) => {
									return <Tags data={data} handleDelete={handleDelete} key={index} />
								})}
						</Box>
					),
				}}
			/>
		</BaseForm>
	)
}
