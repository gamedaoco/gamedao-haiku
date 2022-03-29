import React, { useState } from 'react'
import { Box, Button, Container, InputAdornment, Paper, Stack, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from './modules/input'
import { Autocomplete } from './modules/autocomplete'
import { Checkbox } from './modules/checkbox'
import { Stepper } from './modules/stepper'
import { memberships, project_durations, project_types, protocol_types } from 'src/utils/data'
import { checkIsAddressValid } from 'src/utils/accountUtils'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	campaign_name: Yup.string().required('Campaign Name is required'),
	description: Yup.string().required('Description is required'),
	name: Yup.string().required('Name is required'),
	email: Yup.string().required('Email is required').email('Email is invalid'),
	admin: Yup.string()
		.required('Admin account is required')
		.test('This is zero-address', 'This is not valid zero-address', (value) => {
			return checkIsAddressValid(value)
		}),
	deposit: Yup.number().required('Deposit is required'),
	cap: Yup.number().required('Funding Target is required'),
	accept_terms: Yup.bool().oneOf([true], 'Accept Terms is required'),
})

const accounts = [
	'3ZBh2L6YhhmBRWG8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
	'3HHHHHHHHHHHHH8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
	'3T9tBQ3UePp25qDcY8ncZfEhajn1iyVoj85mfLhb51VotMee',
]

const defaultValues = {
	campaign_name: '',
	org_name: memberships[0].value,
	usage: project_types[0].value,
	protocol: protocol_types[0].value,
	deposit: 3,
	cap: 99,
	duration: project_durations[0].value,
	governance: true,
	accept_terms: false,
}

export function FormCampaign(props) {
	const [stepperState, setStepperState] = useState(0)
	const methods = useForm({ resolver: yupResolver(validationSchema), defaultValues: defaultValues })
	const {
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = methods
	const watchCampaignName = watch('campaign_name', '')
	const onSubmit = (data) => {
		const formData = JSON.stringify(data, null, 2)
		alert(formData)
		props.parentCallback(formData)
	}

	return (
		<FormProvider {...methods}>
			<Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={6}>
				<Typography variant={'h3'}>{watchCampaignName || 'Untitled Campaign'}</Typography>
				<Stepper stepperState={stepperState} />
			</Stack>
			<form>
				<Paper sx={{ p: 4 }}>
					<Stack spacing={3}>
						<Typography variant={'h5'}>General Information</Typography>

						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<Input
								name="org_name"
								label="Organization"
								selectable
								options={memberships}
								placeholder="Organization"
								control={control}
							/>
							<Input
								name="campaign_name"
								label="Campaign name"
								placeholder="Give your campaign a name..."
								control={control}
								required
							/>
						</Stack>

						<Input
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
							<Input name="name" label="Name" placeholder="Name" control={control} required />
							<Input name="email" label="Email" placeholder="Email" control={control} required />
						</Stack>

						<Typography variant={'h5'}>Campaign Settings</Typography>
						<Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={6}>
							<Autocomplete
								name="admin"
								label="Admin Account"
								options={accounts}
								control={control}
								required
							/>
							<Input
								name="usage"
								label="Usage of funds"
								placeholder="Usage"
								selectable
								options={project_types}
								control={control}
							/>
						</Stack>

						<Input
							name="protocol"
							label={'protocol'}
							placeholder="Protocol"
							selectable
							options={protocol_types}
							control={control}
						/>

						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<Input
								name="deposit"
								label="Deposit"
								placeholder="Deposit"
								InputProps={{
									endAdornment: <InputAdornment position="end">ZERO</InputAdornment>,
								}}
								control={control}
							/>
							<Input
								name="cap"
								label="Funding Target"
								placeholder="Cap"
								InputProps={{
									endAdornment: <InputAdornment position="end">ZERO</InputAdornment>,
								}}
								control={control}
							/>
							<Input
								name="duration"
								label="Campaign Duration"
								placeholder="Campaign Duration"
								selectable
								options={project_durations}
								control={control}
							/>
						</Stack>

						<Checkbox name="governance" label="DAO Governance" control={control} />
						<Checkbox
							name="accept_terms"
							label="I agree to the Terms and Conditions*"
							control={control}
							error={errors.accept_terms?.message}
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
