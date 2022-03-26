import { Stepper, Step, StepLabel } from '@mui/material'

export const FormStepper = (props) => {
	return (
		<Stepper activeStep={props.stepperState} orientation={'horizontal'}>
			<Step>
				<StepLabel>Enter data</StepLabel>
			</Step>
			<Step>
				<StepLabel>Validate</StepLabel>
			</Step>
			<Step>
				<StepLabel>Profit</StepLabel>
			</Step>
		</Stepper>
	)
}
