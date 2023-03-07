import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { Layout } from 'layouts/v2'
import { Paper, Box, Grid, Typography } from '@mui/material'

export function Page() {
	const { t } = useTranslation()
	const { query } = useRouter()

	console.log(query)

	return (
		<Layout showHeader showSidebar showFooter title={t('page:account:title')}>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Battlepass Season 1</Typography>
					</Grid>
					<Grid item></Grid>
				</Grid>
			</Box>

			<Paper variant="glass">
				<Box p={2}>
					<Typography variant="h4">Payment complete: Welcome to Battlepass!</Typography>
				</Box>
			</Paper>
		</Layout>
	)
}

export default Page
