import { FC, useCallback, useState, Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { Organization } from 'src/queries'
import { useConfig } from 'src/hooks/useConfig'
import { useRemoveMemberTransaction } from 'src/hooks/tx/useRemoveMemberTransaction'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'

import { getInitials } from 'utils/accountUtils'
import { reformatNumber } from 'utils/globalUtils'
import { parseIpfsHash } from 'utils/ipfs'

import Unknown from '@mui/icons-material/QuestionMarkSharp'
import Edit from '@mui/icons-material/TuneSharp'
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp'

import { Avatar, Box, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { TransactionDialog } from 'src/components/TransactionDialog/transactionDialog'
import { Scrollbar } from 'src/components/scrollbar'
import LoadingTable from './loadingTable'

interface IExitProps {
	id: string
}

const ExitOrganizationButton = ({ id }: IExitProps) => {
	const address = useCurrentAccountAddress()

	const removeMemberTx = useRemoveMemberTransaction(id || null)

	const [showTxModalType, setShowTxModalType] = useState<boolean>(false)
	const handleOpenTxModal = useCallback(() => setShowTxModalType(true), [setShowTxModalType])
	const handleCloseTxModal = useCallback(() => setShowTxModalType(false), [setShowTxModalType])

	return (
		<Fragment>
			<IconButton onClick={handleOpenTxModal}>
				{' '}
				<ExitToAppSharpIcon />{' '}
			</IconButton>
			<TransactionDialog
				open={showTxModalType}
				onClose={() => handleCloseTxModal()}
				txData={removeMemberTx}
				txCallback={() => handleCloseTxModal()}
			/>
		</Fragment>
	)
}

interface IProps {
	organizations: Organization[]
}

export const OrganizationList = ({ organizations }: IProps) => {
	const config = useConfig()
	const { push } = useRouter()
	const { t } = useTranslation()

	// admin === organization.prime
	const address = useCurrentAccountAddress()
	const isAdmin = useCallback((admin: string) => admin === address, [address])
	const editOrganization = useCallback(
		(id: string) => {
			push(`/organizations/${id}/settings`)
		},
		[push],
	)
	const linkOrganization = (id: string) => `/organizations/${id}/dashboard`

	return (
		<Scrollbar>
			<Table sx={{ minWidth: 700 }}>
				<TableHead>
					<TableRow>
						<TableCell>{'Name' || t('page:account:organizations:name')}</TableCell>
						<TableCell>{'Members' || t('page:account:organizations:members')}</TableCell>
						<TableCell>{'Collateral' || t('page:account:organizations:value_locked')}</TableCell>
						<TableCell>{'Access' || t('page:account:organizations:access_model')}</TableCell>
						<TableCell>{'Role' || t('page:account:organizations:role')}</TableCell>
						<TableCell align="right">Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{organizations &&
						organizations.map((organization, index) => (
							<TableRow hover key={index}>
								<TableCell>
									<Box
										sx={{
											alignItems: 'center',
											display: 'flex',
										}}
									>
										<Avatar
											src={
												organization.logo
													? parseIpfsHash(organization.logo, config.IPFS_GATEWAY)
													: null
											}
											alt={organization.name}
											sx={{ height: 40, width: 40 }}
										>
											<Unknown />
										</Avatar>
										<Box sx={{ ml: 2 }}>
											<Link href={linkOrganization(organization?.id)}>{organization?.name}</Link>
										</Box>
									</Box>
								</TableCell>
								<TableCell>
									{reformatNumber(organization.organization_members_aggregate?.aggregate?.count, 2)}{' '}
								</TableCell>
								<TableCell>{reformatNumber(organization.deposit, 2)}</TableCell>
								<TableCell>{organization.access_model}</TableCell>
								<TableCell> {`${isAdmin(organization.prime) ? 'prime' : 'member'}`} </TableCell>

								<TableCell align="right">
									{isAdmin(organization.prime) && (
										<IconButton aria-label="edit" onClick={() => editOrganization(organization.id)}>
											{' '}
											<Edit />{' '}
										</IconButton>
									)}
									{!isAdmin(organization.prime) && <ExitOrganizationButton id={organization.id} />}
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</Scrollbar>
	)
}
