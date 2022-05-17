import React, { FC, memo } from 'react'
import { AccountState } from 'src/@types/extension'

interface OverviewTabProps {
	accountState: AccountState
}
const OverviewTab: FC<OverviewTabProps> = ({ accountState }) => {
	return <div>overview-tab</div>
}

export default memo(OverviewTab)
