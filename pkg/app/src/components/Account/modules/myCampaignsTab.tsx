import { Box } from '@mui/material'
import React, { FC, memo } from 'react'
import { AccountState } from 'src/@types/extension'
import ContributedCampaginsSection from './CampaignsSection/contributedCampaignsSection'
import CreatedCampaignSection from './CampaignsSection/CreatedCampaignsSection/createdCampainsSection'

interface MyCampaignsTabProps {
	accountState: AccountState
}
const MyCampaignsTab: FC<MyCampaignsTabProps> = ({ accountState }) => {
	return (
		<Box>
			<CreatedCampaignSection />
			<ContributedCampaginsSection />
		</Box>
	)
}

export default memo(MyCampaignsTab)
