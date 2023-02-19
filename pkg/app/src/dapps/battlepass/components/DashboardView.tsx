import { BattlepassViews } from 'constants/battlepass'

import { useTheme } from '@mui/material/styles'
import { Box, Typography, Grid, Button, useMediaQuery } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'

import { Loader } from 'components/Loader'

import { XPBar } from './XPBar'
import { ShareBtn } from './ShareBtn'
import { BPBuyBtn } from './BPBuyBtn'
import { BPQuests } from './BPQuests'
import { BPRewards } from './BPRewards'

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
		<Box>
			<Grid container alignItems="center" justifyContent="space-between" spacing={theme.spacing(2)}>
				<Grid item xs={12} md={6} pb={[2, 0]}>
					<XPBar args={{ id }} />
				</Grid>
				<Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent={isMd ? 'end' : 'center'}>
					<ShareBtn args={{ id }} />
					<BPBuyBtn args={{ id }} />
				</Grid>
				<Grid item xs={12} mt={[2, 4]}>
					<BPQuests args={{ id }} />
				</Grid>
				<Grid item xs={12} mt={[2, 4]}>
					{/* <BPRewards args={{ id }} /> */}
				</Grid>
				{/*
				 */}
			</Grid>
		</Box>
	)
}
