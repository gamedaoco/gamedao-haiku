import React, { useCallback, useEffect, useState } from 'react'

import { Button, Stack } from '@mui/material'
import { useCreateCampaignTransaction } from 'hooks/tx/useCreateCampaignTransaction'
import { useTmpCampaignState } from 'hooks/useTmpCampaignState'
import { uploadFileToIpfs } from 'src/utils/ipfs'

import { TransactionDialog } from 'components/TransactionDialog/transactionDialog'

import { Content, validationSchema as contentValidationSchema } from './modules/content'
import { Name, validationSchema as nameValidationSchema } from './modules/name'
import { Settings, validationSchema as settingsValidationSchema } from './modules/settings'
import moment from 'moment'
import { blockTime } from 'src/constants'
import { useBlockNumber } from 'hooks/useBlockNumber'

interface ComponentProps {
	organizationId: string
	currentStep: number
	cancel: () => void
	setStep: (step) => void
}

export function Form({ organizationId, cancel, currentStep, setStep }: ComponentProps) {
	const tmpCampaignState = useTmpCampaignState()
	const [termsConditionAccepted, setTermsConditionAccepted] = useState(false)
	const [txModalState, setTxModalState] = useState<boolean>(false)
	const createCampaignTx = useCreateCampaignTransaction()
	const blockNumber = useBlockNumber()

	useEffect(() => {
		tmpCampaignState.setOrgId(organizationId)
	}, [organizationId])

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

		if (currentStep == 1) {
			;(async () => {
				const file = new File(
					[
						JSON.stringify({
							name: tmpCampaignState.name,
							markdown: tmpCampaignState.content,
							description: tmpCampaignState.description,
							logo: tmpCampaignState.bannerCid,
							title: '',
							header: '',
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
	}, [currentStep, setStep])

	const handleUploadBannerImage = useCallback((file: File) => {
		;(async (): Promise<string> => {
			const bannerFile = new File([await file.arrayBuffer()], file.name)
			const cid = await uploadFileToIpfs(bannerFile)
			return cid.toString()
		})().then((cid) => tmpCampaignState.setBannerCid(cid))
	}, [])

	const handleSetContent = useCallback((content: string) => {
		tmpCampaignState.setContent(content)
	}, [])

	const handleSetTargetAmount = useCallback((target: number) => {
		tmpCampaignState.setTarget(target)
	}, [])

	const handleSetDepositAmount = useCallback((deposit: number) => {
		tmpCampaignState.setDeposit(deposit)
	}, [])

	const handeSetProtocol = useCallback((protocol: number) => {
		tmpCampaignState.setProtocol(protocol)
	}, [])

	const handeSetUsageOfFunds = useCallback((usageOfFunds: string) => {
		tmpCampaignState.setUsageOfFunds(usageOfFunds)
	}, [])

	const handleSetCurrencyId = useCallback((currencyId: number) => {
		tmpCampaignState.setCurrencyId(currencyId)
	}, [])

	const handeSetEndDate = useCallback(
		(endDate: Date) => {
			const endSecondsDiff = moment(endDate).diff(moment(), 'seconds')
			const endBlock = blockNumber + Math.ceil(endSecondsDiff / blockTime)

			tmpCampaignState.setExpiryBlock(endBlock)
			tmpCampaignState.setEndDate(endDate)
		},
		[tmpCampaignState, blockNumber],
	)

	const handeSetGovernance = useCallback((governance: number) => {
		tmpCampaignState.setGovernance(governance)
	}, [])

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
				return !settingsValidationSchema.isValidSync({
					target: tmpCampaignState.target,
					deposit: tmpCampaignState.deposit,
					endDate: tmpCampaignState.endDate,
					termsCondition: termsConditionAccepted,
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
		[setTxModalState],
	)

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
					name={tmpCampaignState.name}
					setName={tmpCampaignState.setName}
					description={tmpCampaignState.description}
					setDescription={tmpCampaignState.setDescription}
				/>
			)}
			{currentStep === 1 && (
				<Content
					bannerCid={tmpCampaignState.bannerCid}
					content={tmpCampaignState.content}
					uploadBannerImage={handleUploadBannerImage}
					setContent={handleSetContent}
				/>
			)}

			{currentStep === 2 && (
				<Settings
					targetAmount={tmpCampaignState.target}
					setTargetAmount={handleSetTargetAmount}
					depositAmount={tmpCampaignState.deposit}
					setDepositAmount={handleSetDepositAmount}
					flowProtocol={tmpCampaignState.protocol}
					setFlowProtocol={handeSetProtocol}
					usageOfFunds={tmpCampaignState.usageOfFunds}
					setUsageOfFunds={handeSetUsageOfFunds}
					currencyId={tmpCampaignState.currencyId}
					setCurrencyId={handleSetCurrencyId}
					endDate={tmpCampaignState.endDate}
					setEndDate={handeSetEndDate}
					governance={tmpCampaignState.governance}
					setGovernance={handeSetGovernance}
					termsConditionAccepted={termsConditionAccepted}
					setTermsConditionAccepted={setTermsConditionAccepted}
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
					{currentStep === 2 ? 'Publish now' : 'Next step'}
				</Button>
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
