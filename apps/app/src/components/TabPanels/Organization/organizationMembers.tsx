import { Verified } from '@mui/icons-material'
import { Chip, Button, Avatar, Box, Paper, Rating, Stack, Typography } from '@mui/material'
import md5 from 'md5'
// import { DataGrid, GridColDef } from '@mui/x-data-grid'
import dynamic from 'next/dynamic'
import React, { Suspense, useEffect, useMemo, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { TransactionDialog } from 'src/components/TransactionDialog/transactionDialog'
import { useApproveMemberTx } from 'hooks/tx/useApproveMemberTx'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { Organization } from 'src/queries'
import { shortAccountAddress } from 'src/utils/accountUtils'
import { avatarImageURL } from 'src/utils/avatars'

export const DataGrid = dynamic(() => import('@mui/x-data-grid').then((m) => m.DataGrid), {
	ssr: false,
	suspense: true,
})

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
	const prime = organizationState?.prime || organizationState?.creator
	const address = useCurrentAccountAddress()
	const [isPrime, setIsPrime] = useState(false)

	useEffect(() => {
		if (!organizationState) return
		setIsPrime(prime === address)
	}, [prime, address, setIsPrime, organizationState])

	// const isPrime = ( prime === address ) ? true : false

	const members = useMemo(() => organizationState?.organization_members?.slice(), [organizationState])
	const [rows, setRows] = useState<any[]>([])

	const [approveUserAddress, setApproveUserAddress] = useState(null)

	// console.log('approveUserAddress', approveUserAddress, '\nprime', prime, '\nisPrime', isPrime, '\naddress', address)

	const approveMemberTx = useApproveMemberTx({
		organizationId: orgId,
		accountId: approveUserAddress,
	})

	const [showTxModal, setShowTxModal] = useState(false)

	const handleOpenTxModal = useCallback(() => {
		setShowTxModal(true)
	}, [setShowTxModal])

	const handleCloseTxModal = useCallback(() => {
		setApproveUserAddress(null)
		setShowTxModal(false)
	}, [setShowTxModal, setApproveUserAddress])

	const handleApprove = (id) => {
		// 	console.log('approve tx for\n org', orgId, '\n by ', prime, '\n account', approveUserAddress)
		setApproveUserAddress(id)
		setShowTxModal(true)
	}

	const MemberState = useCallback(
		({ state, id }) => {
			if (!isPrime) return <Chip size="small" label={state} />
			// TODO: add disable tx
			if (state === 'Active') return <Chip size="small" label={state} />
			return (
				<Button onClick={() => handleApprove(id)} size="small" color="primary" variant="outlined">
					Approve
				</Button>
			)
		},
		[isPrime],
	)

	const [memberList, setMemberList] = useState([])

	useEffect(() => {
		setMemberList([
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
				renderCell: (params) => <MemberState state={params.row.state} id={params.row.id} />,
			},
		])
	}, [MemberState, t])

	//		[t],
	//	)

	useEffect(() => {
		if (!members) return
		setRows(
			members?.map((member, index) => {
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
				<Suspense>
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
				</Suspense>
				<TransactionDialog
					open={showTxModal}
					txData={approveMemberTx}
					onClose={handleCloseTxModal}
					txCallback={handleCloseTxModal}
				/>
			</Stack>
		</Stack>
	)
}
