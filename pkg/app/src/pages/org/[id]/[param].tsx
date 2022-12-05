import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useCurrentAccountState } from 'hooks/useCurrentAccountState'
import { Layout } from 'layouts/default'
import Organization from 'dapps/Org'
import { NoWalletConnected } from 'components/NoWalletConnected/noWalletConnected'

export function Page() {
	const { t } = useTranslation()
	const accountState = useCurrentAccountState()
	if (!accountState) {
		return <NoWalletConnected />
	}

	return (
		<Layout noBorder showHeader title={t('page:account:title')}>
			<Organization />
		</Layout>
	)
}

export default Page
