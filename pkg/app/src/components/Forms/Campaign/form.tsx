import { useCallback } from 'react'

import { Button, Stack } from '@mui/material'

import { Name, validationSchema as nameValidationSchema } from './modules/name'
import { useTmpCampaignState } from 'hooks/useTmpCampaignState'

interface ComponentProps {
	currentStep: number
	cancel: () => void
	setStep: (step) => void
}

export function Form({ cancel, currentStep, setStep }: ComponentProps) {
	const tmpOrgState = useTmpCampaignState()

	const handleCancel = useCallback(() => {
		if (currentStep === 0 && cancel) {
			cancel()
		}
	}, [currentStep])

	const handleBack = useCallback(() => {
		if (currentStep > 0 && setStep) {
			setStep(currentStep - 1)
		}
	}, [currentStep, setStep])

	const handleNext = useCallback(() => {
		if (currentStep < 2 && setStep) {
			setStep(currentStep + 1)
		}

		if (currentStep == 2) {
			console.log('done')
		}
	}, [currentStep, setStep])

	const checkNextButtonState = () => {
		switch (currentStep) {
			case 0:
				return !nameValidationSchema.isValidSync({
					name: tmpOrgState.name,
					description: tmpOrgState.description,
				})
		}
		return false
	}

	const checkBackButtonState = () => {
		return currentStep == 0
	}

	if ([0, 1, 2].indexOf(currentStep) === -1) {
		return null
	}

	return (
		<>
			{currentStep === 0 && (
				<Name
					name={tmpOrgState.name}
					setName={tmpOrgState.setName}
					description={tmpOrgState.description}
					setDescription={tmpOrgState.setDescription}
				/>
			)}
			<Stack spacing={2} sx={{ justifyContent: { xs: 'space-between', sm: 'flex-end' } }} direction="row">
				<Button
					size="large"
					variant="outlined"
					color="primary"
					sx={{ display: checkBackButtonState() ? 'none' : 'block', flexGrow: { xs: 1, sm: 0 } }}
					onClick={handleBack}
				>
					Back
				</Button>
				<Button
					size="large"
					variant="outlined"
					color="primary"
					sx={{
						display: checkBackButtonState() ? 'block' : 'none',
						flexGrow: { xs: 1, sm: 0 },
					}}
					onClick={handleCancel}
				>
					Cancel
				</Button>

				<Button
					size="large"
					variant="contained"
					onClick={handleNext}
					disabled={checkNextButtonState()}
					sx={{ flexGrow: { xs: 1, sm: 0 } }}
				>
					{currentStep === 2 ? 'Save campaign' : 'Next step'}
				</Button>
			</Stack>
		</>
	)
}
