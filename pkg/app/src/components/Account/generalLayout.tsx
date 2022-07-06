import React, { FC } from 'react'

import { Box, Container } from '@mui/material'
import { AccountTabs } from 'src/@types/account'
import { AccountState } from 'src/@types/extension'

import IdentitySection from './modules/identitySection'
import TabsSection from './modules/tabsSection'
import SectionsLayout from './sectionsLayout'

interface AccountPageGeneralLayoutProps {
	accountState: AccountState
	param: AccountTabs
}
const AccountPageGeneralLayout: FC<AccountPageGeneralLayoutProps> = ({ accountState, param }) => {
	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				py: 8,
			}}
		>
			<Container>
				<IdentitySection accountState={accountState} />
				<TabsSection param={param} />
				<SectionsLayout param={param} accountState={accountState} />
			</Container>
		</Box>
	)
}

export default AccountPageGeneralLayout
