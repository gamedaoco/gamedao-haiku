import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useRouter } from 'next/router'
import React, { FC, ReactNode, useEffect, useState } from 'react'

interface AccountGuardProps {
	children: ReactNode
}

const AccountGuard: FC<AccountGuardProps> = ({ children }) => {
	const router = useRouter()
	const accountState = useCurrentAccountState()
	const [checked, setChecked] = useState(false)

	useEffect(() => {
		if (!router.isReady) {
			return
		}

		if (!accountState) {
			setChecked(false)
		} else {
			setChecked(true)
		}
	}, [accountState, router.isReady])

	if (!checked) {
		return <NoWalletConnected />
	}

	// If got here, it means that the redirect did not occur, and that tells us that the account connected

	return <>{children}</>
}

export default AccountGuard
