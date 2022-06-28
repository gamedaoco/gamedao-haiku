import { gql, request } from 'graphql-request'

import { RmrkNft } from '../../../@types/schema'
import { getKusamaAddressFromAddress } from '../../../utils/accountUtils'

interface ResolverArgs {
	address: string
}

export async function nftsResolver(_: any, args: ResolverArgs): Promise<RmrkNft[]> {
	try {
		const kusamaAddress = getKusamaAddressFromAddress(args.address)
		const query = gql`
			{
				nfts(where: { owner: { _eq: ${kusamaAddress} } }) {
					id
					metadata
					sn
				}
			}
		`

		const data = await request('https://gql-rmrk2-prod.graphcdn.app/', query)
		return data?.nfts ?? []
	} catch (e) {
		console.error('RMRK nft cannot be loaded', e)
	}
	return [] as any
}
