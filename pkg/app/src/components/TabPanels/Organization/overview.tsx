import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'

import { Organization, useOrganizationByIdSubscription } from 'src/queries'
import { getCampaignStatusPercentage } from 'src/utils/campaignUtils'
import { getProposalTypesCount } from 'src/utils/proposalUtils'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { ChevronRight, Verified, FmdGood, InsertLink, Label, VpnKey } from '@mui/icons-material/'
import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import { TransactionData } from 'src/@types/transactionData'

import { DonutChart } from 'components/Charts/donutChart'
import { AreaChartContainer } from 'components/TabPanels/Organization/modules/areaChartContainer'
import { RadialChartContainer } from 'components/TabPanels/Organization/modules/radialChartContainer'
import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

//

const series1 = [{ name: 'Members', data: [0, 7, 3, 8, 2] }]
const categories = [
	'2022-07-19T00:00:00.000Z',
	'2022-07-20T01:30:00.000Z',
	'2022-07-21T02:30:00.000Z',
	'2022-07-22T03:30:00.000Z',
	'2022-07-23T04:30:00.000Z',
]
const series2 = [{ name: 'Balance', data: [0, 10, 20, 13, 5] }]

//

type TProps = {
	id: string
}

export const Overview = ({ id }: TProps) => {
	const theme = useTheme()
	const { t } = useTranslation()
	const { push } = useRouter()

	const [organization, setOrganization] = useState<Organization>(null)
	const { loading, data, error } = useOrganizationByIdSubscription({
		variables: { orgId: id },
	})
	const address = useCurrentAccountAddress()
	const [isMember, setIsMember] = useState<boolean>(false)
	const [isPrime, setIsPrime] = useState<boolean>(false)
	useEffect(() => {
		if (address && organization) {
			setIsMember(organization.organization_members.some((member) => member.address === address))
			setIsPrime(organization.prime === address)
		}
	}, [])

	// content

	const [isReadMore, setIsReadMore] = useState<boolean>(true)
	const toggleReadMore = useCallback(() => {
		setIsReadMore((prev) => !prev)
	}, [setIsReadMore])
	const description = useMemo(
		() =>
			isReadMore
				? organization?.organization_metadata?.description?.slice(0, 150)
				: organization?.organization_metadata?.description,
		[isReadMore, organization?.organization_metadata?.description],
	)

	const [showButton, setShowButton] = useState<boolean>(false)

	const access_model = useMemo(
		() =>
			organization?.access_model === 'Open'
				? {
						title: t('page:organisations:organisation_rules:open:title'),
						text: t('page:organisations:organisation_rules:open:text'),
						status: t('page:organisations:organisation_rules:open:status'),
				  }
				: {
						title: t('page:organisations:organisation_rules:private:title'),
						text: t('page:organisations:organisation_rules:private:text'),
						status: t('page:organisations:organisation_rules:private:status'),
				  },
		[organization?.access_model, t],
	)

	const feeModel = useMemo(() => {
		if (organization?.fee_model === 'NoFees') {
			return {
				title: t('page:organisations:organisation_rules:no_fee:title'),
				text: t('page:organisations:organisation_rules:no_fee:text'),
			}
		} else if (organization?.fee_model === 'Reserve') {
			return {
				title: t('page:organisations:organisation_rules:reserved_fee:title'),
				text: t('page:organisations:organisation_rules:reserved_fee:text'),
			}
		} else if (organization?.fee_model === 'Transferred') {
			return {
				title: t('page:organisations:organisation_rules:transferred_fee:title'),
				text: t('page:organisations:organisation_rules:transferred_fee:text'),
			}
		}
	}, [organization?.fee_model, t])

	const memberLimit = useMemo(
		() =>
			organization?.member_limit === 0
				? {
						title: t('page:organisations:organisation_rules:no_member_limit:title'),
						text: t('page:organisations:organisation_rules:no_member_limit:text'),
				  }
				: {
						title: t('page:organisations:organisation_rules:member_limit:title'),
						text: ` ${t('page:organisations:organisation_rules:member_limit:only')}
						${t('page:organisations:organisation_rules:member_limit:text')}`,
				  },
		[organization?.member_limit, t],
	)

	const statesPercentages = useMemo(
		() =>
			getCampaignStatusPercentage(
				organization?.campaigns_aggregate?.aggregate?.count,
				organization?.campaigns_aggregate?.nodes,
			),
		[organization?.campaigns_aggregate?.aggregate?.count, organization?.campaigns_aggregate?.nodes],
	)

	const proposalTypesCount = useMemo(
		() => getProposalTypesCount(organization?.proposals_aggregate?.nodes),
		[organization?.proposals_aggregate?.nodes],
	)

	useEffect(() => {
		organization?.organization_metadata?.description?.length > 250 ? setShowButton(true) : setShowButton(false)
	}, [organization?.organization_metadata?.description?.length])

	return (
		<>
			<Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 4 }}>
				<Paper sx={{ width: { xs: '100%', md: '65%' }, height: '100%' }} variant={'glass'}>
					<Stack minHeight={307} spacing={1} padding={3}>
						<Typography variant="h6" pb="1rem">
							{t('page:organisations:about')}
						</Typography>
						<Typography variant="body2">
							{description}
							{showButton && (
								<span style={{ cursor: 'pointer' }} onClick={toggleReadMore} className="read-or-hide">
									{isReadMore ? '...Read More' : ' Show Less'}
								</span>
							)}
						</Typography>

						<Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} pt="1rem">
							<Stack direction="row" spacing={1} color={theme.palette.text.secondary}>
								<Label />
								<Typography variant="body2">Game, RPG, Desktop</Typography>
							</Stack>
							<Stack direction="row" spacing={1} color={theme.palette.text.secondary}>
								<FmdGood />
								<Typography variant="body2">Earth</Typography>
							</Stack>
							<Stack direction="row" spacing={1} color={theme.palette.text.secondary}>
								<VpnKey />
								<Typography variant="body2">{access_model.status} </Typography>
							</Stack>
							<Stack direction="row" spacing={1} color={theme.palette.text.secondary}>
								<InsertLink />
								<Typography variant="body2">
									{organization?.organization_metadata?.website || 'gamedao.co'}
								</Typography>
							</Stack>
						</Stack>
					</Stack>
				</Paper>

				<Paper sx={{ width: { xs: '100%', md: '35%' }, minHeight: 284 }} variant={'glass'}>
					<Stack height="100%" spacing={1} padding={3}>
						<Typography variant="h6">{t('page:organisations:organisations_rules')}</Typography>

						<Stack direction="column" spacing={3} pt="1rem">
							{feeModel && (
								<Stack direction="row" spacing={1}>
									<Verified sx={{ width: 33, height: 31.5, color: theme.palette.success.main }} />
									<Stack direction="column">
										<Typography variant="subtitle1">{feeModel.title}</Typography>
										<Typography variant="body2">{feeModel.text}</Typography>
									</Stack>
								</Stack>
							)}

							{organization?.access_model && (
								<Stack direction="row" spacing={1}>
									<Verified sx={{ width: '33px', height: '31.5px', color: '#A4D808' }} />
									<Stack direction="column">
										<Typography variant="subtitle1">{access_model.title}</Typography>
										<Typography variant="body2">{access_model.text}</Typography>
									</Stack>
								</Stack>
							)}

							{(organization?.member_limit || organization?.member_limit === 0) && (
								<Stack direction="row" spacing={1}>
									<Verified sx={{ width: '33px', height: '31.5px', color: '#A4D808' }} />
									<Stack direction="column">
										<Typography variant="subtitle1">{memberLimit.title}</Typography>
										<Typography variant="body2">{memberLimit.text}</Typography>
									</Stack>
								</Stack>
							)}
						</Stack>
					</Stack>
				</Paper>
			</Stack>

			<Stack
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
						total={organization?.organization_members_aggregate?.aggregate?.count}
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
						<Typography variant="h5">{t('page:organisations:votings')}</Typography>
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

			{/*			<TransactionDialog
				open={showTxModalType}
				onClose={handleCloseTxModal}
				txData={isMember ? removeMemberTx : addMemberTx}
				txCallback={handleCloseTxModal}
			/>*/}
		</>
	)
}

export default Overview
