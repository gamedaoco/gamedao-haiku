import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { OrganizationTabs } from 'src/@types/enums'

import Overview from './components/Overview'
import Governance from './components/Governance'
import Campaigns from './components/Campaigns'
import Collectables from './components/Treasury'
import Members from './components/Members'
import Settings from './components/Settings'

type Props = {
	param: OrganizationTabs
}

export const Content = () => {
	const { query } = useRouter()

	const Component = ({ param }: OrganizationTabs) => {
		switch (param) {
			case OrganizationTabs.GOVERNANCE:
				return <Governance />
			case OrganizationTabs.CAMPAIGNS:
				return <Campaigns />
			case OrganizationTabs.TREASURY:
				return <Treasury />
			case OrganizationTabs.MEMBERS:
				return <Members />
			case OrganizationTabs.SETTINGS:
				return <Settings />
			default:
				return <Overview />
		}
	}

	return <Component param={query.param} />
}

export default Content
