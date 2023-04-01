import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Typography } from '@mui/material'
import { Layout } from 'src/layouts/v2'
import { SelectAccountDialog } from 'src/components/SelectAccountDialog/selectAccountDialog'

export function Page() {
	const router = useRouter()
	const [open, setOpen] = useState(true)
	const onClose = () => router.push('/')

	return (
		<Layout showHeader showFooter showSidebar>
			<Typography variant={'h3'}>Account Selector</Typography>
			<SelectAccountDialog open={open} onClose={onClose} />
		</Layout>
	)
}

export default Page
