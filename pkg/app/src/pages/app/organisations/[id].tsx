import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Layout } from 'src/layouts/default/layout'
import { useRouter } from 'next/router'

export function OrganisationsInfoPage() {
	const { id } = useRouter().query
	return (
		<Layout showHeader showFooter showSidebar title="DAO">
			<Box sx={{ p: '4rem', height: '90vh' }}>
				<Paper sx={{ p: '4rem', height: '100%', borderRadius: '.5rem' }} elevation={10}>
					<Typography sx={{ fontWeight: '800' }} variant={'h2'}>
						Hello.
					</Typography>
					{id}
				</Paper>
			</Box>
		</Layout>
	)
}

export default OrganisationsInfoPage
