import { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { useConfig } from 'src/hooks/useConfig'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useTmpOrganizationState } from 'src/hooks/useTmpOrganizationState'
import { useAddMemberTransaction } from 'src/hooks/tx/useAddMemberTransaction'

// import { createWarningNotification } from 'utils/notificationUtils'
import { useTheme } from '@mui/material/styles'
import { Box, Button, useMediaQuery } from '@mui/material'
import { TransactionDialog } from 'src/components/TransactionDialog/transactionDialog'
import ShareIcon from '@mui/icons-material/Share'

const TransactionModal = ({}) => {}

export type TArgs = {
	id: string
	isMember?: boolean
	isOpe?: boolean
	isPrime?: boolean
}

type TProps = {
	args: TArgs
}

export const Join = ({ args }: TProps) => {
	const { id } = args
	const { data: session } = useSession()

	const isPending = false
	const theme = useTheme()
	const addMemberTx = useAddMemberTransaction(id)
	const address = useCurrentAccountAddress()

	const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
		defaultMatches: true,
	})

	const [isMember, setIsMember] = useState<boolean>(false)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isPrime, setIsPrime] = useState<boolean>(false)
	const [isBattlePass, setIsBattlePass] = useState<boolean>(true)

	const [showTxModalType, setShowTxModalType] = useState<boolean>(false)
	const handleOpenTxModal = useCallback(() => {
		setShowTxModalType(true)
	}, [setShowTxModalType])
	const handleCloseTxModal = useCallback(() => {
		setShowTxModalType(false)
	}, [setShowTxModalType])

	const [txt, setTxt] = useState('')
	useEffect(() => {
		let t = isOpen ? 'Join' : 'Apply'
		if (isMember) t = 'Invite'
		if (isPending) t = 'Pending'
		setTxt(t)
	}, [id, isMember, isOpen, isPending, isPrime])

	const str = encodeURI(`⚔️ Join our Battlepass on GameDAO: https://dev.gamedao.co/battlepass/${id}`)

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
			<TransactionDialog
				open={showTxModalType}
				onClose={handleCloseTxModal}
				txData={addMemberTx}
				txCallback={handleCloseTxModal}
			/>
		</Fragment>
	)
}

export default Join
