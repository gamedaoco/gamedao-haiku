import React, { FC, memo } from 'react'
import { Box } from '@mui/material'
import { AccountState } from 'src/@types/extension'
import CreatedCampaignSection from './CampaignsSection/CreatedCampaignsSection/createdCampainsSection'
import ContributedCampaginsSection from './CampaignsSection/contributedCampaignsSection'
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
