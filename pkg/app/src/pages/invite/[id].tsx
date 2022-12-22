import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useOrganizationByNameSubscription } from 'src/queries'

import { Layout } from 'layouts/default/layout'
// import { Loader } from 'components/Loader'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

export function Page() {
	const {
		query: { id },
	} = useRouter()
	const { loading, data, error } = useOrganizationByNameSubscription({
		variables: { name: id },
	})

	useEffect(() => {
		if (!query.org.startsWith('0x')) {
			console.log('query for:', query.org)
			console.log('resolver:', data?.organization, error)
		}
	}, [query.org, data, push, error])

	// return loading
	// 	? <Loader />
	// 	: <Layout>
	// 		<Box>
	// 			{id}
	// 		</Box>
	// 	</Layout>

	return
	// 	? <Loader />
	;<Layout>
		<Box>{id}</Box>
	</Layout>
}

export default Page
