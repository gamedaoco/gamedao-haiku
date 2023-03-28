import { useRouter } from 'next/router'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTranslation } from 'react-i18next'
import { AccountTabs } from 'constants/account'

import { Layout } from 'layouts/v2'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'
import { Account } from 'dapps/account'

export function Page() {
	const { t } = useTranslation()
	const { query } = useRouter()
	const param = query?.path
	const address = useCurrentAccountAddress()

	return !address ? (
		<NoWalletConnected />
	) : (
		<Layout showHeader showSidebar title={t('page:account:title')}>
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
