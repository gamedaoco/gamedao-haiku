import React, { ChangeEvent, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { Box, Tab, Tabs } from '@mui/material'
import { AccountTabs } from 'constants/account'

interface Props {
	param: AccountTabs
}

interface ITabs {
	label: string
	value: AccountTabs
}

export function Navigation({ param }: Props) {
	const { t } = useTranslation()
	const { push } = useRouter()

	const tabs = useMemo<ITabs[]>(
		() => [
			{
				label: t('button:navigation:overview'),
				value: AccountTabs.OVERVIEW,
			},
			// {
			// 	label: t('button:navigation:my_organisations'),
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
			// {
			// 	label: t('button:navigation:settings'),
			// 	value: AccountTabs.SETTINGS,
			// },
		],
		[t],
	)

	const handleTabsChange = useCallback(
		(event: ChangeEvent<{}>, value: AccountTabs): void => {
			push(`/account/${value}`)
		},
		[push],
	)

	return (
		<Box sx={{ my: 2 }}>
			<Tabs
				scrollButtons
				allowScrollButtonsMobile
				indicatorColor="primary"
				onChange={handleTabsChange}
				sx={{ px: 3 }}
				textColor="primary"
				value={param || AccountTabs.OVERVIEW}
			>
				{tabs.map((tab, i) => (
					<Tab key={i} label={tab.label} value={tab.value} />
				))}
			</Tabs>
		</Box>
	)
}
