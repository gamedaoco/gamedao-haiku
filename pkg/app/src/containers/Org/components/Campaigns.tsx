import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Organization, useOrganizationByIdSubscription } from 'src/queries'

import { useTheme } from '@mui/material/styles'
import { Box, Grid, Typography, TabPanel } from '@mui/material'

import { CampaignOverview } from 'components/TabPanels/Campaign/overview'
import { TreasuryOverview } from 'components/TabPanels/Treasury/overview'
import { OrganizationMembersTable } from 'components/TabPanels/Organization/organizationMembers'
import { Overview } from 'components/TabPanels/Organization/overview'
import { TmpOverview } from 'components/TabPanels/Organization/tmpOverview'
import { ProposalDetail } from 'components/TabPanels/Proposal/detail'
import { ProposalOverview } from 'components/TabPanels/Proposal/overview'
import { SettingsOverview } from 'components/TabPanels/Settings/overview'

export function Campaigns() {
	const theme = useTheme()
	const { t } = useTranslation()

	const [id, setOrganizationState] = useState<Organization>()
	const { loading, data, error } = useOrganizationByIdSubscription({
		variables: { orgId: organizationIdState },
	})
	const redirect = () => push('/org')
	useEffect(() => {
		if (data) {
			!data.organization?.[0] ? redirect() : setOrganizationState(data.organization?.[0] as Organization)
		}
	}, [data, redirect])
	return (
		<TabPanel value={'campaigns'}>
			{organizationIdState ? (
				<CampaignOverview
					organizationId={organizationIdState}
					isAdmin={address === organizationState?.creator}
				/>
			) : (
				<TmpOverview />
			)}
		</TabPanel>
	)
}

export default Campaigns
