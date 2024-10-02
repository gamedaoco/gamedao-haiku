import { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { useConfig } from 'src/hooks/useConfig'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useTmpOrganizationState } from 'src/hooks/useTmpOrganizationState'
import { useAddMemberTransaction } from 'hooks/tx/useAddMemberTransaction'

// import { createWarningNotification } from 'src/utils/notificationUtils'
import { useTheme } from '@mui/material/styles'
import { Box, Button, useMediaQuery } from '@mui/material'
import { TransactionDialog } from 'components/molecules/TransactionDialog/transactionDialog'
import ShareIcon from '@mui/icons-material/Share'

const TransactionModal = ({}) => {}

import { TProps } from '../views/Collective'

export const Join = ({ args }: TProps) => {
	const { id, isMember, isPrime, isOpen } = args
	const { data: session } = useSession()

	const isPending = false

	const theme = useTheme()
	const addMemberTx = useAddMemberTransaction(id)
	const address = useCurrentAccountAddress()

	const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
		defaultMatches: true,
	})

	// const [tx,setTx] = useState(addMemberTx)
	// const [showTxModalType, setShowTxModalType] = useState(false)
	// const handleOpenTxModal = useCallback(() => {
	// 	setShowTxModalType(true)
	// }, [setShowTxModalType])
	// const handleCloseTxModal = useCallback(() => {
	// 	setShowTxModalType(false)
	// }, [setShowTxModalType])

	const [txt, setTxt] = useState('')

	useEffect(() => {
		let t = isOpen ? 'Join' : 'Apply'
		if (isMember) t = 'Invite'
		if (isPending) t = 'Pending'
		setTxt(t)
	}, [id, isMember, isOpen, isPending, isPrime])

	const str = encodeURI(`⚔️ Join me on GameDAO: https://app.gamedao.co/unity/${id}`)

	const openInviteModal = () => {}

	return !address ? null : (
		<Fragment>
			<Box py={2} pr={2}>
				{isMember && (
					<a href={`https://twitter.com/intent/tweet?text=${str}`} target="_blank" rel="noreferrer">
						<Button sx={{ mr: [0, 2] }} variant="text" color="secondary" endIcon={<ShareIcon />}>
							share
						</Button>
					</a>
				)}
				{!isMember && (
					<Button
						// TODO: add state pending
						// disabled={!isOpen}
						onClick={isMember ? openInviteModal : handleOpenTxModal}
						variant={isMember ? `pink` : `lemon`}
					>
						{txt}
					</Button>
				)}
			</Box>
			<TransactionDialog open={showTxModalType} onClose={handleCloseTxModal} txData={tx} txCallback={handleCloseTxModal} />
		</Fragment>
	)
}

export default Join
