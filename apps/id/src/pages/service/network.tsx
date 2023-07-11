import { Box, Container, Typography } from '@mui/material'
import { Layout } from 'layouts/default'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { SelectNetworkDialog } from 'src/components/SelectNetworkDialog/selectNetworkDialog'

export function Page() {
	const router = useRouter()
	const [open, setOpen] = useState(true)
	const onClose = () => router.push('/')

	return (
		<Layout showHeader showFooter showSidebar>
			<Typography variant={'h3'}>Network Selector</Typography>
			<SelectNetworkDialog open={open} onClose={onClose} />
		</Layout>
	)
}

export default Page
