import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import moment from 'moment'
import enLocale from 'date-fns/locale/en-US'
import * as Yup from 'yup'

import { useActiveBattlepassSubscription } from 'src/queries'
import { useJoinBattlePassTX } from 'hooks/tx/useJoinBattlePassTX'

//
import { useConfig } from 'hooks/useConfig'
import { useDisplayValues } from 'hooks/useDisplayValues'
import { useNetworkContext } from 'providers/network/modules/context'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notificationUtils'

//

import { InfoRounded } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

import { Avatar, Card, Button, Grid, CardContent, CardActions } from '@mui/material'
import {
	Box,
	Checkbox,
	FormControl,
	FormLabel,
	FormControlLabel,
	RadioGroup,
	Radio,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	TextField,
	Typography,
	Alert,
} from '@mui/material'
import { RadioItem } from 'components/Forms/modules/radioItem'

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import { ContentPanel, ContentTitle, Section, SectionTitle, SectionDescription } from 'components/content'
import { Image } from 'components/Image/image'

export type TInitialState = {
	name: string
	description: string
	slug: string
	iconImg: string
	bannerImg: string
	cardImg: string
	tokenCoverImg: string
	tokenContent: string
	currency: string
	subscribers: number
	price: number
	stake: number
	acceptTerms: boolean
	creatorAddress: string
	organizationAddress: string
	organizationId: string
	duration: number
	primaryColor: string
	secondaryColor: string
	backgroundColor: string
	access: number
}

const initialState: TInitialState = {
	name: '',
	description: '',
	slug: '',
	iconImg: '',
	bannerImg: '',
	cardImg: '',
	tokenCoverImg: '',
	tokenContent: '',
	currency: 'EUR',
	subscribers: 0,
	price: 0,
	stake: 0,
	acceptTerms: false,
	creatorAddress: '',
	organizationAddress: '',
	organizationId: '',
	duration: 0,
	primaryColor: '',
	secondaryColor: '',
	backgroundColor: '',
	access: 0,
}

export const Create = () => {
	const theme = useTheme()
	const config = useConfig()

	const [formState, setFormState] = useState(initialState)

	useEffect(() => {
		if (!localStorage.getItem('battlepass')) return
		const cache = JSON.parse(localStorage.getItem('battlepass'))
		console.log('restoring from cache', cache)
		setFormState({ ...cache })
	}, [])

	const handleChange = (e) => {
		// console.log('input', e.target.name, e.target.value, formState)
		const update = { ...formState, [e.target.name]: e.target.value }
		setFormState(update)
		localStorage.setItem('battlepass', JSON.stringify(update))
	}

	const handleUploadImage = useCallback(
		async (event, key) => {
			const files = event.target.files
			if (!files || files.length === 0) return createWarningNotification('No file selected')
			const cid = await uploadFileToIpfs(files[0])
			const update = { ...formState, [key]: cid.toString() }
			setFormState(update)
			localStorage.setItem('battlepass', JSON.stringify(update))
		},
		[formState],
	)

	const getImageURL = (cid) => (cid ? parseIpfsHash(cid, config.IPFS_GATEWAY) : null)

	// <Typography variant="h5"> A. Score / level mapping </Typography>
	// <Typography> show list, for each add remove btn <br /> input level <br /> input score <br /> input name <br /> button add </Typography>

	// <Typography variant="h5"> B. Create Quests </Typography>

	// <Typography variant="h5"> C. Create Rewards </Typography>

	return (
		<ContentPanel>
			<Section
				direction={{ xs: 'column', md: 'column' }}
				title="1. Deposit + Activate"
				description={`
				GameDAO protocols can be enabled for your organization by staking GAME token.
				The amount should be in relation to the number of passes issued and their respective sales price.
				Keeping a healthy ratio between the number of passes and the stake also contributes to
				the reputation of your organization.
				`}
			>
				<FormControl sx={{ flex: 1 }}>
					<InputLabel id="organization">Select Organization</InputLabel>
					<Select
						value={formState.organizationId}
						onChange={handleChange}
						labelId="organization"
						label="Select Organization"
					>
						<MenuItem value={null} key={0}>
							Organization 1
						</MenuItem>

						{/* {displayValues?.campaignFundingCategories?.map((x) => (

							<MenuItem value={x.value} key={x.key}>
								{t(x.text)}
							</MenuItem>
						))} */}
					</Select>
				</FormControl>

				<SectionDescription>
					Estimate the number of subscribers and their subscription price to get a suggestion for a reasonable
					amount of GAME token. Deposit will trigger a transaction to sign with the prime account of the
					organization and automaticallt enable the Battlepass Protocol for the organization.
				</SectionDescription>

				<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
					<TextField
						name={'subscribers'}
						onChange={handleChange}
						value={formState.subscribers}
						label="Estimated Susbcribers"
						variant="outlined"
						fullWidth
					/>
					<TextField
						name={'price'}
						onChange={handleChange}
						value={formState.price}
						label="Subscription Price"
						variant="outlined"
						fullWidth
					/>
					<TextField
						name={'stake'}
						onChange={handleChange}
						value={formState.stake}
						label="Stake"
						InputProps={{
							endAdornment: (
								<Typography mr={1} variant="body2">
									GAME
								</Typography>
							),
						}}
						variant="outlined"
						fullWidth
					/>
					<Button size="medium" variant="outlined" fullWidth>
						Deposit
					</Button>
				</Stack>
			</Section>

			<hr />

			<Section
				direction={{ xs: 'column', md: 'column' }}
				title="2. General Settings"
				description={`Set the basic settings for your Battlepass`}
			>
				{/*	input price <br /> input currency
 upload icon <br /> upload image <br /> </Typography> */}

				<Stack direction={{ sm: 'column', md: 'column' }} spacing={2} justifyContent="space-evenly">
					<TextField
						name={'name'}
						inputProps={{ maxLength: 64 }}
						fullWidth
						onChange={handleChange}
						value={formState.name}
						label="Name"
						variant="outlined"
					/>
					<TextField
						name={'description'}
						inputProps={{ maxLength: 512 }}
						fullWidth
						onChange={handleChange}
						value={formState.description}
						label="Description"
						variant="outlined"
						multiline
						rows={4}
					/>
				</Stack>

				<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
					<TextField
						name={'primaryColor'}
						inputProps={{ maxLength: 8 }}
						fullWidth
						onChange={handleChange}
						value={formState.primaryColor}
						label="Primary Color"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<Typography mr={1} variant="body2">
									#
								</Typography>
							),
						}}
					/>
					<TextField
						name={'secondaryColor'}
						inputProps={{ maxLength: 8 }}
						fullWidth
						onChange={handleChange}
						value={formState.secondaryColor}
						label="Secondary Color"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<Typography mr={1} variant="body2">
									#
								</Typography>
							),
						}}
					/>
					<TextField
						name={'backgroundColor'}
						inputProps={{ maxLength: 8 }}
						fullWidth
						onChange={handleChange}
						value={formState.backgroundColor}
						label="Background Color"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<Typography mr={1} variant="body2">
									#
								</Typography>
							),
						}}
					/>
				</Stack>

				<SectionDescription>Add images to create that unique look</SectionDescription>

				<Box sx={{ border: '1px solid yellow' }}>
					<label htmlFor="logo-file-upload">
						<input
							style={{ display: 'none' }}
							accept="image/*"
							id="logo-file-upload"
							type="file"
							onChange={(e) => handleUploadImage(e, 'iconImg')}
						/>
						<Avatar
							sx={(theme) => ({
								width: '7rem',
								height: '7rem',
								backgroundColor: theme.palette.background.default,
								outline: `5px solid #000000aa`,
								cursor: 'pointer',
							})}
							src={getImageURL(formState.iconImg)}
						>
							<Stack spacing={1} alignItems="center">
								<AddPhotoAlternateOutlinedIcon
									sx={{ height: '20px', width: '20px', cursor: 'pointer' }}
								/>
								<Typography>Add Icon</Typography>
							</Stack>
						</Avatar>
					</label>
				</Box>

				<Box sx={{ border: '1px solid yellow' }}>
					<label htmlFor="header-file-upload">
						<input
							style={{ display: 'none' }}
							accept="image/*"
							id="header-file-upload"
							type="file"
							onChange={(e) => handleUploadImage(e, 'bannerImg')}
						/>
						{!formState.bannerImg ? (
							<Stack spacing={1} alignItems="center">
								<AddPhotoAlternateOutlinedIcon
									sx={{ height: '20px', width: '20px', cursor: 'pointer' }}
								/>
								<Typography>Add Banner Image</Typography>
							</Stack>
						) : (
							<Image
								src={getImageURL(formState.bannerImg)}
								alt="banner"
								sx={{
									borderRadius: Number(theme.shape.borderRadius) * 20,
									height: '250px',
									width: 'auto',
								}}
							/>
						)}
					</label>
				</Box>

				<Box sx={{ border: '1px solid yellow' }}>
					<label htmlFor="card-file-upload">
						<input
							style={{ display: 'none' }}
							accept="image/*"
							id="card-file-upload"
							type="file"
							onChange={(e) => handleUploadImage(e, 'cardImg')}
						/>
						{!formState.bannerImg ? (
							<Stack spacing={1} alignItems="center">
								<AddPhotoAlternateOutlinedIcon
									sx={{ height: '20px', width: '20px', cursor: 'pointer' }}
								/>
								<Typography>Add Card Image</Typography>
							</Stack>
						) : (
							<Image
								src={getImageURL(formState.cardImg)}
								alt="card"
								sx={{
									borderRadius: Number(theme.shape.borderRadius) * 20,
									height: '250px',
									width: 'auto',
								}}
							/>
						)}
					</label>
				</Box>
			</Section>

			<hr />

			<Section direction={'column'} title="4. Duration + Access Control">
				<SectionDescription> Choose a battlepass duration. </SectionDescription>
				<RadioGroup
					aria-labelledby="duration-radio"
					name="duration-radio-group"
					value={formState.duration}
					onChange={handleChange}
				>
					<Stack direction={'row'}>
						<FormControlLabel value={1} control={<Radio />} label="1 day" />
						<FormControlLabel value={10} control={<Radio />} label="10 days" />
						<FormControlLabel value={30} control={<Radio />} label="30 days" />
						<FormControlLabel value={100} control={<Radio />} label="100 days" />
					</Stack>
				</RadioGroup>
				<SectionDescription>Who can join the Battlepass?</SectionDescription>
				<RadioGroup
					aria-labelledby="access-radio"
					name="access-radio-group"
					value={formState.access}
					onChange={handleChange}
				>
					<Stack direction={'row'}>
						<FormControlLabel value={0} control={<Radio />} label="anyone" />
						<FormControlLabel value={1} control={<Radio />} label="subscribers" />
						<FormControlLabel value={2} control={<Radio />} label="organization members" />
					</Stack>
				</RadioGroup>
			</Section>
			<hr />
			<Section
				title="5. Accept Terms + Activate Battlepass"
				description={`
					GameDAO is a decentralized protocol, but usage of this website and interacting with the community is
					bound to the GameDAO Terms and Conditions maintaining a positive vibe for all.
				`}
			>
				<FormControlLabel
					sx={{ display: 'block' }}
					control={<Checkbox checked={formState.acceptTerms} onChange={handleChange} />}
					label="I Accept the terms & conditions of GameDAO"
				/>
				<Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
					<Button color="warning" variant="outlined">
						Reset
					</Button>
					<Stack direction="row" spacing={2}>
						<Button color="primary" variant="outlined">
							Create
						</Button>
						<Button color="success" variant="contained">
							Activate
						</Button>
					</Stack>
				</Stack>
			</Section>
		</ContentPanel>
	)
}
