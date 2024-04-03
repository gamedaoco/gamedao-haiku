import { useExtensionContext } from 'src/providers/extension/components/context'
import type { AccountState } from 'src/@types/extension'

export function useAddresses(): string[] {
	return useExtensionContext()?.accounts?.map((account: AccountState) => account.account?.address) ?? []
}
