import React, { FC, memo } from 'react'
import { AccountState } from 'src/@types/extension'

interface MyOrganisationsTabProps {
	accountState: AccountState
}
const MyOrganisationsTab: FC<MyOrganisationsTabProps> = ({ accountState }) => {
	return <div>my-organisations-tab</div>
}

export default memo(MyOrganisationsTab)
