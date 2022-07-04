import type { FC } from 'react'
import { useEffect } from 'react'

import { Box, Button, Card, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material'
import { useYupValidationResolver } from 'hooks/useYupValidationResolver'
import { Controller, useForm } from 'react-hook-form'
import type { Identity } from 'src/queries'

import { initialValues, validationSchema } from './validation'

interface IdentityFormProps {
	identity: Identity
}

const IdentityForm: FC<IdentityFormProps> = ({ identity }) => {
	const resolver = useYupValidationResolver(validationSchema)
	const { handleSubmit, reset, control } = useForm<Identity | any>({
		defaultValues: initialValues(identity),
		resolver,
	})
	useEffect(() => {
		if (identity) {
			reset(identity)
		}
	}, [identity, reset])
	const onSubmit = (data) => console.log(data)
	return (
		<form>
			<Card sx={{ borderRadius: '16px' }}>
				<CardHeader title="Set On-chain Identity" />
				<CardContent>
					<Grid container spacing={3}>
						<Grid item md={6} xs={12}>
							<Controller
								name="display_name"
								control={control}
								render={({ field: { onChange, value }, formState }) => (
									<TextField
										fullWidth
										label="Display Name"
										placeholder="QDozer"
										sx={{
											'& fieldset': {
												borderRadius: '16px',
											},
										}}
										error={!!formState.errors?.display_name}
										onChange={onChange}
										value={value}
									/>
								)}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<Controller
								name="twitter"
								control={control}
								render={({ field: { onChange, value } }) => (
									<TextField
										fullWidth
										label="Twitter"
										placeholder="@TwitterHandle"
										sx={{
											'& fieldset': {
												borderRadius: '16px',
											},
										}}
										onChange={onChange}
										value={value}
									/>
								)}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<Controller
								name="legal_name"
								control={control}
								render={({ field: { onChange, value } }) => (
									<TextField
										fullWidth
										placeholder="John Q Doe"
										sx={{
											'& fieldset': {
												borderRadius: '16px',
											},
										}}
										onChange={onChange}
										value={value}
										label="Legal Name"
									/>
								)}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<Controller
								name="riot"
								control={control}
								render={({ field: { onChange, value } }) => (
									<TextField
										fullWidth
										placeholder="@yourname:matrix.org"
										sx={{
											'& fieldset': {
												borderRadius: '16px',
											},
										}}
										onChange={onChange}
										value={value}
										label="Riot Name"
									/>
								)}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<Controller
								name="email"
								control={control}
								render={({ field: { onChange, value } }) => (
									<TextField
										fullWidth
										placeholder="email@internet.com"
										sx={{
											'& fieldset': {
												borderRadius: '16px',
											},
										}}
										onChange={onChange}
										value={value}
										label="Email"
									/>
								)}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<Controller
								name="total_deposit"
								control={control}
								render={({ field: { value } }) => (
									<TextField
										fullWidth
										placeholder="email@internet.com"
										sx={{
											'& fieldset': {
												borderRadius: '16px',
											},
										}}
										disabled
										value="1.0000"
										label="Total Deposit"
										InputProps={{
											endAdornment: <Typography>milli</Typography>,
										}}
									/>
								)}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<Controller
								name="web"
								control={control}
								render={({ field: { onChange, value } }) => (
									<TextField
										fullWidth
										placeholder="https://yourwebsitename.com"
										sx={{
											'& fieldset': {
												borderRadius: '16px',
											},
										}}
										onChange={onChange}
										value={value}
										label="Website"
									/>
								)}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 2 }}>
								<Button
									// disabled={!formik.dirty}
									// onClick={() => {
									// 	formik.resetForm()
									// }}
									type="button"
									sx={{ m: 1 }}
									variant="contained"
								>
									Clear Identity
								</Button>
								<Button
									onSubmit={handleSubmit(onSubmit)}
									// onClick={formik.submitForm}
									type="submit"
									color="primary"
									// disabled={formik.isSubmitting}
									variant="contained"
								>
									Sign and Submit
								</Button>
							</Box>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</form>
	)
}

export default IdentityForm
