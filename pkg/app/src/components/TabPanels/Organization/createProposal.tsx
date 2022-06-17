import React, { useState } from 'react'

import { Grid, Stack, Step, StepLabel, Stepper } from '@mui/material'

import { Form } from 'components/Forms/Proposal/form'

interface ComponentProps {
	organizationId: string
	handleCloseForm: () => void
}

export function CreateProposal({ organizationId, handleCloseForm }: ComponentProps) {
	const [activeStep, setActiveStep] = useState<number>(0)

	return (
		<Grid width="100%" height="100%" padding={{ xs: 2, sm: 4 }}>
			<Stack spacing={6} minWidth="40vw">
				<Stepper activeStep={activeStep}>
					{[1, 2, 3].map((step) => (
						<Step key={step}>
							<StepLabel />
						</Step>
					))}
				</Stepper>

				<Form
					currentStep={activeStep}
					setStep={setActiveStep}
					onClose={handleCloseForm}
					organizationId={organizationId}
				/>
			</Stack>
		</Grid>
	)
}
