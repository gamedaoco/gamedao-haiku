import React, { FC, memo } from 'react'

import { Box } from '@mui/material'
import { AccountState } from 'src/@types/extension'
import { useCampaignContributorsSubscription } from 'src/queries'
import { Campaign, useCampaignSubscription } from 'src/queries'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import CreatedCampaignSection from './CampaignsSection/CreatedCampaignsSection/createdCampainsSection'
import ContributedCampaignsSection from './CampaignsSection/contributedCampaignsSection/contributedCampaignsSection'

interface MyCampaignsTabProps {
	accountState: AccountState
}
const MyCampaignsTab: FC<MyCampaignsTabProps> = ({ accountState }) => {
	const { data, loading } = useCampaignSubscription({
		variables: { address: getAddressFromAccountState(accountState) },
	})
	const { data: campaignContributorsData, loading: campaignContributorsLoading } =
		useCampaignContributorsSubscription({
			variables: { address: getAddressFromAccountState(accountState) },
		})
	return (
		<Box>
			<CreatedCampaignSection data={data} loading={loading} accountState={accountState} />
			<ContributedCampaignsSection data={campaignContributorsData} loading={campaignContributorsLoading} />
		</Box>
	)
}

export default memo(MyCampaignsTab)
