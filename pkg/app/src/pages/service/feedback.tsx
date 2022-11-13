import { Layout } from 'layouts/default'
import { Typography } from '@mui/material'

export function Page() {
	return (
		<Layout showHeader showFooter showSidebar>
			<Typography variant={'h3'}>Send us your Feedback!</Typography>
			{/*
	TODO:
		name
		email
		message
*/}
		</Layout>
	)
}

export default Page
