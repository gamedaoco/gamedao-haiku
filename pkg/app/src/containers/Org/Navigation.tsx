// import React, { useCallback, useState } from 'react'
// import { useRouter } from 'next/router'
// import { useTranslation } from 'react-i18next'
import { Organization, useOrganizationByIdSubscription } from 'src/queries'

// import { useConfig } from 'hooks/useConfig'
// import { Typography, Box, Tab, Tabs, useMediaQuery } from '@mui/material'
// import { useTheme } from '@mui/material/styles'

// export const Navigation = ({ activeStep, organizationIdState }) => {
// 	const { push } = useRouter()
// 	const { t } = useTranslation()

// 	const [routeState, setRouteState] = useState<string>(null)
// 	// const [activeStep, setActiveStep] = useState<string>('dashboard')

// 	const handleTabSelect = useCallback(
// 		(path) => {
// 			if (organizationIdState) {
// 				push(`${organizationIdState}/${path}`)
// 			} else {
// 				push(path)
// 			}
// 		},
// 		[organizationIdState, push],
// 	)

// 	return (
// 		<Box px={4} sx={{ borderRadius: 0 }}>
// 			<Tabs centered value={activeStep} onChange={(_, value) => handleTabSelect(value)}>

// 			</Tabs>
// 		</Box>
// 	)
// }

import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { Box, Tab, Tabs } from '@mui/material'
import { OrganizationTabs } from 'src/@types/organisation'

interface Props {
	param: AccountTabs
}

interface ITabs {
	label: string
	value: OrganizationTabs
}

export function Navigation({ param }: Props) {
	const { t } = useTranslation()
	const { push } = useRouter()
	const [organizationIdState, setOrganizationIdState] = useState<string>(null)

	const tabs = useMemo<ITabs[]>(
		() => [
			{
				label: t('button:navigation:overview'),
				value: OrganizationTabs.OVERVIEW,
				disabled: !organizationIdState,
			},
			{
				label: t('button:navigation:campaigns'),
				value: OrganizationTabs.CAMPAIGNS,
				disabled: !organizationIdState,
			},
			{
				label: t('button:navigation:governance'),
				value: OrganizationTabs.GOVERNANCE,
				disabled: !organizationIdState,
			},
			{
				label: t('button:navigation:members'),
				value: OrganizationTabs.MEMBERS,
				disabled: !organizationIdState,
			},
			{
				label: t('button:navigation:treasury'),
				value: OrganizationTabs.TREASURY,
				disabled: !organizationIdState,
			},
			{
				label: t('button:navigation:settings'),
				value: OrganizationTabs.SETTINGS,
				disabled: !organizationIdState,
			},
		],
		[t],
	)

	const handleTabsChange = useCallback(
		(event: ChangeEvent<{}>, value: OrganizationTabs): void => {
			push(`/org/${value}`)
		},
		[push],
	)

	return (
		<Box sx={{ my: 2 }}>
			<Tabs
				centered
				scrollButtons
				allowScrollButtonsMobile
				indicatorColor="primary"
				onChange={handleTabsChange}
				sx={{ px: 3 }}
				textColor="primary"
				value={param || OrganizationTabs.OVERVIEW}
			>
				{tabs.map((tab, i) => (
					<Tab key={i} label={tab.label} value={tab.value} disabled={!tab.disabled} />
				))}
			</Tabs>
		</Box>
	)
}

export default Navigation
