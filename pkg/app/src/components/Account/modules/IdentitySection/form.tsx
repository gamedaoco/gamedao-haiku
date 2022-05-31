import type { FC } from 'react'
import { useFormik } from 'formik'
import { Box, Button, Card, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material'
import type { Identity } from '@gamedao-haiku/graphql/dist/types'
import { FormValues, formikHandler, formikSubmitHandlerType } from './formik'

interface IdentityFormProps {
	identity: Identity
}

const IdentityForm: FC<IdentityFormProps> = ({ identity }) => {
	const formikHandleSubmit: formikSubmitHandlerType = (v) => console.log(v)
	const formik = useFormik<FormValues>(formikHandler(identity, formikHandleSubmit))
	return (
		<form onSubmit={formik.handleSubmit}>
			<Card sx={{ borderRadius: '16px' }}>
				<CardHeader title="Set On-chain Identity" />
				<CardContent>
					<Grid container spacing={3}>
						<Grid item md={6} xs={12}>
							<TextField
								sx={{
									'& fieldset': {
										borderRadius: '16px',
									},
								}}
								placeholder="QDozer"
								error={Boolean(formik.touched.displayName && formik.errors.displayName)}
								fullWidth
								helperText={formik.touched.displayName && formik.errors.displayName}
								label="Display Name"
								name="displayName"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								required
								value={formik.values.displayName}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								sx={{
									'& fieldset': {
										borderRadius: '16px',
									},
								}}
								placeholder="@TwitterHandle"
								error={Boolean(formik.touched.twitter && formik.errors.twitter)}
								fullWidth
								helperText={formik.touched.twitter && formik.errors.twitter}
								label="Twitter"
								name="twitter"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.twitter}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								sx={{
									'& fieldset': {
										borderRadius: '16px',
									},
								}}
								placeholder="John Q Doe"
								error={Boolean(formik.touched.legalName && formik.errors.legalName)}
								fullWidth
								helperText={formik.touched.legalName && formik.errors.legalName}
								label="Legal Name"
								name="legalName"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.legalName}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								sx={{
									'& fieldset': {
										borderRadius: '16px',
									},
								}}
								placeholder="@yourname:matrix.org"
								error={Boolean(formik.touched.riot && formik.errors.riot)}
								fullWidth
								helperText={formik.touched.riot && formik.errors.riot}
								label="Riot Name"
								name="riot"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.riot}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								sx={{
									'& fieldset': {
										borderRadius: '16px',
									},
								}}
								placeholder="email@internet.com"
								error={Boolean(formik.touched.email && formik.errors.email)}
								fullWidth
								helperText={formik.touched.email && formik.errors.email}
								label="Email"
								name="email"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.email}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								sx={{
									'& fieldset': {
										borderRadius: '16px',
									},
								}}
								placeholder="1.0000"
								error={Boolean(formik.touched.totalDeposit && formik.errors.totalDeposit)}
								fullWidth
								helperText={formik.touched.totalDeposit && formik.errors.totalDeposit}
								label="Total Deposit"
								name="totalDeposit"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.totalDeposit}
								InputProps={{
									endAdornment: <Typography>milli</Typography>,
								}}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								sx={{
									'& fieldset': {
										borderRadius: '16px',
									},
								}}
								placeholder="https://yourwebsitename.com"
								error={Boolean(formik.touched.web && formik.errors.web)}
								fullWidth
								helperText={formik.touched.web && formik.errors.web}
								label="Website"
								name="web"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.web}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 2 }}>
								<Button
									disabled={!formik.dirty}
									onClick={() => {
										formik.resetForm()
									}}
									type="submit"
									sx={{ m: 1 }}
									variant="contained"
								>
									Clear Identity
								</Button>
								<Button
									onClick={formik.submitForm}
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
