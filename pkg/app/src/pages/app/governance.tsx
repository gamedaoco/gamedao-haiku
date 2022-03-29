import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { FormVoting } from 'components/Forms/FormVoting'
import { Layout } from 'src/layouts/default/layout'
import { useBodiesQuery } from '@gamedao-haiku/graphql/dist'
import { CircularProgress } from '@mui/material'

export function GovernancePage() {
	const [isShow, setIsShow] = useState(false)
	const { loading, data } = useBodiesQuery()

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
		<Layout showHeader showFooter showSidebar title="Governance">
			<Box>{isShow ? <h4>Total proposals: {6}</h4> : <h4>No proposals yet. Create one!</h4>}</Box>
			<Box>
				{isShow ? (
					<Button variant="outlined" onClick={handleForm}>
						Close
					</Button>
				) : (
					<Button variant="outlined" onClick={handleForm}>
						New Proposal
					</Button>
				)}
			</Box>
			{!isShow && (
				<Box sx={{ p: '4rem', minHeight: '90vh' }}>
					<Paper sx={{ p: '4rem', height: '100%', borderRadius: '.5rem' }} elevation={10}>
						<Typography sx={{ fontWeight: '800' }} variant={'h2'}>
							Hello. Bodies count: {loading ? <CircularProgress /> : data?.bodies.length}
						</Typography>
						{data && (
							<ul>
								{data.bodies.map((body) => (
									<li key={body.id}>
										<div>Name: {body.name}</div>
										<div>
											Members:
											<ul>
												{body.members.map((member) => (
													<li key={`${body.id}-${member.identity.id}`}>
														{member.identity.id}
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

			{isShow ? (
				<FormVoting parentCallback={callback} isCloseProposal={setVisible} />
			) : (
				<Box sx={{ p: '4rem', height: '90vh' }}>
					<Paper sx={{ p: '4rem', height: '100%', borderRadius: '.5rem' }} elevation={10}>
						<Typography sx={{ fontWeight: '800' }} variant={'h2'}>
							Hello! Proposal
						</Typography>
					</Paper>
				</Box>
			)}
		</Layout>
	)
}

export default GovernancePage
