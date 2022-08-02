import { useRouter } from 'next/router'

import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { useTranslation } from 'react-i18next'
import { AccountTabs } from 'src/@types/account'

import { AccountPageGeneralLayout } from 'components/Account/generalLayout'
import { Layout } from 'components/Layouts/default/layout'
import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'

export function AccountByTab() {
	const { t } = useTranslation()
	const { query } = useRouter()
	const param = query?.path
	const accountState = useCurrentAccountState()
	if (!accountState) {
		return <NoWalletConnected />
	}

	return (
		<Layout showHeader showSidebar title={t('page:account:title')}>
			<AccountPageGeneralLayout param={param as AccountTabs} />
		</Layout>
	)
}

export default AccountByTab
