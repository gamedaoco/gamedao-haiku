import { useCallback, useEffect, useState } from 'react'

import { Box, Button, Card, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material'
import { useClearIdentityTransaction } from 'hooks/tx/useClearIdentityTransaction'
import { useIdentitySetTransaction, validation } from 'hooks/tx/useIdentitySetTransaction'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useIdentityByAddress } from 'hooks/useIdentityByAddress'
import { useYupValidationResolver } from 'hooks/useYupValidationResolver'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import type { Identity } from 'src/queries'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

const initialState = (identity: Identity) => ({
	display: identity?.display_name || '',
	legal: identity?.legal_name || '',
	email: identity?.email || '',
	riot: identity?.riot || '',
	twitter: identity?.twitter || '',
	web: identity?.web || '',
	discord: identity?.discord || '',
	web3name: identity?.web3name || '',
})
export function IdentityForm() {
	const accountState = useCurrentAccountState()
	const { identity } = useIdentityByAddress(getAddressFromAccountState(accountState))
	const resolver = useYupValidationResolver(validation)
	const { t } = useTranslation()
	const [isClearDisabled, setIsClearDisabled] = useState(false)
	const formHandler = useForm<Identity | any>({
		defaultValues: initialState(identity),
		resolver,
	})
	useEffect(() => {
		if (identity) {
			formHandler.reset(initialState(identity))
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
				txData={setIdentityTx}
				txCallback={() => handleModalClose('set')}
			/>
			<TransactionDialog
				open={modalState.clear}
				onClose={() => handleModalClose('clear')}
				txData={clearIdentityTx}
				txCallback={() => handleModalClose('clear')}
			/>
			<form>
				<Card sx={{ borderRadius: '16px' }} variant={'glass'}>
					<CardContent>
						<Typography variant="h5">{t('button:navigation:set_on_chain_identity')}</Typography>

						<Grid container spacing={3}>
							<Grid item md={6} xs={12}>
								<Controller
									name="display"
									control={formHandler.control}
									render={({ field: { onChange, value }, formState: { errors } }) => (
										<TextField
											fullWidth
											label={t('label:display_name')}
											placeholder="JupiterMoon"
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
									name="legal"
									control={formHandler.control}
									render={({ field: { onChange, value }, formState: { errors } }) => (
										<TextField
											fullWidth
											placeholder="Jupiter Moon"
											error={!!errors?.legal}
											helperText={errors?.legal?.message?.toString()}
											sx={{
												'& fieldset': {
													borderRadius: '16px',
												},
											}}
											onChange={onChange}
											value={value}
											label={t('label:legal_name')}
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
											label={t('label:email')}
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
											label={t('label:website')}
										/>
									)}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<Controller
									name="discord"
									control={formHandler.control}
									render={({ field: { onChange, value }, formState: { errors } }) => (
										<TextField
											fullWidth
											error={!!errors?.discord}
											helperText={errors?.discord?.message?.toString()}
											placeholder=""
											sx={{
												'& fieldset': {
													borderRadius: '16px',
												},
											}}
											onChange={onChange}
											value={value}
											label={t('label:discord')}
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
									name="web3name"
									control={formHandler.control}
									render={({ field: { onChange, value }, formState: { errors } }) => (
										<TextField
											fullWidth
											error={!!errors?.web3name}
											helperText={errors?.web3name?.message?.toString()}
											placeholder="@w3n:yourname"
											sx={{
												'& fieldset': {
													borderRadius: '16px',
												},
											}}
											onChange={onChange}
											value={value}
											label="web3name"
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
							<Grid item md={6} xs={12}></Grid>
							<Grid item md={6} xs={12}>
								<Controller
									name="total_deposit"
									control={formHandler.control}
									render={() => (
										<TextField
											fullWidth
											placeholder="1"
											sx={{
												'& fieldset': {
													borderRadius: '16px',
												},
											}}
											disabled
											value="1.0000"
											label={t('label:total_deposit')}
											InputProps={{
												endAdornment: <Typography>milli</Typography>,
											}}
										/>
									)}
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										gap: 2,
									}}
								>
									{!isClearDisabled && (
										<Button
											onClick={formHandler.handleSubmit((data) => submit(data, 'clear'))}
											type="button"
											sx={{ m: 1 }}
											variant="outlined"
											color="secondary"
											disabled={isClearDisabled}
										>
											{t('button:form:identity:clear')}
										</Button>
									)}
									<Button
										type="button"
										onClick={formHandler.handleSubmit((data) => submit(data, 'set'))}
										color="primary"
										variant={!isClearDisabled ? 'outlined' : 'contained'}
									>
										{!isClearDisabled
											? t('button:form:identity:update')
											: t('button:form:identity:submit')}
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
