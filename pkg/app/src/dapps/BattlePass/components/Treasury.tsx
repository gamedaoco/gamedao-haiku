import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { OrganizationTabs } from 'constants/organization'

import { useTheme } from '@mui/material/styles'
import { Box, Grid, Typography } from '@mui/material'

import { TreasuryOverview } from 'components/TabPanels/Treasury/overview'

export function Treasury() {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<Fragment>
			<TreasuryOverview />
		</Fragment>
	)
}

export default Treasury
