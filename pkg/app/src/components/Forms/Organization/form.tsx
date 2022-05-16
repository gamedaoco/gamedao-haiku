import { useCallback } from 'react'
import { Controller } from 'components/Forms/Organization/controller'
import { Button, Stack } from '@mui/material'
import { Name } from 'components/Forms/Organization/name'
import { Settings } from 'components/Forms/Organization/settings'
import { createInfoNotification } from 'src/utils/notificationUtils'
import { UseTmpOrganisationState } from 'hooks/useTmpOrganisationState'

interface ComponentProps {
	currentStep: number
	setStep: (step) => void
}

export function Form({ currentStep, setStep }: ComponentProps) {
	const tmpOrgState = UseTmpOrganisationState()

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
			createInfoNotification('Organization was saved')
		}
	}, [currentStep, setStep])

	const checkNextButtonState = () => {
		switch (currentStep) {
			case 0:
				return tmpOrgState.name?.length === 0
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
			{currentStep === 1 && <Controller selected={tmpOrgState.type} setSelected={tmpOrgState.setType} />}
			{currentStep === 2 && (
				<Settings
					selectedMode={tmpOrgState.mode}
					setSelectedMode={tmpOrgState.setMode}
					selectedFee={tmpOrgState.feeMode}
					setSelectedFee={tmpOrgState.setFeeMode}
					memberLimit={tmpOrgState.memberLimit}
					setMemberLimit={tmpOrgState.setMemberLimit}
					feeAmount={tmpOrgState.feeAmount}
					setFeeAmount={tmpOrgState.setFeeAmount}
					hasWhitelist={tmpOrgState.hasWhitelist}
					setHasWhitelist={tmpOrgState.setHasWhitelist}
					hasApplication={tmpOrgState.hasApplication}
					setHasApplication={tmpOrgState.setHasApplication}
				/>
			)}
			<Stack spacing={2} justifyContent="flex-end" direction="row">
				<Button size="large" variant="outlined" disabled={checkBackButtonState()} onClick={handleBack}>
					Back
				</Button>

				<Button size="large" variant="contained" onClick={handleNext} disabled={checkNextButtonState()}>
					{currentStep === 2 ? 'Save organization' : 'Next step'}
				</Button>
			</Stack>
		</>
	)
}
