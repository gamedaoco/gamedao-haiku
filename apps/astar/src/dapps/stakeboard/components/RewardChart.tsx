import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer'
import { ChartsReferenceLine } from '@mui/x-charts/ChartsReferenceLine'
import { LinePlot } from '@mui/x-charts/LineChart'
import { BarChart } from '@mui/x-charts/BarChart'
import { Stack } from '@mui/material'
// import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis'
// import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis'

// TODO: show marker at current epoc of staking period

// TODO: implement external function via json to get custom curves
// example sigmoid function from distribution document
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

const lin = [0.0833, 0.1667, 0.25, 0.3333, 0.4167, 0.5, 0.5833, 0.6667, 0.75, 0.8333, 0.9167, 1.0]

export const RewardChart = ({ id, epoc = 0 }) => {
	// check for gamedao to show rewards chart
	if (id !== '0x89ed50cec44a3db4186ba54cdf575ec140937c55') return null

	const barChartConfig = {
		xAxis: [{ label: 'progress' }],
	}
	const vote = epoc < 11 ? epoc : 11
	const build = epoc > 11 ? epoc - 11 : 0

	// TODO: implement custom curve
	return (
		<Stack direction="column" spacing={1} sx={{ width: '100%', padding: 1, border: 1, borderColor: '#ffffff33' }}>
			<ResponsiveChartContainer
				dataset={dataset}
				series={[{ dataKey: 'y', type: 'line' }]}
				xAxis={[{ scaleType: 'point', dataKey: 'x' }]}
				height={100}
				margin={{ left: 30, right: 30, top: 30, bottom: 0 }}
				skipAnimation
			>
				<LinePlot />
				<ChartsReferenceLine x={0} label="vote" lineStyle={{ stroke: '#ffffff00' }} />
				<ChartsReferenceLine x={11} label="build" lineStyle={{ stroke: '#ffffff33' }} />
				{/* {epoc > 0 && <ChartsReferenceLine x={epoc} lineStyle={{ stroke: '#ffffff33' }} />} */}
				{/* <ChartsXAxis /> */}
				{/* <ChartsYAxis /> */}
			</ResponsiveChartContainer>
			<BarChart
				layout="horizontal"
				height={75}
				margin={{ left: 30, right: 30, top: 0, bottom: 30 }}
				yAxis={[{ data: [''], scaleType: 'band', disableLine: true, disableTicks: true }]}
				xAxis={[
					{
						data: [0, 121],
						disableLine: true,
						disableTicks: true,
						// TODO: sort ticks when in voting period
						tickInterval: [0, 11, epoc, 121],
						tickNumber: 100,
						valueFormatter: (value) => `${value}`,
					},
				]}
				series={[
					{ data: [vote], stack: 'total', color: '#00ffcccc' },
					{ data: [build], stack: 'total', color: '#00ccffcc' },
					{ data: [121 - build - vote], stack: 'total', color: 'black' },
				]}
				skipAnimation
			/>
		</Stack>
	)
}
