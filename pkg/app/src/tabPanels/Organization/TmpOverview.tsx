import { Button, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import { Info } from '@mui/icons-material'

const Chart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
})

export function TmpOverview() {
	return (
		<Stack spacing={4}>
			<Stack direction="row" spacing={4}>
				<Paper sx={{ width: '100%' }}></Paper>
				<Paper sx={{ maxWidth: '300px', padding: 4 }}>
					<Stack justifyContent="center" display="flex" alignItems="center">
						<Chart
							options={{
								plotOptions: {
									radialBar: {
										hollow: {
											size: '80%',
										},
										dataLabels: {
											value: {
												show: false,
												fontSize: '15px',
												formatter: function (val) {
													return val + ' XP'
												},
											},
											total: {
												show: true,
												label: 'Total',
											},
										},
									},
								},
							}}
							series={[70]}
							type="radialBar"
							width="300"
						/>

						<Typography variant="h6" textAlign="center">
							DAO Padawan
						</Typography>
						<Typography variant="caption" textAlign="center">
							Your organization is currently on the level Padavan. Reach another 40XP to reach the next
							level!
						</Typography>
					</Stack>
				</Paper>
			</Stack>
			<Paper sx={{ width: '100%' }}>
				<Stack direction="row" padding={4}>
					<Stack direction="row" alignItems="center" spacing={2}>
						<Info />
						<Typography>
							Deploy organization on chain A min deposit of 5 GAME is needed. Get GAME here.
						</Typography>
					</Stack>
					<Stack direction="row" spacing={2} alignItems="center">
						<TextField
							variant="outlined"
							label="Treasury Deposit"
							type="number"
							InputProps={{
								endAdornment: <InputAdornment position="start">GAME</InputAdornment>,
							}}
						/>
						<Button size="large" variant="contained" sx={{ whiteSpace: 'nowrap' }}>
							Deploy Organization
						</Button>
					</Stack>
				</Stack>
			</Paper>
		</Stack>
	)
}
