import { ISystemProperties } from '../types/system-properties';
import { ApiPromise } from '@polkadot/api';
export interface BalanceReturnType {
    balanceRaw: bigint | null;
    balanceFormatted: string | null;
}
export declare const getAccountBalance: (account: string, systemProperties: ISystemProperties, api: ApiPromise, callback: (balance: BalanceReturnType) => void) => void;
//# sourceMappingURL=get-account-balance.d.ts.map