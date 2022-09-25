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
		<Box component="main" sx={{ flexGrow: 1, py: 8 }}>
			<Container>
				<IdentitySection />
				<TabsSection param={param} />
				<SectionsLayout param={param} />
			</Container>
		</Box>
	)
}
