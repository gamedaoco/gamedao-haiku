import React, { useEffect, useState } from 'react'
import {
	Typography,
	Grid,
	TextField,
	Button,
	Select,
	Paper,
	Box,
	MenuItem,
	Autocomplete,
	Container,
	Stepper,
	Step,
	StepLabel,
} from '@mui/material'

import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import FormSectionHeadline from './defaultComponents/FormSectionHeadline'
import data from 'src/utils/data'
import { isValidZeroAddress } from 'src/utils/helper'

export function FormDao(props) {
	const [stepperState, setStepperState] = useState(0)
	const [organizationName, setOrganizationName] = useState('')

	const accounts = [
		'3ZBh2L6YhhmBRWG8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
		'3HHHHHHHHHHHHH8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
	]

	const validationSchema = Yup.object().shape({
		org_name: Yup.string().required('Organization Name is required'),
		org_email: Yup.string()
			.required('Organization Email is required')
			.email('Organization Email is invalid'),
		org_body: Yup.string().required('Organization Body is required'),
		country: Yup.string().required('Country is required'),
		description: Yup.string().required('Description is required'),
		controller_account: Yup.string()
			.required('Controller account is required')
			.test('This is zero-address', 'This is not valid zero-address', value => {
				return isValidZeroAddress(value)
			}),
	})

	const {
		register,
		control,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	})

	const onSubmit = data => {
		const formData = JSON.stringify(data, null, 2)
		alert(formData)
		props.parentCallback(formData)
	}

	useEffect(() => {
		register('controller_account', {
			validate: value => isValidZeroAddress(value) || 'This is not zero address.',
		})
	}, [register])

	return (
		<>
			<Box>
				<Typography variant="h6">Total organizations</Typography>
			</Box>
			<Box display="flex" justifyContent="flex-end" alignItems="center" flex="1">
				<Button
					variant="outlined"
					onClick={() => {
						props.isCloseDao(true)
					}}
				>
					Cancel
				</Button>
			</Box>
			<Box sx={{ pb: 2 }}>
				<Grid container alignItems={'center'} spacing={3}>
					<Grid item xs={12} md={7}>
						<Typography variant={'h3'}>{organizationName || 'Untitled organization'}</Typography>
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
			<form>
				<Paper sx={{ p: 6 }}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<FormSectionHeadline variant={'h5'}>General Information</FormSectionHeadline>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								label="Organization Name"
								id="org-name-label"
								placeholder="Organization Name"
								name="org_name"
								{...register('org_name', {
									onChange: e => {
										setOrganizationName(e.target.value)
									},
								})}
								error={errors.org_name ? true : false}
								helperText={errors?.org_name?.message}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								label="Organization email"
								id="org-email-label"
								fullWidth
								placeholder="Organization email"
								name="org_email"
								{...register('org_email')}
								error={errors.org_email ? true : false}
								helperText={errors?.org_email?.message}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label={'Organizational Body'}
								name={'org_body'}
								variant="outlined"
								select
								{...register('org_body')}
								fullWidth
								defaultValue={1}
							>
								{data.dao_bodies.map(item => (
									<MenuItem key={item.key} value={item.value}>
										{item.text}
									</MenuItem>
								))}
							</TextField>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label="Country"
								name="country"
								placeholder="Country"
								variant="outlined"
								select
								defaultValue={'ch'}
								fullWidth
								{...register('country')}
							>
								{data.countries.map(item => (
									<MenuItem key={item.key} value={item.value}>
										{item.text}
									</MenuItem>
								))}
							</TextField>
						</Grid>
						<Grid item xs={12}>
							<FormSectionHeadline variant={'h5'}>Images</FormSectionHeadline>
						</Grid>
						<Grid item xs={12}>
							<FormSectionHeadline variant={'h6'}>Logo (800 x 800px)</FormSectionHeadline>
							<Box sx={{ width: 600, height: 200 }}></Box>
						</Grid>
						<Grid item xs={12}>
							<FormSectionHeadline>Meta Information</FormSectionHeadline>
						</Grid>
						<Grid item xs={12}>
							<TextField
								multiline
								aria-label="Short Description"
								minRows={3}
								fullWidth
								label="Short Description"
								name="description"
								placeholder="Tell us more about your organization..."
								{...register('description')}
								error={errors.description ? true : false}
								helperText={errors?.description?.message}
								required
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								label="Website"
								placeholder="https://your.website.xyz"
								// isInjected="website"
								fullWidth
								name="website"
								{...register('website')}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<TextField
								label="Code Repository"
								placeholder="repo"
								id="repo"
								fullWidth
								name="repo"
								{...register('repo')}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormSectionHeadline>Controller Settings</FormSectionHeadline>
						</Grid>
						<Grid item xs={12}>
							<Autocomplete
								freeSolo
								disableClearable
								fullWidth
								{...register('controller_account')}
								options={accounts}
								onChange={(e, options) => {
									setValue('controller_account', options, { shouldValidate: true })
								}}
								renderInput={params => (
									<TextField
										{...params}
										label="Controller Account"
										placeholder="Controller"
										name="controller_account"
										required
										error={Boolean(errors?.controller_account)}
										helperText={errors?.controller_account?.message}
										inputProps={{
											...params.inputProps,
											type: 'search',
										}}
									/>
								)}
							/>
						</Grid>

						<Grid item xs={12}>
							<Select
								labelId="member-select-label"
								id="member-select"
								label="Member Access Control"
								name="access"
								fullWidth
								defaultValue={1}
								{...register('access')}
							>
								{data.dao_member_governance.map(item => (
									<MenuItem key={item.key} value={item.value}>
										{item.text}
									</MenuItem>
								))}
							</Select>
						</Grid>
						<Grid item xs={12} md={4}>
							<TextField
								id="member_limit"
								name="member_limit"
								placeholder="100"
								label="Member Limit"
								fullWidth
								{...register('member_limit')}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<TextField
								label="Fee Model"
								name="fee_model"
								variant="outlined"
								select
								fullWidth
								defaultValue={0}
								{...register('fee_model')}
							>
								{data.dao_fee_model.map(item => (
									<MenuItem key={item.key} value={item.value}>
										{item.text}
									</MenuItem>
								))}
							</TextField>
						</Grid>
						<Grid item xs={12} md={4}>
							<TextField
								id="fee"
								name="fee"
								label="Membership Fee"
								placeholder="10"
								fullWidth
								{...register('fee')}
							/>
						</Grid>
					</Grid>
				</Paper>
				<Container maxWidth={'xs'} sx={{ p: 4 }}>
					<Button type="submit" fullWidth variant={'contained'} onClick={handleSubmit(onSubmit)}>
						Create Organization
					</Button>
				</Container>
			</form>
		</>
	)
}
