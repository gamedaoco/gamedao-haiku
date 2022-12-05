import { useRouter } from 'next/router'

import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useTranslation } from 'react-i18next'
import { AccountTabs } from 'constants/account'

import { Layout } from 'layouts/default'
import Account from 'dapps/Account'

import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

export function Page() {
	const { t } = useTranslation()
	const { query } = useRouter()
	const path = query?.path

	const accountState = useCurrentAccountState()
	if (!accountState) {
		return <NoWalletConnected />
	}

	return (
		<Layout showHeader showSidebar showFooter title={t('page:account:title')}>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">
							{path && path !== `overview` ? `${t('page:account:title')}` : t('page:account:title')}
						</Typography>
					</Grid>
					<Grid item></Grid>
				</Grid>
			</Box>

			<Account param={path as AccountTabs} />
		</Layout>
	)
}

export default Page
