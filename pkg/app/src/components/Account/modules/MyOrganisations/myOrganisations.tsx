import { FC, useCallback } from 'react'

import Link from 'next/link'
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
import { useTranslation } from 'react-i18next'
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

export const MyOrganisationsTable: FC<MyOrganisationsTableProps> = ({ organisations, title, loading }) => {
	const config = useConfig()
	const router = useRouter()
	const selectedAddress = useCurrentAccountAddress()
	const editOrganization = useCallback(
		(id: string) => {
			router?.push(`/organizations/${id}/settings`)
		},
		[router],
	)
	const { t } = useTranslation()
	const isAdmin = useCallback((address: string) => address === selectedAddress, [selectedAddress])
	return (
		<Card sx={{ borderRadius: '16px' }} variant={'glass'}>
			<CardContent>
				{title && <Typography variant="h5">{title}</Typography>}

				{/*
					TODO: needs translation keys
				*/}
				{!organisations || organisations?.length < 1 ? (
					<Typography variant="body1">
						You are not a member of any DAO yet.
						<br />
						<Link href="/organisations">Join one or create one here!</Link>.
					</Typography>
				) : (
					<Scrollbar>
						<Table sx={{ minWidth: 700 }}>
							<TableHead>
								<TableRow sx={{ borderRadius: '8px' }}>
									<TableCell>{t('page:account:organisations:name')}</TableCell>
									<TableCell>{t('page:account:organisations:members')}</TableCell>
									<TableCell>{t('page:account:organisations:value_locked')}</TableCell>
									<TableCell>{t('page:account:organisations:access_model')}</TableCell>
									<TableCell>{t('page:account:organisations:role')}</TableCell>
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
														src={parseIpfsHash(organisation?.logo, config.IPFS_GATEWAY)}
														sx={{
															height: 42,
															width: 42,
														}}
													>
														{getInitials(organisation?.logo)}
													</Avatar>
													<Box sx={{ ml: 1 }}>{organisation?.name}</Box>
												</Box>
											</TableCell>
											<TableCell>
												{reformatNumber(organisation?.organization_members?.length, 2)}
											</TableCell>
											<TableCell>{reformatNumber(12321, 2)}</TableCell>
											<TableCell>{organisation.access_model}</TableCell>
											<TableCell>
												{t(
													`page:account:organisations:${
														isAdmin(organisation?.creator) ? 'prime' : 'member'
													}`,
												)}
											</TableCell>
											{isAdmin(organisation?.creator) ? (
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
				)}
			</CardContent>
		</Card>
	)
}

export default MyOrganisationsTable
