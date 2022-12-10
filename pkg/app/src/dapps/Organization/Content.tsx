import React, { useCallback } from 'react'
import { ContentTabs } from 'constants/battlepass'

import Overview from './components/Overview'
import Campaigns from './components/Campaigns'
// import Organizations from './components/Organizations'
// import Collectables from './components/Collectables'
// import Identity from './components/Identity'
// import Settings from './components/Settings'

interface Props {
	param: ContentTabs
}

export function Content({ param }: Props) {
	const reroute = useCallback(() => {
		switch (param) {
			// case ContentTabs.BATTLEPASS:
			// 	return <Campaigns />
			// case ContentTabs.CAMPAIGNS:
			// 	return <Campaigns />
			// case ContentTabs.ORGANIZATIONS:
			// 	return <Organizations />
			// case ContentTabs.COLLECTABLES:
			// 	return <Collectables />
			// case ContentTabs.IDENTITY:
			// 	return <Identity />
			// case ContentTabs.SETTINGS:
			// 	return <Settings />
			default:
				return <Overview />
		}
	}, [param])

	return <>{reroute()}</>
}
