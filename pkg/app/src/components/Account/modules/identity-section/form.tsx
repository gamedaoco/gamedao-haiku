import type { FC } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from '@mui/material'

const IdentityForm: FC = () => {
	const formik = useFormik({
		initialValues: {
			displayName: 'Jennifer Doe',
			twitter: '',
			legalName: '',
			riotName: '',
			email: '',
			totalDeposit: '',
			web: '',
		},
		onSubmit: (values) => {
			console.log(values)
		},
	})
	return (
		<form onSubmit={formik.handleSubmit}>
			<Card sx={{ borderRadius: '16px' }}>
				<CardHeader title="Set On-chain Identity" />
				<CardContent>
					<Grid container spacing={3}>
						<Grid item md={6} xs={12}>
							<TextField
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
								error={Boolean(formik.touched.riotName && formik.errors.riotName)}
								fullWidth
								helperText={formik.touched.riotName && formik.errors.riotName}
								label="Riot Name"
								name="riotName"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.riotName}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
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
								error={Boolean(formik.touched.totalDeposit && formik.errors.totalDeposit)}
								fullWidth
								helperText={formik.touched.totalDeposit && formik.errors.totalDeposit}
								label="Total Deposit"
								name="totalDeposit"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.totalDeposit}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
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
								<Button color="primary" disabled={formik.isSubmitting} variant="contained">
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
