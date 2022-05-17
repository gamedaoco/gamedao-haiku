import React, { FC } from 'react'
import { AccountTabs } from 'src/@types/account'
import { AccountState } from 'src/@types/extension'
import OverviewTab from './modules/overview-tab'

interface SectionsLayoutProps {
	accountState: AccountState
	currentTab: AccountTabs
}
const SectionsLayout: FC<SectionsLayoutProps> = ({ accountState, currentTab }) => {
	return (
		<>
			{currentTab === AccountTabs.OVERVIEW && <OverviewTab accountState={accountState} />}
			{currentTab === AccountTabs.ORGANIZATIONS && <p>Organizations</p>}
			{currentTab === AccountTabs.CAMPAIGNS && <p>CAMPAIGNS</p>}
			{currentTab === AccountTabs.COLLECTABLES && <p>Collectables</p>}
			{currentTab === AccountTabs.IDENTITY && <p>Identity</p>}
		</>
	)
}
export default SectionsLayout
