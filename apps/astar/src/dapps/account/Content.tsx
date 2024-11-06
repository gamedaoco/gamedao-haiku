import React, { useCallback } from 'react'

import { AccountTabs } from 'src/constants/account'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'

import { Overview } from './components/Overview'
import { MyCampaigns } from './components/Campaigns'
import { MyCollectables } from './components/Collectables'
import { MyOrganizations } from './components/Organizations'
import { Identity } from './components/Identity'
import { Staking } from './components/Staking'

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
			case AccountTabs.STAKING:
				return <Staking />
			default:
				return <Overview />
		}
	}, [param])

	return <>{reroute()}</>
}
