import Head from 'next/head'
import { Box, Container, Stack } from '@mui/material'
import { Header } from './modules/header'
import { Sidebar } from './modules/sidebar'
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
	return (
		<Stack height={'100%'}>
			<Head>
				<title> {title ? `${title} · ${SITE_NAME}` : `${SITE_NAME}`} </title>
			</Head>

			{showHeader && <Header />}

			<Stack direction="row" flex={1}>
				{showSidebar && (
					<Box flexGrow={0}>
						<Sidebar />
					</Box>
				)}
				<Box flexGrow={1}>{noContainer ? { children } : <Container>{children}</Container>}</Box>
			</Stack>

			{showFooter && <Footer />}
		</Stack>
	)
}
