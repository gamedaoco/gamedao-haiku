import { useCallback, useEffect, Fragment, useState } from 'react'
import * as Yup from 'yup'

import { useConfig } from 'src/hooks/useConfig'
import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notificationUtils'

import { useActiveBattlepassSubscription } from 'src/queries'
import { useCreateBattlepassTX } from 'src/hooks/tx/useCreateBattlepassTX'
import { useLinkBotTX } from 'src/hooks/tx/useLinkBotTX'
import { useActivateBattlepassTX } from 'src/hooks/tx/useActivateBattlepassTX'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'

import { InfoRounded } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'

// accordion
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// uploads
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import { Avatar, Card, Button, Grid, CardContent, CardActions } from '@mui/material'
import {
	Box,
	Checkbox,
	FormControl,
	FormLabel,
	FormControlLabel,
	InputLabel,
	Select,
	Stack,
	TextField,
	Typography,
	Alert,
	Divider,
	Radio,
	RadioGroup,
	MenuItem,
} from '@mui/material'

import { RadioItem } from 'src/components/Forms/modules/radioItem'
import { TransactionDialog } from 'src/components/TransactionDialog/transactionDialog'

import { ContentPanel, ContentTitle, Section, SectionTitle, SectionDescription } from 'src/components/content'
import { Image } from 'src/components/Image/image'
import { LevelEditor } from './components/create/LevelEditor'
import { QuestEditor } from './components/create/QuestEditor'

import {
	useGetOrganizationsForPrimeSubscription,
	useGetBattlepassesForOrganizationQuery,
	useGetAllBattlepassesSubscription,
} from 'src/queries'

export type TInitialState = {
	organizationId: string
	organizationAddress: string
	creatorAddress: string
	battlepassId: string
	//
	name: string
	description: string
	slug: string
	//
	iconImg: string
	bannerImg: string
	cardImg: string
	primaryColor: string
	secondaryColor: string
	backgroundColor: string
	//
	tokenCoverImg: string
	tokenContent: string
	//
	currency: string
	subscribers: number
	price: number
	stake: number
	freePasses: number
	totalPasses: number
	//
	duration: number
	claim: number
	join: number
	//
	acceptTerms: boolean
	botAccount: string
}

const initialState: TInitialState = {
	organizationId: '',
	organizationAddress: '',
	battlepassId: '',
	creatorAddress: '',
	// styling
	primaryColor: '',
	secondaryColor: '',
	backgroundColor: '',
	iconImg: '',
	bannerImg: '',
	cardImg: '',
	// battlepass token
	tokenCoverImg: '',
	tokenContent: '',
	// content
	name: '',
	description: '',
	slug: '',
	// commercials
	currency: 'EUR',
	subscribers: 0,
	price: 1500, // in eurocents
	stake: 15000,
	freePasses: 0,
	totalPasses: 0, // unlimited
	// duration and access
	duration: 100,
	claim: 0,
	join: 1,
	// create
	acceptTerms: false,
	botAccount: '',
}

export const Create = () => {
	const config = useConfig()
	const theme = useTheme()
	const address: string = useCurrentAccountAddress()

	const [formState, setFormState] = useState(initialState)
	const [id, setId] = useState('')
	const [cid, setCid] = useState('')
	const [stakeToEur, setStakeToEur] = useState(0)

	const createBattlepassTX = useCreateBattlepassTX(
		formState.organizationId,
		formState.name,
		formState.cardImg,
		formState.price,
	)
	const activateBattlepassTX = useActivateBattlepassTX(formState.battlepassId)
	const linkBotTX = useLinkBotTX(formState.battlepassId, formState.botAccount)

	console.log('cardImg', formState.cardImg)

	const [organizations, setOrganizations] = useState<any>()
	const { loading, data: primeOrganizations } = useGetOrganizationsForPrimeSubscription({
		variables: { id: address },
	})
	useEffect(() => {
		if (loading) return
		if (!primeOrganizations.organization.length) return
		const organizations = primeOrganizations?.organization?.map((o, i) => {
			return { label: o.name, value: o.id }
		})
		setOrganizations(organizations)
		console.log(organizations)
	}, [primeOrganizations, loading])

	const [battlepasses, setBattlepasses] = useState<any>()
	const { loading: loadingPasses, data: organizationBattlepasses } = useGetAllBattlepassesSubscription({
		// TODO: check why filter is not working
		// variables: { id: formState.organizationId },
	})
	useEffect(() => {
		if (loadingPasses) return
		if (!formState.organizationId) return
		if (!organizationBattlepasses?.Battlepasses?.length) return
		console.log('hydrate', 'passes in', organizationBattlepasses.Battlepasses)
		console.log('hydrate', 'filter by org', formState.organizationId)
		const passes = organizationBattlepasses?.Battlepasses?.map((p, i) => {
			return { name: p.name, id: p.chainId, active: p.active, org: p.orgId }
		}).filter((i) => i.org === formState.organizationId)
		setBattlepasses(passes)
		console.log('hydrate', 'passes out', passes)
	}, [organizations, loadingPasses, organizationBattlepasses, formState.organizationId])
	//

	useEffect(() => {
		if (!localStorage.getItem('battlepass')) return
		const cache = JSON.parse(localStorage.getItem('battlepass'))
		console.log('hydrate', 'restoring from cache', cache)
		setFormState({ ...cache })
	}, [])

	useEffect(() => {
		if (formState.price === 0) return
		if (formState.subscribers === 0) return
		const fxGAME = 0.5 // cents per GAME
		const fxGAMEtoEUR = 0.5
		const price = formState.price
		const mul = formState.subscribers
		const deposit = (price * mul * fxGAME) / 100
		console.log('deposit', deposit)
		setFormState({ ...formState, stake: deposit })
		setStakeToEur(deposit * fxGAMEtoEUR)
	}, [formState.subscribers, formState.price])

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
			console.log('IPFS', 'cid', cid)
		},
		[formState],
	)

	const getImageURL = (cid) => (cid ? parseIpfsHash(cid, config.IPFS_GATEWAY) : null)

	// refresh the payload for a metadata blob on ipfs
	// available keys:
	// bp_metadata - operator side - battlepass metadata - configures mutable metadata of the battlepass from operator perspective
	// bp_collection_metadata
	// bp_user_metadata - user side battlepass nft metadata
	// bp_reward_content drop item nft metadata

	const refreshMetadata = (key, payload) => {}
	// create

	const [showCreateModal, setShowCreateModal] = useState<boolean>(false)
	const openCreateModal = () => setShowCreateModal(true)
	const closeCreateModal = () => setShowCreateModal(false)
	const handleOpenCreateModal = () => {
		console.log('handleOpenTxModal', formState)
		openCreateModal()
	}
	const handleCreateComplete = (e) => {
		console.log('handleCreateComplete', e)
		setShowCreateModal(false)
	}

	// activate

	const [showActivateModal, setShowActivateModal] = useState<boolean>(false)
	const openActivateModal = () => setShowActivateModal(true)
	const closeActivateModal = () => setShowActivateModal(false)
	const handleOpenActivateModal = () => {
		console.log('handleOpenActivateModal')
		openActivateModal()
	}
	const handleActivateComplete = (e) => {
		console.log('handleCreateComplete', e)
		setShowActivateModal(false)
	}

	const checkActive = (id) => {
		const pass = battlepasses.find((p) => p.id === id)
		const active = pass?.active
		console.log('active', active)
		return active
	}

	// link bot

	const [showLinkModal, setShowLinkModal] = useState<boolean>(false)
	const openLinkModal = () => setShowLinkModal(true)
	const closeLinkModal = () => setShowLinkModal(false)
	const handleOpenLinkModal = () => {
		console.log('handleOpenLinkModal')
		openLinkModal()
	}
	const handleLinkComplete = (e) => {
		console.log('handlLinkComplete', e)
		setShowLinkModal(false)
	}

	//

	return (
		<Fragment>
			{/* <Alert severity="info" sx={{ mb: 2 }}>
				Staking not implemented yet. Enter data to get a feeling for staking requirements.
			</Alert> */}

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="section1" id="panel1a-header">
					<Typography>1. Deposit + Create Battlepass</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Section
						direction={{ xs: 'column', md: 'column' }}
						title="Deposit"
						description={`
					GameDAO protocols can be enabled for your organization by staking GAME token.
					The amount should be in relation to the number of passes issued and their respective sales price.
					Keeping a healthy ratio between the number of passes and the stake also contributes to
					the reputation of your organization.
					`}
					>
						{/* <TextField
							name={'organizationId'}
							onChange={handleChange}
							value={formState.organizationId}
							label="Organization Id"
							variant="outlined"
							fullWidth
							/> */}
						{organizations && organizations.length > 0 ? (
							<FormControl sx={{ flex: 1 }}>
								<InputLabel id="organization">Select Organization</InputLabel>
								<Select
									name={'organizationId'}
									value={formState.organizationId}
									onChange={handleChange}
									labelId="organization"
									label="Select Organization"
									variant="outlined"
								>
									{organizations.map((item, index) => (
										<MenuItem value={item.value} key={index}>
											{item.label}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						) : (
							`Searching for an organization...`
						)}

						<SectionDescription>
							Estimate the number of subscribers and their subscription price to get a suggestion for a
							reasonable amount of GAME token. Deposit will trigger a transaction to sign with the prime
							account of the organization and automaticallt enable the Battlepass Protocol for the
							organization.
						</SectionDescription>

						<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
							<TextField
								name={'subscribers'}
								onChange={handleChange}
								value={formState.subscribers}
								label="Estimated Susbcribers"
								variant="outlined"
								fullWidth
								// disabled
							/>
							<TextField
								name={'price'}
								onChange={handleChange}
								value={formState.price}
								label="Subscription Price"
								InputProps={{
									endAdornment: (
										<Typography mr={1} variant="body2">
											cents
										</Typography>
									),
								}}
								variant="outlined"
								fullWidth
								// disabled
							/>
							<TextField
								name={'stake'}
								onChange={handleChange}
								value={formState.stake}
								label="Recommended Stake"
								InputProps={{
									endAdornment: (
										<Typography mr={1} variant="body2">
											GAME
										</Typography>
									),
								}}
								variant="outlined"
								fullWidth
								disabled
							/>
							<TextField
								name={'stakeToEur'}
								// onChange={handleChange}
								value={stakeToEur}
								// label="Stake in EUR"
								InputProps={{
									endAdornment: (
										<Typography mr={1} variant="body2">
											EUR
										</Typography>
									),
								}}
								variant="outlined"
								fullWidth
								disabled
							/>
						</Stack>
						<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
							<Button disabled size="large" variant="outlined" fullWidth>
								Deposit
							</Button>
						</Stack>
					</Section>

					{/* <Divider /> */}

					<Section
						direction={{ xs: 'column', md: 'column' }}
						title="Create"
						description={`
						Add basic information to create your Battlepass.
						Based on existing passes the season will automatically increase.
					`}
					>
						<Stack direction={{ sm: 'column', md: 'row' }} spacing={2}>
							<Box>
								<label htmlFor="card-image-upload">
									<input
										style={{ display: 'none' }}
										accept="image/*"
										id="card-image-upload"
										type="file"
										onChange={(e) => handleUploadImage(e, 'cardImg')}
									/>
									{!formState.bannerImg ? (
										<Stack spacing={1} alignItems="center">
											<AddPhotoAlternateOutlinedIcon
												sx={{ height: '20px', width: '20px', cursor: 'pointer' }}
											/>
											<Typography>Add Battlepass Card Image</Typography>
										</Stack>
									) : (
										<Image
											src={getImageURL(formState.cardImg)}
											alt="card"
											sx={{
												borderRadius: Number(theme.shape.borderRadius),
												height: '400px',
												width: '300px',
											}}
										/>
									)}
								</label>
							</Box>
							<Stack
								sx={{ width: '100%' }}
								direction={{ sm: 'column', md: 'column' }}
								spacing={2}
								justifyContent="top"
							>
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
									inputProps={{ maxLength: 512, height: '100%' }}
									fullWidth
									onChange={handleChange}
									value={formState.description}
									label="Description"
									variant="outlined"
									multiline
									rows={4}
								/>
							</Stack>
						</Stack>
						<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
							<Button size="large" variant="outlined" fullWidth onClick={openCreateModal}>
								Create Battlepass
							</Button>
						</Stack>
					</Section>

					{organizations?.length > 0 && battlepasses?.length > 0 && (
						<Section
							direction={{ xs: 'column', md: 'column' }}
							title="Link Bot Account"
							description={`
								Select Organization and Battlepass and add the PUBLIC KEY of your bot account.
							`}
						>
							<FormControl sx={{ flex: 1 }}>
								<InputLabel id="organization">Select Organization</InputLabel>
								<Select
									name={'organizationId'}
									value={formState.organizationId}
									onChange={handleChange}
									labelId="organization"
									label="Select Organization"
									variant="outlined"
								>
									{organizations.map((item, index) => (
										<MenuItem value={item.value} key={index}>
											{item.label}
										</MenuItem>
									))}
								</Select>
							</FormControl>

							<FormControl sx={{ flex: 1 }}>
								<InputLabel id="battlepass">Select Battlepass</InputLabel>
								<Select
									name={'battlepassId'}
									value={formState.battlepassId}
									onChange={handleChange}
									labelId="battlepass"
									label="Select Battlepass"
									variant="outlined"
								>
									{battlepasses.map((item, index) => (
										<MenuItem value={item.id} key={index}>
											{item.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<TextField
								name={'botAccount'}
								inputProps={{ maxLength: 512, height: '100%' }}
								fullWidth
								onChange={handleChange}
								value={formState.botAccount}
								label="Bot Account"
								variant="outlined"
							/>
							<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
								<Button size="large" variant="outlined" fullWidth onClick={openLinkModal}>
									Link Bot Account
								</Button>
							</Stack>
						</Section>
					)}

					{organizations?.length > 0 && battlepasses?.length > 0 && (
						<Section
							direction={{ xs: 'column', md: 'column' }}
							title="Activate"
							description={`Select and activate a battlepass.`}
						>
							<FormControl sx={{ flex: 1 }}>
								<InputLabel id="organization">Select Organization</InputLabel>
								<Select
									name={'organizationId'}
									value={formState.organizationId}
									onChange={handleChange}
									labelId="organization"
									label="Select Organization"
									variant="outlined"
								>
									{organizations.map((item, index) => (
										<MenuItem value={item.value} key={index}>
											{item.label}
										</MenuItem>
									))}
								</Select>
							</FormControl>

							<FormControl sx={{ flex: 1 }}>
								<InputLabel id="battlepass">Select Battlepass</InputLabel>
								<Select
									name={'battlepassId'}
									value={formState.battlepassId}
									onChange={handleChange}
									labelId="battlepass"
									label="Select Battlepass"
									variant="outlined"
								>
									{battlepasses.map((item, index) => (
										<MenuItem value={item.id} key={index}>
											{item.name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
								{checkActive(formState.battlepassId) ? (
									`Already activated`
								) : (
									<Button size="large" variant="outlined" fullWidth onClick={openActivateModal}>
										Activate Battlepass
									</Button>
								)}
							</Stack>
						</Section>
					)}
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="section1" id="panel1a-header">
					<Typography>2. Styling</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Section
						direction={{ xs: 'column', md: 'column' }}
						title="Styling"
						description={`Add images and colors to create that unique look`}
					>
						<Box sx={{ border: 'grey' }}>
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
							<label htmlFor="banner-file-upload">
								<input
									style={{ display: 'none' }}
									accept="image/*"
									id="banner-file-upload"
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
					</Section>
				</AccordionDetails>
			</Accordion>

			<Accordion disabled={formState.battlepassId ? false : true}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="section1" id="panel1a-header">
					<Typography>3. Levels</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Section
						direction={{ xs: 'column', md: 'column' }}
						// title="Levels"
						description={`Configure levels and ranks. Careful, this can only be set once!`}
					>
						<LevelEditor id={formState.battlepassId} />
					</Section>
				</AccordionDetails>
			</Accordion>

			<Accordion disabled={formState.battlepassId ? false : true}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="section1" id="panel1a-header">
					<Typography>4. Quests</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Section direction={{ xs: 'column', md: 'column' }} description={`Configure Quests`}>
						<QuestEditor formState={formState} setFormState={setFormState} />
					</Section>
				</AccordionDetails>
			</Accordion>

			<Accordion disabled>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="section1" id="panel1a-header">
					<Typography>5. Rewards</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Section direction={{ xs: 'column', md: 'column' }} description={`Create rewards`}>
						{/* <RewardsEditor id={id} /> */}
					</Section>
				</AccordionDetails>
			</Accordion>

			{false && (
				<ContentPanel>
					<Divider />
					<Divider />

					{/* <Section direction={'column'} title="4. Duration + Access Control">
				<SectionDescription> Choose a battlepass duration. </SectionDescription>
				<RadioGroup
				aria-labelledby="duration-radio"
				name="duration-radio-group"
				value={formState.duration}
				onChange={handleChange}
				>
					<Stack direction={'row'}>
						<FormControlLabel disabled value={1} control={<Radio />} label="1 day" />
						<FormControlLabel disabled value={10} control={<Radio />} label="10 days" />
						<FormControlLabel disabled value={30} control={<Radio />} label="30 days" />
						<FormControlLabel disabled value={100} control={<Radio />} label="100 days" />
					</Stack>
				</RadioGroup>
				<SectionDescription>Who can join the Battlepass?</SectionDescription>
				<RadioGroup
					aria-labelledby="join-radio"
					name="join-radio-group"
					value={formState.join}
					onChange={handleChange}
				>
					<Stack direction={'row'}>
						<FormControlLabel disabled value={0} control={<Radio />} label="anyone" />
						<FormControlLabel disabled value={1} control={<Radio />} label="organization members" />
					</Stack>
				</RadioGroup>
				<SectionDescription>Who can claim Battlepass rewards?</SectionDescription>
				<RadioGroup
					aria-labelledby="claim-radio"
					name="claim-radio-group"
					value={formState.claim}
					onChange={handleChange}
				>
					<Stack direction={'row'}>
						<FormControlLabel disabled value={0} control={<Radio />} label="anyone" />
						<FormControlLabel disabled value={1} control={<Radio />} label="subscribers" />
						<FormControlLabel disabled value={2} control={<Radio />} label="organization members" />
					</Stack>
				</RadioGroup>
			</Section>
			<Divider /> */}

					<Section
						title="Accept Terms + Activate Battlepass"
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
			)}

			{showCreateModal && (
				<TransactionDialog
					open={showCreateModal}
					onClose={closeCreateModal}
					txData={createBattlepassTX}
					txCallback={handleCreateComplete}
				/>
			)}
			{showActivateModal && (
				<TransactionDialog
					open={showActivateModal}
					onClose={closeActivateModal}
					txData={activateBattlepassTX}
					txCallback={handleActivateComplete}
				/>
			)}
			{showLinkModal && (
				<TransactionDialog
					open={showLinkModal}
					onClose={closeLinkModal}
					txData={linkBotTX}
					txCallback={handleLinkComplete}
				/>
			)}
		</Fragment>
	)
}