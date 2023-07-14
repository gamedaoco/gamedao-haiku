import { Box, Tab, Tabs } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AccountTabs } from 'src/constants/account'

interface ComponentProps {
	param: AccountTabs
}

interface TabsInterface {
	label: string
	value: AccountTabs
}

export function Navigation({ param }: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()
	const tabs = useMemo<TabsInterface[]>(
		() => [
			{
				label: t('button:navigation:overview'),
				value: AccountTabs.OVERVIEW,
			},
			// {
			// 	label: `Organizations`, //t('button:navigation:my_organizations'),
			// 	value: AccountTabs.ORGANIZATIONS,
			// },
			// {
			// 	label: t('button:navigation:my_campaigns'),
			// 	value: AccountTabs.CAMPAIGNS,
			// },
			// {
			// 	label: t('button:navigation:my_collectables'),
			// 	value: AccountTabs.COLLECTABLES,
			// },
			{
				label: t('button:navigation:identity'),
				value: AccountTabs.IDENTITY,
			},
		],
		[t],
	)
	const { push } = useRouter()
	const handleTabsChange = useCallback(
		(event: ChangeEvent<{}>, value: AccountTabs): void => {
			push(`/account/${value}`)
		},
		[push],
	)
	return (
		<Box sx={{ my: 2, borderRadius: '8px' }}>
			<Tabs
				scrollButtons
				allowScrollButtonsMobile
				indicatorColor="primary"
				onChange={handleTabsChange}
				sx={{ px: 3 }}
				textColor="primary"
				value={param || AccountTabs.OVERVIEW}
				// variant="glass"
			>
				{tabs.map((tab) => (
					<Tab key={tab.value} label={tab.label} value={tab.value} />
				))}
			</Tabs>
		</Box>
	)
}
