import { useEffect, useState } from 'react'

import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useLogger } from 'src/hooks/useLogger'
import { useNetworkContext } from 'src/providers/network/components/context'
import { useTranslation } from 'react-i18next'
import { TransactionData } from 'src/@types/transactionData'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	battlepassId: Yup.string().required(),
	accountId: Yup.string().required(),
})

export function useJoinBattlePassTX(battlepassId: string): TransactionData {
	const { t } = useTranslation()
	const { selectedApiProvider } = useNetworkContext()
	const [txState, setTxState] = useState<TransactionData>(null)

	const address = useCurrentAccountAddress()
	const logger = useLogger('useJoinBattlePassTX')

	useEffect(() => {
		if (selectedApiProvider?.apiProvider && address && battlepassId) {
			try {
				// Data mapping
				const mappedData = {
					battlepassId: battlepassId,
					accountId: address,
				}

				// Data validation
				validation.validateSync(mappedData)

				const tx = selectedApiProvider.apiProvider.tx.battlepass.claimBattlepass(
					mappedData.battlepassId,
					mappedData.accountId,
				)

				setTxState({
					tx,
					title: 'Join Battlepass',
					description: t('transactions:addMember:description'),
					actionSubTitle: t('transactions:addMember:action_subtitle'),
					txMsg: {
						pending: 'joining battlepass...',
						success: 'joined battlepass!',
						error: 'tx failed!',
					},
				})
			} catch (e) {
				logger.trace(e)
				if (txState) {
					setTxState(null)
				}
			}
		}
	}, [selectedApiProvider, address, battlepassId, logger, t, setTxState])

	return txState
}
