import type { AccountState } from 'src/@types/extension'
import { useExtensionContext } from 'src/providers/extension/modules/context'

export function useCurrentAccountState(): AccountState {
	return useExtensionContext().selectedAccount
}
