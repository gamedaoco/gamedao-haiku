import { ContentTabs } from 'constants/battlepass'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { Content } from './Content'

type TProps = {
	param?: ContentTabs
}
export function Account({ param }: TProps) {
	return (
		<>
			<Header />
			<Navigation />
			<Content param={param} />
		</>
	)
}

export default Account
