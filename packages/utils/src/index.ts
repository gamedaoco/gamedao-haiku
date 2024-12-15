import { createInfoNotification } from './notificationUtils'
import { encodeAddress, decodeAddress } from '@polkadot/util-crypto'
import BigNumber from 'bignumber.js'

export * from './accountUtils'
export * from './avatars'
export * from './balance'
export * from './logger'
export * from './notificationUtils'

export const copyToClipboard = (content = '') =>
	navigator.clipboard.writeText(content).then(() => createInfoNotification('copied'))

export const convertSS58Prefix = (address = '0x0', prefix = 0) =>
	address ? encodeAddress(decodeAddress(address), prefix) : null

export const sumBigNumbers = (numbers: BigNumber[]): BigNumber =>
	numbers.reduce((acc, curr) => acc.plus(curr), BigNumber(0))

export const formatNumber = (amount: number = 0) => amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
