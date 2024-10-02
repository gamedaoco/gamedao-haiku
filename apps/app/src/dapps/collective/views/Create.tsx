import { Fragment, useCallback, useState } from 'react'

import { useRouter } from 'next/router'

import { Button, Stack, Paper } from '@mui/material'
import { useTmpOrganizationState } from 'src/hooks/useTmpOrganizationState'
import { useTranslation } from 'react-i18next'
import { createInfoNotification } from 'src/utils/notification'

import { Controller } from '../components/create/Controller'
import { Name, validationSchema as nameValidationSchema } from '../components/create/Name'
import { Settings } from '../components/create/Settings'

import { Step, StepLabel, Stepper } from '@mui/material'

const ProgressBar = ({ activeStep, setActiveStep }) => {
	return (
		<Stepper activeStep={activeStep} alternativeLabel>
			{steps.map(({ step, label }) => (
				<Step key={step} onClick={() => setActiveStep(step)}>
					<StepLabel>{label}</StepLabel>
				</Step>
			))}
		</Stepper>
	)
}

interface ComponentProps {
	currentStep: number
	setStep: (step) => void
}

const steps = [
	{
		step: 1,
		label: 'Description',
	},
	{
		step: 2,
		label: 'Content',
	},
	{
		step: 3,
		label: 'Settings',
	},
]

export function CreateCollective({ currentStep, setStep }: ComponentProps) {
	const [activeStep, setActiveStep] = useState(0)
	const { push } = useRouter()
	const { t } = useTranslation()

	const tmpOrgState = useTmpOrganizationState()

	const handleCancel = useCallback(() => {
		if (currentStep === 0) {
			push('/collectives')
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
			createInfoNotification('Your Collective was saved')
			push('/collectives/finalize')
		}
	}, [currentStep, setStep, push])

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
		<Paper variant="glass" sx={{ p: { xs: 3, sm: 6 } }}>
			<ProgressBar activeStep={activeStep} setActiveStep={setActiveStep} />

			{currentStep === 0 && (
				<Name
					name={tmpOrgState.name}
					setName={tmpOrgState.setName}
					description={tmpOrgState.description}
					setDescription={tmpOrgState.setDescription}
					// ridiculous, but needs to stay like this till refactor
					url={tmpOrgState.url}
					setUrl={tmpOrgState.setUrl}
					location={tmpOrgState.location}
					setLocation={tmpOrgState.setLocation}
					tags={tmpOrgState.tags}
					setTags={tmpOrgState.setTags}
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

			<Stack spacing={2} sx={{ justifyContent: { xs: 'space-between', sm: 'space-between' } }} direction="row">
				<Button
					size="large"
					variant="outlined"
					color="primary"
					sx={{ display: checkBackButtonState() ? 'none' : 'block', flexGrow: { xs: 1, sm: 0 } }}
					onClick={handleBack}
				>
					{t('button:form:back')}
				</Button>

				<Button
					size="large"
					// variant="outlined"
					color="primary"
					sx={{
						display: checkBackButtonState() ? 'block' : 'none',
						flexGrow: { xs: 1, sm: 0 },
					}}
					onClick={handleCancel}
				>
					{t('button:form:cancel')}
				</Button>

				<Button size="large" variant="contained" onClick={handleNext} disabled={checkNextButtonState()} sx={{ flexGrow: { xs: 1, sm: 0 } }}>
					{
						// t(`button:form:${currentStep === 2 ? 'save_organization' : 'next_step'}`)
						t(`${currentStep === 2 ? 'Finalize' : 'Next'}`)
					}
				</Button>
			</Stack>
		</Paper>
	)
}
