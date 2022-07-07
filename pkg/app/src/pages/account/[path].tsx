import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { AccountPageGeneralLayout } from 'components/Account/generalLayout'
import { Layout } from 'components/Layouts/default/layout'
import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'
import { useRouter } from 'next/router'
import { AccountTabs } from 'src/@types/account'

export function AccountPage() {
	const { query } = useRouter()
	const param = query?.path
	const accountState = useCurrentAccountState()
	if (!accountState) {
		return <NoWalletConnected />
	}

	return (
		<Layout showHeader showSidebar title="My Account">
			<AccountPageGeneralLayout param={param as AccountTabs} />
		</Layout>
	)
}

export default AccountPage
