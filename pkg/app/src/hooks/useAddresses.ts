import { useExtensionContext } from 'providers/extension/modules/context'
import type { AccountState } from '@types/extension'

export function useAddresses(): string[] {
	return useExtensionContext()?.accounts?.map((account: AccountState) => account.account?.address) ?? []
}
