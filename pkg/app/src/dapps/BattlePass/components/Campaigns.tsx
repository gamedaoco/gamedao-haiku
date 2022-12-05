import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { OrganizationTabs } from 'constants/organization'

import { useTheme } from '@mui/material/styles'
import { Box, Grid, Typography } from '@mui/material'

import { CampaignOverview } from 'components/TabPanels/Campaign/overview'

type TProps = {
	id?: string
	isAdmin?: boolean
}
type TArgs = {
	args?: TProps
}

export function Campaigns({ args }: TArgs) {
	const { id, isAdmin } = args

	const theme = useTheme()
	const { t } = useTranslation()

	return <CampaignOverview organizationId={id} isAdmin={isAdmin} />
}

export default Campaigns
