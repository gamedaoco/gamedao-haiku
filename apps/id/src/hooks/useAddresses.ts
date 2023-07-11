import type { AccountState } from 'src/@types/extension'
import { useExtensionContext } from 'src/providers/extension/modules/context'

export function useAddresses(): string[] {
	return useExtensionContext()?.accounts?.map((account: AccountState) => account.account?.address) ?? []
}
