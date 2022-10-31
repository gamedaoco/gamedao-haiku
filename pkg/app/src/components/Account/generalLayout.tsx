import React from 'react'

import { Box, Container } from '@mui/material'
import { AccountTabs } from 'src/@types/account'
import { IdentitySection } from './modules/identitySection'
import { TabsSection } from './modules/tabsSection'
import { SectionsLayout } from './sectionsLayout'

interface ComponentProps {
	param: AccountTabs
}
export function AccountPageGeneralLayout({ param }: ComponentProps) {
	return (
		<>
			<IdentitySection />
			<TabsSection param={param} />
			<SectionsLayout param={param} />
		</>
	)
}
