import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import slugify from 'slugify'

import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { createWarningNotification } from 'src/utils/notificationUtils'

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

import { RadioItem } from 'src/components/Forms/modules/radioItem'
import { TransactionDialog } from 'src/components/TransactionDialog/transactionDialog'
import { ContentPanel, ContentTitle, Section, SectionTitle, SectionDescription } from 'src/components/content'
import { Image } from 'src/components/Image/image'
import { Loader } from 'src/components/Loader'

import TabBar from './TabBar'

//

import { initialState } from './const'

export type TArgs = {
	organizationId: string
	battlepassId: string
}
export type TProps = { args: TArgs }

export const GeneralEditor = ({ args: TArgs }) => {
	const config = useConfig()
	const theme = useTheme()
	const { query, push } = useRouter()
	const view = query?.view as string

	const address = useCurrentAccountAddress()
	const [stakeToEur, setStakeToEur] = useState(0)
	const [formState, setFormState] = useState(initialState)

	const createBattlepassTX = useCreateBattlepassTX(
		formState.organizationId,
		formState.name,
		formState.metadataCid,
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
		console.log('deposit', deposit)
		setFormState({ ...formState, stake: deposit })
		setStakeToEur(deposit * fxGAMEtoEUR)
	}, [formState.subscribers, formState.price])

	//
	// handle input
	//
	const updateFormState = (k, v) => {
		const update = { ...formState, [k]: v }
		// console.log('update', k, v, update)
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
		updateFormState('metadataCid', cid)
	}

	// TODO:
	// 1 assemble metadata based on form state
	useEffect(() => {
		if (!formState.organizationId) return

		const data = {
			name: formState.name,
			description: formState.description,
			slug: slugify(formState.name),
			tags: formState.tags,
		}

		updateFormState('metadata', data)

		const filename = `${formState.slug}-metadata.json`

		console.log('================================')
		console.log('metadata', data)
		console.log('filename', filename)
		console.log('================================')
	}, [])

	// 2 upload metadata to ipfs
	// 3 derive image urls from metadata cids

	// example:
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

				{organizations?.length > 0 ? (
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
								onChange={(e) => handleUploadImage(e, 'battlepassCoverImage')}
							/>
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
								<Image
									src={getImageURL(formState.coverImageCid)}
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
