import { Button, Stack } from '@mui/material'
import { ISubmittableResult } from '@polkadot/types/types'
import { useCreateProposalTransaction } from 'hooks/featureToggle/tx/useCreateProposalTransaction'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
	Description,
	getValidationSchema as getDescriptionValidationSchema,
	getDescriptionValidationSchemaSpending,
	getValidationSchemaWithdrawal as getDescriptionValidationSchemaWithdrawal,
} from 'src/components/Forms/Proposal/modules/description'
import { Majority } from 'src/components/Forms/Proposal/modules/majority'
import { Type } from 'src/components/Forms/Proposal/modules/type'
import { TransactionDialog } from 'src/components/TransactionDialog/transactionDialog'
import { PROPOSAL_KEYS } from 'src/constants/proposal'
import { useConfig } from 'src/hooks/useConfig'
import { useTMPProposalState } from 'src/hooks/useTMPProposalState'
import { uploadFileToIpfs } from 'src/utils/ipfs'

interface ComponentProps {
	currentStep: number
	organizationId: string
	setStep: (step) => void
	onClose: () => void
}

export function Form({ currentStep, setStep, organizationId, onClose }: ComponentProps) {
	const [modalState, setModalState] = useState<boolean>(false)
	const { push } = useRouter()
	const config = useConfig()
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
				if (tmpProposalState.type == PROPOSAL_KEYS.Withdrawal) {
					return !getDescriptionValidationSchemaWithdrawal(
						config?.PROPOSAL_MIN_EXPIRY_IN_SECONDS,
					).isValidSync({
						name: tmpProposalState.name,
						description: tmpProposalState.description,
						startDate: tmpProposalState.startDate,
						endDate: tmpProposalState.endDate,
						campaignId: tmpProposalState.campaignId,
						amount: tmpProposalState.amount,
					})
				} else if (tmpProposalState.type == PROPOSAL_KEYS.Spending) {
					return !getDescriptionValidationSchemaSpending(config?.PROPOSAL_MIN_EXPIRY_IN_SECONDS).isValidSync({
						name: tmpProposalState.name,
						description: tmpProposalState.description,
						startDate: tmpProposalState.startDate,
						endDate: tmpProposalState.endDate,
						currencyId: tmpProposalState.currencyId,
						amount: tmpProposalState.amount,
						beneficiaryAddress: tmpProposalState.beneficiaryAddress,
					})
				} else {
					return !getDescriptionValidationSchema(config?.PROPOSAL_MIN_EXPIRY_IN_SECONDS).isValidSync({
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
					type={tmpProposalState.type}
					name={tmpProposalState.name}
					setName={tmpProposalState.setName}
					description={tmpProposalState.description}
					setDescription={tmpProposalState.setDescription}
					startDate={tmpProposalState.startDate}
					setStartDate={tmpProposalState.setStartDate}
					endDate={tmpProposalState.endDate}
					amount={tmpProposalState.amount}
					setAmount={tmpProposalState.setAmount}
					campaignId={tmpProposalState.campaignId}
					setCampaignId={tmpProposalState.setCampaignId}
					setEndDate={tmpProposalState.setEndDate}
					currencyId={tmpProposalState.currencyId}
					setCurrencyId={tmpProposalState.setCurrencyId}
					beneficiaryAddress={tmpProposalState.beneficiaryAddress}
					setBeneficiaryAddress={tmpProposalState.setBeneficiaryAddress}
					organizationId={organizationId}
				/>
			)}
			{currentStep === 2 && (
				<Majority
					selected={tmpProposalState.majority}
					setSelected={tmpProposalState.setMajority}
					deposit={tmpProposalState.deposit}
					setDeposit={tmpProposalState.setDeposit}
					type={tmpProposalState.type}
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
			<TransactionDialog open={modalState} onClose={handleModalClose} txData={tx} txCallback={handleTxCallback} />
		</>
	)
}
