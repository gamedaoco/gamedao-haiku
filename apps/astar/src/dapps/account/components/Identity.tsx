import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import type { Identity } from '@gamedao/graph'
import { useIdentityByAddressSubscription } from '@gamedao/graph'

import { useCurrentAccountAddress } from '@gamedao/core/hooks/useCurrentAccountAddress'
import { useClearIdentityTransaction } from '@gamedao/core/hooks/tx/useClearIdentityTransaction'
import { useIdentitySetTransaction, validation } from '@gamedao/core/hooks/tx/useIdentitySetTransaction'

// import { useCurrentAccountState } from '@gamedao/core/hooks/useCurrentAccountState'
// import { useIdentityByAddressSubscription } from '@gamedao/core/hooks/useIdentityByAddress'
// import { getAddressFromAccountState } from 'src/utils/accountUtils'

import { useYupValidationResolver } from '@gamedao/core/hooks/useYupValidationResolver'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { Box, Button, Card, CardContent, CardHeader, Grid, TextField, Typography } from '@mui/material'
import { TransactionDialog } from 'components/molecules/TransactionDialog/transactionDialog'

import { Loader } from 'components/atoms/Loader'

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

export function Identity() {
	const { t } = useTranslation()
	const address = useCurrentAccountAddress()

	const { loading, data } = useIdentityByAddressSubscription({
		variables: { address: address },
	})

	const [identity, setIdentity] = useState(null)
	useEffect(() => {
		if (loading) return
		if (!data?.identity_by_pk || data?.identity_by_pk === identity) return
		setIdentity(data.identity_by_pk)
	}, [loading, data?.identity_by_pk, identity])

	//

	const resolver = useYupValidationResolver(validation)
	const formHandler = useForm<Identity | any>({
		defaultValues: initialState(identity),
		resolver,
	})

	useEffect(() => {
		if (identity) {
			formHandler.reset(initialState(identity))
		}
	}, [formHandler, identity])

	// from hell...

	const [isClearDisabled, setIsClearDisabled] = useState(false)
	useEffect(() => {
		if (!identity?.displayName) {
			setIsClearDisabled(true)
		} else {
			setIsClearDisabled(false)
		}
	}, [identity])

	//

	const [values, setValues] = useState(null)
	const setIdentityTx = useIdentitySetTransaction(values)
	const clearIdentityTx = useClearIdentityTransaction()

	const [tx, setTx] = useState()
	const resetTx = useCallback(() => setTx(null), [setTx])

	console.log('tx', tx)

	const [showModal, setShowModal] = useState(false)
	const closeModal = useCallback(() => {
		setShowModal(false)
		resetTx()
		setSubmitEnabled(true)
	}, [setShowModal])

	console.log('showModal', showModal)

	const [submitEnabled, setSubmitEnabled] = useState(true)

	const submit = useCallback(
		(data, action: 'set' | 'clear') => {
			console.log('submit1', data, action)
			if (tx) return
			console.log('submit2', data, action)
			setSubmitEnabled(false)
			// const send = async () => {
			setValues(data)
			console.log('submit3', action)
			if (action === 'clear') setTx(clearIdentityTx)
			else setTx(setIdentityTx)
			setShowModal(true)
			// }
			// send()
		},
		[tx, formHandler],
	)

	//

	// console.log('tx', tx)

	return loading ? (
		<Loader />
	) : (
		<>
			<TransactionDialog open={showModal} onClose={closeModal} txData={tx} txCallback={closeModal} />
			<FormProvider {...formHandler}>
				<form>
					<Card variant={'glass'}>
						<CardContent>
							<Typography variant="h5">
								{'Update your on-chain identity' || t('button:navigation:set_on_chain_identity')}
							</Typography>

							<Grid container spacing={3}>
								<Grid item md={6} xs={12}>
									<Controller
										name="display"
										control={formHandler.control}
										render={({ field: { onChange, value }, formState: { errors } }) => (
											<TextField
												fullWidth
												label={t('label:display_name')}
												placeholder="Nickname"
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
												placeholder="Real Name"
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
												// variant="outlined"
												color="secondary"
												disabled={isClearDisabled}
											>
												{/*{t('button:form:identity:clear')}*/}
												{`Reset Identity`}
											</Button>
										)}
										<Box />
										<Button
											type="button"
											onClick={formHandler.handleSubmit((data) => submit(data, 'set'))}
											color="primary"
											variant={!isClearDisabled ? 'outlined' : 'contained'}
											disabled={!submitEnabled}
										>
											{/*{!isClearDisabled ? t('button:form:identity:update') : t('button:form:identity:submit')}*/}
											{!isClearDisabled ? `Update Identity` : `Set Identity`}
										</Button>
									</Box>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</form>
			</FormProvider>
		</>
	)
}
