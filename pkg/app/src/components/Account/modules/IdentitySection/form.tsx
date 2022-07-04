import type { FC } from 'react'
import { useCallback, useEffect, useState } from 'react'

import { Box, Button, Card, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material'
import { useIdentitySetTransaction } from 'hooks/tx/useIdentitySetTransaction'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import type { Identity } from 'src/queries'

import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

import { initialValues } from './validation'

interface IdentityFormProps {
	identity: Identity
}

const IdentityForm: FC<IdentityFormProps> = ({ identity }) => {
	const { t } = useTranslation()
	const formHandler = useForm<Identity | any>({
		defaultValues: initialValues(identity),
	})
	useEffect(() => {
		if (identity) {
			formHandler.reset(initialValues(identity))
		}
	}, [identity, formHandler])
	const [values, setValues] = useState<Identity | null>(identity)

	const submit = useCallback((data) => {
		setValues(data)
		setModalState(true)
	}, [])
	const tx = useIdentitySetTransaction(values)
	const [modalState, setModalState] = useState(false)
	const handleModalClose = useCallback(() => {
		setModalState(false)
	}, [setModalState])

	return (
		<FormProvider {...formHandler}>
			<TransactionDialog
				open={modalState}
				onClose={handleModalClose}
				tx={tx}
				txMsg={{
					pending: t('notification:transactions:createProposal:pending'),
					success: t('notification:transactions:createProposal:success'),
					error: t('notification:transactions:createProposal:error'),
				}}
				txCallback={handleModalClose}
			/>
			<form>
				<Card sx={{ borderRadius: '16px' }}>
					<CardHeader title="Set On-chain Identity" />
					<CardContent>
						<Grid container spacing={3}>
							<Grid item md={6} xs={12}>
								<Controller
									name="display_name"
									control={formHandler.control}
									render={({ field: { onChange, value }, formState: { errors } }) => (
										<TextField
											fullWidth
											label="Display Name"
											placeholder="QDozer"
											sx={{
												'& fieldset': {
													borderRadius: '16px',
												},
											}}
											error={!!errors?.display_name}
											onChange={onChange}
											value={value}
										/>
									)}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<Controller
									name="twitter"
									control={formHandler.control}
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
									control={formHandler.control}
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
									control={formHandler.control}
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
									control={formHandler.control}
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
									control={formHandler.control}
									render={() => (
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
									control={formHandler.control}
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
										type="button"
										onClick={formHandler.handleSubmit(submit)}
										color="primary"
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
		</FormProvider>
	)
}

export default IdentityForm
