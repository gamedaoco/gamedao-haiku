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
			{
				label: t('button:navigation:my_organisations'),
				value: AccountTabs.ORGANIZATIONS,
			},
			{
				label: t('button:navigation:my_campaigns'),
				value: AccountTabs.CAMPAIGNS,
			},
			{
				label: t('button:navigation:my_collectables'),
				value: AccountTabs.COLLECTABLES,
			},
			{
				label: t('button:navigation:identity'),
				value: AccountTabs.IDENTITY,
			},
			// preferences
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
				TabIndicatorProps={{
					sx: {
						height: '0px',
						borderRadius: '2px',
						'&::after': {
							content: '""',
							position: 'absolute',
							width: '40%',
							borderColor: '#ff00ff',
							borderRadius: '2px 0px 0px 2px',
							boxShadow: '0 0px 15px 2px #00ffcc',
							borderTop: '5px solid white',
							left: '30%',
							right: '30%',
							top: '0',
						},
						'&::before': {
							content: '""',
							position: 'absolute',
							bottom: 0,
							left: '40%',
							right: '40%',
							width: '20%',
							borderRadius: '2px',
							borderTop: '4px solid #00ffcc',
							zIndex: '5',
						},
					},
				}}
			>
				{tabs.map((tab, i) => (
					<Tab key={i} label={tab.label} value={tab.value} />
				))}
			</Tabs>
		</Box>
	)
}
