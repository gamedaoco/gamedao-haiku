import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { ContentTabs } from 'constants/battlepass'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { Layout } from 'layouts/default'
import BattlePass from 'dapps/BattlePass'

import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

export function Page() {
	const { t } = useTranslation()
	const { query } = useRouter()
	const id = query?.id as string
	const dapp = query?.dapp as string
	const walletGate = false
	const accountState = useCurrentAccountState()

	if (walletGate && !accountState) return <NoWalletConnected />

	return (
		<Layout showHeader showFooter>
			<BattlePass id={id} path={dapp as ContentTabs} />
		</Layout>
	)
}

export default Page
