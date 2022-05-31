import React, { FC, memo } from 'react'

import { useIdentityByAddress } from 'hooks/useIdentityByAddress'
import { AccountState } from 'src/@types/extension'

import IdentityForm from './IdentitySection/form'

interface IdentityTabProps {
	accountState: AccountState
}
const IdentityTab: FC<IdentityTabProps> = ({ accountState }) => {
	// todo - replace the static identity with the address from the accountstate when merged
	const { identity } = useIdentityByAddress('5Dkv3jCJqDdk2uWWdT2DNXAFFgTLhHRZxdFmU8LHz9R74BeS')

	return <IdentityForm identity={identity} />
}

export default memo(IdentityTab)
