import { useCallback, useState } from 'react'

import Head from 'next/head'
import { useConfig } from 'hooks/useConfig'

import { Box, Container, useMediaQuery, useTheme } from '@mui/material'

import { HeaderMobile } from 'components/Layouts/default/modules/headerMobile'

import { Footer } from './modules/footer'
import { Header } from './modules/header'
import { Sidebar } from './modules/sidebar'

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
	const config = useConfig()
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})
	const [openSidebar, setOpenSidebar] = useState<boolean>(false)

	const handleSidebarOpen = useCallback(() => {
		setOpenSidebar(true)
	}, [setOpenSidebar])

	const handleSidebarClose = useCallback(() => {
		setOpenSidebar(false)
	}, [setOpenSidebar])

	return (
		<>
			<Head>
				<title>{title ? `${title} · ${config?.SITE_NAME}` : `${config?.SITE_NAME}`}</title>
			</Head>

			{/* TODO: Fix sidebar growth and footer order */}

			{showSidebar && (
				<Sidebar
					showHeader={showHeader}
					onClose={handleSidebarClose}
					open={isMd ? false : openSidebar}
					variant={isMd ? 'permanent' : 'temporary'}
				/>
			)}

			{showHeader &&
				(isMd ? (
					<Header onSidebarOpen={handleSidebarOpen} />
				) : (
					<HeaderMobile onSidebarOpen={handleSidebarOpen} />
				))}

			{showHeader && <Box height={90} />}
			{!isMd && <Box height={45} />}

			<Box display="flex" flex="1 1 auto" overflow="hidden" paddingLeft={{ md: showSidebar ? '90px' : 0 }}>
				<Box display="flex" flex="1 1 auto" overflow="hidden">
					<Box flex="1 1 auto" height="100%" overflow="hidden">
						<Box>{noContainer ? children : <Container>{children}</Container>}</Box>
						{showFooter && <Footer />}
					</Box>
				</Box>
			</Box>
		</>
	)
}
