import { useEffect, useState } from 'react'
import { TransactionData } from 'src/@types/transactionData'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useLogger } from 'src/hooks/useLogger'
import { useNetworkContext } from 'src/providers/network/modules/context'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	battlepassId: Yup.string().required(),
	bot: Yup.string().required(),
})

export function useLinkBotTX(battlepassId: string, bot: string): TransactionData {
	const { selectedApiProvider } = useNetworkContext()
	const [txState, setTxState] = useState<TransactionData>(null)
	const address = useCurrentAccountAddress()

	const logger = useLogger('LinkBot')

	useEffect(() => {
		if (!selectedApiProvider?.apiProvider || !address || !battlepassId || !bot) return

		try {
			const payload = { battlepassId: battlepassId, bot: bot }
			logger.log('payload', payload)
			validation.validateSync(payload)

			const tx = selectedApiProvider.apiProvider.tx.battlepass.addBot(payload.battlepassId, payload.bot)

			setTxState({
				tx,
				title: 'Link Battlepass Bot Account',
				description: 'Link a Bot account to your battlepass',
				actionSubTitle: '',
				txMsg: {
					pending: 'linking address...',
					success: 'linked address!',
					error: 'tx failed!',
				},
			})
		} catch (e) {
			logger.error(e)
			if (txState) {
				setTxState(null)
			}
		}
	}, [selectedApiProvider, battlepassId, bot, address, logger, setTxState])

	return txState
}
