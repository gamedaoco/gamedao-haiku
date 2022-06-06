import { FC } from 'react'

import { AccountOrganizations } from '@gamedao-haiku/graphql/dist'
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
import { getInitials } from 'src/utils/accountUtils'
import { reformatNumber } from 'src/utils/globalUtils'

import { Scrollbar } from 'components/scrollbar'

import LoadingTable from './loadingTable'

interface MyOrganisationsTableProps {
	loading: boolean
	organisations: AccountOrganizations[]
	title?: string
}
const MyOrganisationsTable: FC<MyOrganisationsTableProps> = ({ organisations, title, loading }) => {
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
													src={organisation?.metadata?.logo}
													sx={{
														height: 42,
														width: 42,
													}}
												>
													{getInitials(organisation?.metadata?.logo)}
												</Avatar>
												<Box sx={{ ml: 1 }}>{organisation?.metadata?.name}</Box>
											</Box>
										</TableCell>
										<TableCell>{reformatNumber(organisation.membersCount, 2)}</TableCell>
										<TableCell>{reformatNumber(organisation?.member?.valueLocked, 3)}</TableCell>
										<TableCell>{organisation.access}</TableCell>
										<TableCell>{organisation?.member?.role}</TableCell>
										{organisation?.member?.canEdit ? (
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
