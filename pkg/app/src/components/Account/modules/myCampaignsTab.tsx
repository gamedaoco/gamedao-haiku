import React, { FC, memo } from 'react'

import { Box } from '@mui/material'
import { AccountState } from 'src/@types/extension'

import CreatedCampaignSection from './CampaignsSection/CreatedCampaignsSection/createdCampainsSection'
import ContributedCampaginsSection from './CampaignsSection/contributedCampaignsSection/contributedCampaignsSection'

interface MyCampaignsTabProps {
	accountState: AccountState
}
const MyCampaignsTab: FC<MyCampaignsTabProps> = ({ accountState }) => {
	return (
		<Box>
			<CreatedCampaignSection accountState={accountState} />
			<ContributedCampaginsSection accountState={accountState} />
		</Box>
	)
}

export default memo(MyCampaignsTab)
