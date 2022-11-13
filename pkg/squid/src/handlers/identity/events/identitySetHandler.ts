import { IdentityUpsertData } from '../../../@types/identity'
import { upsertIdentity } from '../../../database/identity'
import { encodeSigner, hexStringToString } from '../../../utils'
import { EventHandlerContext } from '@subsquid/substrate-processor'

async function handleIdentitySetEvent(context: EventHandlerContext) {
	if (!context.extrinsic) return

	const getValue = (data: string | undefined) => (data ? hexStringToString(data) : null)

	const identityData = context.extrinsic.args[0].value as { [key: string]: any }

	const upsertData: IdentityUpsertData = {
		address: encodeSigner(context.extrinsic.signer),
		displayName: getValue(identityData.display?.raw),
		legalName: getValue(identityData.legal?.raw),
		email: getValue(identityData.email?.raw),
		riot: getValue(identityData.riot?.raw),
		image: getValue(identityData.image?.raw),
		twitter: getValue(identityData.twitter?.raw),
		web: getValue(identityData.web?.raw),
		web3name: getValue(identityData.web3name?.raw),
		discord: getValue(identityData.discord?.raw),
	}

	await upsertIdentity(context.store, upsertData.address, upsertData)
}

export { handleIdentitySetEvent }
