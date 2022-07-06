import React, { FC, useCallback } from 'react'

import { AccountTabs } from 'src/@types/account'
import { AccountState } from 'src/@types/extension'

import IdentityTab from './modules/identityTab'
import MyCampaignsTab from './modules/myCampaignsTab'
import MyCollectablesTab from './modules/myCollectablesTab'
import MyOrganisationsTab from './modules/myOrganisationsTab'
import OverviewTab from './modules/overviewTab'

interface SectionsLayoutProps {
	accountState: AccountState
	param: AccountTabs
}
const SectionsLayout: FC<SectionsLayoutProps> = ({ accountState, param }) => {
	const reroute = useCallback(() => {
		switch (param) {
			case AccountTabs.CAMPAIGNS:
				return <MyCampaignsTab accountState={accountState} />
			case AccountTabs.ORGANIZATIONS:
				return <MyOrganisationsTab accountState={accountState} />
			case AccountTabs.COLLECTABLES:
				return <MyCollectablesTab accountState={accountState} />
			case AccountTabs.IDENTITY:
				return <IdentityTab accountState={accountState} />
			default:
				return <OverviewTab accountState={accountState} />
		}
	}, [accountState, param])

	return <>{reroute()}</>
}
export default SectionsLayout
