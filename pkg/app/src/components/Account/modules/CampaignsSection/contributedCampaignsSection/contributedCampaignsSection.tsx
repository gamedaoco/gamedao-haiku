import React, { FC } from 'react'

import { CampaignContributorEdge, useCampaignContributorsConnectionQuery } from '@gamedao-haiku/graphql/dist'
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Chip,
	LinearProgress,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { AccountState } from 'src/@types/extension'

import { Scrollbar } from 'components/scrollbar'

import {
	getContributedCampaignContribution,
	getContributedCampaignContributorsCount,
	getContributedCampaignLogo,
	getContributedCampaignName,
	getContributedCampaignProgress,
	getContributedCampaignRaisedAmount,
	getContributedCampaignState,
	getContributedCampaignTarget,
	getContributedCampaignTimeLeft,
	getContributedCampaignTitle,
} from './contributedCampaignUtils'
import LoadingCampaignTable from './loadingCampaignTable'

const gateway = 'https://ipfs.gamedao.co/gateway/'

interface ContributedCampaignsSectionProps {
	accountState: AccountState
}

const ContributedCampaginsSection: FC<ContributedCampaignsSectionProps> = ({ accountState }) => {
	const theme = useTheme()
	const { data, loading } = useCampaignContributorsConnectionQuery({
		variables: { address: '5FJ6hXq3HPjgoYGnphYtbuaZ2kFBwM8yB7qbSwB2ek6qsckR' },
	})

	return (
		<Box>
			<Typography variant="body2" fontWeight="bold" sx={{ color: theme.palette.grey[500], pb: 4 }}>
				Contributed Campaigns
			</Typography>
			<Card>
				<CardContent>
					<Typography fontWeight="700" variant="h6" sx={{ mb: 2 }}>
						Campaign Contributions
					</Typography>

					<Scrollbar>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>Contributors</TableCell>
									<TableCell>Investment</TableCell>
									<TableCell>Raised/Goal</TableCell>
									<TableCell>Time left</TableCell>
									<TableCell>Status</TableCell>
								</TableRow>
							</TableHead>
							{loading ? (
								<LoadingCampaignTable />
							) : (
								<TableBody>
									{data?.campaignContributorsConnection?.edges.map(
										(campaignContributorEdge, index) => {
											return (
												<TableRow key={index}>
													<TableCell>
														<Box
															display="flex"
															gap={3}
															justifyItems="center"
															alignItems="center"
														>
															<Box>
																<CardMedia
																	component="img"
																	sx={{
																		borderRadius: '8px',
																		width: 64,
																		height: 64,
																	}}
																	src={`${gateway}${getContributedCampaignLogo(
																		campaignContributorEdge as CampaignContributorEdge,
																	)}`}
																	alt="campaign_logo"
																/>
															</Box>
															<Box display="flex" flexDirection="column">
																<Typography>
																	{getContributedCampaignName(
																		campaignContributorEdge as CampaignContributorEdge,
																	)}
																</Typography>
																<Typography
																	variant="body2"
																	color={theme.palette.grey[500]}
																>
																	{getContributedCampaignTitle(
																		campaignContributorEdge as CampaignContributorEdge,
																	)}
																</Typography>
															</Box>
														</Box>
													</TableCell>
													<TableCell>
														{getContributedCampaignContributorsCount(
															campaignContributorEdge as CampaignContributorEdge,
														)}
													</TableCell>
													<TableCell>
														{getContributedCampaignContribution(
															campaignContributorEdge as CampaignContributorEdge,
														)}
													</TableCell>
													<TableCell>
														<Box display="flex" flexDirection="column" sx={{ mt: 2 }}>
															<LinearProgress
																variant="determinate"
																value={getContributedCampaignProgress(
																	campaignContributorEdge as CampaignContributorEdge,
																)}
																sx={{ maxHeight: 6 }}
															/>
															<Typography variant="body2">
																{getContributedCampaignRaisedAmount(
																	campaignContributorEdge as CampaignContributorEdge,
																)}
																/
																{getContributedCampaignTarget(
																	campaignContributorEdge as CampaignContributorEdge,
																)}
															</Typography>
														</Box>
													</TableCell>
													<TableCell>
														{getContributedCampaignTimeLeft(
															campaignContributorEdge as CampaignContributorEdge,
														)}
													</TableCell>
													<TableCell>
														<Chip
															label={getContributedCampaignState(
																campaignContributorEdge as CampaignContributorEdge,
															)}
															sx={{
																backgroundColor: theme.palette.success.main,
																fontWeight: '700',
																color: theme.palette.common.black,
																borderRadius: '6px',
															}}
														/>
													</TableCell>
												</TableRow>
											)
										},
									)}
								</TableBody>
							)}
						</Table>
					</Scrollbar>
				</CardContent>
			</Card>
		</Box>
	)
}

export default ContributedCampaginsSection
