import { Stepper as MUIStepper, Step, StepLabel } from '@mui/material'

interface ComponentProps {
	stepperState: number
}

export const Stepper = ({ stepperState }: ComponentProps) => {
	return (
		<MUIStepper activeStep={stepperState} orientation={'horizontal'}>
			<Step>
				<StepLabel>Enter data</StepLabel>
			</Step>
			<Step>
				<StepLabel>Validate</StepLabel>
			</Step>
			<Step>
				<StepLabel>Profit</StepLabel>
			</Step>
		</MUIStepper>
	)
}
