import React, { useCallback } from 'react'
import { AccountTabs } from 'src/@types/account'

import Overview from './components/Overview'
import Organisations from './components/Organisations'
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
				return <Organisations />
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
