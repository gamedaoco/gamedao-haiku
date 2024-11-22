import {In} from 'typeorm'
import assert from 'assert'

import * as ss58 from '@subsquid/ss58'
import {Store, TypeormDatabase} from '@subsquid/typeorm-store'

import * as erc20 from './abi/erc20'
import {Owner, Transfer} from "./model"
import {
    processor,
    SS58_NETWORK,
    CONTRACT_ADDRESS,
    ProcessorContext
} from './processor'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async ctx => {
    const txs: TransferRecord[] = getTransferRecords(ctx)

    const owners: Map<string, Owner> = await createOwners(ctx, txs)
    const transfers: Transfer[] = createTransfers(txs, owners)

    await ctx.store.upsert([...owners.values()])
    await ctx.store.insert(transfers)
})

interface TransferRecord {
    id: string
    from?: string
    to?: string
    amount: bigint
    block: number
    timestamp: Date
    extrinsicHash: string
}

function getTransferRecords(ctx: ProcessorContext<Store>): TransferRecord[] {
    const records: TransferRecord[] = []
    for (const block of ctx.blocks) {
        assert(block.header.timestamp, `Block ${block.header.height} had no timestamp`)
        for (const event of block.events) {
            if (event.name === 'Contracts.ContractEmitted' && event.args.contract === CONTRACT_ADDRESS) {
                assert(event.extrinsic, `Event ${event} arrived without a parent extrinsic`)
                const decodedEvent = erc20.decodeEvent(event.args.data)
                if (decodedEvent.__kind === 'Transfer') {
                    records.push({
                        id: event.id,
                        from: decodedEvent.from && ss58.codec(SS58_NETWORK).encode(decodedEvent.from),
                        to: decodedEvent.to && ss58.codec(SS58_NETWORK).encode(decodedEvent.to),
                        amount: decodedEvent.value,
                        block: block.header.height,
                        timestamp: new Date(block.header.timestamp),
                        extrinsicHash: event.extrinsic.hash
                    })
                }
            }
        }
    }
    return records
}

async function createOwners(ctx: ProcessorContext<Store>, txs: TransferRecord[]): Promise<Map<string, Owner>> {
    const ownerIds = new Set<string>()
    txs.forEach(tx => {
        if (tx.from) {
            ownerIds.add(tx.from)
        }
        if (tx.to) {
            ownerIds.add(tx.to)
        }
    })

    const ownersMap = await ctx.store.findBy(Owner, {
        id: In([...ownerIds])
    }).then(owners => {
        return new Map(owners.map(owner => [owner.id, owner]))
    })

    return ownersMap
}


function createTransfers(txs: TransferRecord[], owners: Map<string, Owner>): Transfer[] {
    return txs.map(tx => {
        const transfer = new Transfer({
            id: tx.id,
            amount: tx.amount,
            block: tx.block,
            timestamp: tx.timestamp,
            extrinsicHash: tx.extrinsicHash
        })

        if (tx.from) {
            transfer.from = owners.get(tx.from)
            if (transfer.from == null) {
                transfer.from = new Owner({id: tx.from, balance: 0n})
                owners.set(tx.from, transfer.from)
            }
            transfer.from.balance -= tx.amount
        }

        if (tx.to) {
            transfer.to = owners.get(tx.to)
            if (transfer.to == null) {
                transfer.to = new Owner({id: tx.to, balance: 0n})
                owners.set(tx.to, transfer.to)
            }
            transfer.to.balance += tx.amount
        }

        return transfer
    })
}
