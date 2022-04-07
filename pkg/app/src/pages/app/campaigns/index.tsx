import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { FormCampaign } from 'components/Forms/FormCampaign'

import { Layout } from 'src/layouts/default/layout'
import { useCampaignsQuery } from '@gamedao-haiku/graphql/dist'
import { CircularProgress } from '@mui/material'

export function Campaigns() {
	const [isShow, setIsShow] = useState(false)
	const { loading, data } = useCampaignsQuery()

	const callback = (data: any) => {
		console.log('yes gotcha', data)
	}

	const setVisible = (state: boolean) => {
		setIsShow(!state)
	}

	const handleForm = () => {
		setIsShow(!isShow)
	}

	return (
		<Layout showHeader showFooter showSidebar title="Campaigns">
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Box>{isShow ? <h4>Total campaigns: {6}</h4> : <h4>No campaigns yet. Create one!</h4>}</Box>
				<Box>
					{isShow ? (
						<Button variant="outlined" onClick={handleForm}>
							Close
						</Button>
					) : (
						<Button variant="outlined" onClick={handleForm}>
							New Campaign
						</Button>
					)}
				</Box>
			</Box>
			{isShow ? (
				<FormCampaign parentCallback={callback} isCloseCampaign={setVisible} />
			) : (
				<Box sx={{ p: '4rem', minHeight: '90vh' }}>
					<Paper sx={{ p: '4rem', height: '100%', borderRadius: '.5rem' }} elevation={10}>
						<Typography sx={{ fontWeight: '800' }} variant={'h2'}>
							Hello. Campaigns count: {loading ? <CircularProgress /> : data?.campaigns.length}
						</Typography>
						{data && (
							<ul>
								{data.campaigns.map((campaign) => (
									<li key={campaign.id}>
										<div>
											Name: {campaign.metadata.name} (Token: {campaign.tokenName})
										</div>
										<ul>
											<li>isFinished: {campaign.isFinished ? 'Yes' : 'No'}</li>
											{campaign.isFinished && (
												<li>isFunded: {campaign.isFunded ? 'Yes' : 'No (Expired)'}</li>
											)}
										</ul>
										<div>
											Contributors:
											<ul>
												{campaign.contributors.map((contributor) => (
													<li key={`${campaign.id}-${contributor.address}`}>
														{contributor.identity.displayName ?? contributor.address}:{' '}
														{(contributor.contributed / Math.pow(10, 18)).toPrecision(2)}{' '}
														{campaign.tokenSymbol}
													</li>
												))}
											</ul>
										</div>
									</li>
								))}
							</ul>
						)}
					</Paper>
				</Box>
			)}
		</Layout>
	)
}

export default Campaigns
