import React from 'react'

import { AccountTabs } from 'src/constants/account'
import { Box } from '@mui/material'
// import { Header } from './Header'
// import { Navigation } from './Navigation'
// import { Content } from './Content'

interface Props {
	param: AccountTabs
}

export function Account({ param }: Props) {
	return (
		<Box>
			{/* <Header />
			<Navigation param={param} />
			<Content param={param} /> */}
		</Box>
	)
}
