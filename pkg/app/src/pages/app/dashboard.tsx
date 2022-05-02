import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { Layout } from 'src/layouts/default/layout'
import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'
import { useApiProvider } from 'hooks/useApiProvider'

export function DashboardPage() {
	const [aaa, setAAA] = useState<any>()
	const apiProvider = useApiProvider()

	useEffect(() => {
		if (apiProvider) {
			setAAA(
				apiProvider.apiProvider.tx.balances.transfer('3Tny1RKRs3QeRJRjy5fn3gUgU4Emef2GZBDRsGTVq5gD6vub', 123),
			)
		}
	}, [apiProvider])
	return (
		<Layout showHeader showFooter showSidebar title="Dashboard">
			<TransactionDialog
				open={true}
				onClose={() => {}}
				tx={aaa}
				txMsg={{
					error: '',
					pending: '',
					success: '',
				}}
			/>

			<Box sx={{ p: '4rem', height: '90vh' }}>
				<Paper sx={{ p: '4rem', height: '100%', borderRadius: '.5rem' }} elevation={10}>
					<Typography sx={{ fontWeight: '800' }} variant={'h2'}>
						Hello.
					</Typography>
				</Paper>
			</Box>
		</Layout>
	)
}

export default DashboardPage
