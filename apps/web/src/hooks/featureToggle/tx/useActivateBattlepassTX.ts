import { useEffect, useState } from 'react'
import { TransactionData } from 'src/@types/transactionData'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useLogger } from 'src/hooks/useLogger'
import { useNetworkContext } from 'src/providers/network/modules/context'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	battlepassId: Yup.string().required(),
})

export function useActivateBattlepassTX(battlepassId: string): TransactionData {
	const { selectedApiProvider } = useNetworkContext()
	const [txState, setTxState] = useState<TransactionData>(null)
	const address = useCurrentAccountAddress()

	const logger = useLogger('CreateBattlepass')

	useEffect(() => {
		if (!selectedApiProvider?.apiProvider || !address || !battlepassId) return
		logger.log('tx', battlepassId)

		try {
			const payload = { battlepassId: battlepassId }
			logger.log('payload', payload)
			validation.validateSync(payload)

			const tx = selectedApiProvider.apiProvider.tx.battlepass.activateBattlepass(payload.battlepassId)

			setTxState({
				tx,
				title: 'Activate Battlepass',
				description: 'Activate a Battlepass for your organization',
				actionSubTitle: 'This may lock amounts of GAME token in your treasury',
				txMsg: {
					pending: 'activating battlepass...',
					success: 'activated battlepass!',
					error: 'tx failed!',
				},
			})
		} catch (e) {
			logger.error(e)
			if (txState) {
				setTxState(null)
			}
		}
	}, [selectedApiProvider, battlepassId, address, logger, setTxState])

	return txState
}
