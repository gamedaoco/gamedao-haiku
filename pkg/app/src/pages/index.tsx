import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Typography } from '@mui/material'
import { Layout } from 'layouts/default'

export function Page() {
	const router = useRouter()

	// useEffect(()=>{
	// 	router.push('/organisations')
	// },[])

	return (
		<Layout showHeader showFooter showSidebar>
			<Typography variant={'h3'}>Welcome.</Typography>
		</Layout>
	)
}

export default Page
