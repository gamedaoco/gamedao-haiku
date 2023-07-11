import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Layout } from 'layouts/default'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { NoWalletConnected } from 'src/components/NoWalletConnected/noWalletConnected'
import { AccountTabs } from 'src/constants/account'
import { Account } from 'src/dapps/account'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'

export function Page() {
	const { t } = useTranslation()
	const { query } = useRouter()
	const param = query?.path
	const address = useCurrentAccountAddress()

	return !address ? (
		<NoWalletConnected />
	) : (
		<Layout showHeader title={t('page:account:title')}>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Dashboard</Typography>
					</Grid>
					<Grid item></Grid>
				</Grid>
			</Box>
			<Account param={param as AccountTabs} />
		</Layout>
	)
}

export default Page
