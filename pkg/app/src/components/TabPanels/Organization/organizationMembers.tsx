import React, { useEffect, useMemo, useState } from 'react'

import { Avatar, Box, Paper, Rating, Stack, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import md5 from 'md5'
import { Organization } from 'src/queries'
import { getInitials, shortAccountAddress } from 'src/utils/accountUtils'

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
	const columns = useMemo<GridColDef[]>(
		() => [
			{
				...defaultGridColDef,
				field: 'name',
				headerName: 'Name',
				flex: 1,
				renderCell: (params) => {
					return (
						<Box
							sx={{
								alignItems: 'center',
								display: 'flex',
							}}
						>
							<Avatar
								src={params.row.email ? `https://www.gravatar.com/avatar/${md5(params.row.email)}` : ''} //https://picsum.photos/100
								sx={{
									height: 42,
									width: 42,
								}}
							>
								{getInitials(params.row.name)}
							</Avatar>
							<Box sx={{ ml: 1 }}>
								{params.row.name}
								<Typography color="textSecondary" variant="body2">
									{params.row.address}
								</Typography>
							</Box>
						</Box>
					)
				},
			},
			{
				...defaultGridColDef,
				field: 'role',
				headerName: 'Role',
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
		[],
	)

	const pageSizeOptions = [5, 10, 20, 30]
	const members = useMemo(() => organizationState?.organization_members?.slice(), [organizationState])
	const owner = organizationState?.controller
	const [pageSize, setPageSize] = useState<number>(10)
	const [rows, setRows] = useState<any[]>([])
	useEffect(() => {
		if (!members) return
		setRows(
			members?.map((member, index) => ({
				id: member?.address,
				name: member?.identity?.display_name,
				role: owner === member?.address ? 'Prime' : 'Member',
				email: member?.identity?.email,
				address: shortAccountAddress(member),
				trust: (index % 3) + 1,
				xp: 5000 + 20 * index,
				rep: 2000 + 23 * index,
			})),
		)
	}, [members])

	return (
		<Stack component={Paper} padding={4} spacing={2}>
			<Stack direction="row" spacing={1} justifyContent="space-between">
				<Typography variant="h6">Members</Typography>
			</Stack>
			<Box sx={{ height: 550 }}>
				<DataGrid
					loading={!organizationState}
					rows={rows}
					columns={columns}
					pageSize={pageSize}
					rowsPerPageOptions={pageSizeOptions}
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
