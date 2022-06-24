// Imports
import {
	EventHandlerContext,
	EventHandlerOptions,
	ExtrinsicHandlerContext,
	ExtrinsicHandlerOptions,
} from '@subsquid/substrate-processor';

// Types
interface IPalletActionHandler<TContext, TOptions> {
	action: string;
	options?: TOptions;
	handler?: (context: TContext) => Promise<void>;
}

type IPalletEventHandler = IPalletActionHandler<EventHandlerContext, EventHandlerOptions>;
type IPalletExtrinsicHandler = IPalletActionHandler<ExtrinsicHandlerContext, ExtrinsicHandlerOptions>;

interface IPallet {
	name: string;
	extrinsicHandlers: IPalletExtrinsicHandler[];
	eventHandlers: IPalletEventHandler[];
}

// Exports
export { IPalletActionHandler, IPalletEventHandler, IPalletExtrinsicHandler, IPallet };
