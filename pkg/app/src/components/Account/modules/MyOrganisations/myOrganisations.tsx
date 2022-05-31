import { Edit } from '@mui/icons-material'
import {
	Avatar,
	Box,
	Card,
	CardContent,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material'
import { Scrollbar } from 'components/scrollbar'
import { getInitials } from 'src/utils/accountUtils'
import LoadingTable from './loadingTable'

const MyOrganisationsTable = ({ organisations, title, loading }) => {
	return (
		<Card sx={{ borderRadius: '16px' }}>
			<CardContent>
				{title && (
					<Typography fontWeight="700" variant="h5" sx={{ my: 1 }}>
						{title}
					</Typography>
				)}
				<Scrollbar>
					<Table sx={{ minWidth: 700 }}>
						<TableHead>
							<TableRow sx={{ borderRadius: '8px' }}>
								<TableCell>Name</TableCell>
								<TableCell>Members</TableCell>
								<TableCell>Value Locked</TableCell>
								<TableCell>Access</TableCell>
								<TableCell>Role</TableCell>
								<TableCell align="right"></TableCell>
							</TableRow>
						</TableHead>
						{loading ? (
							<LoadingTable />
						) : (
							<TableBody>
								{organisations?.map((organisation, index) => (
									<TableRow hover key={index}>
										<TableCell>
											<Box
												sx={{
													alignItems: 'center',
													display: 'flex',
												}}
											>
												<Avatar
													src={organisation?.logo}
													sx={{
														height: 42,
														width: 42,
													}}
												>
													{getInitials(organisation?.name)}
												</Avatar>
												<Box sx={{ ml: 1 }}>{organisation.name}</Box>
											</Box>
										</TableCell>
										<TableCell>{organisation.membersCount}</TableCell>
										<TableCell>{organisation.valueLocked}</TableCell>
										<TableCell>{organisation.access}</TableCell>
										<TableCell>{organisation.role}</TableCell>
										{organisation?.canEdit ? (
											<TableCell align="right">
												<IconButton aria-label="edit">
													<Edit />
												</IconButton>
											</TableCell>
										) : (
											<TableCell />
										)}
									</TableRow>
								))}
							</TableBody>
						)}
					</Table>
				</Scrollbar>
			</CardContent>
		</Card>
	)
}

export default MyOrganisationsTable
