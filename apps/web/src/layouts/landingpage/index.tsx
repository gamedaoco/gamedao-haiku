import Head from 'next/head'
import { Box, Container, Stack, useTheme, useMediaQuery } from '@mui/material'
import { Header } from './modules/header'
import { Content } from './modules/content'
import { Footer } from './modules/footer'

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
	const theme = useTheme()
	const t = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME}`

	return (
		<Box>
			<Head>
				<title>{t}</title>
			</Head>

			<Box
				sx={{
					width: '100%',
					// background: theme.palette.background.ocean,
					p: 0,
					m: 0,
				}}
			>
				<Box sx={{ minHeight: '100vh', p: 0, m: 0 }}>
					<>
						<Box
							sx={{
								overflowX: 'hidden',
								minHeight: '100vh',
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<>
								{showHeader && <Header />}
								{noContainer ? { children } : <Content>{children}</Content>}
							</>
						</Box>
						{showFooter && <Footer />}
					</>
				</Box>
			</Box>
		</Box>
	)
}
