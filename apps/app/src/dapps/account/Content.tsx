import React, { useCallback } from 'react'

import { AccountTabs } from 'src/constants/account'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'

import { Overview } from './components/Overview'
import { MyCampaigns } from './components/MyCampaigns'
import { MyCollectables } from './components/MyCollectables'
import { MyOrganizations } from './components/MyOrganizations'
import { Identity } from './components/Identity'

interface Props {
	param: AccountTabs
}
export function Content({ param }: Props) {
	const accountState = useCurrentAccountAddress()
	const reroute = useCallback(() => {
		switch (param) {
			case AccountTabs.CAMPAIGNS:
				return <MyCampaigns />
			case AccountTabs.ORGANIZATIONS:
				return <MyOrganizations />
			case AccountTabs.COLLECTABLES:
				return <MyCollectables />
			case AccountTabs.IDENTITY:
				return <Identity />
			default:
				return <Overview />
		}
	}, [param])

	return <>{reroute()}</>
}
