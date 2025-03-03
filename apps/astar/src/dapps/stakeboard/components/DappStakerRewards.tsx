import { Stack, Typography } from '@mui/material'

export const DappStakerRewards = ({ events, block = 0 }) => {
	if (!events || !events?.tx || events.tx.length === 0 || events.tx[0].length === 0) return null
	const currentBlock = block
	const totalStakingEvents = events?.tx.length || 0
	const firstStakingBlock = events?.tx[0][0] || 0
	const durationInBlocks = currentBlock - firstStakingBlock
	const rewardEstimate = totalStakingEvents > 0 ? 1 : 0
	return (
		<>
			<Stack direction="row" spacing={1}>
				<Typography align="right" variant="mono" title="first block">
					𝑓:{firstStakingBlock}
				</Typography>
				<Typography align="left" variant="mono" title="duration">
					𝛥:{durationInBlocks}
				</Typography>
			</Stack>
			<Stack direction="row" spacing={1}>
				<Typography align="right" variant="mono" title="total events">
					∈:{totalStakingEvents}
				</Typography>
				<Typography align="left" variant="mono" title="eligible">
					𝛴:{rewardEstimate}
				</Typography>
			</Stack>
		</>
	)
}
