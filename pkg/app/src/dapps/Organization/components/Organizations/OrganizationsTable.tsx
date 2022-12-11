import { FC, useCallback } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'

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
import { getInitials } from 'src/utils/accountUtils'
import { reformatNumber } from 'src/utils/globalUtils'
import { parseIpfsHash } from 'src/utils/ipfs'

import { Scrollbar } from 'components/scrollbar'

import Loader from './Loader'

import { Organization, useAccountOrganizationsSubscription } from 'src/queries'

interface MyOrganizationsTableProps {
	// loading: boolean
	// organizations: Organization[]
	title?: string
}

export const MyOrganizationsTable: FC<MyOrganizationsTableProps> = ({ title }) => {
	const { t } = useTranslation()
	const theme = useTheme()
	const config = useConfig()
	const router = useRouter()

	const address = useCurrentAccountAddress()
	// const accountState = useCurrentAccountState()
	// const address = getAddressFromAccountState(accountState)

	const editOrganization = useCallback(
		(id: string) => {
			router?.push(`/organizations/${id}/settings`)
		},
		[router],
	)
	const isAdmin = useCallback((adminAddress: string) => adminAddress === address, [address])

	const { data, loading } = useAccountOrganizationsSubscription({
		variables: {
			address: address,
		},
	})
	const organizations = data?.identity_by_pk?.organization_members?.map(({ organization }) => organization)?.slice()

	console.log(organizations)

	return (
		<Card variant={'glass'}>
			<CardContent>
				{title && <Typography variant="h5">{title}</Typography>}

				{/*
					TODO: needs translation keys
				*/}
				{!organizations || organizations?.length < 1 ? (
					<Typography variant="body1">
						You are not a member of any DAO yet.
						<br />
						<Link href="/organizations">Join one or create one here!</Link>.
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
								<Loader />
							) : (
								<TableBody>
									{organizations?.map((organization, index) => (
										<TableRow hover key={index}>
											<TableCell>
												<Box
													sx={{
														alignItems: 'center',
														display: 'flex',
													}}
												>
													<Avatar
														src={parseIpfsHash(organization?.logo, config.IPFS_GATEWAY)}
														sx={{
															height: 42,
															width: 42,
														}}
													>
														{getInitials(organization?.logo)}
													</Avatar>
													<Box sx={{ ml: 1 }}>{organization?.name}</Box>
												</Box>
											</TableCell>
											<TableCell>
												{reformatNumber(organization?.organization_members?.length, 2)}
											</TableCell>
											<TableCell>{reformatNumber(12321, 2)}</TableCell>
											<TableCell>{organization.access_model}</TableCell>
											<TableCell>
												{t(
													`page:account:organisations:${
														isAdmin(organization?.creator) ? 'prime' : 'member'
													}`,
												)}
											</TableCell>
											{isAdmin(organization?.creator) ? (
												<TableCell align="right">
													<IconButton
														aria-label="edit"
														onClick={() => editOrganization(organization?.id)}
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

export default MyOrganizationsTable
