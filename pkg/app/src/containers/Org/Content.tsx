import React, { useCallback } from 'react'

import { OrganizationTabs } from 'src/@types/organisation'

import Overview from './components/Overview'
import Governance from './components/Governance'
import Campaigns from './components/Campaigns'
import Collectables from './components/Treasury'
import Identity from './components/Members'
import Settings from './components/Settings'

interface Props {
	param: ContainerTabs
}

export function Content({ param }: Props) {
	const reroute = useCallback(() => {
		switch (param) {
			case ContainerTabs.GOVERNANCE:
				return <Governance />
			case ContainerTabs.CAMPAIGNS:
				return <Campaigns />
			case ContainerTabs.TREASURY:
				return <Treasury />
			case ContainerTabs.MEMBERS:
				return <Members />
			case ContainerTabs.SETTINGS:
				return <Settings />
			default:
				return <Overview />
		}
	}, [param])

	return <>{reroute()}</>
}
