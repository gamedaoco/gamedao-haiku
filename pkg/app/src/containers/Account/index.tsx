// import React from 'react'
import { AccountTabs } from 'src/@types/account'
// import { Box, Container } from '@mui/material'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { Content } from './Content'

interface Props {
	param: AccountTabs
}
export function Account({ param }: Props) {
	return (
		<>
			<Header />
			<Navigation param={param} />
			<Content param={param} />
		</>
	)
}

export default Account
