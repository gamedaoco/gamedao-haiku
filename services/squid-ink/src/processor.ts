import {assertNotNull} from '@subsquid/util-internal'
import {toHex} from '@subsquid/util-internal-hex'
import * as ss58 from '@subsquid/ss58'
import {
    BlockHeader,
    DataHandlerContext,
    SubstrateBatchProcessor,
    SubstrateBatchProcessorFields,
    Event as _Event,
    Call as _Call,
    Extrinsic as _Extrinsic
} from '@subsquid/substrate-processor'

export const SS58_NETWORK = 'astar' // used for the ss58 prefix, astar shares it with shibuya

const CONTRACT_ADDRESS_SS58 = 'XnrLUQucQvzp5kaaWLG9Q3LbZw5DPwpGn69B5YcywSWVr5w'
export const CONTRACT_ADDRESS = ss58.codec(SS58_NETWORK).decode(CONTRACT_ADDRESS_SS58)

export const processor = new SubstrateBatchProcessor()
    // Lookup archive by the network name in Subsquid registry
    // See https://docs.subsquid.io/substrate-indexing/supported-networks/
    .setGateway('https://v2.archive.subsquid.io/network/shibuya-substrate')
    // Chain RPC endpoint is required on Substrate for metadata and real-time updates
    .setRpcEndpoint({
        // Set via .env for local runs or via secrets when deploying to Subsquid Cloud
        // https://docs.subsquid.io/deploy-squid/env-variables/
        url: assertNotNull(process.env.RPC_SHIBUYA_SUBSTRATE_HTTP, 'No RPC endpoint supplied'),
        // More RPC connection options at https://docs.subsquid.io/substrate-indexing/setup/general/#set-data-source
        rateLimit: 10
    })
    .addContractsContractEmitted({
        contractAddress: [CONTRACT_ADDRESS],
        extrinsic: true
    })
    .setFields({
        block: {
            timestamp: true
        },
        extrinsic: {
            hash: true
        }
    })
    .setBlockRange({
        // genesis block happens to not have a timestamp, so it's easier
        // to start from 1 in cases when the deployment height is unknown
        from: 1
    })

export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
