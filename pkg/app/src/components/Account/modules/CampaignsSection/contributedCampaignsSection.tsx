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
import { tempCampaginContributions } from '../../TempData/index'
import { useTheme } from '@mui/material/styles'

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
	console.log(theme.palette.common.black)
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
								{tempCampaginContributions?.map((contribution, index) => (
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
														src={contribution.image}
														alt="contribution_image"
													/>
												</Box>
												<Box display="flex" flexDirection="column">
													<Typography> {contribution.name}</Typography>
													<Typography variant="body2" color={theme.palette.grey[500]}>
														{contribution.title}
													</Typography>
												</Box>
											</Box>
										</TableCell>
										<TableCell>{contribution.contributors}</TableCell>
										<TableCell>{contribution.investment} USD</TableCell>
										<TableCell>
											<Box display="flex" flexDirection="column" sx={{ mt: 2 }}>
												<LinearProgress
													variant="determinate"
													value={contribution.progress}
													sx={{ maxHeight: 6 }}
												/>
												<Typography variant="body2">
													{contribution.raised}/{contribution.goal} USD
												</Typography>
											</Box>
										</TableCell>
										<TableCell>{contribution.timeLeft}</TableCell>
										<TableCell>
											{contribution.status === status.completed ? (
												<Chip
													label={contribution.status}
													sx={{
														backgroundColor: theme.palette.success.main,
														fontWeight: '700',
														color: theme.palette.common.black,
														borderRadius: '6px',
													}}
												/>
											) : (
												<Chip
													label={contribution.status}
													variant="outlined"
													sx={{
														color: theme.palette.success.main,
														backgroundColor: theme.palette.success.darker,
														fontWeight: '700',
														borderRadius: '6px',
													}}
												/>
											)}
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
