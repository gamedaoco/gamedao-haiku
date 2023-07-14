import { useEffect, useState } from 'react'
import { TransactionData } from 'src/@types/transactionData'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useLogger } from 'src/hooks/useLogger'
import { useNetworkContext } from 'src/providers/network/modules/context'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	orgId: Yup.string().required(),
	name: Yup.string().required(),
	cid: Yup.string().required(),
	price: Yup.number().required(),
})

type TArgs = {
	orgId?: string
	name?: string
	cid?: string
	price?: number
}

export function useCreateBattlepassTX(orgId: string, name: string, cid: string = '', price: number): TransactionData {
	const { selectedApiProvider } = useNetworkContext()
	const [txState, setTxState] = useState<TransactionData>(null)
	const address = useCurrentAccountAddress()

	const logger = useLogger('CreateBattlepass')

	useEffect(() => {
		if (!selectedApiProvider?.apiProvider || !address || !orgId || !name || !price || !cid) return
		logger.log('tx', orgId, name, cid, price)

		try {
			const payload = { orgId: orgId, name: name, cid: cid, price: price }
			logger.log('payload', payload)
			validation.validateSync(payload)

			const tx = selectedApiProvider.apiProvider.tx.battlepass.createBattlepass(
				payload.orgId,
				payload.name,
				payload.cid,
				payload.price,
			)

			setTxState({
				tx,
				title: 'Create Battlepass',
				description: 'Create a Battlepass for your organization',
				actionSubTitle: 'This may lock amounts of GAME token in your treasury',
				txMsg: {
					pending: 'creating battlepass...',
					success: 'created battlepass!',
					error: 'tx failed!',
				},
			})
		} catch (e) {
			logger.error(e)
			if (txState) {
				setTxState(null)
			}
		}
	}, [selectedApiProvider, orgId, address, logger, setTxState])

	return txState
}
