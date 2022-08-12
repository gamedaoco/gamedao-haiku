import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/router'

import { ChevronRight, Verified } from '@mui/icons-material'
import { FmdGood, InsertLink, Label, VpnKey } from '@mui/icons-material/'
import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useRemoveMemberTransaction } from 'hooks/tx/useRemoveMemberTransaction'
import { useTranslation } from 'react-i18next'
import { TransactionData } from 'src/@types/transactionData'
import { Organization } from 'src/queries'

import { DonutChart } from 'components/Charts/donutChart'
import { AreaChartContainer } from 'components/TabPanels/Organization/modules/areaChartContainer'
import { RadialChartContainer } from 'components/TabPanels/Organization/modules/radialChartContainer'
import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

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
	const removeMemberTx = useRemoveMemberTransaction(organizationId)
	const { t } = useTranslation()
	const { push } = useRouter()
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
		() =>
			isReadMore
				? organization?.organization_metadata?.description?.slice(0, 150)
				: organization?.organization_metadata?.description,
		[isReadMore, organization?.organization_metadata?.description],
	)

	useEffect(() => {
		organization?.organization_metadata?.description?.length > 250 ? setShowButton(true) : setShowButton(false)
	}, [organization?.organization_metadata?.description?.length])

	return (
		<>
			<Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 4 }}>
				<Paper sx={{ width: { xs: '100%', md: '65%' }, height: '100%' }}>
					<Stack minHeight="284px" spacing={1} padding={3}>
						<Typography variant="h6" pb="1rem">
							About
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
							<Stack direction="row" spacing={1}>
								<Label />
								<Typography variant="body2">Tag1, Tag2, Tag3, ...</Typography>
							</Stack>
							<Stack direction="row" spacing={1}>
								<FmdGood />
								<Typography variant="body2">USA</Typography>
							</Stack>
							<Stack direction="row" spacing={1}>
								<VpnKey />
								<Typography variant="body2">Public</Typography>
							</Stack>
							<Stack direction="row" spacing={1}>
								<InsertLink />
								<Typography variant="body2">acrocalypse.xyz</Typography>
							</Stack>
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
										size="large"
										variant="outlined"
										disabled={!addMemberTx}
										onClick={handleOpenTxModal}
										sx={{ width: '50%' }}
									>
										{t('button:ui:join_organization')}
									</Button>
								</>
							)}

							{(isMember || isAdmin) && (
								<>
									<Button
										variant="outlined"
										size="large"
										disabled={!removeMemberTx}
										onClick={() => handleChangeRoute('settings')}
										sx={{ width: { xs: '100%', sm: '50%', md: '30%' } }}
									>
										Change Settings
									</Button>
								</>
							)}
						</Stack>
					</Stack>
				</Paper>
				<Paper sx={{ width: { xs: '100%', md: '35%' }, height: '100%' }}>
					<Stack height="100%" spacing={1} padding={3}>
						<Typography variant="h6">Organisation Rules</Typography>

						<Stack direction="column" spacing={3} pt="1rem">
							<Stack direction="row" spacing={1}>
								<Verified sx={{ width: '33px', height: '31.5px', color: '#A4D808' }} />
								<Stack direction="column">
									<Typography variant="subtitle1">No Membership Fee</Typography>
									<Typography variant="body2">Members can join for free.</Typography>
								</Stack>
							</Stack>
							<Stack direction="row" spacing={1}>
								<Verified sx={{ width: '33px', height: '31.5px', color: '#A4D808' }} />
								<Stack direction="column">
									<Typography variant="subtitle1">No Membership Fee</Typography>
									<Typography variant="body2">Members can join for free.</Typography>
								</Stack>
							</Stack>
							<Stack direction="row" spacing={1}>
								<Verified sx={{ width: '33px', height: '31.5px', color: '#A4D808' }} />
								<Stack direction="column">
									<Typography variant="subtitle1">No Membership Fee</Typography>
									<Typography variant="body2">Members can join for free.</Typography>
								</Stack>
							</Stack>
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
						<Typography variant="h5">Members</Typography>
						<Button color="secondary" onClick={() => handleChangeRoute('members')}>
							Go to Members <ChevronRight />
						</Button>
					</Stack>
					<AreaChartContainer
						title="Total Members"
						total="3.458"
						increase={2.6}
						series={series1}
						categories={categories}
					/>
				</Stack>
				<Stack width={{ xs: '100%', sm: '50%' }}>
					<Stack direction="row" justifyContent="space-between" pb="1rem">
						<Typography variant="h5">Treasury</Typography>
						<Button color="secondary" onClick={() => handleChangeRoute('treasury')}>
							Go to Treasury <ChevronRight />
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
						<Typography variant="h5">Campaigns</Typography>
						<Button color="secondary" onClick={() => handleChangeRoute('campaigns')}>
							View all <ChevronRight />
						</Button>
					</Stack>
					<Paper sx={{ height: '174px' }}>
						<Stack
							direction="row"
							width="100%"
							height="100%"
							divider={<Divider orientation="vertical" flexItem />}
						>
							<RadialChartContainer
								color={theme.palette.success.main}
								series={[74.3]}
								type="Funded"
								count={234}
							/>
							<RadialChartContainer
								color={theme.palette.error.main}
								series={[25.7]}
								type="Failed"
								count={62}
							/>
						</Stack>
					</Paper>
				</Stack>
				<Stack width={{ xs: '100%', sm: '50%' }}>
					<Stack direction="row" justifyContent="space-between" pb="1rem">
						<Typography variant="h5">Votings</Typography>
						<Button color="secondary" onClick={() => handleChangeRoute('proposals')}>
							View all <ChevronRight />
						</Button>
					</Stack>
					<Paper sx={{ height: '174px' }}>
						<Stack direction="row" width="100%" height="100%" justifyContent="center" alignItems="center">
							<DonutChart series={[10, 10, 20]} />
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
		</>
	)
}
