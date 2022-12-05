import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'
import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'

// import { createWarningNotification } from 'src/utils/notificationUtils'
import { useTheme } from '@mui/material/styles'
import { Button } from '@mui/material'
import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

export type TArgs = {
	id: string
	isMember: boolean
	isOpen: boolean
	isPrime: boolean
}

type TProps = {
	args: TArgs
}

export const Join = ({ args }): TProps => {
	const { id, isMember, isPrime, isOpen } = args
	// TODO: add state pending
	const isPending = false

	const theme = useTheme()

	const addMemberTx = useAddMemberTransaction(id)
	const address = useCurrentAccountAddress()

	const [showTxModalType, setShowTxModalType] = useState<boolean>(false)

	const handleOpenTxModal = useCallback(() => {
		setShowTxModalType(true)
	}, [setShowTxModalType])

	const handleCloseTxModal = useCallback(() => {
		setShowTxModalType(false)
	}, [setShowTxModalType])

	const [txt, setTxt] = useState('')

	useEffect(() => {
		// TODO: add state pending
		let t = isOpen ? 'Join' : 'Apply'
		if (isMember) t = 'Invite'
		setTxt(t)
	}, [id, isMember, isOpen, isPrime])

	return !isMember ? (
		<>
			<Button
				// TODO: add state pending
				disabled={!isOpen}
				onClick={handleOpenTxModal}
				variant="lemon"
			>
				{txt}
			</Button>
			<TransactionDialog
				open={showTxModalType}
				onClose={handleCloseTxModal}
				txData={addMemberTx}
				txCallback={handleCloseTxModal}
			/>
		</>
	) : null
}

export default Join
