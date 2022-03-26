import { useState } from 'react'
import { Button, Paper, Typography, Grid, Box, Container } from '@mui/material'
import { FormInput } from './modules/FormInput'
import { FormAutoComplete } from './modules/FormAutoComplete'
import { FormStepper } from './modules/FormStepper'
import { useForm, FormProvider } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import data from 'src/utils/data'
import { isValidZeroAddress } from 'src/utils/helper'

const validationSchema = Yup.object().shape({
	org_name: Yup.string().required('Organization Name is required'),
	org_email: Yup.string().required('Organization Email is required').email('Organization Email is invalid'),
	description: Yup.string().required('Description is required'),
	controller_account: Yup.string()
		.required('Controller account is required')
		.test('This is zero-address', 'This is not valid zero-address', (value) => {
			return isValidZeroAddress(value)
		}),
	treasury_account: Yup.string()
		.required('Treasury account is required')
		.notOneOf([Yup.ref('controller_account'), null], 'Must not be same Controller Account')
		.test('This is zero-address', 'This is not valid zero-address', (value) => {
			return isValidZeroAddress(value)
		}),
})
const accounts = [
	'3ZBh2L6YhhmBRWG8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
	'3HHHHHHHHHHHHH8UavtA7zJnFcpTemUmSrL8LfH43Rym2WJ',
	'3T9tBQ3UePp25qDcY8ncZfEhajn1iyVoj85mfLhb51VotMee',
]

export function FormDao(props) {
	const [stepperState, setStepperState] = useState(0)
	const [organizationName, setOrganizationName] = useState('')
	const methods = useForm({ resolver: yupResolver(validationSchema) })
	const { handleSubmit, control } = methods
	const onSubmit = (data) => {
		const formData = JSON.stringify(data, null, 2)
		alert(formData)
		props.parentCallback(formData)
	}
	return (
		<FormProvider {...methods}>
			<Grid container alignItems={'center'} spacing={3}>
				<Grid item xs={12} md={7}>
					<Typography variant={'h3'}>{organizationName || 'Untitled organization'}</Typography>
				</Grid>
				<Grid item xs={12} md={5}>
					<FormStepper stepperState={stepperState} />
				</Grid>
			</Grid>
			<form>
				<Paper sx={{ p: 6 }}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant={'h5'}>General Information</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormInput name="org_name" label="Organization Name" control={control} required />
						</Grid>
						<Grid item xs={12} md={6}>
							<FormInput name="org_email" label="Organization Email" control={control} required />
						</Grid>
						<Grid item xs={12}>
							<FormInput
								name="org_body"
								label="Organizational Body"
								control={control}
								options={data.dao_bodies}
								selectable={true}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormInput
								name="country"
								label="Country"
								control={control}
								options={data.countries}
								selectable={true}
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography variant={'h5'}>Images</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant={'h6'}>Logo (800 x 800px)</Typography>
							<Box sx={{ width: 600, height: 200 }}></Box>
						</Grid>
						<Grid item xs={12}>
							<Typography>Meta Information</Typography>
						</Grid>
						<Grid item xs={12}>
							<FormInput
								name="description"
								label="Short Description"
								placeholder="Tell us more about your organization..."
								control={control}
								minRows={3}
								required
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormInput
								name="website"
								label="Website"
								placeholder="https://your.website.xyz"
								control={control}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormInput name="repo" label="Code Repository" placeholder="repo" control={control} />
						</Grid>
						<Grid item xs={12}>
							<Typography>Controller Settings</Typography>
						</Grid>
						<Grid item xs={12}>
							<FormAutoComplete
								name="controller_account"
								label="Controller Account"
								options={accounts}
								control={control}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<FormAutoComplete
								name="treasury_account"
								label="Treasury Account"
								options={accounts}
								control={control}
								required
							/>
						</Grid>

						<Grid item xs={12}>
							<FormInput
								name="access"
								label="Member Access Control"
								options={data.dao_member_governance}
								selectable={true}
								control={control}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<FormInput name="member_limit" label="Member Limit" placeholder="100" control={control} />
						</Grid>
						<Grid item xs={12} md={4}>
							<FormInput
								name="fee_model"
								label="Fee Model"
								selectable={true}
								options={data.dao_fee_model}
								control={control}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<FormInput name="fee" label="Membership Fee" placeholder="10" control={control} />
						</Grid>
					</Grid>
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
