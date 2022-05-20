import { Edit } from '@mui/icons-material'
import {
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
						<TableBody>
							{organisations?.map((organisation, index) => (
								<TableRow key={index}>
									<TableCell>{organisation.name}</TableCell>
									<TableCell>{organisation.membersCount}</TableCell>
									<TableCell>{organisation.valueLocked}</TableCell>
									<TableCell>{organisation.access}</TableCell>
									<TableCell>{organisation.role}</TableCell>
									{organisation?.canEdit && (
										<TableCell align="right">
											<IconButton aria-label="edit">
												<Edit />
											</IconButton>
										</TableCell>
									)}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Scrollbar>
			</CardContent>
		</Card>
	)
}

export default MyOrganisationsTable
