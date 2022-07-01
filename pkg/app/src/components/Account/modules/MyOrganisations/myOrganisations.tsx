import { FC, useCallback } from 'react'

import { useRouter } from 'next/router'

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
import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { Organization } from 'src/queries'
import { getInitials } from 'src/utils/accountUtils'
import { reformatNumber } from 'src/utils/globalUtils'
import { parseIpfsHash } from 'src/utils/ipfs'

import { Scrollbar } from 'components/scrollbar'

import LoadingTable from './loadingTable'

interface MyOrganisationsTableProps {
	loading: boolean
	organisations: Organization[]
	title?: string
}
const MyOrganisationsTable: FC<MyOrganisationsTableProps> = ({ organisations, title, loading }) => {
	const config = useConfig()
	const router = useRouter()
	const selectedAddress = useCurrentAccountAddress()
	const editOrganization = useCallback(
		(id: string) => {
			router?.push(`/organisations/${id}/settings`)
		},
		[router],
	)

	const isAdmin = useCallback((address: string) => address === selectedAddress, [selectedAddress])
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
													src={parseIpfsHash(
														organisation?.organization_metadata?.logo,
														config.IPFS_GATEWAY,
													)}
													sx={{
														height: 42,
														width: 42,
													}}
												>
													{getInitials(organisation?.organization_metadata?.logo)}
												</Avatar>
												<Box sx={{ ml: 1 }}>{organisation?.organization_metadata?.name}</Box>
											</Box>
										</TableCell>
										<TableCell>
											{reformatNumber(organisation?.organization_members?.length, 2)}
										</TableCell>
										<TableCell>{reformatNumber(12321, 2)}</TableCell>
										<TableCell>{organisation.access}</TableCell>
										<TableCell>{isAdmin(organisation?.controller) ? 'Prime' : 'Member'}</TableCell>
										{isAdmin(organisation?.controller) ? (
											<TableCell align="right">
												<IconButton
													aria-label="edit"
													onClick={() => editOrganization(organisation?.id)}
												>
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
