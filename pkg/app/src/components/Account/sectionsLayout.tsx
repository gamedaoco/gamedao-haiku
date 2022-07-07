import React, { useCallback } from 'react'

import { AccountTabs } from 'src/@types/account'
import { MyCampaignsTab } from './modules/myCampaignsTab'
import { MyCollectablesTab } from './modules/myCollectablesTab'
import { MyOrganisationsTab } from './modules/myOrganisationsTab'
import { OverviewTab } from './modules/overviewTab'
import { IdentityForm } from 'components/Account/modules/IdentitySection/form'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

interface ComponentProps {
	param: AccountTabs
}
export function SectionsLayout({ param }: ComponentProps) {
	const accountState = useCurrentAccountAddress()
	const reroute = useCallback(() => {
		switch (param) {
			case AccountTabs.CAMPAIGNS:
				return <MyCampaignsTab />
			case AccountTabs.ORGANIZATIONS:
				return <MyOrganisationsTab />
			case AccountTabs.COLLECTABLES:
				return <MyCollectablesTab />
			case AccountTabs.IDENTITY:
				return <IdentityForm />
			default:
				return <OverviewTab />
		}
	}, [accountState, param])

	return <>{reroute()}</>
}
