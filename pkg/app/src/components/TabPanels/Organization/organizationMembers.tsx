import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Organization } from 'src/queries'

import { shortAccountAddress } from 'src/utils/accountUtils'
import { avatarImageURL } from 'src/utils/avatars'

import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Verified } from '@mui/icons-material'
import { Avatar, Box, Paper, Rating, Stack, Typography } from '@mui/material'

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
	const columns = useMemo<GridColDef[]>(
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
							<Avatar sx={{ height: 40, width: 40 }} src={avatarImageURL(params.row.id)} />

							<Stack sx={{ ml: 1 }}>
								<Typography variant="h6">
									{params.row.name ? params.row.name : `anonymouse`}
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
				headerName: t('label:role'),
				renderCell: (params) => {
					return <Typography variant="body2">{params.row.role}</Typography>
				},
			},
			{
				...defaultGridColDef,
				field: 'xp',
				sortable: false,
				headerName: 'XP',
				renderCell: (params) => {
					return <Typography variant="body2">{params.row.xp}</Typography>
				},
			},
			{
				...defaultGridColDef,
				field: 'REP',
				sortable: false,
				headerName: 'REP',
				renderCell: (params) => {
					return <Typography variant="body2">{params.row.rep}</Typography>
				},
			},
			{
				...defaultGridColDef,
				field: 'trust',
				sortable: false,
				headerName: 'Trust',
				renderCell: (params) => {
					return <Rating readOnly name="simple-controlled" value={params.row.trust} max={3} />
				},
			},
		],
		[t],
	)

	const members = useMemo(() => organizationState?.organization_members?.slice(), [organizationState])
	const prime = organizationState?.prime || organizationState?.creator

	const pageSizeOptions = [5, 10, 20, 30]
	const [pageSize, setPageSize] = useState<number>(10)
	const [rows, setRows] = useState<any[]>([])
	useEffect(() => {
		if (!members) return
		setRows(
			members?.map((member, index) => ({
				id: member?.address,
				name: member?.identity?.display_name,
				role: t(`label:${member?.address === prime ? 'prime' : 'member'}`),
				email: member?.identity?.email,
				address: shortAccountAddress(member),
				xp: member?.identity?.xp || '0', // 5000 + 20 * index,
				rep: member?.identity?.rep || '0', //2000 + 23 * index,
				trust:
					member?.identity?.trust || member
						? prime === member.address
							? 3
							: member?.identity?.email
							? 2
							: 1
						: 0,
			})),
		)
	}, [members, prime, t])

	return (
		<Stack component={Paper} padding={4} spacing={2} variant={'glass'}>
			<Stack direction="row" spacing={1} justifyContent="space-between">
				<Typography variant="h6">{t('label:members')}</Typography>
			</Stack>
			<Box>
				<DataGrid
					loading={!organizationState}
					rows={rows}
					columns={columns}
					autoHeight //pageSize={pageSize}
					rowsPerPageOptions={pageSizeOptions}
					pagination={rows > pageSize ? true : false}
					isCellEditable={() => false}
					hideFooterSelectedRowCount={true}
					getRowHeight={() => {
						return rowHeight
					}}
					onPageSizeChange={(pageSize) => {
						setPageSize(pageSize)
					}}
				/>
			</Box>
		</Stack>
	)
}
