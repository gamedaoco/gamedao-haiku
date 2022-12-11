import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { Layout } from 'layouts/default'
import Organization from 'dapps/Organization'
import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'
import { ContentTabs } from 'constants/battlepass'

export function Page() {
	const { t } = useTranslation()
	const { query } = useRouter()
	const tab = query.tab as ContentTabs
	const accountState = useCurrentAccountState()
	if (!accountState) {
		return <NoWalletConnected />
	}

	return (
		<Layout noBorder showHeader title={t('page:account:title')}>
			<Organization param={tab} />
		</Layout>
	)
}

export default Page
