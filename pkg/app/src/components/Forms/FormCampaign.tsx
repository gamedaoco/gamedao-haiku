import React, { Fragment, useEffect, useState } from 'react'
import {
	Typography,
	Grid,
	TextField,
	FormControlLabel,
	FormControl,
	InputLabel,
	Checkbox,
	Button,
	Select,
	Paper,
	Box,
	MenuItem,
	Autocomplete,
	Container,
	FormHelperText,
	Stepper,
	Step,
	StepLabel,
	Divider,
	InputAdornment,
} from '@mui/material'

import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import FormSectionHeadline from './defaultComponents/FormSectionHeadline'
import data from 'src/utils/data'
import { isValidZeroAddress } from 'src/utils/helper'

export function FormCampaign(props) {
	const [stepperState, setStepperState] = useState(0)
	const [campaignName, setCampaignName] = useState('')

	const accounts = [
		'3ZBh2L6YhhmBRWG8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
		'3HHHHHHHHHHHHH8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
	]

	const validationSchema = Yup.object().shape({
		org_name: Yup.string().required('Organization Name is required'),
		campaign_name: Yup.string().required('Campaign Name is required'),
		description: Yup.string().required('Description is required'),
		name: Yup.string().required('Name is required'),
		email: Yup.string()
			.required('Email is required')
			.email('Email is invalid'),
		admin: Yup.string()
			.required('Admin account is required')
			.test('This is zero-address', 'This is not valid zero-address', value => {
				return isValidZeroAddress(value)
			}),

		accept_terms: Yup.bool().oneOf([true], 'Accept Terms is required'),
	})

	const {
		register,
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	})

	const onSubmit = data => {
		const formData = JSON.stringify(data, null, 2)
		alert(formData)
		props.parentCallback(formData)
	}

	return (
		<Fragment>
			<Box>
				<Typography variant="h6">Create Campaign</Typography>
			</Box>

			<Box display="flex" justifyContent="flex-end" alignItems="center" flex="1">
				<Button
					variant="outlined"
					onClick={() => {
						props.isCloseCampaign(true)
					}}
				>
					Cancel
				</Button>
			</Box>
			<Box sx={{ pb: 2 }}>
				<Grid container alignItems={'center'} spacing={3}>
					<Grid item xs={12} md={7}>
						<Typography variant={'h3'}>{campaignName || 'Untitled campaign'}</Typography>
					</Grid>
					<Grid item xs={12} md={5}>
						<Stepper activeStep={stepperState} orientation={'horizontal'}>
							<Step>
								<StepLabel>Enter data</StepLabel>
							</Step>
							<Step>
								<StepLabel>Validate</StepLabel>
							</Step>
							<Step>
								<StepLabel>Profit</StepLabel>
							</Step>
						</Stepper>
					</Grid>
				</Grid>
			</Box>
			<Paper sx={{ p: 4 }}>
				<Grid container spacing={3} component="form">
					<Grid item xs={12}>
						<FormSectionHeadline variant={'h5'}>General Information</FormSectionHeadline>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							id="org"
							required
							label="Organization"
							select
							fullWidth
							placeholder="Organization"
							name="org_name"
							{...register('org_name')}
							error={errors.org_name ? true : false}
							helperText={errors?.org_name?.message}
						>
							{data.memberships.map(ms => (
								<MenuItem key={ms.key} value={ms.value}>
									{ms.text}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							label="Campaign name"
							placeholder="Give your campaign a name..."
							name="campaign_name"
							{...register('campaign_name', {
								onChange: e => {
									setCampaignName(e.target.value)
								},
							})}
							error={errors.campaign_name ? true : false}
							helperText={errors?.campaign_name?.message}
							required
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							multiline
							minRows={5}
							label="Campaign Description"
							placeholder="Tell us more about your idea..."
							name="description"
							{...register('description')}
							error={errors.description ? true : false}
							helperText={errors?.description?.message}
							required
						/>
					</Grid>

					<Grid item xs={12}>
						<FormSectionHeadline variant={'h5'}>Content</FormSectionHeadline>
					</Grid>

					<Grid item xs={12}>
						<FormSectionHeadline variant={'h6'}>Logo (800 x 800px)</FormSectionHeadline>
						<Box sx={{ width: 600, height: 200 }}></Box>
					</Grid>
					<Grid item xs={12}>
						<FormSectionHeadline variant={'h6'}>Header Image (1920 x 800px)</FormSectionHeadline>
						<Box sx={{ width: 600, height: 200 }}></Box>
					</Grid>

					<Grid item xs={12}>
						<FormSectionHeadline variant={'h5'}>Content Description</FormSectionHeadline>
					</Grid>

					<Grid item xs={12}>
						{/* <MarkdownEditor value={markdownValue} onChange={handleEditorChange} /> */}
						<Box sx={{ width: 600, height: 200 }}></Box>
					</Grid>

					{/* legal body applying for the funding */}

					<Grid item xs={12}>
						<FormSectionHeadline variant={'h5'}>Public Representative</FormSectionHeadline>
					</Grid>

					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							label="Name"
							placeholder="Name"
							name="name"
							required
							{...register('name')}
							error={errors.name ? true : false}
							helperText={errors?.name?.message}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							label="Email"
							placeholder="Email"
							name="email"
							required
							{...register('email')}
							error={errors.email ? true : false}
							helperText={errors?.email?.message}
						/>
					</Grid>

					<Grid item xs={12}>
						<FormSectionHeadline variant={'h5'}>Campaign Settings</FormSectionHeadline>
					</Grid>

					{/* usage of funding and protocol to initiate after successfully raising */}

					<Grid item xs={12} md={6}>
						<Autocomplete
							freeSolo
							disableClearable
							fullWidth
							options={accounts}
							{...register('admin')}
							onChange={(e, options) => {
								setValue('admin', options, { shouldValidate: true })
							}}
							renderInput={params => (
								<TextField
									{...params}
									label="Admin Account"
									placeholder="Admin"
									name="admin"
									required
									error={Boolean(errors?.admin)}
									helperText={errors?.admin?.message}
									InputProps={{
										...params.InputProps,
										type: 'search',
									}}
								/>
							)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label={'Usage of funds'}
							id="usage"
							required
							name="usage"
							placeholder="Usage"
							{...register('usage')}
						>
							{data.project_types.map(item => (
								<MenuItem key={item.key} value={item.value}>
									{item.text}
								</MenuItem>
							))}
						</TextField>
					</Grid>

					<Grid item xs={12}>
						<TextField
							id="protocol"
							required
							fullWidth
							name="protocol"
							label={'protocol'}
							placeholder="Protocol"
							{...register('protocol')}
						>
							{data.protocol_types.map(item => (
								<MenuItem key={item.key} value={item.value}>
									{item.text}
								</MenuItem>
							))}
						</TextField>
					</Grid>

					<Grid item xs={12} md={4}>
						<TextField
							fullWidth
							label="Deposit"
							placeholder="Deposit"
							name="deposit"
							InputProps={{
								endAdornment: <InputAdornment position="end">ZERO</InputAdornment>,
							}}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<TextField
							fullWidth
							label="Funding Target"
							placeholder="Cap"
							name="cap"
							InputProps={{
								endAdornment: <InputAdornment position="end">ZERO</InputAdornment>,
							}}
						/>
					</Grid>

					<Grid item xs={12} md={4}>
						<TextField
							id="duration"
							required
							label="Campaign Duration"
							placeholder="Campaign Duration"
							name="duration"
						>
							{data.project_durations.map(item => (
								<MenuItem key={item.key} value={item.value}>
									{item.text}
								</MenuItem>
							))}
						</TextField>
					</Grid>

					<Grid item xs={12}>
						<FormControlLabel
							label="DAO Governance"
							control={
								<Controller
									control={control}
									name="governance"
									defaultValue="false"
									inputRef={register()}
									render={({ field: { onChange } }) => (
										<Checkbox color="primary" onChange={e => onChange(e.target.checked)} />
									)}
								/>
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Controller
									control={control}
									name="accept_terms"
									defaultValue="false"
									inputRef={register()}
									render={({ field: { onChange } }) => (
										<Checkbox color="primary" onChange={e => onChange(e.target.checked)} />
									)}
								/>
							}
							label={
								<Typography color={errors.accept_terms ? 'error' : 'inherit'}>
									I have read and agree to the Terms *
								</Typography>
							}
						/>
					</Grid>
				</Grid>
			</Paper>
			<Container maxWidth={'xs'} sx={{ p: 4 }}>
				<Button variant="contained" fullWidth onClick={handleSubmit(onSubmit)}>
					Create Campaign
				</Button>
			</Container>
		</Fragment>
	)
}
