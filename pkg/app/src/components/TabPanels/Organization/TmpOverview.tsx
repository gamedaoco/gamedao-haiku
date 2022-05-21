import { Button, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import { Info } from '@mui/icons-material'
import { useCreateOrgTransaction } from 'hooks/tx/useCreateOrgTransaction'
import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'
import { useCallback, useState } from 'react'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'
import type { ISubmittableResult } from '@polkadot/types/types'
import { useTranslation } from 'react-i18next'

const Chart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
})

export function TmpOverview() {
	const [modalState, setModalState] = useState<boolean>(false)
	const tmpOrgState = useTmpOrganisationState()
	const { t } = useTranslation()
	const tx = useCreateOrgTransaction()

	const handleModalOpen = useCallback(() => {
		setModalState(true)
	}, [setModalState])

	const handleModalClose = useCallback(() => {
		setModalState(false)
	}, [setModalState])

	const handleDepositChange = useCallback(
		(event) => {
			const value = event.target.value
			tmpOrgState?.setDeposit(value < 5 ? 5 : value)
		},
		[tmpOrgState?.setDeposit],
	)

	const handleTxCallback = useCallback(
		(state: boolean, result: ISubmittableResult) => {
			if (state) {
				// The transaction was successful, clear state
				tmpOrgState?.clearAll()
			}
		},
		[tmpOrgState.clearAll],
	)

	return (
		<>
			<Stack spacing={4}>
				<Stack direction="row" spacing={4}>
					<Paper sx={{ width: '100%' }}>
						<Stack alignItems="center" justifyContent="center" height="100%">
							<Typography textAlign="center">
								You need to upload a header and logo image to create your dao
							</Typography>
						</Stack>
					</Paper>
					<Paper sx={{ maxWidth: '300px', padding: 4 }}>
						<Stack justifyContent="center" display="flex" alignItems="center">
							<Chart
								options={{
									plotOptions: {
										radialBar: {
											hollow: {
												size: '80%',
											},
											dataLabels: {
												value: {
													show: false,
													fontSize: '15px',
													formatter: function (val) {
														return val + ' XP'
													},
												},
												total: {
													show: true,
													label: 'Total',
												},
											},
										},
									},
								}}
								series={[70]}
								type="radialBar"
								width="300"
							/>

							<Typography variant="h6" textAlign="center">
								DAO Padawan
							</Typography>
							<Typography variant="caption" textAlign="center">
								Your organization is currently on the level Padavan. Reach another 40XP to reach the
								next level!
							</Typography>
						</Stack>
					</Paper>
				</Stack>
				<Paper sx={{ width: '100%' }}>
					<Stack direction="row" padding={4}>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Info />
							<Typography>
								Deploy organization on chain A min deposit of 5 GAME is needed. Get GAME here.
							</Typography>
						</Stack>
						<Stack direction="row" spacing={2} alignItems="center">
							<TextField
								variant="outlined"
								label="Treasury Deposit"
								type="number"
								InputProps={{
									endAdornment: <InputAdornment position="start">GAME</InputAdornment>,
								}}
								value={tmpOrgState.deposit}
								onChange={handleDepositChange}
							/>
							<Button
								size="large"
								variant="contained"
								sx={{ whiteSpace: 'nowrap' }}
								disabled={!tx}
								onClick={handleModalOpen}
							>
								Deploy Organization
							</Button>
						</Stack>
					</Stack>
				</Paper>
			</Stack>
			<TransactionDialog
				open={modalState}
				onClose={handleModalClose}
				tx={tx}
				txMsg={{
					pending: t('notification:transactions:createOrganization:pending'),
					success: t('notification:transactions:createOrganization:success'),
					error: t('notification:transactions:createOrganization:error'),
				}}
				txCallback={handleTxCallback}
			/>
		</>
	)
}
