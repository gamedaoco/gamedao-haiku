import React, { FC } from 'react'
import { AccountTabs } from 'src/@types/account'
import { AccountState } from 'src/@types/extension'
import IdentityTab from './modules/identity-tab'
import MyCampaignsTab from './modules/my-campaigns-tab'
import MyCollectablesTab from './modules/my-collectables-tab'
import MyOrganisationsTab from './modules/my-organisations-tab'
import OverviewTab from './modules/overview-tab'

interface SectionsLayoutProps {
	accountState: AccountState
	currentTab: AccountTabs
}
const SectionsLayout: FC<SectionsLayoutProps> = ({ accountState, currentTab }) => {
	return (
		<>
			{currentTab === AccountTabs.OVERVIEW && <OverviewTab accountState={accountState} />}
			{currentTab === AccountTabs.ORGANIZATIONS && <MyOrganisationsTab accountState={accountState} />}
			{currentTab === AccountTabs.CAMPAIGNS && <MyCampaignsTab accountState={accountState} />}
			{currentTab === AccountTabs.COLLECTABLES && <MyCollectablesTab accountState={accountState} />}
			{currentTab === AccountTabs.IDENTITY && <IdentityTab accountState={accountState} />}
		</>
	)
}
export default SectionsLayout
