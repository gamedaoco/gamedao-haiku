import { useCallback, useState } from 'react'

import Head from 'next/head'
import { useConfig } from 'hooks/useConfig'

import { Box, Container, Stack, useMediaQuery, useTheme } from '@mui/material'

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

			<Box>
				{showHeader &&
					(isMd ? (
						<Header onSidebarOpen={handleSidebarOpen} />
					) : (
						<HeaderMobile onSidebarOpen={handleSidebarOpen} />
					))}

				{/*{showHeader && <Box height={90} />}*/}
				{/*{!isMd && <Box height={45} />}*/}

				<Box>
					<Stack direction="row" spacing={0} sx={{ minHeight: `calc( 100vh - 90px )` }}>
						{showSidebar && (
							<Box sx={{ minWidth: 90, minHeight: `calc( 100vh - 90px )` }}>
								<Sidebar
								// showHeader={ showHeader ? true : null }
								// onClose={ handleSidebarClose }
								// open={ isMd ? false : openSidebar }
								// variant={'permanent'}
								// variant={ isMd ? 'permanent' : 'temporary' }
								/>
							</Box>
						)}

						{noContainer ? (
							children
						) : (
							<Box p={[2, 4]} style={{ width: '100%', minHeight: `calc( 100vh - 90px )` }}>
								{children}
							</Box>
						)}
					</Stack>
				</Box>
			</Box>

			{showFooter && <Footer />}
		</>
	)
}
