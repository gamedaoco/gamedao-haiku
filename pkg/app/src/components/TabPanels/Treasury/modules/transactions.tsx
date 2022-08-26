// libs
import { Stack, Paper, Box, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useTranslation } from 'react-i18next'

interface ComponentProps {
	type: 'in' | 'out'
}

export function Transactions({ type }: ComponentProps) {
	const { t } = useTranslation()

	return (
		<>
			<Box py={3}>
				<Typography variant="h5">
					{type == 'in'
						? t('page:organisations:treasury:transactions_income')
						: t('page:organisations:treasury:transactions_outgoing')}
				</Typography>
			</Box>
			<Stack component={Paper} padding={4} spacing={6} sx={{ boxShadow: 'none' }}></Stack>
		</>
	)
}
