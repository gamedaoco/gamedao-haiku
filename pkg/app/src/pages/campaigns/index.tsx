import React, { useMemo, useState } from 'react'

import { Add, ArrowDownward } from '@mui/icons-material'
import { Box, Button, Container, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { Campaign, useCampaignsPaginationCountSubscription, useCampaignsPaginationSubscription } from 'src/queries'

import { CreatedCampaignSection } from 'components/Account/modules/CampaignsSection/CreatedCampaignsSection/createdCampainsSection'
import { Layout } from 'components/Layouts/default/layout'

export function Campaigns() {
	const [limit, setLimit] = useState(15)
	const [filters, setFilters] = useState('')
	const { data, loading } = useCampaignsPaginationSubscription({
		variables: {
			limit,
		},
	})
	const campaignsCount = useCampaignsPaginationCountSubscription({
		variables: { searchQuery: `%${filters ?? ''}%` },
	})
	const paginatedData = useMemo<Campaign[]>(() => data?.campaign?.slice() as Campaign[], [data])
	const { t } = useTranslation()
	const buttonVisibility = useMemo(
		() => paginatedData?.length < campaignsCount?.data?.campaign_aggregate?.aggregate?.count,
		[paginatedData?.length, campaignsCount?.data],
	)
	return (
		<Layout showHeader showFooter showSidebar title="Organisation">
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					py: 8,
				}}
			>
				<Container maxWidth="xl">
					<Box sx={{ mb: 4 }}>
						<Grid container justifyContent="space-between" spacing={3}>
							<Grid item>
								<Typography variant="h3">Campaigns</Typography>
							</Grid>
							<Grid item>
								<Button startIcon={<Add fontSize="small" />} variant="outlined">
									{t('button:ui:create')}
								</Button>
							</Grid>
						</Grid>
					</Box>
					{paginatedData?.length === 0 && !loading && (
						<Box sx={{ mt: 2, mb: 4 }}>
							<Typography fontWeight={700}>No campaigns found</Typography>
							<Typography>
								No results found for “{filters}”. Try checking for typos or using a different term.
							</Typography>
						</Box>
					)}
					<Box sx={{ mt: 2, mb: 4 }}>
						<CreatedCampaignSection data={paginatedData} loading={loading} />
					</Box>
				</Container>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 3 }}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								gap: 1.5,
							}}
						>
							{buttonVisibility && (
								<Button
									endIcon={<ArrowDownward />}
									onClick={() => setLimit((p) => p + 30)}
									variant="outlined"
								>
									{t('button:ui:load_more')}
								</Button>
							)}
							<Typography>
								Showing {paginatedData?.length} of{' '}
								{campaignsCount?.data?.campaign_aggregate?.aggregate.count} campaigns
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</Layout>
	)
}

export default Campaigns
