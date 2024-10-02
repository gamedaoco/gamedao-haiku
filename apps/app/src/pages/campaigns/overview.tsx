import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

import { Layout } from 'src/layouts/v2'
import { Add } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import { CampaignDApp } from 'dapps/campaign/views/Overview'

export function Page() {
	const { t } = useTranslation()

	// TODO: is viewer a prime of an organization?
	// then show and handle a create button!
	const [isCreator, setIsCreator] = useState(false)
	const handleCreate = () => {}

	return (
		<Layout showHeader showFooter showSidebar title={t('labels:campaigns')}>
			<Grid container alignItems="center" justifyContent="space-between" spacing={2} pb={2}>
				<Grid item>
					<Typography variant="h3">{t('label:campaigns')}</Typography>
				</Grid>
				<Grid item>
					{true && (
						<Link href="/campaigns/create">
							<Button startIcon={<Add fontSize="small" />} variant="outlined">
								{t('button:ui:create')}
							</Button>
						</Link>
					)}
				</Grid>
			</Grid>

			<Grid item>
				<Typography pb={1} variant="body1" sx={{ maxWidth: { sx: '100%', md: '75%', lg: '50%' } }}>
					Fundraising campaigns collect funds through the GameDAO community and treasury and are community governed by default to increase
					transparency, verifiability and therefore accountability.
				</Typography>
				<Typography variant="body1" sx={{ maxWidth: { sx: '100%', md: '75%', lg: '50%' } }}>
					Support existing campaigns to take part in product development and governance. To create a campaign for your own ideas, start by creating
					your own organization or join an existing organization to take part in their governance to initiate a campaign.
				</Typography>
			</Grid>

			<CampaignDApp />
		</Layout>
	)
}

export default Page
