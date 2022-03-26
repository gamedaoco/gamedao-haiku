import React, { useState } from 'react'
import { Typography, Grid, Button, Paper, Box, Container, InputAdornment } from '@mui/material'
import { FormInput } from './modules/FormInput'
import { FormAutoComplete } from './modules/FormAutoComplete'
import { FormCheckbox } from './modules/FormCheckbox'
import { FormStepper } from './modules/FormStepper'
import * as Yup from 'yup'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import data from 'src/utils/data'
import { isValidZeroAddress } from 'src/utils/helper'

export function FormCampaign(props) {
	const [stepperState, setStepperState] = useState(0)
	const [campaignName, setCampaignName] = useState('')

	const accounts = [
		'3ZBh2L6YhhmBRWG8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
		'3HHHHHHHHHHHHH8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
		'3T9tBQ3UePp25qDcY8ncZfEhajn1iyVoj85mfLhb51VotMee',
	]
	const validationSchema = Yup.object().shape({
		campaign_name: Yup.string().required('Campaign Name is required'),
		description: Yup.string().required('Description is required'),
		name: Yup.string().required('Name is required'),
		email: Yup.string().required('Email is required').email('Email is invalid'),
		admin: Yup.string()
			.required('Admin account is required')
			.test('This is zero-address', 'This is not valid zero-address', (value) => {
				return isValidZeroAddress(value)
			}),
		accept_terms: Yup.bool().oneOf([true], 'Accept Terms is required'),
	})
	const methods = useForm({ resolver: yupResolver(validationSchema) })
	const { handleSubmit, control, setValue } = methods
	const onSubmit = (data) => {
		const formData = JSON.stringify(data, null, 2)
		alert(formData)
		props.parentCallback(formData)
	}

	return (
		<FormProvider {...methods}>
			<Grid container alignItems={'center'} spacing={3}>
				<Grid item xs={12} md={7}>
					<Typography variant={'h3'}>{campaignName || 'Untitled organization'}</Typography>
				</Grid>
				<Grid item xs={12} md={5}>
					<FormStepper stepperState={stepperState} />
				</Grid>
			</Grid>
			<form>
				<Paper sx={{ p: 4 }}>
					<Grid container spacing={3} component="form">
						<Grid item xs={12}>
							<Typography variant={'h5'}>General Information</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormInput
								name="org_name"
								label="Organization"
								selectable
								options={data.memberships}
								placeholder="Organization"
								control={control}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormInput
								name="campaign_name"
								label="Campaign name"
								placeholder="Give your campaign a name..."
								control={control}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<FormInput
								name="description"
								label="Campaign Description"
								placeholder="Tell us more about your idea..."
								minRows={5}
								control={control}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography variant={'h5'}>Content</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant={'h6'}>Logo (800 x 800px)</Typography>
							<Box sx={{ width: 600, height: 200 }}></Box>
						</Grid>
						<Grid item xs={12}>
							<Typography variant={'h6'}>Header Image (1920 x 800px)</Typography>
							<Box sx={{ width: 600, height: 200 }}></Box>
						</Grid>
						<Grid item xs={12}>
							<Typography variant={'h5'}>Content Description</Typography>
						</Grid>
						<Grid item xs={12}>
							{/* <MarkdownEditor value={markdownValue} onChange={handleEditorChange} /> */}
							<Box sx={{ width: 600, height: 200 }}></Box>
						</Grid>
						{/* legal body applying for the funding */}
						<Grid item xs={12}>
							<Typography variant={'h5'}>Public Representative</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormInput name="name" label="Name" placeholder="Name" control={control} required />
						</Grid>
						<Grid item xs={12} md={6}>
							<FormInput name="email" label="Email" placeholder="Email" control={control} required />
						</Grid>
						<Grid item xs={12}>
							<Typography variant={'h5'}>Campaign Settings</Typography>
						</Grid>
						{/* usage of funding and protocol to initiate after successfully raising */}
						<Grid item xs={12} md={6}>
							<FormAutoComplete
								name="admin"
								label="Admin Account"
								options={accounts}
								control={control}
								required
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormInput
								name="usage"
								label="Usage of funds"
								placeholder="Usage"
								selectable
								options={data.project_types}
								control={control}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<FormInput
								name="protocol"
								label={'protocol'}
								placeholder="Protocol"
								selectable
								options={data.protocol_types}
								control={control}
								required
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<FormInput
								name="deposit"
								label="Deposit"
								placeholder="Deposit"
								InputProps={{
									endAdornment: <InputAdornment position="end">ZERO</InputAdornment>,
								}}
								control={control}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<FormInput
								name="cap"
								label="Funding Target"
								placeholder="Cap"
								InputProps={{
									endAdornment: <InputAdornment position="end">ZERO</InputAdornment>,
								}}
								control={control}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<FormInput
								name="duration"
								label="Campaign Duration"
								placeholder="Campaign Duration"
								selectable
								options={data.project_durations}
								control={control}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<FormCheckbox name="governance" label="DAO Governance" control={control} />
						</Grid>
						<Grid item xs={12}>
							<FormCheckbox
								name="accept_terms"
								label="I agree to the Terms and Conditions"
								control={control}
								required={true}
							/>
						</Grid>
					</Grid>
				</Paper>
			</form>
			<Container maxWidth={'xs'} sx={{ p: 4 }}>
				<Button variant="contained" fullWidth onClick={handleSubmit(onSubmit)}>
					Create Campaign
				</Button>
			</Container>
		</FormProvider>
	)
}
