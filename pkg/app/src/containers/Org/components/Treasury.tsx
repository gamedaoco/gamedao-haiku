import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'
import { Box, Grid, Typography } from '@mui/material'

import { CampaignOverview } from 'components/TabPanels/Campaign/overview'
import { TreasuryOverview } from 'components/TabPanels/Treasury/overview'
import { OrganizationMembersTable } from 'components/TabPanels/Organization/organizationMembers'
import { Overview } from 'components/TabPanels/Organization/overview'
import { TmpOverview } from 'components/TabPanels/Organization/tmpOverview'
import { ProposalDetail } from 'components/TabPanels/Proposal/detail'
import { ProposalOverview } from 'components/TabPanels/Proposal/overview'
import { SettingsOverview } from 'components/TabPanels/Settings/overview'

export function Treasury() {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<TabPanel value={'treasury'}>
			{organizationState && (
				<Typography>{t('label:treasury_address', { address: organizationState.treasury })}</Typography>
			)}
		</TabPanel>
	)
}

export default Treasury
