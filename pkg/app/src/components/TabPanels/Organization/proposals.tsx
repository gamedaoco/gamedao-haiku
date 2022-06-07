import React, { useCallback, useState } from 'react'

import { Add as AddIcon } from '@mui/icons-material'
import { Box, Button, Grid, Paper, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { useProposalFeatures } from 'hooks/featureToggle/useProposalFeatures'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { Form } from 'components/Forms/Proposal/form'

interface ComponentProps {
	organizationId: string
}

export function Proposals({ organizationId }: ComponentProps) {
	const [showFormState, setShowFormState] = useState<boolean>(false)
	const [activeStep, setActiveStep] = useState<number>(0)
	const enabledFeatures = useProposalFeatures()
	const address = useCurrentAccountAddress()

	const handleCreateButtonClick = useCallback(() => {
		setShowFormState(true)
	}, [setShowFormState])

	const handleCloseForm = useCallback(() => {
		setShowFormState(false)
	}, [setShowFormState])

	if (showFormState) {
		return (
			<Grid width="100%" height="100%" padding={{ xs: 2, sm: 4 }}>
				<Stack spacing={6} minWidth="40vw">
					<Stepper activeStep={activeStep}>
						{[1, 2, 3].map((step) => (
							<Step key={step}>
								<StepLabel />
							</Step>
						))}
					</Stepper>
					<Form
						currentStep={activeStep}
						setStep={setActiveStep}
						onClose={handleCloseForm}
						organizationId={organizationId}
					/>
				</Stack>
			</Grid>
		)
	}

	return (
		<Box component={Paper} padding={4}>
			<Stack direction="row" spacing={1} justifyContent="space-between">
				<Typography variant="h6">Proposals</Typography>
				{address && enabledFeatures.CREATE_PROPOSAL && (
					<Button variant="outlined" onClick={handleCreateButtonClick}>
						<AddIcon /> Create Proposal
					</Button>
				)}
			</Stack>
		</Box>
	)
}
