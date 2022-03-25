import React, { useEffect, useState } from 'react'
import { Typography, Grid, TextField, Button, Box, MenuItem, Divider, InputAdornment } from '@mui/material'

import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import data from 'src/utils/data'

export function FormVoting(props) {
	const [loading, setLoading] = useState(false)
	const [votingType, setVotingType] = useState(0)

	const validationSchema = Yup.object().shape({
		title: Yup.string().required('Proposal title is required'),
	})

	const {
		register,
		control,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	})

	const onSubmit = (data) => {
		const formData = JSON.stringify(data, null, 2)
		alert(formData)
		props.parentCallback(formData)
	}

	return (
		<React.Fragment>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Box>
						<Typography variant='h6'>Create Proposal</Typography>
					</Box>
					<Box display='flex' justifyContent='flex-end' alignItems='center' flex='1'>
						<Button
							variant='outlined'
							onClick={() => {
								props.isCloseProposal(true)
							}}
						>
							Cancel
						</Button>
					</Box>
					<form>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Divider>Context</Divider>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField label='Organization' fullWidth name='entity' select {...register('entity')}>
									{data.memberships.map((ms) => (
										<MenuItem key={ms.key} value={ms.value}>
											{ms.text}
										</MenuItem>
									))}
								</TextField>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField
									label={'Proposal Type'}
									name={'proposal_type'}
									select
									defaultValue={0}
									fullWidth
									variant='outlined'
									{...register('proposal_type')}
								>
									{data.proposal_types.map((pt) => (
										<MenuItem key={pt.key} value={pt.value}>
											{pt.text}
										</MenuItem>
									))}
								</TextField>
							</Grid>

							<Grid item xs={12}>
								<Divider>Proposal</Divider>
							</Grid>

							<Grid item xs={12}>
								<TextField
									name={'title'}
									label={'Proposal Title'}
									placeholder={'Title'}
									{...register('title', { required: true })}
									error={errors.title ? true : false}
									helperText={errors?.title?.message}
									fullWidth
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
								<TextField
									label={'Voting Type'}
									name={'voting_type'}
									variant='outlined'
									select
									{...register('voting_type')}
									defaultValue={0}
									onChange={(e: any) => {
										setVotingType(e.target.value * 1.0)
									}}
									fullWidth
								>
									{data.voting_types.map((vt) => (
										<MenuItem key={vt.key} value={vt.value}>
											{vt.text}
										</MenuItem>
									))}
								</TextField>
							</Grid>

							{votingType > 0 ? (
								<>
									<Grid item xs={12} md={3}>
										<TextField
											label={'Collateral Type'}
											name={'collateral_type'}
											{...register('collateral_type')}
											fullWidth
										>
											{data.collateral_types.map((ct, i) => (
												<MenuItem key={ct.key} value={ct.value}>
													{ct.text}
												</MenuItem>
											))}
										</TextField>
									</Grid>

									<Grid item xs={12} md={3}>
										<TextField
											type={'number'}
											name={'collateral_amount'}
											InputProps={{
												endAdornment: <InputAdornment position='end'>GAME</InputAdornment>,
											}}
											{...register('collateral_amount')}
											fullWidth
											label={'Collateral Amount'}
											InputLabelProps={{ shrink: true }}
										/>
									</Grid>
								</>
							) : (
								<Grid item xs={12} md={6}></Grid>
							)}
							<Grid item xs={12} md={6}>
								<TextField label={'Start'} name={'start'} fullWidth disabled>
									<MenuItem key={1} value={0}>
										now
									</MenuItem>
								</TextField>
							</Grid>

							<Grid item xs={12} md={6}>
								<TextField label={'Duration'} name={'duration'} {...register('duration')} fullWidth>
									{data.project_durations.map((pd) => (
										<MenuItem key={pd.key} value={pd.value}>
											{pd.text}
										</MenuItem>
									))}
								</TextField>
							</Grid>

							{getValues('proposal_type') === 3 && (
								<>
									<Grid item xs={12}>
										<Divider>Transfer</Divider>
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField
											type={'number'}
											name={'amount'}
											{...register('amount')}
											InputProps={{
												endAdornment: <InputAdornment position='end'>ZERO</InputAdornment>,
											}}
											fullWidth
											label={'Amount to transfer on success'}
											InputLabelProps={{ shrink: true }}
										/>
									</Grid>
								</>
							)}
							<Grid item xs={12}>
								<Button
									type='submit'
									variant={'contained'}
									fullWidth
									color={'primary'}
									size='large'
									disabled={loading}
									onClick={handleSubmit(onSubmit)}
								>
									Publish Proposal
								</Button>
							</Grid>
						</Grid>
					</form>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}
