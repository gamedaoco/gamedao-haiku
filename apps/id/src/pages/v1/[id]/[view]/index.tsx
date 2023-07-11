import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Layout } from 'layouts/default'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Loader } from 'src/components/Loader'
import { NoWalletConnected } from 'src/components/NoWalletConnected/noWalletConnected'
import { ContentView } from 'src/constants/organization'
import { Battlepass } from 'src/dapps/battlepass'
import { useCurrentAccountState } from 'src/hooks/useCurrentAccountState'
import { useActiveBattlepassByIdQuery } from 'src/queries'

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
