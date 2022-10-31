import React, { useCallback, useEffect, useState } from 'react'

import { Box, Button, Stack } from '@mui/material'
import { useCreateCampaignTransaction } from 'hooks/tx/useCreateCampaignTransaction'
import { useConfig } from 'hooks/useConfig'
import { useSaveCampaignDraft } from 'hooks/useSaveCampaignDraft'
import { useTmpCampaign } from 'hooks/useTmpCampaign'
import { useTmpCampaignState } from 'hooks/useTmpCampaignState'
import { useTranslation } from 'react-i18next'
import { uploadFileToIpfs } from 'src/utils/ipfs'

import { ConfirmationModal } from 'components/Modals/ConfirmationModal'
import { ConfirmDeleteCampaignDraft } from 'components/Modals/confirmDeleteCampaignDraft'
import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

import { Content, validationSchema as contentValidationSchema } from './modules/content'
import { Name, validationSchema as nameValidationSchema } from './modules/name'
import { Settings, getValidationSchema as getSettingsValidationSchema } from './modules/settings'

interface ComponentProps {
	organizationId: string
	currentStep: number
	draftId?: string
	cancel: () => void
	setStep: (step) => void
}

export function Form({ organizationId, cancel, currentStep, setStep, draftId }: ComponentProps) {
	const [openModal, setOpenModal] = useState<boolean>(false)
	const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState<boolean>(false)
	const tmpCampaignState = useTmpCampaignState()
	const tmpCampaign = useTmpCampaign()
	const config = useConfig()
	const [termsConditionAccepted, setTermsConditionAccepted] = useState<boolean>(false)
	const [txModalState, setTxModalState] = useState<boolean>(false)
	const createCampaignTx = useCreateCampaignTransaction()
	const { addDraft, drafts } = useSaveCampaignDraft(organizationId)
	const { t } = useTranslation()

	useEffect(() => {
		tmpCampaignState.setOrgId(organizationId)
	}, [tmpCampaignState, organizationId])

	useEffect(() => {
		if (draftId && drafts[draftId]) {
			tmpCampaignState.restoreDraft({ ...drafts[draftId], orgId: organizationId })
		}
	}, [draftId, drafts])

	const handleCancel = useCallback(() => {
		if (currentStep === 0 && cancel) {
			setOpenModal(false)
			cancel()
		}
	}, [cancel, currentStep])

	const handleBack = useCallback(() => {
		if (currentStep > 0 && setStep) {
			setStep(currentStep - 1)
		}
	}, [currentStep, setStep])

	const handleNext = useCallback(() => {
		if (currentStep < 2 && setStep) {
			setStep(currentStep + 1)
		}

		if (currentStep == 1) {
			;(async () => {
				const file = new File(
					[
						JSON.stringify({
							name: tmpCampaignState.name,
							markdown: tmpCampaignState.content,
							description: tmpCampaignState.description,
							logo: '',
							title: '',
							header: tmpCampaignState.bannerCid,
							email: '',
						}),
					],
					`${tmpCampaignState.name}-metadata.json`,
					{
						type: 'text/plain',
					},
				)

				const cid = await uploadFileToIpfs(file)
				console.log('cid', cid)
				tmpCampaignState.setMetadataCid(cid.toString())
			})()
		}

		if (currentStep == 2) {
			setTxModalState(true)
		}
	}, [tmpCampaignState, currentStep, setStep])

	const handleUploadBannerImage = useCallback(
		(file: File) => {
			;(async (): Promise<string> => {
				const bannerFile = new File([await file.arrayBuffer()], file.name)
				const cid = await uploadFileToIpfs(bannerFile)
				return cid.toString()
			})().then((cid) => tmpCampaignState.setBannerCid(cid))
		},
		[tmpCampaignState],
	)

	const handeSetGovernance = useCallback(
		(governance: number) => {
			tmpCampaignState.setGovernance(governance)
		},
		[tmpCampaignState],
	)

	const handleSaveDraft = useCallback(() => {
		addDraft(tmpCampaign)
		cancel()
	}, [addDraft, tmpCampaign])

	const checkNextButtonState = () => {
		switch (currentStep) {
			case 0:
				return !nameValidationSchema.isValidSync({
					name: tmpCampaignState.name,
					description: tmpCampaignState.description,
				})
			case 1:
				return !contentValidationSchema.isValidSync({
					banner: tmpCampaignState.bannerCid,
					content: tmpCampaignState.content,
				})
			case 2:
				return !getSettingsValidationSchema(config?.CAMPAIGN_MIN_EXPIRY_IN_SECONDS).isValidSync({
					target: tmpCampaignState.target,
					deposit: tmpCampaignState.deposit,
					startDate: tmpCampaignState.startDate,
					endDate: tmpCampaignState.endDate,
					termsCondition: termsConditionAccepted,
					currencyId: tmpCampaignState.currencyId,
					usageOfFunds: tmpCampaignState.usageOfFunds,
				})
		}
		return false
	}

	const handleCloseTxModal = useCallback(() => {
		setTxModalState(false)
	}, [setTxModalState])
	const handleTxCallback = useCallback(
		(state) => {
			if (state) {
				tmpCampaignState.clearAll()
				cancel()
			}
		},
		[tmpCampaignState, setTxModalState],
	)
	const handleCloseModal = useCallback(() => {
		setOpenModal(false)
	}, [])

	const handleOpenModal = useCallback(() => {
		setOpenModal(true)
	}, [])

	const handleConfirmDeleteModalOnClose = useCallback((result: boolean) => {
		setOpenConfirmDeleteModal(false)
		if (result) {
			cancel()
		}
	}, [])

	const checkBackButtonState = () => {
		return currentStep == 0
	}

	if ([0, 1, 2].indexOf(currentStep) === -1) {
		return null
	}

	return (
		<>
			<ConfirmationModal
				title={t('label:are_you_sure')}
				description={t('label:progress_will_be_lost')}
				confirmButtonText={t('button:ui:yes_cancel_now')}
				cancelButtonText={t('button:ui:no_continue')}
				confirmButtonCallback={handleCancel}
				cancelButtonCallback={handleCloseModal}
				open={openModal}
			/>
			{currentStep === 0 && (
				<Name
					name={tmpCampaignState.name}
					setName={tmpCampaignState.setName}
					description={tmpCampaignState.description}
					setDescription={tmpCampaignState.setDescription}
				/>
			)}
			{currentStep === 1 && (
				<Content
					bannerCid={tmpCampaignState.bannerCid}
					uploadBannerImage={handleUploadBannerImage}
					content={tmpCampaignState.content}
					setContent={tmpCampaignState.setContent}
				/>
			)}

			{currentStep === 2 && (
				<Settings
					targetAmount={tmpCampaignState.target}
					setTargetAmount={tmpCampaignState.setTarget}
					depositAmount={tmpCampaignState.deposit}
					setDepositAmount={tmpCampaignState.setDeposit}
					flowProtocol={tmpCampaignState.protocol}
					setFlowProtocol={tmpCampaignState.setProtocol}
					usageOfFunds={tmpCampaignState.usageOfFunds}
					setUsageOfFunds={tmpCampaignState.setUsageOfFunds}
					currencyId={tmpCampaignState.currencyId}
					setCurrencyId={tmpCampaignState.setCurrencyId}
					startDate={tmpCampaignState.startDate}
					setStartDate={tmpCampaignState.setStartDate}
					endDate={tmpCampaignState.endDate}
					setEndDate={tmpCampaignState.setEndDate}
					governance={tmpCampaignState.governance}
					setGovernance={handeSetGovernance}
					termsConditionAccepted={termsConditionAccepted}
					setTermsConditionAccepted={setTermsConditionAccepted}
				/>
			)}
			<Stack spacing={2} sx={{ justifyContent: { xs: 'space-between', sm: 'flex-start' } }} direction="row">
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
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
						variant="outlined"
						color="primary"
						sx={{
							display: checkBackButtonState() ? 'block' : 'none',
							flexGrow: { xs: 1, sm: 0 },
						}}
						onClick={handleOpenModal}
					>
						{t('button:form:cancel')}
					</Button>
				</Box>

				{draftId && (
					<Button
						size="large"
						variant="outlined"
						color="error"
						onClick={() => setOpenConfirmDeleteModal(true)}
						sx={{ flexGrow: { xs: 1, sm: 0 } }}
					>
						{t('button:ui:delete_draft')}
					</Button>
				)}

				{currentStep > 0 && (
					<Button
						size="large"
						variant="outlined"
						onClick={handleSaveDraft}
						sx={{ flexGrow: { xs: 1, sm: 0 } }}
					>
						{t('button:ui:save_draft')}
					</Button>
				)}

				<Button
					size="large"
					variant="contained"
					onClick={handleNext}
					disabled={checkNextButtonState()}
					sx={{ flexGrow: { xs: 1, sm: 0 } }}
				>
					{t(`button:form:${currentStep === 2 ? 'publish_now' : 'next_step'}`)}
				</Button>
			</Stack>

			<TransactionDialog
				open={txModalState}
				onClose={handleCloseTxModal}
				txData={createCampaignTx}
				txCallback={handleTxCallback}
			/>
			<ConfirmDeleteCampaignDraft
				orgId={organizationId}
				id={draftId}
				onClose={handleConfirmDeleteModalOnClose}
				open={openConfirmDeleteModal}
			/>
		</>
	)
}
