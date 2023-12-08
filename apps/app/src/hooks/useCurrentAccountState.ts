import { useExtensionContext } from 'src/providers/extension/components/context'
import type { AccountState } from 'src/@types/extension'

export function useCurrentAccountState(): AccountState {
	return useExtensionContext().selectedAccount
}
