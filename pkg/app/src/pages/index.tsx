import React from 'react'
import { Layout } from 'components/Layouts/default/layout'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export function Page() {
	return (
		<Layout showHeader showFooter showSidebar>
			<Box sx={{ pt: ['5rem', '5rem', '2rem'], pb: '1rem', minHeight: '90vh' }}>
				<Paper sx={{ p: ['2rem', '4rem'], height: '100%', borderRadius: '.75rem' }} elevation={0}>
					<Typography sx={{ fontWeight: '800' }} variant={'h3'}>
						Welcome to GameDAO
					</Typography>
				</Paper>
			</Box>
		</Layout>
	)
}

export default Page
