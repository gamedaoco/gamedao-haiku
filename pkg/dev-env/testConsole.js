const { Blob } = require('node:buffer')
const { faker } = require('@faker-js/faker')
const { ApiPromise, WsProvider } = require('@polkadot/api')
const { Keyring } = require('@polkadot/keyring')
const { cryptoWaitReady } = require('@polkadot/util-crypto')
const fetch = require('node-fetch')
const readline = require('readline')

const blockTime = 3
const blocksPerDay = (24 * 60 * 60) / blockTime
const blockFactor = blockTime * (60 / blockTime) * 60 * 24

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

async function updateBalance(api, signer, address) {
	await api.tx.sudo.sudo(api.tx.currencies.updateBalance(address, 0, '100000000000000000000')).signAndSend(signer)
	await sleep(4000)
	await api.tx.sudo.sudo(api.tx.currencies.updateBalance(address, 1, '100000000000000000000')).signAndSend(signer)
	await sleep(4000)
	await api.tx.sudo.sudo(api.tx.currencies.updateBalance(address, 2, '100000000000000000000')).signAndSend(signer)
	await sleep(4000)
}

async function uploadFileToIpfs(file) {
	const { create } = await import('ipfs-http-client')
	try {
		const auth =
			'Basic ' +
			Buffer.from('1v04L2wj5JmI0JgKF5KztV0oN8o' + ':' + '85547c6003abb67a6335469d1aa6a3a3').toString('base64')
		const client = await create({
			url: 'https://ipfs.infura.io:5001/api/v0',
			headers: {
				authorization: auth,
			},
		})

		const ipfsResult = await client.add(file, { pin: true })
		return ipfsResult.cid?.toString()
	} catch (err) {
		console.error(err)
		console.error('Ipfs upload failed')
	}

	return null
}

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

let currentBlockNumber = 0

async function main() {
	const wsProvider = new WsProvider('ws://localhost:9944')
	const api = await ApiPromise.create({ provider: wsProvider })
	await api.isReady
	await cryptoWaitReady()
	const keyring = new Keyring({ type: 'sr25519', ss58Format: 25 })
	const alice = keyring.addFromUri('//Alice')
	const bob = keyring.addFromUri('//Bob')

	api.derive.chain.bestNumberFinalized((result) => {
		currentBlockNumber = result.toNumber()
	})

	console.log('Init accounts')
	console.log(`Update alice balances`)
	await updateBalance(api, alice, alice.address)
	console.log(`Update bob balances`)
	await updateBalance(api, alice, bob.address)

	while (true) {
		const command = await new Promise((res) => rl.question('Please enter command: ', res))

		const params = command.split(' ')

		if (command === 'help') {
			await help()
		} else if (command.startsWith('createdao') || command.startsWith('cd')) {
			if (params.length !== 2 && params.length !== 3) {
				console.log('Invalid amount of params! Use command help for more information.')
			}

			const signer = params[1] === 'alice' ? alice : params[1] === 'bob' ? bob : null
			if (!signer) {
				console.log('Invalid signer! Use command help for more information.')
			}

			const amount = params[2] ?? 1

			for (let i = 0; i < amount; i++) {
				await createDao(api, signer)
			}
		} else if (command.startsWith('createcampaign') || command.startsWith('cc')) {
			if (params.length !== 3 && params.length !== 4) {
				console.log('Invalid amount of params! Use command help for more information.')
			}

			const signer = params[1] === 'alice' ? alice : params[1] === 'bob' ? bob : null
			if (!signer) {
				console.log('Invalid signer! Use command help for more information.')
			}

			const daoHash = params[2]

			if (!daoHash || !daoHash.startsWith('0x')) {
				{
					console.log('Invalid dao hash! Use command help for more information.')
				}
			}

			const amount = params[3] ?? 1

			for (let i = 0; i < amount; i++) {
				await createCampaign(api, signer, daoHash)
			}
		}
	}
}

async function help() {
	console.log('Available commands:')
	console.log('- cretedao/cd <Signer alice | bob> <amount optional>')
	console.log('- createcampaign/cc <Signer alice | bob> <daohash | hash> <amount optional>')
}

async function createDao(api, signer) {
	const orgLogo = await fetch('https://picsum.photos/200')
	const orgHeader = await fetch('https://picsum.photos/1024/576')
	const logoCID = await uploadFileToIpfs(new Blob([await orgLogo.buffer()], { type: 'image/jpeg' }))
	const headerCID = await uploadFileToIpfs(new Blob([await orgHeader.buffer()], { type: 'image/jpeg' }))
	if (!logoCID || !headerCID) {
		console.log('Image upload failed')
		return
	}

	const metaData = {
		name: faker.company.companyName(),
		description: faker.commerce.productDescription(),
		logo: logoCID,
		header: headerCID,
	}

	const file = new Blob([JSON.stringify(metaData)], { type: 'text/plain' })

	const metadataCid = await uploadFileToIpfs(file)
	if (!metadataCid) {
		console.log('Metadata upload failed')
		return
	}

	const mappedData = {
		controller_id: signer.address,
		name: '',
		cid: metadataCid,
		org_type: 0,
		access: 0,
		fee_model: 0,
		fee: 0,
		gov_asset: 2,
		pay_asset: 1,
		member_limit: 0,
		deposit: '1000000000000000000',
	}
	const hash = await api.tx.control
		.createOrg(
			mappedData.controller_id,
			mappedData.name,
			mappedData.cid,
			mappedData.org_type,
			mappedData.access,
			mappedData.fee_model,
			mappedData.fee,
			mappedData.gov_asset,
			mappedData.pay_asset,
			mappedData.member_limit,
			mappedData.deposit,
		)
		.signAndSend(signer)
	await sleep(4000)
	console.log(`Created dao tx hash: ${hash.toString()}`)
}

async function createCampaign(api, signer, daoHash) {
	const treasuryAddress = (await api.query.control.orgTreasury(daoHash)).toHuman()
	console.log(`Treasury address: ${treasuryAddress}`)
	console.log('Update treasury balance')
	await updateBalance(api, signer, treasuryAddress)

	const headerImage = await fetch('https://picsum.photos/1024/576')
	const headerCID = await uploadFileToIpfs(new Blob([await headerImage.buffer()], { type: 'image/jpeg' }))

	if (!headerCID) {
		console.log('Image upload failed')
		return
	}
	const name = faker.commerce.productName()

	const file = new Blob(
		[
			JSON.stringify({
				name: name,
				markdown: faker.commerce.productDescription(),
				description: faker.commerce.productDescription(),
				logo: '',
				title: '',
				header: headerCID,
				email: '',
			}),
		],
		{ type: 'text/plain' },
	)

	const metadataCid = await uploadFileToIpfs(file)
	if (!metadataCid) {
		console.log('Metadata upload failed')
		return
	}

	const mappedData = {
		orgId: daoHash,
		adminId: signer.address,
		name: name,
		target: '10000000000000000000',
		deposit: '1000000000000000000',
		expiry: currentBlockNumber + blocksPerDay,
		protocol: 0,
		governance: 0,
		cid: metadataCid,
		tokenSymbol: 'PLAY',
		tokenName: 'PLAY',
	}

	const hash = await api.tx.flow
		.createCampaign(
			mappedData.orgId,
			mappedData.adminId,
			mappedData.name,
			mappedData.target,
			mappedData.deposit,
			mappedData.expiry,
			mappedData.protocol,
			mappedData.governance,
			mappedData.cid,
			mappedData.tokenSymbol,
			mappedData.tokenName,
		)
		.signAndSend(signer)
	await sleep(4000)
	console.log(`Campaign created tx hash: ${hash.toString()}`)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
	.finally(() => {
		console.log('Goodbye')
	})
