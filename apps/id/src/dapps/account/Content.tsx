import { Identity } from './components/Identity'
import { MyCampaigns } from './components/MyCampaigns'
import { MyCollectables } from './components/MyCollectables'
import { MyOrganizations } from './components/MyOrganizations'
import { Overview } from './components/Overview'
import React, { useCallback } from 'react'
import { AccountTabs } from 'src/constants/account'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'

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
