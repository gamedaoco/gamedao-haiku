import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

import { FormDao } from 'components/Forms/FormDao'

import { Layout } from 'src/layouts/default/layout'

export function AppPage() {
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
		<Layout showHeader showFooter showSidebar>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Box>{!isShow ? <h4>No organisations yet. Create one!</h4> : <h4>Total organisations: {6}</h4>}</Box>
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
							New DAO
						</Button>
					)}
				</Box>
			</Box>
			{isShow ? (
				<FormDao parentCallback={callback} isCloseDao={setVisible} />
			) : (
				<Box sx={{ p: '4rem', height: '90vh' }}>
					<Paper sx={{ p: '4rem', height: '100%', borderRadius: '.5rem' }} elevation={10}>
						<Typography sx={{ fontWeight: '800' }} variant={'h2'}>
							Hello! DASHBOARD
						</Typography>
					</Paper>
				</Box>
			)}
		</Layout>
	)
}

export default AppPage
