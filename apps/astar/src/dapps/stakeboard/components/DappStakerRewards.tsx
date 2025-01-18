import { useEffect, useState } from 'react'
import { convertSS58Prefix } from '@gamedao/utils'
import { RxClock } from 'react-icons/rx'
import { Stack, Typography } from '@mui/material'
export const DappStakerRewards = ({ events, address }) => {
	// === calculate rewards per block / epoc ===
	// total rewards =
	// 1 - get array with passed blocks from first stake block to current block
	// 2 - multiply each stake per block by block reward by curve function

	if (!events[0]) return <Typography>...</Typography>
	// console.log('rewards', address, events[0].tx.length)

	const currentBlock = 8000000
	const totalStakingEvents = events[0].tx.length
	const firstStakingBlock = events[0].tx[0][0]
	const durationInBlocks = currentBlock - firstStakingBlock
	const rewardEstimate = 1

	return (
		<>
			<Stack direction="row" spacing={1}>
				<Typography align="right" variant="mono">
					𝑓: {firstStakingBlock}
				</Typography>
				<Typography align="left" variant="mono">
					𝛥: {durationInBlocks}
				</Typography>
			</Stack>
			<Stack direction="row" spacing={1}>
				<Typography align="right" variant="mono">
					∈: {totalStakingEvents}
				</Typography>
				<Typography align="left" variant="mono">
					𝛴: {rewardEstimate}
				</Typography>
			</Stack>
		</>
	)
}
