import AccountPageGeneralLayout from 'components/Account/general-layout'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { Layout } from 'layouts/default/layout'
import { NextPage } from 'next'

const AccountPage: NextPage = () => {
	const accountState = useCurrentAccountState()

	return (
		<Layout showHeader showSidebar title="My Account">
			<AccountPageGeneralLayout accountState={accountState} />
		</Layout>
	)
}

export default AccountPage
