import { useState, useEffect } from 'react'
import { useGetLeaderboardQuery } from 'src/queries'

import { useTheme } from '@mui/material/styles'
import { Button, Grid, Typography, Paper, Stack, useMediaQuery } from '@mui/material'
import { Loader } from 'components/Loader'

export type TArgs = {
	id?: string
}

type TProps = {
	args?: TArgs
}

export function Invitational({ args }: TProps) {
	const { id } = args
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const handleJoin = (e) => {}
	// const { loading, data } = useGetLeaderboardQuery({ variables: { id } })
	// if (loading) return <Loader />

	return (
		<Grid container alignItems="center" justifyContent="space-between" spacing={theme.spacing(2)} pb={[2, 2]}>
			<Grid item xs={12}>
				<Paper sx={{ p: 2, height: '100%' }} variant="glass">
					<Stack direction="column" justifyContent="space-between">
						<Typography variant="teaserTitle" pb={2}>
							WAVEPASS CASH CUP
						</Typography>
						<Typography variant="teaserText" pb={2}>
							Join top players from around the globe in this first invitational on Fortnite. To take part
							make sure to join WAVEPASS Beta, which will close end of April and put you on the shortlist.
						</Typography>
						<Stack direction="row" justifyContent="end">
							{/* <Button color="secondary">Learn More</Button> */}
							<Button variant="lemon" onClick={handleJoin}>
								Join
							</Button>
						</Stack>
					</Stack>
				</Paper>
			</Grid>
		</Grid>
	)
}
