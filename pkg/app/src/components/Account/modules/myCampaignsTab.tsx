import React, { FC, memo } from 'react'

import { Box } from '@mui/material'
import { AccountState } from 'src/@types/extension'
import { useCampaignContributorsSubscription } from 'src/queries'
import { Campaign, useCampaignSubscription } from 'src/queries'

import CreatedCampaignSection from './CampaignsSection/CreatedCampaignsSection/createdCampainsSection'
import ContributedCampaginsSection from './CampaignsSection/contributedCampaignsSection/contributedCampaignsSection'

interface MyCampaignsTabProps {
	accountState: AccountState
}
const MyCampaignsTab: FC<MyCampaignsTabProps> = ({ accountState }) => {
	const { data, loading } = useCampaignSubscription({
		variables: { address: '3YutJfdBkSsL9YPuRebVBb4L3VpC1ES7y8RMzKEunCzZ5wwE' },
	})
	const { data: campaignContributorsData, loading: campaignContributorsLoading } =
		useCampaignContributorsSubscription({
			variables: { address: '3YutJfdBkSsL9YPuRebVBb4L3VpC1ES7y8RMzKEunCzZ5wwE' },
		})
	return (
		<Box>
			<CreatedCampaignSection data={data} loading={loading} accountState={accountState} />
			<ContributedCampaginsSection
				data={campaignContributorsData}
				loading={campaignContributorsLoading}
				accountState={accountState}
			/>
		</Box>
	)
}

export default memo(MyCampaignsTab)
