import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { FormCampaign } from 'components/Forms/FormCampaign'

import { Layout } from 'src/layouts/default/layout'

export function Campaigns() {
	const [isShow, setIsShow] = useState(false)

	const callback = (data: any) => {
		console.log('yes gotcha', data)
	}

	const setVisible = (state: boolean) => {
		console.log('state', state)
		setIsShow(!state)
	}

	const handleForm = () => {
		setIsShow(!isShow)
	}

	return (
		<Layout showHeader showFooter showSidebar title="Campaigns">
			{isShow ? (
				<FormCampaign parentCallback={callback} isCloseCampaign={setVisible} />
			) : (
				<Box sx={{ p: '4rem', height: '90vh' }}>
					<Paper sx={{ p: '4rem', height: '100%', borderRadius: '.5rem' }} elevation={10}>
						<Typography sx={{ fontWeight: '800' }} variant={'h2'}>
							Hello! Campaign
						</Typography>
						<Button onClick={handleForm}>New Campaign</Button>
					</Paper>
				</Box>
			)}
		</Layout>
	)
}

export default Campaigns
