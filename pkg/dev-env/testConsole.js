import { ApiPromise, WsProvider } from '@polkadot/api'

async function main() {
	const wsProvider = new WsProvider('wss://rpc.polkadot.io')
	const api = await ApiPromise.create({ provider: wsProvider })
}

main().finally(() => {
	console.log('Goodbye')
})
