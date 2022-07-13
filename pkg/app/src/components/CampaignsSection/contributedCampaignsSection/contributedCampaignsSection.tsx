import React from 'react'

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
import { useConfig } from 'hooks/useConfig'
import { CampaignContributorsSubscription, Campaign_Contributor } from 'src/queries'
import { getContributedCampaignProgress, getContributedCampaignTimeLeft } from 'src/utils/contributedCampaignUtils'
import { abbreviateNumber } from 'src/utils/globalUtils'
import { parseIpfsHash } from 'src/utils/ipfs'

import { Scrollbar } from 'components/scrollbar'

import LoadingCampaignTable from './loadingCampaignTable'

interface ComponentProps {
	data: CampaignContributorsSubscription
	loading: boolean
}

export function ContributedCampaignsSection({ data, loading }: ComponentProps) {
	const theme = useTheme()
	const config = useConfig()

	return (
		<Box>
			<Typography variant="body2" fontWeight={theme.typography.fontWeightBold} sx={{ pb: 4 }}>
				Contributed Campaigns
			</Typography>
			<Card>
				<CardContent>
					<Typography variant="h6" sx={{ mb: 2 }}>
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
									{data?.campaign_contributor?.map((campaignContributor, index) => {
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
																	width: 64,
																	height: 64,
																}}
																src={parseIpfsHash(
																	campaignContributor?.campaign?.campaign_metadata
																		?.logo,
																	config.IPFS_GATEWAY,
																)}
																alt="campaign_logo"
															/>
														</Box>
														<Box display="flex" flexDirection="column">
															<Typography>
																{campaignContributor?.campaign?.campaign_metadata?.name}
															</Typography>
															<Typography variant="body2">
																{
																	campaignContributor?.campaign?.organization
																		?.organization_metadata?.name
																}
															</Typography>
														</Box>
													</Box>
												</TableCell>
												<TableCell>
													{
														campaignContributor?.campaign?.campaign_contributors_aggregate
															?.aggregate?.count
													}
												</TableCell>
												<TableCell>
													{abbreviateNumber(campaignContributor?.contributed)}
												</TableCell>
												<TableCell>
													<Box display="flex" flexDirection="column" sx={{ mt: 2 }}>
														<LinearProgress
															variant="determinate"
															value={getContributedCampaignProgress(
																campaignContributor as Campaign_Contributor,
															)}
															sx={{ maxHeight: 6 }}
														/>

														<Typography variant="body2">
															{abbreviateNumber(
																campaignContributor?.campaign
																	?.campaign_contributors_aggregate?.aggregate?.sum
																	?.contributed,
															)}
															/{abbreviateNumber(campaignContributor?.campaign?.target)}
														</Typography>
													</Box>
												</TableCell>
												<TableCell>
													{getContributedCampaignTimeLeft(
														campaignContributor as Campaign_Contributor,
													)}
												</TableCell>
												<TableCell>
													<Chip label={campaignContributor?.campaign?.state} />
												</TableCell>
											</TableRow>
										)
									})}
								</TableBody>
							)}
						</Table>
					</Scrollbar>
				</CardContent>
			</Card>
		</Box>
	)
}
