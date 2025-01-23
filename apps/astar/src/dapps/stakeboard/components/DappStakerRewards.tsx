import { Stack, Typography } from '@mui/material'

export const DappStakerRewards = ({ events }) => {
	const currentBlock = 0 // TODO: get current block number
	const totalStakingEvents = events?.tx.length || 0
	const firstStakingBlock = events?.tx[0][0] || 0
	const durationInBlocks = currentBlock - firstStakingBlock
	const rewardEstimate = totalStakingEvents > 0 ? 1 : 0

	return (
		<>
			<Stack direction="row" spacing={1}>
				<Typography align="right" variant="mono">
					𝑓:{firstStakingBlock}
				</Typography>
				<Typography align="left" variant="mono">
					𝛥:{durationInBlocks}
				</Typography>
			</Stack>
			<Stack direction="row" spacing={1}>
				<Typography align="right" variant="mono">
					∈:{totalStakingEvents}
				</Typography>
				<Typography align="left" variant="mono">
					𝛴:{rewardEstimate}
				</Typography>
			</Stack>
		</>
	)
}
