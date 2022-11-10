import React from 'react'
import { AccountTabs } from 'src/@types/account'
import { Box, Container } from '@mui/material'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { Content } from './Content'

interface Props {
	args: AccountTabs
}
export function Account({ args }: Props) {
	return (
		<>
			<Header />
			<Navigation param={args} />
			<Content param={args} />
		</>
	)
}

export default Account