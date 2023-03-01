import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { BattlepassViews } from 'constants/battlepass'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { Layout } from 'layouts/v2'

import { useActiveBattlepassByIdQuery } from 'src/queries'
import { Loader } from 'components/Loader'

import { Battlepass } from 'dapps/battlepass'

import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

export function Page() {
	const { t } = useTranslation()

	const { query, push } = useRouter()
	const id = query?.id as string
	const view = query?.view as BattlepassViews

	const { loading, data, error } = useActiveBattlepassByIdQuery({ variables: { id: id } })

	useEffect(() => {
		if (loading || !data) return
		if (data?.BattlepassBot?.Battlepasses?.length === 0) push('/battlepass') // 404
	}, [loading, data?.BattlepassBot?.Battlepasses, push])

	const walletGate = false
	const accountState = useCurrentAccountState()

	if (loading) return <Loader />
	if (walletGate && !accountState) return <NoWalletConnected />

	return (
		<Layout showHeader showFooter noContainer>
			<Battlepass
				args={{
					orgId: data?.BattlepassBot?.Battlepasses[0]?.orgId,
					id: id,
					view: view,
				}}
			/>
		</Layout>
	)
}

export default Page
