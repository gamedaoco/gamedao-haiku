import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

import { TransactionData } from 'src/@types/transactionData'
import { Organization } from 'src/queries'
import { getCampaignStatusPercentage } from 'src/utils/campaignUtils'
import { getProposalTypesCount } from 'src/utils/proposalUtils'
import { useRemoveMemberTransaction } from 'hooks/tx/useRemoveMemberTransaction'

import { useTheme } from '@mui/material/styles'
import { ChevronRight, Verified } from '@mui/icons-material'
import { FmdGood, InsertLink, Label, VpnKey } from '@mui/icons-material/'
import { Box, Chip, Button, Divider, Paper, Stack, Typography } from '@mui/material'

import { DonutChart } from 'src/components/Charts/donutChart'
import { AreaChartContainer } from 'src/components/TabPanels/Organization/modules/areaChartContainer'
import { RadialChartContainer } from 'src/components/TabPanels/Organization/modules/radialChartContainer'
import { TransactionDialog } from 'src/components/TransactionDialog/transactionDialog'

import { TreasuryChart } from 'src/dapps/organization/components/TreasuryChart'
interface ComponentProps {
	organization: Organization
	organizationId: string
	isMember: boolean
	isAdmin: boolean
	handleOpenTxModal: () => void
	handleCloseTxModal: () => void
	showTxModalType: boolean
	addMemberTx: TransactionData
}

export function Overview({
	organization,
	organizationId,
	isMember,
	isAdmin,
	handleOpenTxModal,
	handleCloseTxModal,
	showTxModalType,
	addMemberTx,
}: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()
	const { push } = useRouter()

	const removeMemberTx = useRemoveMemberTransaction(organizationId)

	const series1 = [
		{
			name: 'Members',
			data: [0, 7, 3, 8, 2],
		},
	]
	const categories = [
		'2022-07-19T00:00:00.000Z',
		'2022-07-20T01:30:00.000Z',
		'2022-07-21T02:30:00.000Z',
		'2022-07-22T03:30:00.000Z',
		'2022-07-23T04:30:00.000Z',
	]
	const series2 = [
		{
			name: 'Balance',
			data: [0, 10, 20, 13, 5],
		},
	]
	const [isReadMore, setIsReadMore] = useState<boolean>(true)
	const [showButton, setShowButton] = useState<boolean>(false)

	const handleChangeRoute = useCallback(
		(newPath) => {
			if (organizationId) {
				push(`${organizationId}/${newPath}`)
			} else {
				push(newPath)
			}
		},
		[organizationId, push],
	)

	const toggleReadMore = useCallback(() => {
		setIsReadMore((prev) => !prev)
	}, [setIsReadMore])

	const description = useMemo(
		() => (isReadMore ? organization?.description?.slice(0, 150) : organization?.description),
		[isReadMore, organization?.description],
	)

	const accessModel = useMemo(
		() =>
			organization?.accessModel === 'Open'
				? {
						title: t('page:organizations:organization_rules:open:title'),
						text: t('page:organizations:organization_rules:open:text'),
						status: t('page:organizations:organization_rules:open:status'),
				  }
				: {
						title: t('page:organizations:organization_rules:private:title'),
						text: t('page:organizations:organization_rules:private:text'),
						status: t('page:organizations:organization_rules:private:status'),
				  },
		[organization?.accessModel],
	)

	const feeModel = useMemo(() => {
		if (organization?.feeModel === 'NoFees') {
			return {
				title: t('page:organizations:organization_rules:no_fee:title'),
				text: t('page:organizations:organization_rules:no_fee:text'),
			}
		} else if (organization?.feeModel === 'Reserve') {
			return {
				title: t('page:organizations:organization_rules:reserved_fee:title'),
				text: t('page:organizations:organization_rules:reserved_fee:text'),
			}
		} else if (organization?.feeModel === 'Transfer') {
			return {
				title: t('page:organizations:organization_rules:transferred_fee:title'),
				text: t('page:organizations:organization_rules:transferred_fee:text'),
			}
		}
	}, [organization?.feeModel])

	const memberLimit = useMemo(
		() =>
			organization?.memberLimit === 0
				? {
						title: t('page:organizations:organization_rules:no_memberLimit:title'),
						text: t('page:organizations:organization_rules:no_memberLimit:text'),
				  }
				: {
						title: t('page:organizations:organization_rules:memberLimit:title'),
						text: ` ${t('page:organizations:organization_rules:memberLimit:only')} ${
							organization?.memberLimit
						}  ${t('page:organizations:organization_rules:memberLimit:text')}`,
				  },
		[organization?.memberLimit],
	)

	const statesPercentages = useMemo(
		() =>
			getCampaignStatusPercentage(
				organization?.campaignsAggregate?.aggregate?.count,
				organization?.campaignsAggregate?.nodes,
			),
		[organization?.campaignsAggregate?.aggregate?.count, organization?.campaignsAggregate?.nodes],
	)

	const proposalTypesCount = useMemo(
		() => getProposalTypesCount(organization?.proposalsAggregate?.nodes),
		[organization?.proposalsAggregate?.nodes],
	)

	useEffect(() => {
		organization?.description?.length > 250 ? setShowButton(true) : setShowButton(false)
	}, [organization?.description?.length])

	const [orgData, setOrgData] = useState({
		location: '',
		url: '',
		tags: [],
	})

	useEffect(() => {
		if (!organization) return
		setOrgData({
			...orgData,
			location: organization?.location,
			url: organization?.url,
			tags: organization?.tags,
		})
	}, [organization])

	return (
		<Fragment>
			<Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 4 }}>
				<Paper sx={{ width: { xs: '100%', md: '65%' }, height: '100%' }} variant={'glass'}>
					<Stack minHeight={307} spacing={1} padding={3}>
						<Typography variant="h6" pb="1rem">
							{t('page:organizations:about')}
						</Typography>

						<Typography variant="body2">
							{description}
							{showButton && (
								<span style={{ cursor: 'pointer' }} onClick={toggleReadMore} className="read-or-hide">
									{isReadMore ? ' More...' : ' Less...'}
								</span>
							)}
						</Typography>

						<Stack
							direction={{ xs: 'column', sm: 'row' }}
							spacing={3}
							pt="1rem"
							justifyContent="start"
							alignItems="top"
						>
							{orgData.tags.length > 0 && (
								<Stack direction="row" spacing={1} color={theme.palette.text.secondary}>
									<Label />{' '}
									<Box>
										{orgData.tags.map((item, index) => {
											return <Chip size="small" sx={{ mr: 1, mb: 1 }} key={index} label={item} />
										})}
									</Box>
								</Stack>
							)}

							{organization?.location && (
								<Stack direction="row" spacing={1} color={theme.palette.text.secondary}>
									<FmdGood /> <Typography variant="body2">{orgData.location}</Typography>
								</Stack>
							)}
							{accessModel.status && (
								<Stack direction="row" spacing={1} color={theme.palette.text.secondary}>
									<VpnKey /> <Typography variant="body2">{accessModel.status} </Typography>
								</Stack>
							)}
							{organization?.url && (
								<Stack direction="row" spacing={1} color={theme.palette.text.secondary}>
									<InsertLink /> <Typography variant="body2"> {orgData.url} </Typography>
								</Stack>
							)}
						</Stack>

						<Stack
							direction={{ xs: 'column', sm: 'row' }}
							pt="1rem"
							justifyContent={{ xs: 'center', sm: 'flex-start' }}
							spacing={1}
						>
							{!isMember && (
								<>
									<Button
										variant="outlined"
										size="small"
										disabled={!addMemberTx}
										onClick={handleOpenTxModal}
										sx={{ width: { xs: '100%', sm: '50%', md: '30%' } }}
									>
										{organization?.accessModel === 'Open' ? (
											t('button:ui:join_organization')
										) : (
											<>Apply</>
										)}
									</Button>
								</>
							)}
						</Stack>
					</Stack>
				</Paper>

				<Paper sx={{ width: { xs: '100%', md: '35%' }, minHeight: 284 }} variant={'glass'}>
					<Stack height="100%" spacing={1} padding={3}>
						<Typography variant="h6">{t('page:organizations:organizations_rules')}</Typography>

						<Stack direction="column" spacing={3} pt="1rem">
							{organization?.feeModel && (
								<Stack direction="row" spacing={1}>
									<Verified sx={{ width: '16px', color: theme.palette.success.main }} />
									<Stack direction="column">
										<Typography variant="body2">{feeModel.title}</Typography>
										<Typography variant="body2">{feeModel.text}</Typography>
									</Stack>
								</Stack>
							)}

							{organization?.accessModel && (
								<Stack direction="row" spacing={1}>
									<Verified sx={{ width: '16px', color: '#A4D808' }} />
									<Stack direction="column">
										<Typography variant="body2">{accessModel.title}</Typography>
										<Typography variant="body2">{accessModel.text}</Typography>
									</Stack>
								</Stack>
							)}

							{(organization?.memberLimit || organization?.memberLimit === 0) && (
								<Stack direction="row" spacing={1}>
									<Verified sx={{ width: '16px', color: '#A4D808' }} />
									<Stack direction="column">
										<Typography variant="body2">{memberLimit.title}</Typography>
										<Typography variant="body2">{memberLimit.text}</Typography>
									</Stack>
								</Stack>
							)}
						</Stack>
					</Stack>
				</Paper>
			</Stack>

			{/* <Stack
				direction={{ xs: 'column', sm: 'row' }}
				alignItems={{ xs: 'center', sm: 'flex-start' }}
				spacing={2.5}
				pt="2.5rem"
			>
				<Stack width={{ xs: '100%', sm: '50%' }}>
					<Stack direction="row" justifyContent="space-between" pb="1rem">
						<Typography variant="h5">{t('label:members')}</Typography>
						<Button color="secondary" onClick={() => handleChangeRoute('members')}>
							{t('button:ui:go_to_members')} <ChevronRight />
						</Button>
					</Stack>
					<AreaChartContainer
						title="Total Members"
						total={organization?.organizationMembersAggregate?.aggregate?.count}
						increase={2.6}
						series={series1}
						categories={categories}
					/>
				</Stack>

				<Stack width={{ xs: '100%', sm: '50%' }}>
					<Stack direction="row" justifyContent="space-between" pb="1rem">
						<Typography variant="h5">{t('label:treasury')}</Typography>
						<Button color="secondary" onClick={() => handleChangeRoute('treasury')}>
							{t('button:ui:go_to_treasury')} <ChevronRight />
						</Button>
					</Stack>
					<AreaChartContainer
						title="Total Balance"
						total="$18,765"
						increase={2}
						series={series2}
						categories={categories}
					/>
				</Stack>
			</Stack> */}

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				alignItems={{ xs: 'center', sm: 'flex-start' }}
				spacing={2.5}
				pt="2.5rem"
			>
				<TreasuryChart address={organization?.treasury} symbol="ZERO" />
				<TreasuryChart address={organization?.treasury} symbol="GAME" />
				<TreasuryChart address={organization?.treasury} symbol="PLAY" />
			</Stack>

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				alignItems={{ xs: 'center', sm: 'flex-start' }}
				spacing={2.5}
				pt="2.5rem"
			>
				<Stack width={{ xs: '100%', sm: '50%' }}>
					<Stack direction="row" justifyContent="space-between" pb="1rem">
						<Typography variant="h5">{t('label:campaigns')}</Typography>
						<Button color="secondary" onClick={() => handleChangeRoute('campaigns')}>
							{t('button:ui:view_all')} <ChevronRight />
						</Button>
					</Stack>
					<Paper sx={{ height: 174 }} variant={'glass'}>
						<Stack
							direction="row"
							width="100%"
							height="100%"
							divider={<Divider orientation="vertical" flexItem />}
						>
							<RadialChartContainer
								color={theme.palette.success.main}
								series={[statesPercentages.successPercentage]}
								type="Funded"
								count={statesPercentages.successPercentage / 100}
							/>
							<RadialChartContainer
								color={theme.palette.error.main}
								series={[statesPercentages.failedPercentage]}
								type="Failed"
								count={statesPercentages.successPercentage / 100}
							/>
						</Stack>
					</Paper>
				</Stack>

				<Stack width={{ xs: '100%', sm: '50%' }}>
					<Stack direction="row" justifyContent="space-between" pb="1rem">
						<Typography variant="h5">{t('page:organizations:votings')}</Typography>
						<Button color="secondary" onClick={() => handleChangeRoute('proposals')}>
							{t('button:ui:view_all')} <ChevronRight />
						</Button>
					</Stack>
					<Paper sx={{ height: 174 }} variant={'glass'}>
						<Stack direction="row" width="100%" height="100%" justifyContent="center" alignItems="center">
							<DonutChart series={proposalTypesCount} />
						</Stack>
					</Paper>
				</Stack>
			</Stack>

			<TransactionDialog
				open={showTxModalType}
				onClose={handleCloseTxModal}
				txData={isMember ? removeMemberTx : addMemberTx}
				txCallback={handleCloseTxModal}
			/>
		</Fragment>
	)
}
