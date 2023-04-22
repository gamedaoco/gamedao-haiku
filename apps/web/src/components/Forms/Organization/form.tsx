import { useCallback } from 'react'

import { useRouter } from 'next/router'

import { Button, Stack } from '@mui/material'
import { useTmpOrganizationState } from 'src/hooks/useTmpOrganizationState'
import { useTranslation } from 'react-i18next'
import { createInfoNotification } from 'utils/notificationUtils'

import { Controller } from './modules/controller'
import { Name, validationSchema as nameValidationSchema } from './modules/name'
import { Settings } from './modules/settings'

interface ComponentProps {
	currentStep: number
	setStep: (step) => void
}

export function Form({ currentStep, setStep }: ComponentProps) {
	const { push } = useRouter()
	const { t } = useTranslation()

	const tmpOrgState = useTmpOrganizationState()

	const handleCancel = useCallback(() => {
		if (currentStep === 0) {
			push('/organizations')
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
			createInfoNotification('Organization was saved')
			push('/organizations/dashboard')
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

	// console.log('xxxxxxxxxxxxxxxxxxxxxxxx\n\n','tmpOrgState',tmpOrgState)

	return (
		<>
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
			<Stack spacing={2} sx={{ justifyContent: { xs: 'space-between', sm: 'flex-end' } }} direction="row">
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

				<Button
					size="large"
					variant="contained"
					onClick={handleNext}
					disabled={checkNextButtonState()}
					sx={{ flexGrow: { xs: 1, sm: 0 } }}
				>
					{t(`button:form:${currentStep === 2 ? 'save_organization' : 'next_step'}`)}
				</Button>
			</Stack>
		</>
	)
}
