import { avatarImageURL, convertSS58Prefix, useLogger, formatNumber } from '@gamedao/utils'
import { Stack, Typography, Avatar, Box, Paper, TextField, Grid } from '@mui/material'
import { type TStaker } from '../types'
import { DappStakerRow } from './DappStakerRow'
import { useAppContext } from 'providers/app/components/context'

export const DappStakerGrid = ({ stakers, events, fx, id }) => {
	//

	// console.log('events', events)
	const {
		astar: { block },
	} = useAppContext()

	const localEvents = (address) => events?.stakes?.filter((e) => e.address === address)

	return (
		<Grid container sx={{ padding: 4, border: '1px solid #ffffff33' }}>
			<Grid item xs={12} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
				<Typography variant={'h4'}>Top stakers over time</Typography>
			</Grid>
			<Grid item xs={1} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
				<Typography variant={'micro'}>Rank</Typography>
			</Grid>
			<Grid item xs={11} lg={5} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
				<Typography variant={'micro'}>Staker</Typography>
			</Grid>
			<Grid
				item
				xs={0}
				lg={3}
				sx={{ display: { xs: 'none', lg: 'block' }, borderBottom: '1px dotted #ffffff33' }}
				pb={2}
				mb={2}
			>
				<Typography variant={'micro'}>Stake</Typography>
			</Grid>
			<Grid
				item
				xs={0}
				lg={3}
				sx={{ display: { xs: 'none', lg: 'block' }, borderBottom: '1px dotted #ffffff33' }}
				pb={2}
				mb={2}
			>
				<Typography variant={'micro'}>Rewards</Typography>
			</Grid>
			<Grid item xs={12} sx={{ borderBottom: '1px dotted #ffffff33' }} pb={2} mb={2}>
				{stakers
					// .filter( (f:TStaker) => f.amount > 0 ) // filter zero amounts
					.sort((n1: TStaker, n2: TStaker) => n2.amount - n1.amount)
					.map((s: TStaker, i) => {
						const address = convertSS58Prefix(s.address, 5)
						const stakerEvents = events.stakes ? events.stakes.filter((e) => e.address === address)[0] : []
						return (
							<DappStakerRow
								key={i}
								s={s}
								i={i}
								events={stakerEvents}
								totalStakers={stakers.length}
								fx={fx}
								block={block}
							/>
						)
					})}
			</Grid>
		</Grid>
	)
}
