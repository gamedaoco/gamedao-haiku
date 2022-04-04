import React, { useState } from 'react'
import { Box, Button, CircularProgress, Container, InputAdornment, Paper, Stack, Typography } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from './modules/input'
import { Autocomplete } from './modules/autocomplete'
import { Checkbox } from './modules/checkbox'
import { Stepper } from './modules/stepper'
import { checkIsAddressValid } from 'src/utils/accountUtils'
import * as Yup from 'yup'
import { useDisplayValues } from 'hooks/useDisplayValues'

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

export function FormCampaign(props) {
	const [stepperState, setStepperState] = useState(0)
	const displayValues = useDisplayValues()
	const methods = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			campaign_name: '',
			org_name: 0,
			usage: 0,
			protocol: 0,
			deposit: 3,
			cap: 99,
			duration: 0,
			governance: true,
			accept_terms: false,
		},
	})
	const {
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = methods

	const onSubmit = (data) => {
		const formData = JSON.stringify(data, null, 2)
		alert(formData)
		props.parentCallback(formData)
	}

	if (!displayValues) {
		return <CircularProgress />
	}

	return (
		<FormProvider {...methods}>
			<Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={6}>
				<Typography variant={'h3'}>{watch('campaign_name', '') || 'Untitled Campaign'}</Typography>
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
								options={displayValues.memberships}
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
						<Box sx={{ width: 600, height: 200 }} />

						<Typography variant={'h6'}>Header Image (1920 x 800px)</Typography>
						<Box sx={{ width: 600, height: 200 }} />

						<Typography variant={'h5'}>Content Description</Typography>
						<Box sx={{ width: 600, height: 200 }} />

						<Typography variant={'h5'}>Public Representative</Typography>
						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<Input name="name" label="Name" placeholder="Name" control={control} required />
							<Input name="email" label="Email" placeholder="Email" control={control} required />
						</Stack>

						<Typography variant={'h5'}>Campaign Settings</Typography>
						<Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={6}>
							<Autocomplete name="admin" label="Admin Account" control={control} required />
							<Input
								name="usage"
								label="Usage of funds"
								placeholder="Usage"
								selectable
								options={displayValues.projectTypes}
								control={control}
							/>
						</Stack>

						<Input
							name="protocol"
							label={'protocol'}
							placeholder="Protocol"
							selectable
							options={displayValues.protocolTypes}
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
								options={displayValues.projectDurations}
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
