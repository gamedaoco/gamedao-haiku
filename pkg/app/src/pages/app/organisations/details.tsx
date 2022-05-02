import React, { useState } from 'react'
import { Layout } from 'src/layouts/default/layout'
import { Box, Card, Grid, Stack } from '@mui/material'
import { AddAPhoto } from '@mui/icons-material'

export function OrganisationDetailsPage() {
	const [activeStep, setActiveStep] = useState<number>(0)

	return (
		<Layout showHeader showFooter showSidebar title="Organisation">
			<Box width="100%" height="100%" minHeight="90vh" padding={{ xs: 2, sm: 4 }}>
				<Stack spacing={4}>
					<Card>
						<Grid minHeight="20vh" display="grid" justifyContent="center" alignItems="center">
							<AddAPhoto sx={{ height: '44px', width: '44px' }} />
						</Grid>
					</Card>
				</Stack>
			</Box>
		</Layout>
	)
}

export default OrganisationDetailsPage
