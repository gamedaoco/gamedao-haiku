import React, { FC } from 'react'

import { AccountTabs } from 'src/@types/account'
import { AccountState } from 'src/@types/extension'

import IdentityTab from './modules/identityTab'
import MyCampaignsTab from './modules/myCampaignsTab'
import { MyCollectablesTab } from './modules/myCollectablesTab'
import MyOrganisationsTab from './modules/myOrganisationsTab'
import { OverviewTab } from './modules/overviewTab'

interface SectionsLayoutProps {
	accountState: AccountState
	currentTab: AccountTabs
}
const SectionsLayout: FC<SectionsLayoutProps> = ({ accountState, currentTab }) => {
	return (
		<>
			{currentTab === AccountTabs.OVERVIEW && <OverviewTab />}
			{currentTab === AccountTabs.ORGANIZATIONS && <MyOrganisationsTab accountState={accountState} />}
			{currentTab === AccountTabs.CAMPAIGNS && <MyCampaignsTab accountState={accountState} />}
			{currentTab === AccountTabs.COLLECTABLES && <MyCollectablesTab />}
			{currentTab === AccountTabs.IDENTITY && <IdentityTab accountState={accountState} />}
		</>
	)
}
export default SectionsLayout
