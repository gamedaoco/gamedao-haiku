import { styled } from '@mui/material/styles'
import { Stepper, Step, StepLabel } from '@mui/material'

const FormStepper = (props) => {
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


export default FormStepper