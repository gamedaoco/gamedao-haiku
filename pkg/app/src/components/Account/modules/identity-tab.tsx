import React, { FC, memo } from 'react'
import { AccountState } from 'src/@types/extension'

interface IdentityTabProps {
	accountState: AccountState
}
const IdentityTab: FC<IdentityTabProps> = ({ accountState }) => {
	return <div>identity-tab</div>
}

export default memo(IdentityTab)
