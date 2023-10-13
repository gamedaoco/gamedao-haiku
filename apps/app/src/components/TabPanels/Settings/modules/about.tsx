import { Fragment, useCallback, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { useConfig } from 'src/hooks/useConfig'
import { useUpdateOrgTransaction } from 'hooks/tx/useUpdateOrgTransaction'
import * as Yup from 'yup'
import { parseIpfsHash, uploadFileToIpfs } from 'src/utils/ipfs'
import { DisplayValueEntryNumber, useDisplayValuesQuery, useOrganizationByIdSubscription } from 'src/queries'

import Web from '@mui/icons-material/Web'
import AddImage from '@mui/icons-material/AddPhotoAlternateOutlined'
import { Autocomplete, Box, Button, CardMedia, Stack, TextField, Typography } from '@mui/material'

import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'
import { Dropzone } from 'components/Dropzone/dropzone'
import { Loader } from 'components/Loader'

interface Props {
	id?: string
}

const validationDescriptionSchema = Yup.string().required('page:organizations:settings:about:description_error')

export const validationSchema = Yup.object().shape({
	name: Yup.string().required(),
	description: Yup.string().required(),
})

const initialContent = {
	name: null,
	description: null,
	header: null,
	logo: null,
	country: null,
	url: null,
	tags: null,
}

export function About({ id }: Props) {
	const config = useConfig()
	const { t } = useTranslation()
	const { data } = useDisplayValuesQuery() || {}

	// get org data
	const args = { variables: { orgId: id } }
	const { loading, data: orgData } = useOrganizationByIdSubscription(args)
	const [org, setOrg] = useState(null)
	useEffect(() => {
		if (loading) return
		if (!orgData?.organization?.[0]) return
		setOrg(orgData?.organization?.[0])
	}, [loading, orgData])

	// tx
	const [showModal, setShowModal] = useState(false)
	const closeModal = useCallback(() => setShowModal(false), [setShowModal])
	const [payload, setPayload] = useState({})
	const updateOrgTx = useUpdateOrgTransaction({ args: payload })

	// cache
	const [error, setError] = useState({
		name: false,
		description: false,
		header: false,
		logo: false,
		country: false,
		url: false,
		tags: false,
	})
	const [content, setContent] = useState(initialContent)
	const updateContent = (e) => {
		setContent({ ...content, [e.target.name]: e.target.value })
	}
	useEffect(() => {
		setPayload({ content })
	}, [content])

	//
	const [descriptionValue, setDescriptionValue] = useState<string>()
	const [countrySelected, setCountrySelected] = useState(null)
	const [selectedTags, setSelectedTags] = useState([])
	const [headerValue, setHeaderValue] = useState(org?.header)
	const [logoValue, setLogoValue] = useState(org?.logo)

	const [errorState, setErrorState] = useState()

	const handleUploadHeaderValue = useCallback(async (files: File[]) => {
		if (!files || files.length === 0) return
		console.log('upload header', files)
		const headerFile = new File([await files[0].arrayBuffer()], files[0].name)
		const cid = await uploadFileToIpfs(headerFile).then((c) => c.toString())
		console.log('header cid', cid)
		setHeaderValue(cid)
		setContent({ ...org, header: cid })
	}, [])

	const handleUploadLogoValue = useCallback(async (files: File[]) => {
		if (!files || files.length === 0) return
		const logoFile = new File([await files[0].arrayBuffer()], files[0].name)
		const cid = await uploadFileToIpfs(logoFile)
		setLogoValue(cid.toString())
	}, [])

	// useEffect(() => {
	// 	if (description) {
	// 		setDescriptionValue(description)
	// 	}
	// }, [description])

	const handleDescriptionChange = useCallback(
		(event) => {
			if (setDescriptionValue) {
				try {
					validationDescriptionSchema.validateSync(event.target.value)
					// setErrorState(null)
				} catch (err) {
					// setErrorState(err.message)
				}

				setDescriptionValue(event.target.value)
			}
		},
		[setDescriptionValue],
	)

	const handleCountryChange = useCallback(
		(_, newValue) => {
			setCountrySelected(newValue)
		},
		[setCountrySelected],
	)

	const handleTagsChange = useCallback(
		(_, newValue) => {
			setSelectedTags(newValue)
		},
		[setSelectedTags],
	)

	const updateMetadata = () => {
		// update metadata
		// upload metadata to ipfs
		// trigger extrinsic to update org

		const metaData = { ...content }
		// 	name: content?.name,
		// 	description: content?.description,
		// 	logo: logo.logoCID,
		// 	header: cache.headerCID,
		// 	url: cache.url,
		// 	location: cache.location,
		// 	tags: cache.tags,
		// }

		console.log('==== metadata ====\n', metaData)
		// ;(async (): Promise<string> => {
		// 	const file = new File([JSON.stringify(metaData)], `${cache.name}-metadata.json`, {
		// 		type: 'text/plain',
		// 	})
		// 	const cid = await uploadFileToIpfs(file)
		// 	return cid.toString()
		// })().then((cid) => {
		// 	cache.setMetaDataCID(cid)
		// })
	}
	const updateMetadataComplete = () => {
		console.log('update metadata complete')
	}

	return loading || !org ? (
		<Loader />
	) : (
		<Fragment>
			{showModal && (
				<TransactionDialog
					open={showModal}
					onClose={closeModal}
					txData={updateOrgTx}
					txCallback={updateMetadataComplete}
				/>
			)}
			<Typography variant="h5">Update Organization</Typography>

			<TextField
				fullWidth
				onChange={updateContent}
				// InputLabelProps={{ shrink: !!descriptionValue }}
				value={org.name}
				label={'name'}
				error={!!error.name}
			/>

			<TextField
				fullWidth
				multiline
				// sx={{
				// 	'& fieldset': {
				// 		borderRadius: '5px',
				// 	},
				// }}
				onChange={handleDescriptionChange}
				InputLabelProps={{ shrink: !!descriptionValue }}
				value={descriptionValue}
				minRows={4}
				label={t('page:organizations:settings:about:description')}
				variant="outlined"
				error={!!errorState}
			/>

			{errorState && (
				<Typography variant="subtitle2" width="100%" color="error">
					{t(errorState)}
				</Typography>
			)}

			<Dropzone
				onFilesSelected={handleUploadHeaderValue}
				options={{
					maxFiles: 1,
					accept: { 'image/*': [] },
				}}
			>
				<Box
					display="grid"
					justifyContent="center"
					alignItems="center"
					position="absolute"
					zIndex={1}
					width="100%"
					height="100%"
				>
					<AddImage sx={{ width: '100%', height: '35px' }} />
				</Box>
				<CardMedia
					sx={{ height: '155px' }}
					component="img"
					src={parseIpfsHash(org?.header, config.IPFS_GATEWAY)}
					alt="banner"
				/>
			</Dropzone>
			<Dropzone onFilesSelected={handleUploadLogoValue} options={{ maxFiles: 1, accept: { 'image/*': [] } }}>
				<Box
					display="grid"
					justifyContent="center"
					alignItems="center"
					position="absolute"
					zIndex={1}
					width="100%"
					height="100%"
				>
					<AddImage sx={{ width: '100%', height: '35px' }} />
				</Box>
				<CardMedia
					sx={(theme) => ({
						width: '7rem',
						height: '7rem',
						backgroundColor: theme.palette.background.default,
						outline: `1px dashed ${theme.palette.grey['500']} !important`,
						outlineOffset: '5px',
						cursor: 'pointer',
						margin: '10px auto',
						borderRadius: '50%',
					})}
					component="img"
					src={parseIpfsHash(org?.logo, config.IPFS_GATEWAY)}
					alt="logo"
				/>
			</Dropzone>

			<TextField
				fullWidth
				label={t('page:organizations:settings:about:website')}
				InputProps={{
					startAdornment: <Web sx={{ width: '20px', height: '20px', mr: '8px' }} />,
				}}
				variant="outlined"
			/>

			<Autocomplete
				options={data?.displayValues?.countries || []}
				sx={{
					'& fieldset': {
						borderRadius: '5px',
					},
				}}
				onChange={handleCountryChange}
				getOptionLabel={(option: DisplayValueEntryNumber) => t(option.text)}
				value={countrySelected}
				renderInput={(params) => (
					<TextField {...params} label={t('page:organizations:settings:about:country')} />
				)}
			/>

			<Autocomplete
				multiple
				limitTags={5}
				options={data?.displayValues?.tags}
				sx={{
					'& fieldset': {
						borderRadius: '5px',
					},
				}}
				getOptionDisabled={() => selectedTags.length >= 5}
				freeSolo
				onChange={handleTagsChange}
				getOptionLabel={(option: DisplayValueEntryNumber) => t(option.text)}
				value={selectedTags}
				renderInput={(params) => <TextField {...params} label={t('page:organizations:settings:about:tags')} />}
			/>
			<Stack spacing={2} sx={{ justifyContent: { xs: 'space-between', sm: 'flex-end' } }} direction="row">
				<Button
					size="large"
					variant="outlined"
					color="primary"
					sx={{ display: 'block', flexGrow: { xs: 1, sm: 0 } }}
					onChange={updateMetadata}
					// disabled
				>
					{t('page:organizations:settings:about:cta_button')}
				</Button>
			</Stack>
		</Fragment>
	)
}
