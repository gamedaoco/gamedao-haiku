import { Stack, Step, StepLabel, Stepper } from '@mui/material'
import React, { useState } from 'react'
import { Form } from 'src/components/Forms/Campaign/form'

interface ComponentProps {
	organizationId: string
	cancel: () => void
	draftId?: string
}

const steps = [
	{
		step: 1,
		label: 'Description',
	},
	{
		step: 2,
		label: 'Campaign content',
	},
	{
		step: 3,
		label: 'Settings',
	},
]

export function CreateCampaignPage({ organizationId, cancel, draftId }: ComponentProps) {
	const [activeStep, setActiveStep] = useState<number>(0)

	return (
		<Stack spacing={6} minWidth="40vw">
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map(({ step, label }) => (
					<Step key={step}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<Form
				organizationId={organizationId}
				currentStep={activeStep}
				cancel={cancel}
				setStep={setActiveStep}
				draftId={draftId}
			/>
		</Stack>
	)
}

export default CreateCampaignPage
