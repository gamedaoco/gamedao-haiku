import { useState } from 'react'
import { Button, Paper, Typography, Box, Container, Stack } from '@mui/material'
import { Input } from './modules/input'
import { Autocomplete } from './modules/autocomplete'
import { Stepper } from './modules/stepper'
import { useForm, FormProvider } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { dao_bodies, countries, dao_member_governance, dao_fee_model } from 'src/utils/data'
import { checkIsAddressValid } from 'src/utils/accountUtils'

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

const accounts = [
	'3ZBh2L6YhhmBRWG8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
	'3HHHHHHHHHHHHH8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
	'3T9tBQ3UePp25qDcY8ncZfEhajn1iyVoj85mfLhb51VotMee',
]
const defaultValues = {
	org_name: '',
	org_body: dao_bodies[0].value,
	country: countries[0].value,
	website: '',
	repo: '',
	controller_account: '',
	treasury_account: '',
	access: dao_member_governance[0].value,
	member_limit: '1',
	fee_model: dao_fee_model[0].value,
	fee: '1',
}

export function FormDao(props) {
	const [stepperState, setStepperState] = useState(0)
	const methods = useForm({ resolver: yupResolver(validationSchema), defaultValues: defaultValues })
	const { handleSubmit, control, watch } = methods
	const watchOrganName = watch('org_name', '')

	const onSubmit = (data) => {
		const formData = JSON.stringify(data, null, 2)
		alert(formData)
		props.parentCallback(formData)
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
							options={dao_bodies}
							selectable={true}
						/>
						<Input name="country" label="Country" control={control} options={countries} selectable={true} />

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
						<Autocomplete
							name="controller_account"
							label="Controller Account"
							options={accounts}
							control={control}
							required
						/>
						<Autocomplete
							name="treasury_account"
							label="Treasury Account"
							options={accounts}
							control={control}
							required
						/>

						<Input
							name="access"
							label="Member Access Control"
							options={dao_member_governance}
							selectable={true}
							control={control}
						/>

						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<Input name="member_limit" label="Member Limit" placeholder="100" control={control} />
							<Input
								name="fee_model"
								label="Fee Model"
								selectable={true}
								options={dao_fee_model}
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
