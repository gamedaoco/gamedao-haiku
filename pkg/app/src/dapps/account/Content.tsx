import React, { useCallback } from 'react'

import { AccountTabs } from 'constants/account'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { Overview } from './components/Overview'
import { MyCampaigns } from './components/MyCampaigns'
import { MyCollectables } from './components/MyCollectables'
import { MyOrganizations } from './components/MyOrganizations'
import { MyIdentity } from './components/MyIdentity'

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
				return <MyIdentity />
			default:
				return <Overview />
		}
	}, [param])

	return <>{reroute()}</>
}
