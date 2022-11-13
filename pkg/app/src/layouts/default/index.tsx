import { useCallback, useState } from 'react'

import Head from 'next/head'
import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { Box, Container, Stack, useMediaQuery, useTheme } from '@mui/material'

import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { HeaderMobile } from './components/HeaderMobile'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'

interface ComponentProps {
	showHeader?: boolean
	showFooter?: boolean
	showSidebar?: boolean
	noContainer?: boolean
	title?: string
	children?: React.ReactNode
}

// TODO: Should not be here/ configs and co
const SITE_NAME = 'GameDAO'

export function Layout({ showHeader, showFooter, showSidebar, children, noContainer, title }: ComponentProps) {
	const [sidebarOpen, setOpenSidebar] = useState<boolean>(true)
	const config = useConfig()
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const connected = useCurrentAccountAddress()

	const toggleSidebar = useCallback(() => {
		setOpenSidebar(!sidebarOpen)
	}, [setOpenSidebar, sidebarOpen])

	const spacing = showHeader ? `calc( 100vh - 90px )` : `100vh`

	return (
		<>
			<Head>
				<title>{title ? `${title} · ${config?.SITE_NAME}` : `${config?.SITE_NAME}`}</title>
			</Head>

			<Box>
				<TopBar />

				{showHeader &&
					(isMd ? (
						<Header onSidebarOpen={toggleSidebar} sidebarOpen={sidebarOpen} />
					) : (
						<HeaderMobile onSidebarOpen={toggleSidebar} sidebarOpen={sidebarOpen} />
					))}

				{/*{showHeader && <Box height={90} />}*/}
				{/*{!isMd && <Box height={45} />}*/}

				<Box>
					<Stack direction="row" spacing={0} sx={{ minHeight: spacing }}>
						{showSidebar && (isMd || sidebarOpen) && connected && (
							<Box sx={{ minWidth: 90, minHeight: spacing }}>
								<Sidebar />
							</Box>
						)}

						{noContainer ? (
							children
						) : (
							<Box p={[2, 4]} style={{ width: '100%', minHeight: spacing }}>
								<Box component="main" sx={{ flexGrow: 1 }}>
									<Container maxWidth="xl" sx={{ border: 0 }}>
										{children}
									</Container>
								</Box>
							</Box>
						)}
					</Stack>
				</Box>
			</Box>

			{showFooter && <Footer />}
		</>
	)
}