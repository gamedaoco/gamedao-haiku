import React, { useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import {
	Box,
	Button,
	CircularProgress,
	Container,
	Divider,
	InputAdornment,
	Paper,
	Stack,
	Typography,
} from '@mui/material'
import { useDisplayValues } from 'hooks/useDisplayValues'
import { FormProvider, useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { Input } from './modules/input'

const validationSchema = Yup.object().shape({
	title: Yup.string().required('Proposal title is required'),
})

export function FormVoting(props) {
	const [votingType, setVotingType] = useState(0)
	const displayValues = useDisplayValues()
	const methods = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			entity: '',
			proposal_type: 0,
			voting_type: 0,
			collateral_type: 0,
			collateral_amount: '',
			state: 'now',
			duration: 0,
			amount: '',
		},
	})

	const { handleSubmit, control, getValues } = methods
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
			<form>
				<Paper sx={{ p: 6 }}>
					<Stack spacing={3}>
						<Divider>Context</Divider>
						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<Input
								name="entity"
								label="Organization"
								selectable
								options={displayValues.memberships}
								control={control}
							/>
							<Input
								name="proposal_type"
								label="Proposal Type"
								selectable
								options={displayValues.proposalTypes}
								control={control}
							/>
						</Stack>

						<Divider>Proposal</Divider>
						<Input name="title" label="Proposal Title" placeholder="Title" control={control} required />

						<Typography paddingTop={'0 !important'} variant={'h6'}>
							Content Description
						</Typography>
						<Box sx={{ width: 600, height: 200 }} />

						<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
							<Input
								name="voting_type"
								label="Voting Type"
								selectable
								options={displayValues.votingTypes}
								control={control}
							/>
							{votingType > 0 ? (
								<Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
									<Input
										name="collateral_type"
										label="Collateral Type"
										selectable
										options={displayValues.collateralTypes}
										control={control}
									/>
									<Input
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
							<Input
								name="start"
								label="Start"
								control={control}
								options={[{ key: '1', value: 'now', text: 'now' }]}
							/>
							<Input
								name="duration"
								label="Duration"
								selectable
								options={displayValues.projectDurations}
								control={control}
							/>
						</Stack>
						{getValues('proposal_type') === 3 && (
							<>
								<Divider>Transfer</Divider>
								<Input
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
