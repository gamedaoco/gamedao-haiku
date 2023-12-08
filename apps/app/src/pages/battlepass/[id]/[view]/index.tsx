import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { BattlepassViews } from 'src/constants/battlepass'
import { useCurrentAccountState } from 'src/hooks/useCurrentAccountState'
import { Layout } from 'src/layouts/v2'

import { useActiveBattlepassByIdQuery } from 'src/queries'
import { Loader } from 'components/atoms/Loader'

import { Battlepass } from 'src/dapps/battlepass'

import { NoWalletConnected } from 'components/molecules/NoWalletConnected'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

export function Page() {
	const { t } = useTranslation()

	const { query, push } = useRouter()
	const id = query?.id as string
	const view = query?.view as BattlepassViews

	const { loading, data, error } = useActiveBattlepassByIdQuery({ variables: { id: id } })

	useEffect(() => {
		if (loading || !data) return
		if (data?.battlepassBot?.battlepasses?.length === 0) push('/battlepass') // 404
	}, [loading, data?.battlepassBot?.battlepasses, push])

	const walletGate = false
	const accountState = useCurrentAccountState()

	if (loading) return <Loader />
	if (walletGate && !accountState) return <NoWalletConnected />

	return (
		<Layout showHeader showFooter noContainer>
			<Battlepass
				args={{
					orgId: data?.battlepassBot?.battlepasses[0]?.orgId,
					id: id,
					view: view,
				}}
			/>
		</Layout>
	)
}

export default Page
