import { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'
import { useJoinBattlePassTX } from 'hooks/tx/useJoinBattlePassTX'

// import { createWarningNotification } from 'src/utils/notificationUtils'
import { useTheme } from '@mui/material/styles'
import { Button } from '@mui/material'
import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

export type TArgs = {
	id: string
}

type TProps = {
	args: TArgs
}

export const BPBuyBtn = ({ args }: TProps) => {
	const { id } = args
	const theme = useTheme()

	const joinBattlePassTX = useJoinBattlePassTX(id)
	const address = useCurrentAccountAddress()

	const [isBattlePass, setIsBattlePass] = useState<boolean>(false)

	const [showTxModalType, setShowTxModalType] = useState<boolean>(false)

	const handleOpenTxModal = useCallback(() => {
		setShowTxModalType(true)
	}, [setShowTxModalType])

	const handleCloseTxModal = useCallback(() => {
		setShowTxModalType(false)
	}, [setShowTxModalType])

	// if (!isBattlePass) return null

	return (
		<Fragment>
			<Button
				// TODO: add state pending
				disabled={isBattlePass}
				onClick={handleOpenTxModal}
				variant="lemon"
				// fullWidth
			>
				Join BattlePass
			</Button>
			<TransactionDialog
				open={showTxModalType}
				onClose={handleCloseTxModal}
				txData={joinBattlePassTX}
				txCallback={handleCloseTxModal}
			/>
		</Fragment>
	)
}
