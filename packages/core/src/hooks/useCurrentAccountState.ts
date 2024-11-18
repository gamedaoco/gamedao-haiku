import { useExtensionContext } from 'src/providers/extension/components/context'
import type { AccountState } from '@gamedao/core/@types/extension'

export function useCurrentAccountState(): AccountState {
	return useExtensionContext().selectedAccount
}
