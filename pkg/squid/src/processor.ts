// Imports
import { archiveGQL, chainRPC, startBlock } from './config.json';
// Constants
import { EXTRINSIC_SUCCESS } from './constants/extrinsics';
// Handlers
import { eventHandlers, extrinsicHandlers } from './handlerMapping';
import './loadConfig';
// Types
import { SubstrateProcessor, EventHandlerOptions, ExtrinsicHandlerOptions } from '@subsquid/substrate-processor';

// Defaults
const defaultExtrinsicOptions: ExtrinsicHandlerOptions = { triggerEvents: [EXTRINSIC_SUCCESS] };
const defaultEventOptions: EventHandlerOptions = {};

// Init substrate processor
const processor = new SubstrateProcessor('gamedao_protocol_indexer');

processor.setTypesBundle('zeroTypesBundle.json');
processor.setBatchSize(500);

if (startBlock !== -1) {
	processor.setBlockRange({
		from: startBlock,
	});
}

processor.setDataSource({
	archive: archiveGQL,
	chain: chainRPC,
});

// Add handlers
extrinsicHandlers.forEach((extrinsicHandler) => {
	if (!extrinsicHandler.handler) return;

	processor.addExtrinsicHandler(
		extrinsicHandler.action,
		extrinsicHandler.options ?? defaultExtrinsicOptions,
		extrinsicHandler.handler,
	);
});

eventHandlers.forEach((eventHandler) => {
	if (!eventHandler.handler) return;

	processor.addEventHandler(eventHandler.action, defaultEventOptions, eventHandler.handler);
});

// Start processing
processor.run();
