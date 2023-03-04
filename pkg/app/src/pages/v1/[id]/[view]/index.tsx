import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { ContentView } from 'constants/organization'
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
	const view = query?.view as string
	const bid = query?.bp as string
	// const [ bid, setBid ] = useState(null)

	const { loading, data, error } = useActiveBattlepassByIdQuery({ variables: { id: id } })

	useEffect(() => {
		if (loading === true) return
		if (data.BattlepassBot.Battlepasses.length === 0) push('/battlepass')
		// if ( bid !== data.BattlepassBot.Battlepasses.length === 0) push('/battlepass')
		// setBid(data.battlepass.id)
	}, [loading, data?.BattlepassBot?.Battlepasses, push])

	const walletGate = false
	const accountState = useCurrentAccountState()

	if (loading) return <Loader />
	if (walletGate && !accountState) return <NoWalletConnected />

	return (
		<Layout showHeader showFooter>
			{/*<Battlepass id={bid} path={view as ContentView} />*/}
		</Layout>
	)
}

export default Page
