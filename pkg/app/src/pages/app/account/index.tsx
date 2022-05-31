import { NextPage } from 'next'

import { useCurrentAccountState } from 'hooks/useCurrentAccountState'

import AccountPageGeneralLayout from 'components/Account/generalLayout'
import { Layout } from 'components/Layouts/default/layout'
import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'

const AccountPage: NextPage = () => {
	const accountState = useCurrentAccountState()
	if (!accountState) {
		return <NoWalletConnected />
	}

	return (
		<Layout showHeader showSidebar title="My Account">
			<AccountPageGeneralLayout accountState={accountState} />
		</Layout>
	)
}

export default AccountPage
