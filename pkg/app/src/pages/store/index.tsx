import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Grid, Typography } from '@mui/material'
import { Layout } from 'layouts/default'

export function Page() {
	const router = useRouter()

	// useEffect(()=>{
	// 	router.push('/organisations')
	// },[])

	return (
		<Layout showHeader showFooter showSidebar>
			<Box sx={{ mb: 4 }}>
				<Grid container justifyContent="space-between" spacing={3}>
					<Grid item>
						{' '}
						<Typography variant={'h3'}>Store</Typography>{' '}
					</Grid>
					<Grid item> {/* actions */} </Grid>
				</Grid>
			</Box>
		</Layout>
	)
}

export default Page
