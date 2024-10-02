// create a campaign
import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import slugify from 'slugify'

import { useGetOrganizationsForPrimeSubscription } from 'src/queries'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { Stack, Step, StepLabel, Stepper, Divider } from '@mui/material'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

import { CreateCampaign } from 'dapps/campaign/components/create'

const steps = [
	{ step: 1, label: 'Description' },
	{ step: 2, label: 'Campaign content' },
	{ step: 3, label: 'Settings' },
]

type TCollective = {
	id: string
	name: string
}

type TSelectorProp = {
	collectiveId: string
	setCollectiveId: (collectiveId) => void
	collectives: TCollective[]
	setCollectives: (collectives) => void
}

const CollectiveSelector = ({ collectives, setCollectives, collectiveId, setCollectiveId }: TSelectorProp) => {
	// connected wallet address
	const address = useCurrentAccountAddress()
	// get collectives where address is prime
	const { loading, data: primeCollectives } = useGetOrganizationsForPrimeSubscription({
		variables: { id: address },
	})

	useEffect(() => {
		if (loading) return
		if (!primeCollectives?.organization.length) return
		const collectives = primeCollectives?.organization?.map((o, i) => {
			return { name: o.name, id: o.id }
		})
		console.log('collectives', collectives)

		setCollectives(collectives)
		if (collectives.length === 1) setCollectiveId(collectives[0].id)
	}, [primeCollectives?.organization, loading])
	//
	// handle input
	//
	// const updateFormState = (k, v) => {
	// 	const update = { ...formState, [k]: v }
	// 	setFormState(update)
	// 	localStorage.setItem('battlepass', JSON.stringify(update))
	// }
	const handleChange = (e) => {
		console.log(e.target.name, e.target.value)
		// updateFormState(e.target.name, e.target.value)
	}
	//
	// if (loading) return <Fragment>Loading...</Fragment>

	// if (collectives.length === 0)
	// 	return (
	// 		<Fragment>
	// 			<p>You do not have any collectives where you are prime.</p>
	// 		</Fragment>
	// 	)

	return (
		<Fragment>
			<FormControl sx={{ flex: 1 }}>
				<InputLabel id="collective">Select Collective</InputLabel>
				<Select name={'collectiveId'} value={collectiveId} onChange={handleChange} labelId="collective" label="Select Collective" variant="outlined">
					{collectives.map((item, index) => (
						<MenuItem value={item.id} key={index}>
							{item.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Fragment>
	)
}

export function CreateCampaignView() {
	// to jump back in to a draft, parse the query
	const { query } = useRouter()
	const id = query.organizationId || query.collectiveId

	// 1. select organization id from dropdown or
	// 2. preselect organization id from url,
	// e.g. when creating a campaign from a collective view

	const [collectives, setCollectives] = useState([])
	const [collectiveId, setCollectiveId] = useState(null)
	const [draftId, setDraftId] = useState(null)
	const [activeStep, setActiveStep] = useState<number>(0)

	const handleCancel = () => {}

	return (
		<Stack spacing={4} minWidth="40vw">
			<CollectiveSelector collectiveId={collectiveId} setCollectiveId={setCollectiveId} collectives={collectives} setCollectives={setCollectives} />
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map(({ step, label }) => (
					<Step key={step}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<CreateCampaign collectiveId={collectiveId} currentStep={activeStep} cancel={handleCancel} setStep={setActiveStep} draftId={draftId} />
		</Stack>
	)
}

export default CreateCampaignView
