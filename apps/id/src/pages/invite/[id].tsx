import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Layout } from 'layouts/default'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useGetOrganizationByIdQuery } from 'src/queries'
import { useGetOrganizationByNameQuery } from 'src/queries'

export function Page() {
	const { query } = useRouter()
	const id = query.id as string

	const { loading, data, error } = useGetOrganizationByIdQuery({
		variables: { id: id },
	})

	useEffect(() => {
		if (id.startsWith('0x')) {
			console.log('query for:', id)
			console.log('resolver:', data?.organization, error)
		}
	}, [data, error])

	// return loading
	// 	? <Loader />
	// 	: <Layout>
	// 		<Box>
	// 			{id}
	// 		</Box>
	// 	</Layout>

	return (
		<Layout>
			<Box>{id}</Box>
		</Layout>
	)
}

export default Page
