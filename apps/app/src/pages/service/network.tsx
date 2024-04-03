import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Typography } from '@mui/material'
import { Layout } from 'src/layouts/v2'
import { SelectNetworkDialog } from 'components/molecules/SelectNetworkDialog/selectNetworkDialog'

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
