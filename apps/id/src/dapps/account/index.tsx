import { Content } from './Content'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { Box } from '@mui/material'
import React from 'react'
import { AccountTabs } from 'src/constants/account'

interface Props {
	param: AccountTabs
}

export function Account({ param }: Props) {
	return (
		<Box>
			<Header />
			<Navigation param={param} />
			<Content param={param} />
		</Box>
	)
}
