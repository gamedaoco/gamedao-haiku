import { useCallback, useState } from 'react'
import Head from 'next/head'
import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'

import { Box, Container, Stack, useMediaQuery, useTheme } from '@mui/material'
// import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { HeaderMobile } from './components/HeaderMobile'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'
// import { AnimatePresence, motion } from 'framer-motion'

interface ComponentProps {
	showHeader?: boolean
	showFooter?: boolean
	showSidebar?: boolean
	noContainer?: boolean
	noBorder?: boolean
	title?: string
	children?: React.ReactNode
}

// TODO: Should not be here/ configs and co
// const SITE_NAME = 'GameDAO'

// const Transition = ({ children }) => (
// 	<motion.div
// 		initial={{ opacity: 0, rotateY: -10 }}
// 		animate={{ opacity: 1, rotateY: 0 }}
// 		exit={{ opacity: 0, rotateY: -10 }}
// 		transition={{
// 			duration: 0.2,
// 			type: 'tween',
// 			// stiffness: 260,
// 			// damping: 200,
// 		}}
// 	>
// 		{children}
// 	</motion.div>
// )

export function Layout({
	showHeader,
	showFooter,
	showSidebar,
	children,
	noContainer,
	title,
	noBorder,
}: ComponentProps) {
	const [sidebarOpen, setOpenSidebar] = useState<boolean>(false)
	const config = useConfig()
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const connected = useCurrentAccountAddress()

	const toggleSidebar = useCallback(() => {
		setOpenSidebar(!sidebarOpen)
	}, [setOpenSidebar, sidebarOpen])

	// const showTopBar = false
	const baseSpacing = 90
	const spacing = showHeader ? `calc( 100vh - ${baseSpacing}px )` : `100vh`

	return (
		<>
			<Head>
				<title>{title ? `${title} · ${config?.SITE_NAME}` : `${config?.SITE_NAME}`}</title>
			</Head>

			<Box>
				{/*{showTopBar && <TopBar onSidebarOpen={toggleSidebar} sidebarOpen={sidebarOpen} />}*/}
				{showHeader &&
					(isMd ? (
						<Header onSidebarOpen={toggleSidebar} sidebarOpen={sidebarOpen} noContainer={noContainer} />
					) : (
						<HeaderMobile
							onSidebarOpen={toggleSidebar}
							sidebarOpen={sidebarOpen}
							noContainer={noContainer}
						/>
					))}
				{/*<AnimatePresence mode="wait" initial={false}>*/}
				{/*<Transition>*/}
				<Box>
					<Stack direction="row" spacing={0} sx={{ minHeight: spacing }}>
						{showSidebar && (isMd || sidebarOpen) && connected && (
							<Box sx={{ minWidth: baseSpacing, minHeight: spacing }}>
								<Sidebar />
							</Box>
						)}
						{noContainer ? (
							<Box mt={`-${baseSpacing}px`} width="100%">
								{children}
							</Box>
						) : (
							<Box p={noBorder ? 0 : [2, 4]} style={{ width: '100%', minHeight: spacing }}>
								<Box component="main" sx={{ flexGrow: 1 }}>
									<Container disableGutters maxWidth="xl" sx={{ border: 0 }}>
										{children}
									</Container>
								</Box>
							</Box>
						)}
					</Stack>
				</Box>
				{/*</Transition>*/}
				{/*</AnimatePresence>*/}
			</Box>

			{showFooter && <Footer />}
		</>
	)
}
