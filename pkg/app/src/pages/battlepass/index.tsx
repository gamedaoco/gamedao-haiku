import { Layout } from 'layouts/v2'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { BPGrid } from 'components/BattlepassGrid'

export function Page() {
	return (
		<Layout showHeader showFooter>
			<Box sx={{ mb: 2 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">Get a Battlepass</Typography>
					</Grid>
					<Grid item></Grid>
				</Grid>
				<Grid item>
					<BPGrid />
				</Grid>
			</Box>
		</Layout>
	)
}

export default Page
