import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Layout } from 'src/layouts/v2'
import { Box, Button, Grid, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { CreateCollective } from 'dapps/collective/views/Create'
import Link from 'next/link'

export function Page() {
	const [activeStep, setActiveStep] = useState(0)
	const { t } = useTranslation()

	return (
		<Layout showHeader showFooter showSidebar title={'Create Community' || t('page:organizations:title')}>
			<Grid container justifyContent="space-between" spacing={3} alignItems="center" pb={2}>
				<Grid item>
					<Typography variant="h3">{'Create Collective' || t('page:organizations:create')}</Typography>
				</Grid>
				<Grid item>
					{true && (
						<Link href="/campaigns/create">
							{/* <Button startIcon={<HelpOutlined fontSize="small" />} variant="outlined"> */}
							<Button variant="outlined" disabled>
								Get Support
							</Button>
						</Link>
					)}
				</Grid>{' '}
			</Grid>

			<Grid item pb={2}>
				<Typography variant="body1" sx={{ maxWidth: { sx: '100%', md: '75%', lg: '50%' } }} pb={[2, 4]}>
					Create, manage, and interact with collectives: Join to take part in their governance. Create a collective and operate it any way you want —
					as an individual or group, with your company, team or community.
				</Typography>
			</Grid>

			<CreateCollective currentStep={activeStep} setStep={setActiveStep} />
		</Layout>
	)
}

export default Page
