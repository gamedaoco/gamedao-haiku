import BigNumber from 'bignumber.js'
import moment from 'moment'

export function getCampaignProgress(target: string, contributed: string): number {
	const bnTarget = new BigNumber(target ?? '0')
	const bnContributed = new BigNumber(contributed ?? '0')
	const percent = bnContributed.div(bnTarget).times(100).toFixed(2)

	return parseFloat(percent.toString()) > 100 ? 100 : parseFloat(percent.toString())
}

export function getTimeFromBlock(currentBlock: number, endBlock: number, targetBlockTime: number): string {
	const blockDiff = endBlock - currentBlock

	if (blockDiff <= 0) {
		return null
	}

	const seconds = Math.ceil(blockDiff * (targetBlockTime ?? 3))
	return moment.duration(moment().diff(moment().add(seconds, 'seconds'))).humanize()
}

export function getCampaignStatusPercentage(total, states) {
	const arr = states?.map((obj) => obj.state)
	const count = arr?.reduce((accumulator, value) => {
		return { ...accumulator, [value]: (accumulator[value] || 0) + 1 }
	}, {})

	return {
		successPercentage: (count?.Success / total) * 100 || 0,
		failedPercentage: (count?.Failed / total) * 100 || 0,
	}
}
