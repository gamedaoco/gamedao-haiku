import AccountPageGeneralLayout from 'components/Account/generalLayout'
import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { Layout } from 'components/Layouts/default/layout'
import { NextPage } from 'next'

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