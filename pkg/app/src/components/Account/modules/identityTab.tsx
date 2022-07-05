import React, { FC, memo } from 'react'

import { useIdentityByAddress } from 'hooks/useIdentityByAddress'
import { AccountState } from 'src/@types/extension'
import { getAddressFromAccountState } from 'src/utils/accountUtils'

import IdentityForm from './IdentitySection/form'

interface IdentityTabProps {
	accountState: AccountState
}
const IdentityTab: FC<IdentityTabProps> = ({ accountState }) => {
	const { identity } = useIdentityByAddress(getAddressFromAccountState(accountState))

	return <IdentityForm identity={identity} />
}

export default memo(IdentityTab)
