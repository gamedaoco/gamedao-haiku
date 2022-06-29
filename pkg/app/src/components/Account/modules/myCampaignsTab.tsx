import React, { FC, memo } from 'react'

import { Box } from '@mui/material'
import { AccountState } from 'src/@types/extension'
import { useCampaignContributorsSubscription } from 'src/queries'
import { Campaign, useCampaignSubscription } from 'src/queries'

import CreatedCampaignSection from './CampaignsSection/CreatedCampaignsSection/createdCampainsSection'
import ContributedCampaignsSection from './CampaignsSection/contributedCampaignsSection/contributedCampaignsSection'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

interface MyCampaignsTabProps {
	accountState: AccountState
}
const MyCampaignsTab: FC<MyCampaignsTabProps> = ({ accountState }) => {
	const { data, loading } = useCampaignSubscription({
		variables: { address: '3ZjAeLZWrhu1uFGxgFSPUuSBJmEJZpgHHM6qJUzuHb3B9ykb' },
	})
	const { data: campaignContributorsData, loading: campaignContributorsLoading } =
		useCampaignContributorsSubscription({
			variables: { address: '3b2qZTPzhpJkJULMtMjtL5dsiYvmfVyh15Xxg3K83UwGpCJz' },
		})
	return (
		<Box>
			<CreatedCampaignSection data={data} loading={loading} accountState={accountState} />
			<ContributedCampaignsSection
				data={campaignContributorsData}
				loading={campaignContributorsLoading}
				accountState={accountState}
			/>
		</Box>
	)
}

export default memo(MyCampaignsTab)
