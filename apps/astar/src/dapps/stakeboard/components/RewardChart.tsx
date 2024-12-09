import { LineChart } from '@mui/x-charts/LineChart'
import { Stack, Typography, Box } from '@mui/material'

// sigmoid function from distribution document

export const dataset = [
	{ x: 0, y: 0.99864148 },
	{ x: 11, y: 0.9959298623 },
	{ x: 22, y: 0.987871565 },
	{ x: 33, y: 0.9644288107 },
	{ x: 44, y: 0.9002495109 },
	{ x: 55, y: 0.7502601056 },
	{ x: 66, y: 0.5 },
	{ x: 77, y: 0.2497398944 },
	{ x: 88, y: 0.09975048912 },
	{ x: 99, y: 0.03557118927 },
	{ x: 110, y: 0.01212843498 },
	{ x: 121, y: 0.004070137716 },
]

export const RewardChart = ({ id }) => {
	return id === '0x89ed50cec44a3db4186ba54cdf575ec140937c55' ? (
		<Stack direction="column" spacing={1} sx={{ width: '100%', padding: 1, border: 1, borderColor: '#ffffff33' }}>
			<LineChart
				dataset={dataset}
				xAxis={[{ scaleType: 'point', dataKey: 'x' }]}
				series={[{ dataKey: 'y' }]}
				height={200}
				grid={{ horizontal: true }}
				margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
				skipAnimation={true}
			/>
		</Stack>
	) : null
}
