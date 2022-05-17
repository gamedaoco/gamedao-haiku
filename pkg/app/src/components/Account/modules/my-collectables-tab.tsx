import React, { FC, memo } from 'react'
import { AccountState } from 'src/@types/extension'

interface MyCollectablesTabProps {
	accountState: AccountState
}
const MyCollectablesTab: FC<MyCollectablesTabProps> = ({ accountState }) => {
	return <div>my-collectables-tab</div>
}

export default memo(MyCollectablesTab)
