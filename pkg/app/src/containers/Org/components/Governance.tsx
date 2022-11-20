import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
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

export function Governance() {
	const [organizationIdState, setOrganizationIdState] = useState<string>(null)
	const [proposalIdState, setProposalIdState] = useState<string>(null)
	const [organizationState, setOrganizationState] = useState<Organization>()
	const [isMemberState, setIsMemberState] = useState<boolean>(false)
	const { loading, data, error } = useOrganizationByIdSubscription({
		variables: { orgId: organizationIdState },
	})
	const address = useCurrentAccountAddress()

	useEffect(() => {
		if (address && organizationState) {
			setIsMemberState(organizationState.organization_members.some((member) => member.address === address))
		}
	}, [organizationState, address])

	return (
		<TabPanel value={'proposals'}>
			{proposalIdState && organizationState ? (
				<ProposalDetail
					organization={organizationState}
					proposalId={proposalIdState}
					isMember={isMemberState}
					goBack={() => handleTabSelect('proposals')}
				/>
			) : (
				<ProposalOverview organizationId={organizationIdState} isMember={isMemberState} />
			)}
		</TabPanel>
	)
}

export default Governance
