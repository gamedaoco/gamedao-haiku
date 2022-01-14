import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'

export function shortAccountAddress(account: InjectedAccountWithMeta): string {
	const address = account?.address ?? ''
	return `${address.slice(0, 15)}...${address.slice(-6)}`
}

export function getAccountName(account: InjectedAccountWithMeta): string {
	return account?.meta?.name ?? ''
}
