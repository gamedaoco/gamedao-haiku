import React, { useState } from 'react'
import { Typography, Stack, Paper, Button, Box, Divider, InputAdornment, Container } from '@mui/material'
import { FormInput } from './modules/FormInput'
import { useForm, FormProvider } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import data from 'src/utils/data'

const validationSchema = Yup.object().shape({
	title: Yup.string().required('Proposal title is required'),
})
const defaultValues = {
	entity: '',
	proposal_type: data.proposal_types[0].value,
	voting_type: data.voting_types[0].value,
	collateral_type: data.collateral_types[0].value,
	collateral_amount: '',
	state: 'now',
	duration: data.project_durations[0].value,
	amount: '',
}

export function FormVoting(props) {
	const [votingType, setVotingType] = useState(0)

	const methods = useForm({ resolver: yupResolver(validationSchema), defaultValues: defaultValues })
	const { handleSubmit, control, getValues } = methods
	const onSubmit = (data) => {
		const formData = JSON.stringify(data, null, 2)
		alert(formData)
		props.parentCallback(formData)
	}

	return (
		<FormProvider {...methods}>
			<form>
				<Paper sx={{ p: 6 }}>
					<Stack spacing={3}>
						<Divider>Context</Divider>
						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<FormInput
								name="entity"
								label="Organization"
								selectable
								options={data.memberships}
								control={control}
							/>
							<FormInput
								name="proposal_type"
								label="Proposal Type"
								selectable
								options={data.protocol_types}
								control={control}
							/>
						</Stack>

						<Divider>Proposal</Divider>
						<FormInput name="title" label="Proposal Title" placeholder="Title" control={control} required />

						<Typography paddingTop={'0 !important'} variant={'h6'}>
							Content Description
						</Typography>
						<Box sx={{ width: 600, height: 200 }}></Box>

						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<FormInput
								name="voting_type"
								label="Voting Type"
								selectable
								options={data.voting_types}
								control={control}
							/>
							{votingType > 0 ? (
								<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
									<FormInput
										name="collateral_type"
										label="Collateral Type"
										selectable
										options={data.collateral_types}
										control={control}
									/>
									<FormInput
										name="collateral_amount"
										label="Collateral Amount"
										control={control}
										InputProps={{
											endAdornment: <InputAdornment position="end">GAME</InputAdornment>,
										}}
										InputLabelProps={{ shrink: true }}
									/>
								</Stack>
							) : (
								<></>
							)}
						</Stack>
						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<FormInput
								name="start"
								label="Start"
								control={control}
								options={[{ key: '1', value: 'now', text: 'now' }]}
							/>
							<FormInput
								name="duration"
								label="Duration"
								selectable
								options={data.project_durations}
								control={control}
							/>
						</Stack>
						{getValues('proposal_type') === 3 && (
							<>
								<Divider>Transfer</Divider>
								<FormInput
									name="amount"
									label="Amount to transfer on success"
									InputProps={{
										endAdornment: <InputAdornment position="end">ZERO</InputAdornment>,
									}}
									InputLabelProps={{ shrink: true }}
									control={control}
								/>
							</>
						)}
					</Stack>
				</Paper>
			</form>
			<Container maxWidth={'xs'} sx={{ p: 4 }}>
				<Button variant="contained" fullWidth onClick={handleSubmit(onSubmit)}>
					Publish Proposal
				</Button>
			</Container>
		</FormProvider>
	)
}
