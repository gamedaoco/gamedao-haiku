import React, { useState } from 'react'
import { Typography, Stack, Button, Paper, Box, Container, InputAdornment } from '@mui/material'
import { FormInput } from './modules/FormInput'
import { FormAutoComplete } from './modules/FormAutoComplete'
import { FormCheckbox } from './modules/FormCheckbox'
import { FormStepper } from './modules/FormStepper'
import * as Yup from 'yup'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import data from 'src/utils/data'
import { isValidZeroAddress } from 'src/utils/helper'

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
const accounts = [
	'3ZBh2L6YhhmBRWG8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
	'3HHHHHHHHHHHHH8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
	'3T9tBQ3UePp25qDcY8ncZfEhajn1iyVoj85mfLhb51VotMee',
]

const defaultValues = {
	org_name: data.memberships[0].value,
	usage: data.project_types[0].value,
	protocol: data.protocol_types[0].value,
	deposit: '3',
	cap: '99',
	duration: data.project_durations[0].value,
	governance: true,
}

export function FormCampaign(props) {
	const [stepperState, setStepperState] = useState(0)
	const [campaignName, setCampaignName] = useState('')

	const methods = useForm({ resolver: yupResolver(validationSchema), defaultValues: defaultValues })
	const { handleSubmit, control, setValue } = methods
	const onSubmit = (data) => {
		const formData = JSON.stringify(data, null, 2)
		alert(formData)
		props.parentCallback(formData)
	}

	return (
		<FormProvider {...methods}>
			<Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={6}>
				<Typography variant={'h3'}>{campaignName || 'Untitled organization'}</Typography>
				<FormStepper stepperState={stepperState} />
			</Stack>
			<form>
				<Paper sx={{ p: 4 }}>
					<Stack spacing={3}>
						<Typography variant={'h5'}>General Information</Typography>

						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<FormInput
								name="org_name"
								label="Organization"
								selectable
								options={data.memberships}
								placeholder="Organization"
								control={control}
							/>
							<FormInput
								name="campaign_name"
								label="Campaign name"
								placeholder="Give your campaign a name..."
								control={control}
								required
							/>
						</Stack>

						<FormInput
							name="description"
							label="Campaign Description"
							placeholder="Tell us more about your idea..."
							minRows={5}
							control={control}
							required
						/>

						<Typography variant={'h5'}>Content</Typography>
						<Typography variant={'h6'}>Logo (800 x 800px)</Typography>
						<Box sx={{ width: 600, height: 200 }}></Box>

						<Typography variant={'h6'}>Header Image (1920 x 800px)</Typography>
						<Box sx={{ width: 600, height: 200 }}></Box>

						<Typography variant={'h5'}>Content Description</Typography>
						<Box sx={{ width: 600, height: 200 }}></Box>

						<Typography variant={'h5'}>Public Representative</Typography>
						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<FormInput name="name" label="Name" placeholder="Name" control={control} required />
							<FormInput name="email" label="Email" placeholder="Email" control={control} required />
						</Stack>

						<Typography variant={'h5'}>Campaign Settings</Typography>
						<Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={6}>
							<FormAutoComplete
								name="admin"
								label="Admin Account"
								options={accounts}
								control={control}
								required
							/>
							<FormInput
								name="usage"
								label="Usage of funds"
								placeholder="Usage"
								selectable
								options={data.project_types}
								control={control}
							/>
						</Stack>

						<FormInput
							name="protocol"
							label={'protocol'}
							placeholder="Protocol"
							selectable
							options={data.protocol_types}
							control={control}
						/>

						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<FormInput
								name="deposit"
								label="Deposit"
								placeholder="Deposit"
								InputProps={{
									endAdornment: <InputAdornment position="end">ZERO</InputAdornment>,
								}}
								control={control}
							/>
							<FormInput
								name="cap"
								label="Funding Target"
								placeholder="Cap"
								InputProps={{
									endAdornment: <InputAdornment position="end">ZERO</InputAdornment>,
								}}
								control={control}
							/>
							<FormInput
								name="duration"
								label="Campaign Duration"
								placeholder="Campaign Duration"
								selectable
								options={data.project_durations}
								control={control}
							/>
						</Stack>

						<FormCheckbox name="governance" label="DAO Governance" control={control} />
						<FormCheckbox
							name="accept_terms"
							label="I agree to the Terms and Conditions"
							control={control}
							required
						/>
					</Stack>
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
