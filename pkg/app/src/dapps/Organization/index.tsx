import { ContentTabs } from 'constants/battlepass'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { Content } from './Content'

interface Props {
	param: ContentTabs
}
export function Account() {
	return (
		<>
			<Header />
			<Navigation />
			<Content />
		</>
	)
}

export default Account
