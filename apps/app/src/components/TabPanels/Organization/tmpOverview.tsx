import { useCallback, useEffect, useState } from 'react'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Info } from '@mui/icons-material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import { Button, Divider, InputAdornment, Link, Paper, Stack, TextField, Typography } from '@mui/material'
import type { ISubmittableResult } from '@polkadot/types/types'
import { useCreateOrgTransaction } from 'hooks/tx/useCreateOrgTransaction'
import { useTmpOrganizationState } from 'src/hooks/useTmpOrganizationState'
import { useTranslation } from 'react-i18next'
import { useOrganizationByIdSubscription } from 'src/queries'

import { TransactionDialog } from 'src/components/TransactionDialog/transactionDialog'

const Chart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
})

export function TmpOverview() {
	const [modalState, setModalState] = useState<boolean>(false)
	const tmpOrgState = useTmpOrganizationState()
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
			tmpOrgState?.setDeposit(value < 0 ? 0 : value)
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
						setOrgId(data?.[1]?.toHex())
					}
				})
				push('/organizations/')
			}
		},
		[tmpOrgState.clearAll],
	)

	useEffect(() => {
		if (orgId && organizationByIdData && !loading) {
			push(`/organizations/${organizationByIdData?.organization?.[0]?.id}/dashboard`)
		}
	}, [orgId, organizationByIdData])

	return (
		<>
			<Stack spacing={{ xs: 2, md: 4 }}>
				<Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 4 }}>
					<Paper sx={{ width: '100%' }}>
						<Stack height="100%" spacing={1} padding={{ xs: 2, md: 4 }}>
							<Typography variant="h6">{t('label:complete_your_organization')}</Typography>
							<Typography variant="body2">{t('label:tmp_organization_description')}</Typography>
							<Timeline position="right">
								<TimelineItem sx={{ '&:before': { display: 'none' } }}>
									<TimelineSeparator>
										<TimelineDot />
										<TimelineConnector />
									</TimelineSeparator>
									<TimelineContent>
										<Stack direction="row" justifyContent="space-between" height="100%">
											<Typography variant="subtitle2" sx={{ textDecoration: 'line-through' }}>
												{t('transactions:createOrganization:title')}
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
													{t('label:add_logo_and_banner')}
												</Typography>
												<Typography
													variant="body2"
													sx={{
														textDecoration: tmpOrgState.metaDataCID
															? 'line-through'
															: 'unset',
													}}
												>
													{t('label:click_placeholder_upload')}
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
												<Typography variant="subtitle2">
													{t('label:save_organization_on_chain')}
												</Typography>
												<Typography variant="body2">
													{t('label:deploy_organization_to_chain')}
												</Typography>
											</Stack>
											<Typography variant="subtitle2">
												{t('label:total_received_xp', { xp: 50 })}
											</Typography>
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
								{t('label:organization_level_description', { xp: 40 })}
							</Typography>
						</Stack>
					</Paper>
				</Stack>
				<Paper sx={{ width: '100%' }}>
					<Stack
						padding={{ xs: 2, md: 4 }}
						direction={{ xs: 'column', md: 'row' }}
						justifyContent="space-between"
					>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Info />
							<Typography>
								{/*{t('label:deploy_organization_min_deposit', { value: 5 })}*/}
								To deploy the organization a minimum collateral of 100 GAME is required. Higher deposits
								lead in higher trust levels.{' '}
								<Link
									textAlign="center"
									href="https://discord.com/channels/273529551483699200/772045307021885452"
									rel="noreferrer"
									target="_blank"
									underline="always"
									sx={{ whiteSpace: 'nowrap' }}
								>
									{t('label:get_token_here', { token: 'GAME' })}
								</Link>
							</Typography>
						</Stack>
						<Stack
							direction={{ xs: 'column', md: 'row' }}
							padding={{ xs: 2 }}
							spacing={2}
							alignItems="center"
							justifyContent="end"
						>
							<TextField
								variant="outlined"
								label="Collateral"
								type="number"
								InputProps={{
									endAdornment: (
										<InputAdornment
											sx={{ borderRadius: '2px', p: '.75rem', m: 0 }}
											position="start"
										>
											GAME
										</InputAdornment>
									),
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
								Launch
								{/*{t('label:deploy_organization')}*/}
							</Button>
						</Stack>
					</Stack>
				</Paper>
			</Stack>
			<TransactionDialog open={modalState} onClose={handleModalClose} txData={tx} txCallback={handleTxCallback} />
		</>
	)
}
