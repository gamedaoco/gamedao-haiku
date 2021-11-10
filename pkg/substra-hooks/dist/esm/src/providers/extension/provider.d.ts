import { ReactNode } from 'react';
interface ExtensionProviderProps {
    children: ReactNode;
    extensionName?: string;
    autoInitialiseExtension?: boolean;
}
export declare const ExtensionProvider: ({ children, autoInitialiseExtension, extensionName, }: ExtensionProviderProps) => JSX.Element;
export {};
//# sourceMappingURL=provider.d.ts.map