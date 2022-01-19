import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { AccountState } from 'src/@types/extension'

export function shortAccountAddress(account: InjectedAccountWithMeta): string {
	const address = account?.address ?? ''
	return `${address.slice(0, 15)}...${address.slice(-6)}`
}

export function getAccountName(account: InjectedAccountWithMeta): string {
	return account?.meta?.name ?? ''
}

export function getAddressFromAccountState(accountState: AccountState) {
	return accountState?.account?.address
}
