import { useCallback } from 'react'

import { Button, Stack } from '@mui/material'
import { useTmpCampaignState } from 'hooks/useTmpCampaignState'
import { uploadFileToIpfs } from 'src/utils/ipfs'

import { Content, validationSchema as contentValidationSchema } from './modules/content'
import { Name, validationSchema as nameValidationSchema } from './modules/name'

interface ComponentProps {
	currentStep: number
	cancel: () => void
	setStep: (step) => void
}

export function Form({ cancel, currentStep, setStep }: ComponentProps) {
	const tmpCampaignState = useTmpCampaignState()

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

		if (currentStep == 2) {
			console.log('done')
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
					{currentStep === 2 ? 'Save campaign' : 'Next step'}
				</Button>
			</Stack>
		</>
	)
}
