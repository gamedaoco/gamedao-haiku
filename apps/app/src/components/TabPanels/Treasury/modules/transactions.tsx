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
import { Image } from 'src/components/Image/image'
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
		<GridToolbarContainer
			sx={{
				borderTopLeftRadius: '20px',
				borderTopRightRadius: '20px',
			}}
		>
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
			default: {
				borderRadius: '8px',
				backgroundColor: alpha(theme.palette.success.dark, 0.3),
				color: theme.palette.success.dark,
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
			default: {
				borderRadius: '8px',
				backgroundColor: alpha(theme.palette.success.dark, 0.3),
				color: theme.palette.success.dark,
			},
		},
	}

	const columns = useMemo<GridColDef[]>(
		() => [
			{
				...defaultGridColDef,
				field: 'amount',
				headerName: t('label:amount'),
				minWidth: 120,
				renderCell: (params) => {
					return (
						<Typography
							variant="body1"
							style={{ color: type === 'in' ? theme.palette.success.main : theme.palette.warning.main }}
						>
							{`${type === 'in' ? '+' : '-'} ${params.row.amount}`}
						</Typography>
					)
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
					const coinImage = params.row.image ? params.row.image.toLowerCase() : 'default'
					return (
						<Box
							sx={{
								alignItems: 'center',
								display: 'flex',
							}}
						>
							<Image
								src={`/svg/coins/${coinImage}.svg`}
								alt="currency"
								style={{ height: '30px', width: '30px', flexShrink: 0 }}
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
								...typeStyles[type || 'in'][params.row.type.toLowerCase() || 'default'],
								paddingLeft: '10px',
								paddingRight: '10px',
							}}
							padding={0.5}
						>
							<Typography
								variant="caption"
								sx={{
									fontWeight: 'bold',
									color: typeStyles[type || 'in'][params.row.type.toLowerCase() || 'default'][
										'color'
									],
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
				minWidth: 250,
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
			} /*, Removing 3 dots as they are useless right now, saving code for when there is functionality
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
			},*/,
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
						? t('page:organizations:treasury:transactions_income')
						: t('page:organizations:treasury:transactions_outgoing')}
				</Typography>
			</Box>
			<Stack component={Paper} padding={4} spacing={6} sx={{ boxShadow: 'none', padding: 0 }}>
				<Box sx={{ height: 350 }}>
					<DataGrid
						disableSelectionOnClick
						loading={!data.length}
						rows={rows}
						columns={columns}
						pageSize={pageSize}
						hideFooterPagination={data.length > 10 ? false : true}
						rowsPerPageOptions={data.length > 10 ? pageSizeOptions : []}
						isCellEditable={() => false}
						hideFooterSelectedRowCount={true}
						disableColumnFilter
						getRowHeight={() => {
							return rowHeight
						}}
						onPageSizeChange={(pageSize) => {
							setPageSize(pageSize)
						}}
						components={{
							Toolbar: CustomToolbar,
						}}
						sx={{
							'&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
								outline: 'none !important',
							},
						}}
					/>
				</Box>
			</Stack>
		</>
	)
}
