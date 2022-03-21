import { useExtensionContext } from 'provider/extension/modules/context'
import type { AccountState } from 'src/@types/extension'

export function useCurrentAccountState(): AccountState {
	return useExtensionContext().selectedAccount
}
