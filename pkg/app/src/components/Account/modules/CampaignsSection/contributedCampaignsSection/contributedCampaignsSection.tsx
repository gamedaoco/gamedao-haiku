import React, { FC } from 'react'

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
import {
	Campaign_Contributor,
	CampaignContributorsSubscription,
	useCampaignContributorsSubscription,
} from 'src/queries'

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
	data: CampaignContributorsSubscription
	loading: boolean
	accountState: AccountState
}

const ContributedCampaignsSection: FC<ContributedCampaignsSectionProps> = ({ data, loading, accountState }) => {
	const theme = useTheme()
	console.log('DATA:', data)

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
							{/*{loading ? (*/}
							{/*	<LoadingCampaignTable />*/}
							{/*) : (*/}
							{/*	<TableBody>*/}
							{/*		{data? ?.map((campaignContributorEdge, index) => {*/}
							{/*			return (*/}
							{/*				<TableRow key={index}>*/}
							{/*					<TableCell>*/}
							{/*						<Box*/}
							{/*							display="flex"*/}
							{/*							gap={3}*/}
							{/*							justifyItems="center"*/}
							{/*							alignItems="center"*/}
							{/*						>*/}
							{/*							<Box>*/}
							{/*								<CardMedia*/}
							{/*									component="img"*/}
							{/*									sx={{*/}
							{/*										width: 64,*/}
							{/*										height: 64,*/}
							{/*									}}*/}
							{/*									src={`${gateway}${getContributedCampaignLogo(*/}
							{/*										campaignContributorEdge as Campaign_Contributor,*/}
							{/*									)}`}*/}
							{/*									alt="campaign_logo"*/}
							{/*								/>*/}
							{/*							</Box>*/}
							{/*							<Box display="flex" flexDirection="column">*/}
							{/*								<Typography>*/}
							{/*									{getContributedCampaignName(*/}
							{/*										campaignContributorEdge as Campaign_Contributor,*/}
							{/*									)}*/}
							{/*								</Typography>*/}
							{/*								<Typography variant="body2">*/}
							{/*									{getContributedCampaignTitle(*/}
							{/*										campaignContributorEdge as Campaign_Contributor,*/}
							{/*									)}*/}
							{/*								</Typography>*/}
							{/*							</Box>*/}
							{/*						</Box>*/}
							{/*					</TableCell>*/}
							{/*					<TableCell>*/}
							{/*						{getContributedCampaignContributorsCount(*/}
							{/*							campaignContributorEdge as Campaign_Contributor,*/}
							{/*						)}*/}
							{/*					</TableCell>*/}
							{/*					<TableCell>*/}
							{/*						{getContributedCampaignContribution(*/}
							{/*							campaignContributorEdge as Campaign_Contributor,*/}
							{/*						)}*/}
							{/*					</TableCell>*/}
							{/*					<TableCell>*/}
							{/*						<Box display="flex" flexDirection="column" sx={{ mt: 2 }}>*/}
							{/*							<LinearProgress*/}
							{/*								variant="determinate"*/}
							{/*								value={getContributedCampaignProgress(*/}
							{/*									campaignContributorEdge as Campaign_Contributor,*/}
							{/*								)}*/}
							{/*								sx={{ maxHeight: 6 }}*/}
							{/*							/>*/}
							{/*							<Typography variant="body2">*/}
							{/*								{getContributedCampaignRaisedAmount(*/}
							{/*									campaignContributorEdge as Campaign_Contributor,*/}
							{/*								)}*/}
							{/*								/*/}
							{/*								{getContributedCampaignTarget(*/}
							{/*									campaignContributorEdge as Campaign_Contributor,*/}
							{/*								)}*/}
							{/*							</Typography>*/}
							{/*						</Box>*/}
							{/*					</TableCell>*/}
							{/*					<TableCell>*/}
							{/*						{getContributedCampaignTimeLeft(*/}
							{/*							campaignContributorEdge as Campaign_Contributor,*/}
							{/*						)}*/}
							{/*					</TableCell>*/}
							{/*					<TableCell>*/}
							{/*						<Chip*/}
							{/*							label={getContributedCampaignState(*/}
							{/*								campaignContributorEdge as Campaign_Contributor,*/}
							{/*							)}*/}
							{/*						/>*/}
							{/*					</TableCell>*/}
							{/*				</TableRow>*/}
							{/*			)*/}
							{/*		})}*/}
							{/*	</TableBody>*/}
							{/*)}*/}
						</Table>
					</Scrollbar>
				</CardContent>
			</Card>
		</Box>
	)
}

export default ContributedCampaignsSection
