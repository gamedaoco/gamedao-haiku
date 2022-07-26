import BigNumber from 'bignumber.js'
import moment from 'moment'
import { blockTime } from 'src/constants'

export function getCampaignProgress(target: string, contributed: string): number {
	const bnTarget = new BigNumber(target ?? '0')
	const bnContributed = new BigNumber(contributed ?? '0')
	const percent = bnContributed.div(bnTarget).times(100).toFixed(2)

	return parseFloat(percent.toString())
}

export function getTimeFromBlock(currentBlock: number, endBlock: number): string {
	const blockDiff = endBlock - currentBlock

	if (blockDiff <= 0) {
		return null
	}

	const seconds = Math.ceil(blockDiff * blockTime)
	return moment.duration(moment().diff(moment().add(seconds, 'seconds'))).humanize()
}
