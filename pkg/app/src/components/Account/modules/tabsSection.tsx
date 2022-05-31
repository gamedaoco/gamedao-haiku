import { Tabs, Tab, Box } from '@mui/material'
import React, { ChangeEvent, FC, useCallback } from 'react'
import { AccountTabs } from 'src/@types/account'

interface TabsSectionProps {
	currentTab: AccountTabs
	setCurrentTab: (AccountTabs) => void
}

interface TabsInterface {
	label: string
	value: AccountTabs
}
const tabs: TabsInterface[] = [
	{
		label: 'Overview',
		value: AccountTabs.OVERVIEW,
	},
	{
		label: 'My Organizations',
		value: AccountTabs.ORGANIZATIONS,
	},
	{
		label: 'My Campaigns',
		value: AccountTabs.CAMPAIGNS,
	},
	{
		label: 'My Collectables',
		value: AccountTabs.COLLECTABLES,
	},
	{
		label: 'Identity',
		value: AccountTabs.IDENTITY,
	},
]
const TabsSection: FC<TabsSectionProps> = ({ setCurrentTab, currentTab }) => {
	const handleTabsChange = useCallback(
		(event: ChangeEvent<{}>, value: AccountTabs): void => {
			setCurrentTab(value)
		},
		[setCurrentTab],
	)
	return (
		<Box sx={{ bgcolor: 'background.paper', my: 2, borderRadius: '8px' }}>
			<Tabs
				scrollButtons
				allowScrollButtonsMobile
				indicatorColor="primary"
				onChange={handleTabsChange}
				sx={{ px: 3 }}
				textColor="primary"
				value={currentTab}
				variant="scrollable"
			>
				{tabs.map((tab) => (
					<Tab key={tab.value} label={tab.label} value={tab.value} />
				))}
			</Tabs>
		</Box>
	)
}

export default TabsSection
