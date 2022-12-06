import { useTranslation } from 'react-i18next'
import { ContentTabs } from 'constants/dapps'

import { useTheme } from '@mui/material/styles'
import { Box, Grid, Typography } from '@mui/material'

import { OrganizationMembersTable } from 'components/TabPanels/Organization/organizationMembers'

export function Members() {
	const theme = useTheme()
	const { t } = useTranslation()

	return <>Members</>
	// <OrganizationMembersTable organizationState={organizationState} />
}

export default Members
