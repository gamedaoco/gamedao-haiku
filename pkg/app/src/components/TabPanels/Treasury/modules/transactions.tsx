// libs
import React, { useState, useMemo, useEffect } from 'react'
import { Stack, Paper, Box, Typography, alpha } from '@mui/material'
import {
	DataGrid,
	GridColDef,
	GridToolbarContainer,
	GridToolbarFilterButton,
	GridToolbarExport,
} from '@mui/x-data-grid'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import { Image } from 'components/Image/image'
import { useTheme } from '@mui/material/styles'

interface ComponentProps {
	type: 'in' | 'out'
	data: any[]
}

const defaultGridColDef = {
	minWidth: 160,
	editable: false,
	sortable: true,
	filterable: false,
	disableColumnMenu: true,
}

const pageSizeOptions = [5, 10, 20, 30]
const rowHeight = 50

function CustomToolbar() {
	return (
		<GridToolbarContainer>
			<GridToolbarFilterButton />
			<GridToolbarExport />
		</GridToolbarContainer>
	)
}

export function Transactions({ type, data }: ComponentProps) {
	const { t } = useTranslation()
	const [pageSize, setPageSize] = useState<number>(10)
	const [rows, setRows] = useState<any[]>([])
	const theme = useTheme()

	const typeStyles = {
		in: {
			campaign: {
				borderRadius: '8px',
				backgroundColor: alpha(theme.palette.success.dark, 0.3),
				color: theme.palette.success.dark,
			},
			fee: {
				borderRadius: '8px',
				backgroundColor: alpha(theme.palette.text.secondary, 0.3),
				color: theme.palette.text.secondary,
			},
			donation: {
				borderRadius: '8px',
				backgroundColor: alpha(theme.palette.primary.dark, 0.3),
				color: theme.palette.primary.dark,
			},
		},
		out: {
			spending: {
				borderRadius: '8px',
				backgroundColor: alpha(theme.palette.warning.dark, 0.3),
				color: theme.palette.warning.dark,
			},
			fee: {
				borderRadius: '8px',
				backgroundColor: alpha(theme.palette.info.dark, 0.3),
				color: theme.palette.info.dark,
			},
		},
	}

	const columns = useMemo<GridColDef[]>(
		() => [
			{
				minWidth: 10,
				maxWidth: 10,
				field: '',
				sortable: false,
			},
			{
				...defaultGridColDef,
				field: 'amount',
				headerName: t('label:amount'),
				minWidth: 120,
				renderCell: (params) => {
					return <Typography variant="body1">{params.row.amount}</Typography>
				},
			},
			{
				...defaultGridColDef,
				field: 'currency',
				headerName: t('label:currency'),
				minWidth: 120,
				renderCell: (params) => {
					return <Typography variant="body1">{params.row.currency}</Typography>
				},
			},
			{
				...defaultGridColDef,
				field: 'direction',
				headerName: type === 'in' ? t('label:source') : t('label:target'),
				minWidth: 220,
				renderCell: (params) => {
					return (
						<Box
							sx={{
								alignItems: 'center',
								display: 'flex',
							}}
						>
							<Image
								src={`/img/currency/${params.row.image || 'default'}.png`}
								alt="currency"
								style={{ height: '40px', width: '40px', flexShrink: 0 }}
							/>

							<Box sx={{ ml: 1 }}>
								{params.row.name}
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Typography variant="body1" sx={{ mr: 0.2 }}>
										{params.row.direction}
									</Typography>
								</Box>
							</Box>
						</Box>
					)
				},
			},
			{
				...defaultGridColDef,
				field: 'type',
				headerName: t('label:type'),
				renderCell: (params) => {
					return (
						<Box
							sx={{
								...typeStyles[type][params.row.type.toLowerCase()],
								paddingLeft: '10px',
								paddingRight: '10px',
							}}
							padding={0.5}
						>
							<Typography
								variant="caption"
								sx={{
									fontWeight: 'bold',
									color: typeStyles[type][params.row.type.toLowerCase()]['color'],
								}}
							>
								{params.row.type}
							</Typography>
						</Box>
					)
				},
			},
			{
				...defaultGridColDef,
				field: 'hash',
				sortable: false,
				minWidth: 200,
				headerName: t('label:hash'),
				renderCell: (params) => {
					return (
						<Typography
							variant="body1"
							sx={{
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
							}}
						>
							{params.row.hash}
						</Typography>
					)
				},
			},
			{
				...defaultGridColDef,
				field: 'date',
				minWidth: 200,
				sortable: false,
				headerName: t('label:date'),
				renderCell: (params) => {
					return <Typography variant="body1">{params.row.date}</Typography>
				},
			},
			{
				minWidth: 30,
				maxWidth: 30,
				field: 'actions',
				sortable: false,
				headerName: '',
				renderCell: (params) => {
					return (
						<Box
							sx={{
								width: '30px',
								height: '30px',
								backgroundImage: 'radial-gradient(circle, white 1px, transparent 2px)',
								backgroundSize: '100% 33.33%',
							}}
						></Box>
					)
				},
			},
		],
		[t],
	)

	const gridData = useMemo(() => data?.slice(), [data])

	useEffect(() => {
		if (!gridData) return
		setRows(
			gridData?.map((item, index) => ({
				...item,
				id: index,
				direction: item.source || item.target,
				date: moment(item.date).format('DD/MM/YYYY hh:mm'),
			})),
		)
	}, [gridData])

	return (
		<>
			<Box py={3}>
				<Typography variant="h5">
					{type == 'in'
						? t('page:organisations:treasury:transactions_income')
						: t('page:organisations:treasury:transactions_outgoing')}
				</Typography>
			</Box>
			<Stack component={Paper} padding={4} spacing={6} sx={{ boxShadow: 'none', padding: 0 }}>
				<Box sx={{ height: 350 }}>
					<DataGrid
						loading={!data.length}
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
						components={{
							Toolbar: CustomToolbar,
						}}
					/>
				</Box>
			</Stack>
		</>
	)
}
