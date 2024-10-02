import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import slugify from 'slugify'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notification'

import {
	useActiveBattlepassSubscription,
	useGetOrganizationsForPrimeSubscription,
	useGetBattlepassesForOrganizationQuery,
	useGetAllBattlepassesSubscription,
} from 'src/queries'

import { useConfig } from 'hooks/useConfig'
import { useCreateBattlepassTX } from 'hooks/tx/useCreateBattlepassTX'
import { useLinkBotTX } from 'hooks/tx/useLinkBotTX'
import { useActivateBattlepassTX } from 'hooks/tx/useActivateBattlepassTX'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { useTheme } from '@mui/material/styles'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import { Avatar, Box, Button, Grid, Stack, Typography, Divider, MenuItem } from '@mui/material'
import {
	Checkbox,
	FormControl,
	FormLabel,
	FormControlLabel,
	InputLabel,
	Select,
	TextField,
	Radio,
	RadioGroup,
} from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab'

//

import { RadioItem } from 'components/organisms/forms/components/radioItem'
import { TransactionDialog } from 'components/molecules/TransactionDialog/transactionDialog'
import { ContentPanel, ContentTitle, Section, SectionTitle, SectionDescription } from 'components/molecules/content'
import { Image } from 'components/atoms/Image/image'
import { Loader } from 'components/atoms/Loader'

import TabBar from './TabBar'

//

import { initialState } from './const'

//

enum TransactionType {
	CREATE = 'CREATE',
	ACTIVATE = 'ACTIVATE',
	LINK = 'LINK',
}

const TransactionModal = ({ open, onClose, txData, txCallback }) => {}

//

type TArgs = {
	organizationId?: string
	battlepassId?: string
	formState?: any
	setFormState?: any
}
type TProps = { args: TArgs }

export const GeneralEditor = ({ args }: TProps) => {
	const { formState, setFormState } = args

	const config = useConfig()
	const theme = useTheme()
	const { query, push } = useRouter()
	const view = query?.view as string

	const address = useCurrentAccountAddress()
	const [stakeToEur, setStakeToEur] = useState(0)
	// const [formState, setFormState] = useState(initialState)

	const createBattlepassTX = useCreateBattlepassTX(
		formState.organizationId,
		formState.name,
		formState.metadataCid.toString(),
		formState.price,
	)
	const activateBattlepassTX = useActivateBattlepassTX(formState.battlepassId)
	const linkBotTX = useLinkBotTX(formState.battlepassId, formState.botAccount)

	//
	// get orgs for user
	//
	const [organizations, setOrganizations] = useState(null)
	const { loading, data: primeOrganizations } = useGetOrganizationsForPrimeSubscription({
		variables: { id: address },
	})
	useEffect(() => {
		if (loading) return
		if (!primeOrganizations?.organization.length) return
		const organizations = primeOrganizations?.organization?.map((o, i) => {
			return { label: o.name, value: o.id }
		})
		setOrganizations(organizations)
		// console.log(organizations)
	}, [primeOrganizations?.organization, loading])

	//
	// get battlepasses for orgs
	//
	const [battlepasses, setBattlepasses] = useState<any>()
	const { loading: loadingPasses, data: organizationBattlepasses } = useGetAllBattlepassesSubscription({
		// TODO: check why filter is not working
		// variables: { id: formState.organizationId },
	})
	useEffect(() => {
		if (loadingPasses) return
		if (!formState.organizationId) return
		if (!organizationBattlepasses?.Battlepasses?.length) return
		// console.log('hydrate', 'passes in', organizationBattlepasses.Battlepasses)
		// console.log('hydrate', 'filter by org', formState.organizationId)
		const passes = organizationBattlepasses?.Battlepasses?.map((p, i) => {
			return { name: p.name, id: p.chainId, active: p.active, org: p.orgId }
		}).filter((i) => i.org === formState.organizationId)
		setBattlepasses(passes)
		// console.log('hydrate', 'passes out', passes)
	}, [organizations, loadingPasses, organizationBattlepasses, formState.organizationId])
	//

	//
	// hydrate
	//
	useEffect(() => {
		if (!localStorage.getItem('battlepass')) return
		const cache = JSON.parse(localStorage.getItem('battlepass'))
		console.log('hydrate', 'restoring from cache', cache)
		setFormState({ ...cache })
	}, [])

	//
	// calculate deposit
	//
	useEffect(() => {
		if (formState.price === 0) return
		if (formState.subscribers === 0) return
		const fxGAME = 0.5 // cents per GAME
		const fxGAMEtoEUR = 0.5
		const price = formState.price
		const mul = formState.subscribers
		const deposit = (price * mul * fxGAME) / 100
		// console.log('deposit', deposit)
		setFormState({ ...formState, stake: deposit })
		setStakeToEur(deposit * fxGAMEtoEUR)
	}, [formState.subscribers, formState.price])

	//
	// handle input
	//
	const updateFormState = (k, v) => {
		const update = { ...formState, [k]: v }
		setFormState(update)
		localStorage.setItem('battlepass', JSON.stringify(update))
	}
	const handleChange = (e) => {
		updateFormState(e.target.name, e.target.value)
	}

	//
	// handle image upload
	//
	const handleUploadImage = useCallback(
		async (event, key) => {
			const files = event.target.files
			if (!files || files.length === 0) return createWarningNotification('No file selected')
			const cid = await uploadFileToIpfs(files[0])
			updateFormState([key], cid.toString())
			console.log('IPFS', key, cid)
		},
		[formState],
	)
	const getImageURL = (cid) => (cid ? parseIpfsHash(cid, config.IPFS_GATEWAY) : null)

	//
	// handle json upload
	//
	const uploadFile = async (filename, data) => {
		const file = new File([JSON.stringify(data)], filename, { type: 'text/plain' })
		const cid = await uploadFileToIpfs(file)
		updateFormState('metadataCid', cid.toString())
		return cid.toString()
	}

	//
	// assemble and upload metadata
	//
	const updateMetadataCID = async () => {
		if (!formState.organizationId) return

		const orgName = organizations?.find((o) => o.value === formState.organizationId)?.label
		const filename = `${slugify(orgName)}-${slugify(formState.name)}-metadata.json`
		const metadata = {
			spec: 2,
			name: formState.name,
			description: formState.description,
			slug: `${slugify(orgName)}-${slugify(formState.name)}`,
			tags: formState.tags,
			coverImageCid: formState.coverImageCid,
			bannerImageCid: formState.bannerImageCid,
			tokenImageCid: formState.tokenImageCid,
			iconImageCid: formState.iconImageCid,
			transferable: formState.transferable || true,
			burnable: formState.burnable || true,
		}
		const cid = await uploadFile(filename, metadata)

		console.log('================================')
		console.log('metadata', metadata)
		console.log('filename', filename)
		console.log('cid', cid)
		console.log('================================')
	}

	// example:
	// refresh the payload for a metadata blob on ipfs
	// available keys:
	// bp_metadata - operator side - battlepass metadata - configures mutable metadata of the battlepass from operator perspective
	// bp_collection_metadata
	// bp_user_metadata - user side battlepass nft metadata
	// bp_reward_content drop item nft metadata

	const [showModal, setShowModal] = useState<boolean>(false)
	const openModal = () => setShowModal(true)
	const closeModal = () => setShowModal(false)
	const handleTxComplete = (e: any) => {
		console.log('transaction complete', e)
		closeModal()
	}
	const [txData, setTxData] = useState()

	// create

	const [showCreateModal, setShowCreateModal] = useState<boolean>(false)
	const openCreateModal = () => setShowCreateModal(true)
	const closeCreateModal = () => setShowCreateModal(false)
	const handleOpenCreateModal = async () => {
		console.log('handleOpenTxModal', formState)
		await updateMetadataCID()
		openCreateModal()
	}
	const handleCreateComplete = (e) => {
		console.log('handleCreateComplete', e)
		setShowCreateModal(false)
	}

	console.log('selected battlepassId', formState.battlepassId)

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
		// console.log('active', active)
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
		console.log('handleLinkComplete', e)
		setShowLinkModal(false)
	}

	console.log(organizations?.length, battlepasses?.length)

	return (
		<TabPanel sx={{ py: 2 }} value="general">
			<Section
				direction={{ xs: 'column', md: 'column' }}
				title="Deposit + Create Battlepass Draft"
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

				{/* {organizations?.length > 0 ? (
					<FormControl sx={{ flex: 1 }}>
						<InputLabel id="organizationId">Select Organization</InputLabel>
						<Select
							name={'organizationId'}
							value={formState.organizationId}
							onChange={handleChange}
							labelId="organizationId"
							label="Select Organization"
							variant="outlined"
						>
							{organizations?.map((item, index) => {
								// console.log(index, item)
								return (
									<MenuItem value={item.value} key={index}>
										{item.label}
									</MenuItem>
								)
							})}
						</Select>
					</FormControl>
				) : (
					`Searching for an organization...`
				)}

				{battlepasses?.length > 0 ? (
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
				) : null} */}

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
						label="Estimated Subscribers"
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
					<label htmlFor="card-image-upload">
						<input
							style={{ display: 'none' }}
							accept="image/*"
							id="card-image-upload"
							type="file"
							onChange={(e) => handleUploadImage(e, 'coverImageCid')}
						/>
						<Box
							sx={{
								border: '5px black solid',
								borderRadius: Number(theme.shape.borderRadius),
								height: '400px',
								width: '300px',
								backgroundColor: theme.palette.background.default,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								overflow: 'hidden',
								cursor: 'pointer',
								backgroundSize: 'cover',
								backgroundAlign: 'center',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								backgroundImage: formState.coverImageCid
									? `url(${getImageURL(formState.coverImageCid)})`
									: null,
							}}
						>
							{!formState.coverImageCid ? (
								<Stack spacing={1} direction="column" alignItems="center" justifyContent="center">
									<AddPhotoAlternateOutlinedIcon
										sx={{ height: '20px', width: '20px', cursor: 'pointer' }}
									/>
									<Typography variant="cardMicro" align="center">
										Add Battlepass Cover Image
									</Typography>
								</Stack>
							) : (
								<Typography>CoverImage</Typography>
							)}
						</Box>
					</label>

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

						<Stack direction={{ sm: 'column', md: 'row' }} spacing={2}>
							<Box sx={{ border: 'grey' }}>
								<label htmlFor="icon-file-upload">
									<input
										style={{ display: 'none' }}
										accept="image/*"
										id="icon-file-upload"
										type="file"
										onChange={(e) => handleUploadImage(e, 'iconImageCid')}
									/>
									<Avatar
										sx={(theme) => ({
											width: '150px',
											height: '150px',
											backgroundColor: theme.palette.background.default,
											outline: `5px solid #000000aa`,
											cursor: 'pointer',
										})}
										src={getImageURL(formState.iconImageCid)}
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
							<Box>
								<label htmlFor="token-image-upload">
									<input
										style={{ display: 'none' }}
										accept="image/*"
										id="token-image-upload"
										type="file"
										onChange={(e) => handleUploadImage(e, 'tokenImageCid')}
									/>
									{!formState.coverImageCid ? (
										<Stack
											spacing={1}
											direction="column"
											alignItems="center"
											justifyContent="center"
										>
											<AddPhotoAlternateOutlinedIcon
												sx={{ height: '20px', width: '20px', cursor: 'pointer' }}
											/>
											<Typography variant="cardMicro" align="center">
												Add Battlepass Token Image
											</Typography>
										</Stack>
									) : (
										<Image
											src={getImageURL(formState.tokenImageCid)}
											alt="card"
											sx={{
												borderRadius: Number(theme.shape.borderRadius),
												width: '100px',
												height: '150px',
											}}
										/>
									)}
								</label>
							</Box>
							<Box>
								<label htmlFor="banner-image-upload">
									<input
										style={{ display: 'none' }}
										accept="image/*"
										id="banner-image-upload"
										type="file"
										onChange={(e) => handleUploadImage(e, 'bannerImageCid')}
									/>
									{!formState.coverImageCid ? (
										<Stack
											spacing={1}
											direction="column"
											alignItems="center"
											justifyContent="center"
										>
											<AddPhotoAlternateOutlinedIcon
												sx={{ height: '20px', width: '20px', cursor: 'pointer' }}
											/>
											<Typography variant="cardMicro" align="center">
												Add Battlepass Banner Image
											</Typography>
										</Stack>
									) : (
										<Image
											src={getImageURL(formState.bannerImageCid)}
											alt="card"
											sx={{
												borderRadius: Number(theme.shape.borderRadius),
												width: '450px',
												height: '150px',
											}}
										/>
									)}
								</label>
							</Box>
						</Stack>
					</Stack>
				</Stack>

				<Stack direction={{ sm: 'column', md: 'row' }} spacing={2} justifyContent="space-evenly">
					<Button size="large" variant="outlined" fullWidth onClick={handleOpenCreateModal}>
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
			{showModal && (
				<TransactionDialog
					open={showModal}
					onClose={closeModal}
					txData={txData}
					txCallback={handleTxComplete}
				/>
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
		</TabPanel>
	)
}
