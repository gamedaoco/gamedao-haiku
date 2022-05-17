import React, { FC, memo } from 'react'
import { AccountState } from 'src/@types/extension'

interface MyCampaignsTabProps {
	accountState: AccountState
}
const MyCampaignsTab: FC<MyCampaignsTabProps> = ({ accountState }) => {
	return <div>my-campaigns-tab</div>
}

export default memo(MyCampaignsTab)
