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
import { OrganizationTabs } from 'src/@types/enums'

interface Props {
	param: AccountTabs
}

interface ITabs {
	label: string
	value: OrganizationTabs
}

export function Navigation() {
	const { t } = useTranslation()
	const { query, push } = useRouter()

	const param: OrganizationTabs = query.param || OrganizationTabs.OVERVIEW
	const id: string = query.id

	const [isMember, setIsMember] = useState<boolean>(false)
	const [isPrimeOrCouncil, setIsPrimeOrCouncil] = useState<boolean>(false)

	const tabs = useMemo<ITabs[]>(
		() => [
			{
				label: t('button:navigation:overview'),
				value: OrganizationTabs.OVERVIEW,
				disabled: !isMember,
			},
			{
				label: t('button:navigation:campaigns'),
				value: OrganizationTabs.CAMPAIGNS,
				disabled: !isMember,
			},
			{
				label: t('button:navigation:governance'),
				value: OrganizationTabs.GOVERNANCE,
				disabled: !isMember,
			},
			{
				label: t('button:navigation:members'),
				value: OrganizationTabs.MEMBERS,
				disabled: !isMember,
			},
			{
				label: t('button:navigation:treasury'),
				value: OrganizationTabs.TREASURY,
				disabled: !isMember,
			},
			{
				label: t('button:navigation:settings'),
				value: OrganizationTabs.SETTINGS,
				disabled: !isMember,
			},
		],
		[t],
	)

	const handleTabsChange = useCallback(
		(event: ChangeEvent<{}>, param: OrganizationTabs): void => {
			push(`/org/${query.id}/${param}`)
		},
		[query, push],
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
				value={param}
			>
				{tabs.map((tab, i) => (
					<Tab key={i} label={tab.label} value={tab.value} disabled={!tab.disabled} />
				))}
			</Tabs>
		</Box>
	)
}

export default Navigation
