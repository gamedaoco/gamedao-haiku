import { Button, Typography } from '@mui/material'
import { useRemoveMemberTransaction } from 'hooks/tx/useRemoveMemberTransaction'
import { useTranslation } from 'react-i18next'
import { TransactionData } from 'src/@types/transactionData'

import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

interface ComponentProps {
	organizationId: string
	isMember: boolean
	isAdmin: boolean
	handleOpenTxModal: () => void
	handleCloseTxModal: () => void
	showTxModalType: boolean
	addMemberTx: TransactionData
}

export function Overview({
	organizationId,
	isMember,
	isAdmin,
	handleOpenTxModal,
	handleCloseTxModal,
	showTxModalType,
	addMemberTx,
}: ComponentProps) {
	const removeMemberTx = useRemoveMemberTransaction(organizationId)
	const { t } = useTranslation()

	return (
		<>
			<Typography>{t('button:navigation:overview')}</Typography>
			{isMember && !isAdmin && (
				<>
					<Button variant="contained" disabled={!removeMemberTx} onClick={handleOpenTxModal}>
						{t('button:ui:leave_organization')}
					</Button>
				</>
			)}
			<TransactionDialog
				open={showTxModalType}
				onClose={handleCloseTxModal}
				txData={isMember ? removeMemberTx : addMemberTx}
				txCallback={handleCloseTxModal}
			/>
		</>
	)
}
