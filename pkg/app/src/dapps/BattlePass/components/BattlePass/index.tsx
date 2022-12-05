import { ContentTabs } from 'constants/battlepass'

import { useTheme } from '@mui/material/styles'
import { Box, Typography, Grid, Button } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'

import { Loader } from 'components/Loader'

import { XPBar } from './XPBar'
import { BPBuyBtn } from './BPBuyBtn'
import { BPGrid } from './BPGrid'
import { ShareBtn } from './ShareBtn'

type TProps = {
	id: string
}

export function BattlePass({ id }: TProps) {
	const theme = useTheme()

	if (!id) return <Loader />

	return (
		<Box>
			<Grid container alignItems="center" justifyContent="space-between" spacing={theme.spacing(2)}>
				<Grid item sm={12} md={6}>
					<XPBar args={{ id }} />
				</Grid>
				<Grid item sm={12} md={6} display="flex" alignItems="center" justifyContent="end">
					<ShareBtn />
					<BPBuyBtn args={{ id }} />
				</Grid>
				<Grid item sm={12}>
					<BPGrid args={{ id }} />
				</Grid>
			</Grid>
		</Box>
	)
}

export default BattlePass
