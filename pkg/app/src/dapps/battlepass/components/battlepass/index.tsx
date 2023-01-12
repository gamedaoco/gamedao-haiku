import { ContentTabs } from 'constants/battlepass'

import { useTheme } from '@mui/material/styles'
import { Box, Typography, Grid, Button } from '@mui/material'
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

export function Battlepass({ id }: TProps) {
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
					<BPQuests args={{ id }} />
				</Grid>
				<Grid item sm={12}>
					<BPRewards args={{ id }} />
				</Grid>
			</Grid>
		</Box>
	)
}
