import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { PromiseMsg } from './promiseMsg'

export interface TransactionData {
	tx: SubmittableExtrinsic
	txMsg: PromiseMsg
	title: string
	deposit?: string
	description?: string
	actionSubLine?: string
	actionSubTitle?: string
	currencyId?: number
}
