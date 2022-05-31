import { useCallback } from 'react'
import { createInfoNotification } from 'src/utils/notificationUtils'
import { useRouter } from 'next/router'
import { Button, Stack } from '@mui/material'
import { useTMPProposalState } from 'hooks/useTMPProposalState'
import { Type } from 'components/Forms/Proposal/modules/type'
import {
	Description,
	validationSchema as descriptionValidationSchema,
} from 'components/Forms/Proposal/modules/description'
import { Majority } from 'components/Forms/Proposal/modules/majority'
import { uploadFileToIpfs } from 'src/utils/ipfs'

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
			uploadMetadata()
			createInfoNotification('Proposal was saved')
			push('/proposals')
			// TODO create proposal tx
		}
	}, [currentStep, setStep, push])

	// Update and upload metadata
	const uploadMetadata = useCallback(() => {
		if (tmpProposalState.description && tmpProposalState.name) {
			const metaData = {
				name: tmpProposalState.name,
				description: tmpProposalState.description,
			}
			;(async (): Promise<string> => {
				const file = new File([JSON.stringify(metaData)], `${tmpProposalState.name}-proposal-metadata.json`, {
					type: 'text/plain',
				})

				const cid = await uploadFileToIpfs(file)
				return cid.toString()
			})().then((cid) => tmpProposalState.setMetaDataCID(cid))
		}
	}, [tmpProposalState])

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
