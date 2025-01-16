import React from 'react'
import { Layout } from 'layouts/astar'
import { Dashboard } from 'dapps/stakeboard/Dashboard'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

export function Page() {
	return (
		<Layout showHeader showFooter>
			<Dashboard />
		</Layout>
	)
}

export default Page
