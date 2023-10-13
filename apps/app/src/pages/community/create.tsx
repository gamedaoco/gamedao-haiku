import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Layout } from 'src/layouts/v2'
import { Container, Box, Grid, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { Form } from 'dapps/community/components/Organization/form'

export function CreateOrganizationPage() {
	const [activeStep, setActiveStep] = useState<number>(0)
	const { t } = useTranslation()
	return (
		<Layout showHeader showFooter showSidebar title={'Create Community' || t('page:organizations:title')}>
			<Box sx={{ mb: 4 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						<Typography variant="h3">{'Create Community' || t('page:organizations:create')}</Typography>
					</Grid>
					<Grid item></Grid>
				</Grid>
			</Box>

			<Box justifyContent="center" alignItems="center">
				<Stack spacing={[4, 6]} minWidth={['100%', '40vw']}>
					<Stepper activeStep={activeStep}>
						{[1, 2, 3].map((step) => (
							<Step key={step}>
								<StepLabel />
							</Step>
						))}
					</Stepper>

					<Form currentStep={activeStep} setStep={setActiveStep} />
				</Stack>
			</Box>
		</Layout>
	)
}

export default CreateOrganizationPage
