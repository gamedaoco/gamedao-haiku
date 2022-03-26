import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { FormVoting } from 'components/Forms/FormVoting'
import { Layout } from 'src/layouts/default/layout'

export function GovernancePage() {
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
		<Layout showHeader showFooter showSidebar title="Governance">
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Box>{!isShow ? <h4>No proposals yet. Create one!</h4> : <h4>Total proposals: {6}</h4>}</Box>
				<Box>
					{isShow ? (
						<Button
							variant="outlined"
							// startIcon={<ClearIcon />}
							onClick={handleForm}
						>
							Close
						</Button>
					) : (
						<Button
							variant="outlined"
							// startIcon={<AddIcon />}
							onClick={handleForm}
						>
							New Proposal
						</Button>
					)}
				</Box>
			</Box>
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
