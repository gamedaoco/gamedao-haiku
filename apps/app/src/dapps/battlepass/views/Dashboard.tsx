import { BattlepassViews } from 'src/constants/battlepass'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'

import { useTheme } from '@mui/material/styles'
import { Box, Grid, Stack, useMediaQuery } from '@mui/material'
import { Loader } from 'components/atoms/Loader'

import { TopPlayers } from '../components/TopPlayers'
import { XPBar } from '../components/XPBar'
import { ShareBtn } from '../components/ShareBtn'
import { BPBuyBtn } from '../components/BuyBtn'
import { BPQuests } from '../components/Quests'
import { BPRewards } from '../components/Rewards'

// import { Invitational } from './Invitational'

type TProps = {
	id: string
}

export function DashboardView({ id }: TProps) {
	const theme = useTheme()

	// const address = useCurrentAccountAddress()
	// const
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	if (!id) return <Loader />

	return (
		<Grid container alignItems="center" spacing={theme.spacing(2)}>
			{/* <Grid item xs={12}>
				<Invitational args={{ id }} />
			</Grid> */}
			<Grid item xs={12} md={6} pb={[2, 0]}>
				<XPBar args={{ id }} />
			</Grid>
			<Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent={isMd ? 'end' : 'center'}>
				<Stack
					direction={isMd ? 'row' : 'column-reverse'}
					spacing={2}
					alignItems="center"
					justifyContent={isMd ? 'end' : 'center'}
				>
					<ShareBtn args={{ id }} />
					<BPBuyBtn args={{ id }} />
				</Stack>
			</Grid>
			<Grid item xs={12} mt={[2, 4]}>
				<BPQuests args={{ id }} />
			</Grid>
			<Grid item xs={12} mt={[2, 4]}>
				<BPRewards args={{ id }} />
			</Grid>
		</Grid>
	)
}
