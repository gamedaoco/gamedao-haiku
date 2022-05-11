import React, { useState } from 'react'
import { Layout } from 'src/layouts/default/layout'
import { Grid, Stack, Step, StepLabel, Stepper } from '@mui/material'
import { Form } from 'components/Forms/Organization/form'

export function CreateOrganisationPage() {
	const [activeStep, setActiveStep] = useState<number>(0)

	return (
		<Layout showHeader showFooter showSidebar title="Organisation">
			<Grid
				width="100%"
				height="100%"
				display="grid"
				minHeight="90vh"
				justifyContent="center"
				alignItems="center"
				padding={{ xs: 2, sm: 4 }}
			>
				<Stack spacing={6} minWidth="40vw">
					<Stepper activeStep={activeStep}>
						{[1, 2, 3].map((step) => (
							<Step key={step}>
								<StepLabel />
							</Step>
						))}
					</Stepper>
					<Form currentStep={activeStep} setStep={setActiveStep} />
				</Stack>
			</Grid>
		</Layout>
	)
}

export default CreateOrganisationPage
