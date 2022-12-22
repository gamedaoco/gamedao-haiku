import React, { useEffect, useMemo, useState } from 'react'
import md5 from 'md5'

import { useTranslation } from 'react-i18next'
import { Organization } from 'src/queries'
import { shortAccountAddress } from 'utils/accountUtils'
import { avatarImageURL } from 'utils/avatars'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useApproveMemberTx } from 'hooks/tx/useApproveMemberTx'
import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

import { Verified } from '@mui/icons-material'
import { Chip, Button, Avatar, Box, Paper, Rating, Stack, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

interface ComponentProps {
	organizationState: Organization
}

const defaultGridColDef = {
	minWidth: 140,
	editable: false,
	sortable: true,
	filterable: false,
	disableColumnMenu: true,
}

const rowHeight = 80

export function OrganizationMembersTable({ organizationState }: ComponentProps) {
	const { t } = useTranslation()
	const pageSizeOptions = [5, 10, 20, 30]
	const [pageSize, setPageSize] = useState<number>(10)

	const orgId = useMemo(() => organizationState?.id?.slice(), [organizationState])
	const address = useCurrentAccountAddress()
	const prime = organizationState?.prime || organizationState?.creator
	const isPrime = prime === address

	const members = useMemo(() => organizationState?.organization_members?.slice(), [organizationState])
	const [rows, setRows] = useState<any[]>([])

	const [approveUserAddress, setApproveUserAddress] = useState(null)
	const approveMemberTx = useApproveMemberTx({ organizationId: orgId, accountId: approveUserAddress })

	const [showTxModal, setShowTxModal] = useState(false)
	const dismissTxModal = () => {
		console.log('dismiss')
		setApproveUserAddress(null)
		setShowTxModal(false)
	}

	useEffect(() => {
		if (!approveUserAddress) return
		console.log('approve tx for\n org', orgId, '\n by ', prime, '\n account', approveUserAddress)
		setShowTxModal(true)
	}, [approveUserAddress])

	const memberList = useMemo<GridColDef[]>(
		() => [
			{
				...defaultGridColDef,
				field: 'name',
				headerName: t('label:name'),
				flex: 1,
				renderCell: (params) => {
					return (
						<Box
							sx={{
								alignItems: 'center',
								display: 'flex',
							}}
						>
							<Avatar sx={{ height: 48, width: 48 }} src={avatarImageURL(params?.row?.id)} />

							<Stack sx={{ ml: 1 }}>
								<Typography variant="body1">
									{params.row.name}
									&nbsp;
									{params.row.name && <Verified sx={{ verticalAlign: 'top' }} fontSize="small" />}
								</Typography>
								<Stack direction="row" alignItems="center" spacing={0.5} pr={2}>
									<Typography variant="body2">{params.row.address}</Typography>
								</Stack>
							</Stack>
						</Box>
					)
				},
			},
			{
				...defaultGridColDef,
				field: 'role',
				sortable: true,
				headerName: t('label:role'),
				renderCell: (params) => {
					return <Typography variant="body2">{params.row.role}</Typography>
				},
			},
			{
				...defaultGridColDef,
				field: 'xp',
				sortable: true,
				headerName: 'XP',
				renderCell: (params) => {
					return <Typography variant="body2">{params.row.xp}</Typography>
				},
			},
			{
				...defaultGridColDef,
				field: 'REP',
				sortable: true,
				headerName: 'REP',
				renderCell: (params) => {
					return <Typography variant="body2">{params.row.rep}</Typography>
				},
			},
			{
				...defaultGridColDef,
				field: 'trust',
				sortable: true,
				headerName: 'Trust',
				renderCell: (params) => {
					return <Rating readOnly name="simple-controlled" value={params.row.trust} max={3} />
				},
			},
			{
				...defaultGridColDef,
				field: 'state',
				sortable: true,
				headerName: 'State',
				renderCell: (params) => {
					return params.row.state === 'Active' ? (
						<Chip size="small" label={params.row.state} />
					) : // : <Button onClick={()=>{}} size="small" color="primary" variant="outline">Approve</Button>
					isPrime ? (
						<Button
							onClick={setApproveUserAddress(params.row.id)}
							size="small"
							color="primary"
							variant="outlined"
						>
							Approve
						</Button>
					) : (
						<Chip size="small" label={params.row.state} />
					)
				},
			},
		],
		[t],
	)

	useEffect(() => {
		if (!members) return
		setRows(
			members?.map((member, index) => {
				console.log(prime, member?.address, address)
				return {
					id: member?.address,
					name: member?.identity?.display_name,
					role: t(`label:${member?.address === prime ? 'prime' : 'member'}`),
					email: member?.identity?.email,
					address: shortAccountAddress(member),
					//member?.identity?.xp? ||
					xp: '0', // 5000 + 20 * index,
					//member?.identity?.rep? ||
					rep: '0', //2000 + 23 * index,
					//member?.identity?.trust ||
					trust: member
						? prime === member.address
							? 3
							: member?.identity?.email || member?.identity?.display_name
							? 2
							: 1
						: 0,
					state: member.state,
				}
			}),
		)
	}, [members, prime])

	return (
		<Stack component={Paper} padding={4} spacing={2} variant={'glass'}>
			<Stack direction="column" spacing={1} justifyContent="space-between">
				<Typography variant="h6">{t('label:members')}</Typography>
				<DataGrid
					isRowSelectable={() => false}
					disableSelectionOnClick
					sx={{ minHeight: '560px' }}
					loading={!organizationState}
					rows={rows}
					columns={memberList}
					pageSize={pageSize}
					rowsPerPageOptions={pageSizeOptions}
					isCellEditable={() => false}
					hideFooterSelectedRowCount={true}
					getRowHeight={() => rowHeight}
					onPageSizeChange={(pageSize) => setPageSize(pageSize)}
				/>
				<TransactionDialog
					open={showTxModal}
					txData={approveMemberTx}
					onClose={() => dismissTxModal()}
					txCallback={() => dismissTxModal()}
				/>
			</Stack>
		</Stack>
	)
}
