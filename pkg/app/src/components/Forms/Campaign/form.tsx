import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import { useCreateCampaignTransaction } from 'hooks/tx/useCreateCampaignTransaction'
import { useConfig } from 'hooks/useConfig'
import { useTmpCampaignState } from 'hooks/useTmpCampaignState'
import { uploadFileToIpfs } from 'src/utils/ipfs'

import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

import { Content, validationSchema as contentValidationSchema } from './modules/content'
import { Name, validationSchema as nameValidationSchema } from './modules/name'
import { Settings, getValidationSchema as getSettingsValidationSchema } from './modules/settings'

interface ComponentProps {
	organizationId: string
	currentStep: number
	cancel: () => void
	setStep: (step) => void
}

export function Form({ organizationId, cancel, currentStep, setStep }: ComponentProps) {
	const tmpCampaignState = useTmpCampaignState()
	const config = useConfig()
	const [termsConditionAccepted, setTermsConditionAccepted] = useState(false)
	const [txModalState, setTxModalState] = useState<boolean>(false)
	const createCampaignTx = useCreateCampaignTransaction()
	const [openModal, setOpenModal] = useState(false)
	const style = useMemo(
		() => ({
			position: 'absolute' as 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: 400,
			bgcolor: 'background.paper',
			border: '2px solid #000',
			boxShadow: 24,
			p: 4,
		}),
		[],
	)

	useEffect(() => {
		tmpCampaignState.setOrgId(organizationId)
	}, [tmpCampaignState, organizationId])

	const handleCancel = useCallback(() => {
		if (currentStep === 0 && cancel) {
			setOpenModal(true)
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
					endDate: tmpCampaignState.endDate,
					termsCondition: termsConditionAccepted,
					currencyId: tmpCampaignState.currencyId,
					usageOfFunds: tmpCampaignState.usageOfFunds,
				})
		}
		return false
	}
	const handleClose = useCallback(() => {
		setOpenModal(false)
	}, [])

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

	const checkBackButtonState = () => {
		return currentStep == 0
	}
	const handleCancelButton = useCallback(() => {
		cancel()
		setOpenModal(false)
	}, [cancel])

	if ([0, 1, 2].indexOf(currentStep) === -1) {
		return null
	}

	return (
		<>
			<Modal
				open={openModal}
				onClose={() => {}}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Are you sure?
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						All your progress will be lost. Maybe save it as draft and continue later
					</Typography>
					<Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
						<Button variant="contained" color="error" onClick={handleCancelButton}>
							Yes, Cancel Now
						</Button>
						<Button variant="contained" color="primary" onClick={handleClose}>
							No, Continue
						</Button>
					</Box>
				</Box>
			</Modal>
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
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
					<Button size="large" variant="outlined" disabled={checkNextButtonState()}>
						Save as Draft
					</Button>
					<Button
						size="large"
						variant="contained"
						onClick={handleNext}
						disabled={checkNextButtonState()}
						sx={{ ml: 2 }}
					>
						{currentStep === 2 ? 'Publish now' : 'Next step'}
					</Button>
				</Box>
			</Stack>

			<TransactionDialog
				open={txModalState}
				onClose={handleCloseTxModal}
				txData={createCampaignTx}
				txCallback={handleTxCallback}
			/>
		</>
	)
}
