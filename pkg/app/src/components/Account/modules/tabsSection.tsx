import React, { ChangeEvent, useCallback } from 'react'

import { Box, Tab, Tabs } from '@mui/material'
import { AccountTabs } from 'src/@types/account'
import { useRouter } from 'next/router'

interface ComponentProps {
	param: AccountTabs
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
export function TabsSection({ param }: ComponentProps) {
	const { push } = useRouter()
	const handleTabsChange = useCallback(
		(event: ChangeEvent<{}>, value: AccountTabs): void => {
			push(`/account/${value}`)
		},
		[push],
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
				value={param || AccountTabs.OVERVIEW}
				variant="scrollable"
			>
				{tabs.map((tab) => (
					<Tab key={tab.value} label={tab.label} value={tab.value} />
				))}
			</Tabs>
		</Box>
	)
}
