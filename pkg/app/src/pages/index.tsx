import React from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { Layout } from 'src/layouts/default/layout'
import { Button } from '@mui/material'
import { NavLink } from 'src/components/NavLink/navLink'

export function Page() {
	return (
		<Layout showFooter>
			<Box sx={{ p: '4rem', height: '90vh' }}>
				<Paper sx={{ p: '4rem', height: '100%', borderRadius: '.5rem' }} elevation={10}>
					<Typography sx={{ fontWeight: '800' }} variant={'h2'}>
						Welcome to GameDAO haiku
					</Typography>

					<NavLink href="/app">
						<Button variant="contained">Enter App</Button>
					</NavLink>
				</Paper>
			</Box>
		</Layout>
	)
}

export default Page
