import React, { useState } from 'react'
import { Typography, Grid, Paper, Button, Box, Divider, InputAdornment, Container } from '@mui/material'
import { FormInput } from './modules/FormInput'
import { useForm, FormProvider } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import data from 'src/utils/data'

const validationSchema = Yup.object().shape({
	title: Yup.string().required('Proposal title is required'),
})

export function FormVoting(props) {
	const [loading, setLoading] = useState(false)
	const [votingType, setVotingType] = useState(0)

	const methods = useForm({ resolver: yupResolver(validationSchema) })
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
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Divider>Context</Divider>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormInput
								name="entity"
								label="Organization"
								selectable
								options={data.memberships}
								control={control}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormInput
								name="proposal_type"
								label="Proposal Type"
								selectable
								options={data.protocol_types}
								control={control}
							/>
						</Grid>
						<Grid item xs={12}>
							<Divider>Proposal</Divider>
						</Grid>
						<Grid item xs={12}>
							<FormInput
								name="title"
								label="Proposal Title"
								placeholder="Title"
								control={control}
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography paddingTop={'0 !important'} variant={'h6'}>
								Content Description
							</Typography>
							{/* <MarkdownEditor
                  value={markdownValue}
                  onChange={({ text }, e) => {
                    setMarkdownValue(text)
                    formik.handleChange(e)
                  }}
                /> */}
							<Box sx={{ width: 600, height: 200 }}></Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormInput
								label="Voting Type"
								name="voting_type"
								selectable
								options={data.voting_types}
								control={control}
							/>
						</Grid>
						{votingType > 0 ? (
							<>
								<Grid item xs={12} md={3}>
									<FormInput
										name="collateral_type"
										label="Collateral Type"
										selectable
										options={data.collateral_types}
										control={control}
									/>
								</Grid>
								<Grid item xs={12} md={3}>
									<FormInput
										name="collateral_amount"
										label="Collateral Amount"
										control={control}
										InputProps={{
											endAdornment: <InputAdornment position="end">GAME</InputAdornment>,
										}}
										InputLabelProps={{ shrink: true }}
									/>
								</Grid>
							</>
						) : (
							<Grid item xs={12} md={6}></Grid>
						)}
						<Grid item xs={12} md={6}>
							<FormInput
								name="start"
								label="Start"
								control={control}
								options={[{ key: '1', value: 'now', text: 'now' }]}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormInput
								name="duration"
								label="Duration"
								selectable
								options={data.project_durations}
								control={control}
							/>
						</Grid>
						{getValues('proposal_type') === 3 && (
							<>
								<Grid item xs={12}>
									<Divider>Transfer</Divider>
								</Grid>
								<Grid item xs={12} md={6}>
									<FormInput
										name="amount"
										label="Amount to transfer on success"
										InputProps={{
											endAdornment: <InputAdornment position="end">ZERO</InputAdornment>,
										}}
										InputLabelProps={{ shrink: true }}
										control={control}
									/>
								</Grid>
							</>
						)}
					</Grid>
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
