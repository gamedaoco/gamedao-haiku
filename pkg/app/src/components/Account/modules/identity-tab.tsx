import React, { FC, memo } from 'react'
import { AccountState } from 'src/@types/extension'
import IdentityForm from './identity-section/form'

interface IdentityTabProps {
	accountState: AccountState
}
const IdentityTab: FC<IdentityTabProps> = ({ accountState }) => {
	return <IdentityForm />
}

export default memo(IdentityTab)
