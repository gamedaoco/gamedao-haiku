import { useCallback, useState } from 'react'

import { useRouter } from 'next/router'

import { Button, Stack } from '@mui/material'
import { ISubmittableResult } from '@polkadot/types/types'
import { useCreateProposalTransaction } from 'hooks/tx/useCreateProposalTransaction'
import { useTMPProposalState } from 'hooks/useTMPProposalState'
import { useTranslation } from 'react-i18next'
import { uploadFileToIpfs } from 'src/utils/ipfs'

import {
	Description,
	validationSchema as descriptionValidationSchema,
	validationSchemaWithdrawal as descriptionValidationSchemaWithdrawal,
} from 'components/Forms/Proposal/modules/description'
import { Majority } from 'components/Forms/Proposal/modules/majority'
import { Type } from 'components/Forms/Proposal/modules/type'
import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

interface ComponentProps {
	currentStep: number
	organizationId: string
	setStep: (step) => void
	onClose: () => void
}

export function Form({ currentStep, setStep, organizationId, onClose }: ComponentProps) {
	const [modalState, setModalState] = useState<boolean>(false)
	const { push } = useRouter()
	const tmpProposalState = useTMPProposalState()
	const tx = useCreateProposalTransaction(organizationId)
	const { t } = useTranslation()

	const handleModalClose = useCallback(() => {
		setModalState(false)
	}, [setModalState])

	const handleTxCallback = useCallback(
		(state: boolean, result: ISubmittableResult) => {
			if (state) {
				// The transaction was successful, clear state
				tmpProposalState?.clearAll()
				onClose()
			}
			setModalState(false)
		},
		[tmpProposalState?.clearAll, onClose, setModalState],
	)

	const handleBack = useCallback(() => {
		if (currentStep > 0 && setStep) {
			setStep(currentStep - 1)
		}
	}, [currentStep, setStep])

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

	const handleNext = useCallback(() => {
		if (currentStep < 2 && setStep) {
			setStep(currentStep + 1)
		}

		if (currentStep == 1) {
			uploadMetadata()
		}

		if (currentStep == 2) {
			setModalState(true)
		}
	}, [currentStep, setStep, push, uploadMetadata, setModalState])

	const checkNextButtonState = () => {
		switch (currentStep) {
			case 1:
				if (tmpProposalState.type == 1) {
					return !descriptionValidationSchemaWithdrawal.isValidSync({
						name: tmpProposalState.name,
						description: tmpProposalState.description,
						startDate: tmpProposalState.startDate,
						endDate: tmpProposalState.endDate,
						campaignId: tmpProposalState.campaignId,
						amount: tmpProposalState.amount,
					})
				} else {
					return !descriptionValidationSchema.isValidSync({
						name: tmpProposalState.name,
						description: tmpProposalState.description,
						startDate: tmpProposalState.startDate,
						endDate: tmpProposalState.endDate,
					})
				}

			case 2:
				return !tx
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
					amount={tmpProposalState.amount}
					setAmount={tmpProposalState.setAmount}
					campaignId={tmpProposalState.campaignId}
					setCampaignId={tmpProposalState.setCampaignId}
					setEndDate={tmpProposalState.setEndDate}
					organizationId={organizationId}
					isWithdrawal={tmpProposalState.type == 1}
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
					{t('button:form:back')}
				</Button>

				<Button size="large" variant="contained" onClick={handleNext} disabled={checkNextButtonState()}>
					{t(currentStep === 2 ? 'button:form:proposal:create' : 'button:form:next_step')}
				</Button>
			</Stack>
			<TransactionDialog
				open={modalState}
				onClose={handleModalClose}
				tx={tx}
				txMsg={{
					pending: t('notification:transactions:createProposal:pending'),
					success: t('notification:transactions:createProposal:success'),
					error: t('notification:transactions:createProposal:error'),
				}}
				txCallback={handleTxCallback}
			/>
		</>
	)
}
