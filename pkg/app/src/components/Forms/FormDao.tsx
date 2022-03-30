import React, { useState } from 'react'
import { Button, Paper, Typography, Box, Container, Stack, CircularProgress } from '@mui/material'
import { Input } from './modules/input'
import { Autocomplete } from './modules/autocomplete'
import { Stepper } from './modules/stepper'
import { useForm, FormProvider } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { checkIsAddressValid } from 'src/utils/accountUtils'
import { useDisplayValues } from 'hooks/useDisplayValues'

const validationSchema = Yup.object().shape({
	org_name: Yup.string().required('Organization Name is required'),
	org_email: Yup.string().required('Organization Email is required').email('Organization Email is invalid'),
	description: Yup.string().required('Description is required'),
	controller_account: Yup.string()
		.required('Controller account is required')
		.test('This is zero-address', 'This is not valid zero-address', (value) => {
			return checkIsAddressValid(value)
		}),
	treasury_account: Yup.string()
		.required('Treasury account is required')
		.notOneOf([Yup.ref('controller_account'), null], 'Must not be same Controller Account')
		.test('This is zero-address', 'This is not valid zero-address', (value) => {
			return checkIsAddressValid(value)
		}),
})

export function FormDao(props) {
	const [stepperState, setStepperState] = useState(0)
	const displayValues = useDisplayValues()
	const methods = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			org_name: '',
			org_body: 0,
			country: 'eu',
			website: '',
			repo: '',
			controller_account: '',
			treasury_account: '',
			access: 0,
			member_limit: '1',
			fee_model: 0,
			fee: '1',
		},
	})
	const { handleSubmit, control, watch } = methods
	const watchOrganName = watch('org_name', '')

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
			<Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between">
				<Typography variant={'h3'}>{watchOrganName || 'Untitled organization'}</Typography>
				<Stepper stepperState={stepperState} />
			</Stack>
			<form>
				<Paper sx={{ p: 6 }}>
					<Stack spacing={3}>
						<Typography variant={'h5'}>General Information</Typography>
						<Stack direction={{ xs: 'column', sm: 'row' }} spacing={6}>
							<Input name="org_name" label="Organization Name" control={control} required />
							<Input name="org_email" label="Organization Email" control={control} required />
						</Stack>

						<Input
							name="org_body"
							label="Organizational Body"
							control={control}
							options={displayValues.daoBodies}
							selectable={true}
						/>
						<Input
							name="country"
							label="Country"
							control={control}
							options={displayValues.countries}
							selectable={true}
						/>

						<Typography variant={'h5'}>Images</Typography>
						<Typography variant={'h6'}>Logo (800 x 800px)</Typography>
						<Box sx={{ width: 600, height: 200 }} />

						<Typography>Meta Information</Typography>
						<Input
							name="description"
							label="Short Description"
							placeholder="Tell us more about your organization..."
							control={control}
							minRows={3}
							required
						/>

						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<Input
								name="website"
								label="Website"
								placeholder="https://your.website.xyz"
								control={control}
							/>
							<Input name="repo" label="Code Repository" placeholder="repo" control={control} />
						</Stack>

						<Typography>Controller Settings</Typography>
						<Autocomplete name="controller_account" label="Controller Account" control={control} required />
						<Autocomplete name="treasury_account" label="Treasury Account" control={control} required />
						<Input
							name="access"
							label="Member Access Control"
							options={displayValues.daoMemberGovernance}
							selectable={true}
							control={control}
						/>

						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<Input name="member_limit" label="Member Limit" placeholder="100" control={control} />
							<Input
								name="fee_model"
								label="Fee Model"
								selectable={true}
								options={displayValues.daoFeeModel}
								control={control}
							/>
							<Input name="fee" label="Membership Fee" placeholder="10" control={control} />
						</Stack>
					</Stack>
				</Paper>
			</form>
			<Container maxWidth={'xs'} sx={{ p: 4 }}>
				<Button variant="contained" fullWidth onClick={handleSubmit(onSubmit)}>
					SUBMIT
				</Button>
			</Container>
		</FormProvider>
	)
}
