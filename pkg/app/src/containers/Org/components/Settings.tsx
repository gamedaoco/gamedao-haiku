import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { OrganizationTabs } from 'src/@types/enums'

import { Organization, useOrganizationByIdSubscription } from 'src/queries'

import { TabPanel } from '@mui/material'
import { SettingsOverview } from 'components/TabPanels/Settings/overview'

export const Settings = () => {
	const { push } = useRouter()

	const [orgId, setOrgId] = useState<string>(null)
	const [org, setOrg] = useState<Organization>()
	const { loading, data, error } = useOrganizationByIdSubscription({
		variables: { orgId: orgId },
	})

	useEffect(() => {
		if (data) {
			!data.organization?.[0] ? push('/org') : setOrg(data.organization?.[0] as Organization)
		}
	}, [data, push])

	return (
		<TabPanel value={OrganizationTabs.SETTINGS}>
			<SettingsOverview organizationState={org} />
		</TabPanel>
	)
}

export default Settings
