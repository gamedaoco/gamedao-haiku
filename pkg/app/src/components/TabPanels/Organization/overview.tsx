import { useCallback, useState } from 'react'

import { Button, Typography } from '@mui/material'
import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'
import { useRemoveMemberTransaction } from 'hooks/tx/useRemoveMemberTransaction'
import { useTranslation } from 'react-i18next'

import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

interface ComponentProps {
	organizationId: string
	isMember: boolean
	isAdmin: boolean
}

export function Overview({ organizationId, isMember, isAdmin }: ComponentProps) {
	const [showTxModalType, setShowTxModalType] = useState<boolean>(false)
	const addMemberTx = useAddMemberTransaction(organizationId)
	const removeMemberTx = useRemoveMemberTransaction(organizationId)
	const { t } = useTranslation()

	const handleOpenTxModal = useCallback(() => {
		setShowTxModalType(true)
	}, [setShowTxModalType])
	const handleCloseTxModal = useCallback(() => {
		setShowTxModalType(false)
	}, [setShowTxModalType])

	return (
		<>
			<Typography>Overview</Typography>
			{!isMember && (
				<>
					<Button variant="contained" disabled={!addMemberTx} onClick={handleOpenTxModal}>
						Join Organization
					</Button>
				</>
			)}
			{isMember && !isAdmin && (
				<>
					<Button variant="contained" disabled={!removeMemberTx} onClick={handleOpenTxModal}>
						Leave Organization
					</Button>
				</>
			)}
			<TransactionDialog
				open={showTxModalType}
				onClose={handleCloseTxModal}
				tx={isMember ? removeMemberTx : addMemberTx}
				txMsg={{
					pending: t(`notification:transactions:${isMember ? 'removeMember' : 'addMember'}:pending`),
					success: t(`notification:transactions:${isMember ? 'removeMember' : 'addMember'}:success`),
					error: t(`notification:transactions:${isMember ? 'removeMember' : 'addMember'}:error`),
				}}
				txCallback={handleCloseTxModal}
			/>
		</>
	)
}
