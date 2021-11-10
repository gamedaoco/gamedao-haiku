import { ISystemProperties } from '../types/system-properties';
import { ApiPromise } from '@polkadot/api';
import { BalanceReturnType } from './get-account-balance';
export declare const getAssetBalance: (account: string, assetId: number, api: ApiPromise, callback: (balance: BalanceReturnType) => void, systemProperties: ISystemProperties | null) => Promise<void>;
//# sourceMappingURL=get-asset-balance.d.ts.map