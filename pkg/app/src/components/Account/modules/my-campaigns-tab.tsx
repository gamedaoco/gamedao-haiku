import { Box } from '@mui/material'
import React, { FC, memo } from 'react'
import { AccountState } from 'src/@types/extension'
import ContributedCampaginsSection from './campaigns-section/contributedCampaignsSection/contributed-campaigns-section'
import CreatedCampaignSection from './campaigns-section/created-campaigns-section/created-campains-section'

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
