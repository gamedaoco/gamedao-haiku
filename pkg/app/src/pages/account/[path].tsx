import { useRouter } from 'next/router'

import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useTranslation } from 'react-i18next'
import { AccountTabs } from 'constants/account'

import { Layout } from 'layouts/default/layout'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'
import { Account } from 'dapps/Account'

export function Page() {
	const { t } = useTranslation()
	const { query } = useRouter()

	const param = query?.path

	const accountState = useCurrentAccountState()
	if (!accountState) {
		return <NoWalletConnected />
	}

	return (
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
