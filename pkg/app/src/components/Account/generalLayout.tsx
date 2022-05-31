import { Box, Container } from '@mui/material'
import React, { FC, useState } from 'react'
import { AccountTabs } from 'src/@types/account'
import { AccountState } from 'src/@types/extension'
import IdentitySection from './modules/identitySection'
import TabsSection from './modules/tabsSection'
import SectionsLayout from './sectionsLayout'

interface AccountPageGeneralLayoutProps {
	accountState: AccountState
}
const AccountPageGeneralLayout: FC<AccountPageGeneralLayoutProps> = ({ accountState }) => {
	const [currentTab, setCurrentTab] = useState<AccountTabs>(AccountTabs.OVERVIEW)
	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				py: 8,
			}}
		>
			<Container>
				<IdentitySection accountState={accountState} setCurrentTab={setCurrentTab} />
				<TabsSection setCurrentTab={setCurrentTab} currentTab={currentTab} />
				<SectionsLayout currentTab={currentTab} accountState={accountState} />
			</Container>
		</Box>
	)
}

export default AccountPageGeneralLayout
