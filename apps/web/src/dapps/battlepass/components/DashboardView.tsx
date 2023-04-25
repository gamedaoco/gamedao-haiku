import { BattlepassViews } from 'src/constants/battlepass'

import { useTheme } from '@mui/material/styles'
import { Box, Grid, Stack, useMediaQuery } from '@mui/material'
import { Loader } from 'src/components/Loader'

import { TopPlayers } from './TopPlayers'
import { XPBar } from './XPBar'
import { ShareBtn } from './ShareBtn'
import { BPBuyBtn } from './BPBuyBtn'
import { BPQuests } from './BPQuests'
import { BPRewards } from './BPRewards'

import { Invitational } from './Invitational'

type TProps = {
	id: string
}

export function DashboardView({ id }: TProps) {
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	if (!id) return <Loader />

	return (
		<Grid container alignItems="center" spacing={theme.spacing(2)}>
			<Grid item xs={12}>
				<Invitational args={{ id }} />
			</Grid>
			<Grid item xs={12} md={6} pb={[2, 0]}>
				<XPBar args={{ id }} />
			</Grid>
			<Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent={isMd ? 'end' : 'center'}>
				<Stack direction={isMd ? 'row' : 'column'} alignItems="center" justifyContent={isMd ? 'end' : 'center'}>
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
