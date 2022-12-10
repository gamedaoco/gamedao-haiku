import { useTranslation } from 'react-i18next'
import { ContentTabs } from 'constants/dapps'

import { useTheme } from '@mui/material/styles'
import { Box, Grid, Typography } from '@mui/material'

import { OrganizationMembersTable } from 'components/TabPanels/Organization/organizationMembers'

type TProps = {
	organization?: Organization
}
type TArgs = {
	args?: TProps
}

export function Members({ args }: TArgs) {
	const { organization } = args
	const theme = useTheme()
	const { t } = useTranslation()
	return <OrganizationMembersTable organizationState={organization} />
}

export default Members
