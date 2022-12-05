import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Layout } from 'layouts/default'

export function Page() {
	return (
		<Layout showHeader showFooter showSidebar>
			<Typography variant={'h3'}>Quests</Typography>
		</Layout>
	)
}

export default Page
