import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Layout } from 'layouts/default'
import Org from 'containers/Org'

import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'

export function Page() {
	const { t } = useTranslation()
	const { query } = useRouter()
	const param = query?.path

	const accountState = useCurrentAccountState()
	if (!accountState) {
		return <NoWalletConnected />
	}

	return (
		<Layout noBorder showHeader title={t('page:account:title')}>
			<Org />
		</Layout>
	)
}

export default Page
