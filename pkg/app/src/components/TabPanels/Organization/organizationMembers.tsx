import React, { useEffect, useMemo, useState } from 'react'

import { Verified } from '@mui/icons-material'
import { Avatar, Box, Paper, Rating, Stack, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import md5 from 'md5'
import { useTranslation } from 'react-i18next'
import { Organization } from 'src/queries'
import { shortAccountAddress } from 'src/utils/accountUtils'

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
							<Avatar
								sx={{ height: 48, width: 48 }}
								src={`https://avatars.dicebear.com/api/pixel-art/${md5(
									params?.row?.email || params?.row?.address,
								)}.svg`}
							/>

							<Stack sx={{ ml: 1 }}>
								<Typography variant="h6">
									{params.row.name}
									&nbsp;
									{params.row.email && (
										<Verified sx={{ verticalAlign: 'middle' }} fontSize="small" color="disabled" />
									)}
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

	const pageSizeOptions = [5, 10, 20, 30]
	const members = useMemo(() => organizationState?.organization_members?.slice(), [organizationState])
	const owner = organizationState?.creator
	const [pageSize, setPageSize] = useState<number>(10)
	const [rows, setRows] = useState<any[]>([])
	useEffect(() => {
		if (!members) return
		setRows(
			members?.map((member, index) => ({
				id: member?.address,
				name: member?.identity?.display_name,
				role: owner === t(`label:${member?.address ? 'prime' : 'member'}`),
				email: member?.identity?.email,
				address: shortAccountAddress(member),
				trust: (index % 3) + 1,
				xp: 5000 + 20 * index,
				rep: 2000 + 23 * index,
			})),
		)
	}, [members, owner, t])

	return (
		<Stack component={Paper} padding={4} spacing={2} variant={'glass'}>
			<Stack direction="row" spacing={1} justifyContent="space-between">
				<Typography variant="h6">{t('label:members')}</Typography>
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
