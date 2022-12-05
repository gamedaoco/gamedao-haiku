import { AccountTabs } from 'constants/account'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { Content } from './Content'

interface Props {
	param: AccountTabs
}
export function Account({ param }: Props) {
	return (
		<>
			<Header />
			<Navigation param={param} />
			<Content param={param} />
		</>
	)
}

export default Account
