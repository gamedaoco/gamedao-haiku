import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { ContentTabs } from 'constants/battlepass'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { Layout } from 'layouts/v2'

import { useOrganizationByIdSubscription } from 'src/queries'
import { Loader } from 'components/Loader'

import BattlePass from 'dapps/BattlePass'

import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

export function Page() {
	const { t } = useTranslation()

	const { query, push } = useRouter()
	const id = query?.id as string
	const dapp = query?.dapp as string

	const { loading, data, error } = useOrganizationByIdSubscription({ variables: { orgId: id } })

	useEffect(() => {
		if (loading === true) return
		if (data.organization.length === 0) push('/battlepass')
	}, [loading, data?.organization, push])

	const walletGate = false
	const accountState = useCurrentAccountState()

	if (loading) return <Loader />
	if (walletGate && !accountState) return <NoWalletConnected />

	return (
		<Layout showHeader showFooter>
			<BattlePass id={id} path={dapp as ContentTabs} />
		</Layout>
	)
}

export default Page
