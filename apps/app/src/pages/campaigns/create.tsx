import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

import { Layout } from 'src/layouts/v2'
import { HelpOutlined } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import { CreateCampaignView } from 'dapps/campaign/views/Create'

export function Page() {
	const { t } = useTranslation()

	return (
		<Layout showHeader showFooter showSidebar title={t('labels:campaigns')}>
			<Grid container alignItems="center" justifyContent="space-between" spacing={2} pb={2}>
				<Grid item>
					<Typography variant="h3">Create a Campaign</Typography>
				</Grid>
				<Grid item>
					{true && (
						<Link href="/campaigns/create">
							{/* <Button startIcon={<HelpOutlined fontSize="small" />} variant="outlined"> */}
							<Button variant="outlined" disabled>
								Get Support
							</Button>
						</Link>
					)}
				</Grid>
			</Grid>

			<Grid item pb={2}>
				<Typography pb={1} variant="body1" sx={{ maxWidth: { sx: '100%', md: '75%', lg: '50%' } }}>
					Fundraising campaigns collect funds through the GameDAO community and treasury and are community governed by default to increase
					transparency, verifiability and therefore accountability.
				</Typography>
			</Grid>

			<CreateCampaignView />
		</Layout>
	)
}

export default Page
