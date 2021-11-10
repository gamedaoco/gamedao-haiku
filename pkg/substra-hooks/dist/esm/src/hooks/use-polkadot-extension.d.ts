import { ExtensionState } from '../providers/extension';
import { ISystemProperties } from '../types/system-properties';
interface UsePolkadotExtensionReturnType extends ExtensionState {
    w3enable: () => void;
}
export declare const checkEnabled: (extensionName: string, systemProperties: ISystemProperties) => Promise<{
    accounts: any;
    w3Enabled: boolean;
}>;
export declare const usePolkadotExtension: () => UsePolkadotExtensionReturnType;
export {};
//# sourceMappingURL=use-polkadot-extension.d.ts.map