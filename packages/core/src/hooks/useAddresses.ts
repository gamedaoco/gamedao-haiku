import { useExtensionContext } from '../providers/extension/components/context'
import type { AccountState } from '@gamedao/core/@types/extension'

export function useAddresses(): string[] {
	return useExtensionContext()?.accounts?.map((account: AccountState) => account.account?.address) ?? []
}
