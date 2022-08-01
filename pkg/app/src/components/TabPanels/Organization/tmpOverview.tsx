import { useCallback, useState } from 'react'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Info } from '@mui/icons-material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import { Button, Divider, InputAdornment, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import type { ISubmittableResult } from '@polkadot/types/types'
import { useCreateOrgTransaction } from 'hooks/tx/useCreateOrgTransaction'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'
import { useTranslation } from 'react-i18next'
import { useOrganizationByIdSubscription } from 'src/queries'

import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

const Chart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
})

export function TmpOverview() {
	const [modalState, setModalState] = useState<boolean>(false)
	const tmpOrgState = useTmpOrganisationState()
	const { t } = useTranslation()
	const tx = useCreateOrgTransaction()
	const { push } = useRouter()
	const [orgId, setOrgId] = useState<string>(null)
	const { data: organizationByIdData, loading } = useOrganizationByIdSubscription({ variables: { orgId } })

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
				result.events.forEach(({ event: { data, method, section } }) => {
					if (section === 'control' && method === 'OrgCreated') {
						setOrgId(data[1].toHex())
						if (organizationByIdData && !loading) {
							push(`/organisations/${organizationByIdData?.organization?.[0]?.id}/dashboard`)
						}
					}
				})
			}
		},
		[tmpOrgState.clearAll],
	)

	return (
		<>
			<Stack spacing={{ xs: 2, md: 4 }}>
				<Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 4 }}>
					<Paper sx={{ width: '100%' }}>
						<Stack height="100%" spacing={1} padding={{ xs: 2, md: 4 }}>
							<Typography variant="h6">Complete your Organization</Typography>
							<Typography variant="body2">
								To start using your oganization and deploy it on the chain, please complete following
								steps and earn experience points!
							</Typography>
							<Timeline position="right">
								<TimelineItem sx={{ '&:before': { display: 'none' } }}>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Stack direction="row" justifyContent="space-between" height="100%">
											<Typography variant="subtitle2" sx={{ textDecoration: 'line-through' }}>
												Create organization
											</Typography>
											<Typography variant="subtitle2">+15XP</Typography>
										</Stack>
									</TimelineContent>
								</TimelineItem>
								<TimelineItem sx={{ '&:before': { display: 'none' } }}>
									<TimelineSeparator>
										<TimelineDot />
									</TimelineSeparator>
									<TimelineContent>
										<Stack direction="row" justifyContent="space-between">
											<Stack spacing={1}>
												<Typography
													variant="subtitle2"
													sx={{
														textDecoration: tmpOrgState.metaDataCID
															? 'line-through'
															: 'unset',
													}}
												>
													Add a logo and banner
												</Typography>
												<Typography
													variant="body2"
													sx={{
														textDecoration: tmpOrgState.metaDataCID
															? 'line-through'
															: 'unset',
													}}
												>
													Click on the placeholder to upload an image
												</Typography>
											</Stack>
											<Typography variant="subtitle2">+15XP</Typography>
										</Stack>
									</TimelineContent>
								</TimelineItem>
							</Timeline>
							<Divider />
							<Timeline position="right">
								<TimelineItem sx={{ '&:before': { display: 'none' } }}>
									<TimelineSeparator>
										<TimelineDot />
									</TimelineSeparator>
									<TimelineContent>
										<Stack direction="row" justifyContent="space-between">
											<Stack spacing={1}>
												<Typography variant="subtitle2">Save organization on chain</Typography>
												<Typography variant="body2">
													Deploy your organization onto the chain
												</Typography>
											</Stack>
											<Typography variant="subtitle2">Receive Total 50XP</Typography>
										</Stack>
									</TimelineContent>
								</TimelineItem>
							</Timeline>
						</Stack>
					</Paper>
					<Paper sx={{ maxWidth: { xs: '100%', md: '300px' }, padding: 4 }}>
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
					<Stack padding={{ xs: 2, md: 4 }} direction={{ xs: 'column', md: 'row' }}>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Info />
							<Typography>
								Deploy organization on chain A min deposit of 5 GAME is needed.{' '}
								<Link
									textAlign="center"
									href="https://discord.com/channels/273529551483699200/772045307021885452"
									rel="noreferrer"
									target="_blank"
									underline="always"
									sx={{ whiteSpace: 'nowrap' }}
								>
									Get GAME here.
								</Link>
							</Typography>
						</Stack>
						<Stack
							direction={{ xs: 'column', md: 'row' }}
							padding={{ xs: 2 }}
							spacing={2}
							alignItems="center"
						>
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
			<TransactionDialog open={modalState} onClose={handleModalClose} txData={tx} txCallback={handleTxCallback} />
		</>
	)
}
