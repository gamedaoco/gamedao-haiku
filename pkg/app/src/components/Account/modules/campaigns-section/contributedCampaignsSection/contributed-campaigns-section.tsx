import React, { FC } from 'react'
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	LinearProgress,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
	Chip,
	TableContainer,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useCampaignsConnectionQuery } from '@gamedao-haiku/graphql/dist'
const gateway = 'https://ipfs.gamedao.co/gateway/'

interface ContributionStatus {
	active: String
	completed: String
}

const status: ContributionStatus = {
	active: 'Active',
	completed: 'Completed',
}

const ContributedCampaginsSection: FC = () => {
	const theme = useTheme()
	const { data } = useCampaignsConnectionQuery({
		variables: { address: '5FJ6hXq3HPjgoYGnphYtbuaZ2kFBwM8yB7qbSwB2ek6qsckR' },
	})
	console.log(data)
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
					<TableContainer
						sx={{
							maxHeight: 550,
							'&::-webkit-scrollbar-thumb': {
								backgroundColor: theme.palette.grey[500],
							},
						}}
					>
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
							<TableBody>
								{data?.campaignsConnection?.edges.map((campaignConnection, index) => (
									<TableRow key={index}>
										<TableCell>
											<Box display="flex" gap={3} justifyItems="center" alignItems="center">
												<Box>
													<CardMedia
														component="img"
														sx={{
															borderRadius: '8px',
															width: 64,
															height: 64,
														}}
														src={`${gateway}${campaignConnection?.node?.metadata?.logo}`}
														alt="campaign_logo"
													/>
												</Box>
												<Box display="flex" flexDirection="column">
													<Typography> {campaignConnection?.node?.metadata?.name}</Typography>
													<Typography variant="body2" color={theme.palette.grey[500]}>
														{campaignConnection?.node?.metadata?.title}
													</Typography>
												</Box>
											</Box>
										</TableCell>
										<TableCell>{campaignConnection?.node?.contributors.length}</TableCell>
										<TableCell>{} USD</TableCell>
										<TableCell>
											<Box display="flex" flexDirection="column" sx={{ mt: 2 }}>
												<LinearProgress
													variant="determinate"
													value={50}
													sx={{ maxHeight: 6 }}
												/>
												<Typography variant="body2">
													100/{campaignConnection?.node?.target} USD
												</Typography>
											</Box>
										</TableCell>
										<TableCell>
											{campaignConnection.node.expiry - campaignConnection.node.createdAtBlock}
										</TableCell>
										<TableCell>
											<Chip
												label={campaignConnection?.node?.state}
												sx={{
													backgroundColor: theme.palette.success.main,
													fontWeight: '700',
													color: theme.palette.common.black,
													borderRadius: '6px',
												}}
											/>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</CardContent>
			</Card>
		</Box>
	)
}

export default ContributedCampaginsSection
