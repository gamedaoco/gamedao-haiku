import { useCallback, useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material'
import { useClearIdentityTransaction } from 'hooks/tx/useClearIdentityTransaction'
import { useIdentitySetTransaction, validation } from 'hooks/tx/useIdentitySetTransaction'
import { useYupValidationResolver } from 'hooks/useYupValidationResolver'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import type { Identity } from 'src/queries'

import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useIdentityByAddress } from 'hooks/useIdentityByAddress'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

const initialValues = (identity: Identity) => ({
	display: identity?.display_name || '',
	legal: identity?.legal_name || '',
	email: identity?.email || '',
	riot: identity?.riot || '',
	twitter: identity?.twitter || '',
	web: identity?.web || '',
})
export function IdentityForm() {
	const accountState = useCurrentAccountState()
	const { identity } = useIdentityByAddress(getAddressFromAccountState(accountState))
	const resolver = useYupValidationResolver(validation)
	const { t } = useTranslation()
	const [isClearDisabled, setIsClearDisabled] = useState(false)
	const formHandler = useForm<Identity | any>({
		defaultValues: initialValues(identity),
		resolver,
	})
	useEffect(() => {
		if (identity) {
			formHandler.reset(initialValues(identity))
		}
	}, [identity, formHandler])
	const [values, setValues] = useState(null)

	const submit = useCallback((data, type: 'set' | 'clear') => {
		setValues(data)
		if (type === 'set') {
			setModalState((prevState) => ({ ...prevState, set: true }))
		} else {
			setModalState((prevState) => ({ ...prevState, clear: true }))
		}
	}, [])
	const setIdentityTx = useIdentitySetTransaction(values)
	const clearIdentityTx = useClearIdentityTransaction()
	const [modalState, setModalState] = useState({
		set: false,
		clear: false,
	})
	const handleModalClose = useCallback(
		(type: 'set' | 'clear') => {
			if (type === 'set') {
				setModalState((prevState) => ({ ...prevState, set: false }))
			} else {
				setModalState((prevState) => ({ ...prevState, clear: false }))
			}
		},
		[setModalState],
	)
	useEffect(() => {
		if (!identity?.display_name) {
			setIsClearDisabled(true)
		} else {
			setIsClearDisabled(false)
		}
	}, [identity])

	return (
		<FormProvider {...formHandler}>
			<TransactionDialog
				open={modalState.set}
				onClose={() => handleModalClose('set')}
				tx={setIdentityTx}
				txMsg={{
					pending: t('notification:transactions:setIdentity:pending'),
					success: t('notification:transactions:setIdentity:success'),
					error: t('notification:transactions:setIdentity:error'),
				}}
				txCallback={() => handleModalClose('set')}
			/>
			<TransactionDialog
				open={modalState.clear}
				onClose={() => handleModalClose('clear')}
				tx={clearIdentityTx}
				txMsg={{
					pending: t('notification:transactions:clearIdentity:pending'),
					success: t('notification:transactions:clearIdentity:success'),
					error: t('notification:transactions:clearIdentity:error'),
				}}
				txCallback={() => handleModalClose('clear')}
			/>
			<form>
				<Card sx={{ borderRadius: '16px' }}>
					<CardHeader title="Set On-chain Identity" />
					<CardContent>
						<Grid container spacing={3}>
							<Grid item md={6} xs={12}>
								<Controller
									name="display"
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
											error={!!errors?.display}
											helperText={errors?.display?.message?.toString()}
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
									render={({ field: { onChange, value }, formState: { errors } }) => (
										<TextField
											fullWidth
											label="Twitter"
											placeholder="@TwitterHandle"
											error={!!errors?.twitter}
											helperText={errors?.twitter?.message?.toString()}
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
									name="legal"
									control={formHandler.control}
									render={({ field: { onChange, value }, formState: { errors } }) => (
										<TextField
											fullWidth
											placeholder="John Q Doe"
											error={!!errors?.legal}
											helperText={errors?.legal?.message?.toString()}
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
									render={({ field: { onChange, value }, formState: { errors } }) => (
										<TextField
											fullWidth
											error={!!errors?.riot}
											helperText={errors?.riot?.message?.toString()}
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
									render={({ field: { onChange, value }, formState: { errors } }) => (
										<TextField
											fullWidth
											error={!!errors?.email}
											helperText={errors?.email?.message?.toString()}
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
									render={({ field: { onChange, value }, formState: { errors } }) => (
										<TextField
											fullWidth
											error={!!errors?.web}
											helperText={errors?.web?.message?.toString()}
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
										onClick={formHandler.handleSubmit((data) => submit(data, 'clear'))}
										type="button"
										sx={{ m: 1 }}
										variant="contained"
										disabled={isClearDisabled}
									>
										Clear Identity
									</Button>
									<Button
										type="button"
										onClick={formHandler.handleSubmit((data) => submit(data, 'set'))}
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
