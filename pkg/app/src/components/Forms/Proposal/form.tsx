import { useCallback } from 'react'

import { useRouter } from 'next/router'

import { Button, Stack } from '@mui/material'
import { useTMPProposalState } from 'hooks/useTMPProposalState'
import { createInfoNotification } from 'src/utils/notificationUtils'

import {
	Description,
	validationSchema as descriptionValidationSchema,
} from 'components/Forms/Proposal/modules/description'
import { Majority } from 'components/Forms/Proposal/modules/majority'
import { Type } from 'components/Forms/Proposal/modules/type'

interface ComponentProps {
	currentStep: number
	setStep: (step) => void
}

export function Form({ currentStep, setStep }: ComponentProps) {
	const { push } = useRouter()
	const tmpProposalState = useTMPProposalState()

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
			createInfoNotification('Proposal was saved')
			push('/app/proposals')
		}
	}, [currentStep, setStep, push])

	const checkNextButtonState = () => {
		switch (currentStep) {
			case 1:
				return !descriptionValidationSchema.isValidSync({
					name: tmpProposalState.name,
					description: tmpProposalState.description,
					startDate: tmpProposalState.startDate,
					endDate: tmpProposalState.endDate,
				})
		}
		return false
	}

	const checkBackButtonState = () => {
		return currentStep == 0
	}

	return (
		<>
			{currentStep === 0 && <Type selected={tmpProposalState.type} setSelected={tmpProposalState.setType} />}
			{currentStep === 1 && (
				<Description
					name={tmpProposalState.name}
					setName={tmpProposalState.setName}
					description={tmpProposalState.description}
					setDescription={tmpProposalState.setDescription}
					startDate={tmpProposalState.startDate}
					setStartDate={tmpProposalState.setStartDate}
					endData={tmpProposalState.endDate}
					setEndDate={tmpProposalState.setEndDate}
				/>
			)}
			{currentStep === 2 && (
				<Majority
					selected={tmpProposalState.majority}
					setSelected={tmpProposalState.setMajority}
					deposit={tmpProposalState.deposit}
					setDeposit={tmpProposalState.setDeposit}
				/>
			)}
			<Stack spacing={2} justifyContent="flex-end" direction="row">
				<Button size="large" variant="outlined" disabled={checkBackButtonState()} onClick={handleBack}>
					Back
				</Button>

				<Button size="large" variant="contained" onClick={handleNext} disabled={checkNextButtonState()}>
					{currentStep === 2 ? 'Save Proposal' : 'Next step'}
				</Button>
			</Stack>
		</>
	)
}
