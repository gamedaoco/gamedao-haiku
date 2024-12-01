import { createInfoNotification } from './notificationUtils'
import { encodeAddress, decodeAddress } from '@polkadot/util-crypto'
import BigNumber from 'bignumber.js'

export * from './logger'
export * from './balance'
export * from './accountUtils'

export const copyToClipboard = (content) =>
	navigator.clipboard.writeText(content).then(() => createInfoNotification('copied'))

export const convertSS58Prefix = (address, prefix = 0) =>
	address ? encodeAddress(decodeAddress(address), prefix) : null

export const sumBigNumbers = (numbers: BigNumber[]): BigNumber =>
	numbers.reduce((acc, curr) => acc.plus(curr), BigNumber(0))

export const formatNumber = ( amount: number ) =>
	amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
