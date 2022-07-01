import type { FC } from 'react'

import { Box, Button, Card, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material'
import type { Identity } from 'src/queries'

import { FormValues } from './validation'

interface IdentityFormProps {
	identity: Identity
}

const IdentityForm: FC<IdentityFormProps> = ({ identity }) => {
	return (
		<form>
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
								// error={Boolean(formik.touched.displayName && formik.errors.displayName)}
								fullWidth
								label="Display Name"
								name="displayName"
								// onChange={formik.handleChange}
								required
								// value={formik.values.displayName}
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
								// error={Boolean(formik.touched.twitter && formik.errors.twitter)}
								fullWidth
								// helperText={formik.touched.twitter && formik.errors.twitter}
								label="Twitter"
								name="twitter"
								// onChange={formik.handleChange}
								// value={formik.values.twitter}
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
								// error={Boolean(formik.touched.legalName && formik.errors.legalName)}
								fullWidth
								label="Legal Name"
								name="legalName"
								// onChange={formik.handleChange}
								// value={formik.values.legalName}
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
								// error={Boolean(formik.touched.riot && formik.errors.riot)}
								fullWidth
								label="Riot Name"
								name="riot"
								// onChange={formik.handleChange}
								// value={formik.values.riot}
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
								// error={Boolean(formik.touched.email && formik.errors.email)}
								fullWidth
								label="Email"
								name="email"
								// onChange={formik.handleChange}
								// value={formik.values.email}
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
								// error={Boolean(formik.touched.totalDeposit && formik.errors.totalDeposit)}
								fullWidth
								label="Total Deposit"
								name="totalDeposit"
								// onChange={formik.handleChange}
								// value={formik.values.totalDeposit}
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
								// error={Boolean(formik.touched.web && formik.errors.web)}
								fullWidth
								label="Website"
								name="web"
								// onChange={formik.handleChange}
								// value={formik.values.web}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: 2 }}>
								<Button
									// disabled={!formik.dirty}
									// onClick={() => {
									// 	formik.resetForm()
									// }}
									type="submit"
									sx={{ m: 1 }}
									variant="contained"
								>
									Clear Identity
								</Button>
								<Button
									// onClick={formik.submitForm}
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
