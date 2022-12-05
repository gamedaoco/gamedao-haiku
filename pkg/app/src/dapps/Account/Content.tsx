import React, { useCallback } from 'react'
import { AccountTabs } from 'constants/account'

import Overview from './components/Overview'
import Organizations from './components/Organizations'
import Campaigns from './components/Campaigns'
import Collectables from './components/Collectables'
import Identity from './components/Identity'
import Settings from './components/Settings'

interface Props {
	param: AccountTabs
}

export function Content({ param }: Props) {
	const reroute = useCallback(() => {
		switch (param) {
			case AccountTabs.CAMPAIGNS:
				return <Campaigns />
			case AccountTabs.ORGANIZATIONS:
				return <Organizations />
			case AccountTabs.COLLECTABLES:
				return <Collectables />
			case AccountTabs.IDENTITY:
				return <Identity />
			case AccountTabs.SETTINGS:
				return <Settings />
			default:
				return <Overview />
		}
	}, [param])

	return <>{reroute()}</>
}
