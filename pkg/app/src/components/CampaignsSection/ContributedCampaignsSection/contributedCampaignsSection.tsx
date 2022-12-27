import React, { Fragment } from 'react'

import { Box, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import { CampaignContributorsSubscription, Campaign_Contributor } from 'src/queries'

import { TableItem } from 'components/CampaignsSection/ContributedCampaignsSection/modules/tableItem'
import { Scrollbar } from 'components/scrollbar'

import { LoadingCampaignTable } from './modules/loadingCampaignTable'

interface ComponentProps {
	data: CampaignContributorsSubscription
	loading: boolean
}

export function ContributedCampaignsSection({ data, loading }: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<Box>
			{/*			<Typography variant="body2" fontWeight={theme.typography.fontWeightBold} sx={{ pb: 4 }}>
				{t('page:account:campaigns:contributed_campaigns')}
			</Typography>*/}

			<Typography variant="h6" sx={{ mb: 2 }}>
				{t('page:account:campaigns:campaign_contributions')}
			</Typography>

			<Scrollbar>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>{t('page:account:campaigns:name')}</TableCell>
							<TableCell>{t('page:account:campaigns:contributors')}</TableCell>
							<TableCell>{t('page:account:campaigns:investment')}</TableCell>
							<TableCell>{t('page:account:campaigns:raised_goal')}</TableCell>
							<TableCell>{t('page:account:campaigns:time_left')}</TableCell>
							<TableCell>{t('page:account:campaigns:status')}</TableCell>
						</TableRow>
					</TableHead>
					{loading ? (
						<LoadingCampaignTable />
					) : (
						<TableBody>
							{data?.campaign_contributor?.map((campaignContributor) => (
								<Fragment key={campaignContributor?.id}>
									<TableItem campaignContributor={campaignContributor as Campaign_Contributor} />
								</Fragment>
							))}
						</TableBody>
					)}
				</Table>
			</Scrollbar>
		</Box>
	)
}
