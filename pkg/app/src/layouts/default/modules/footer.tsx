import React from 'react'
import NextLink from 'next/link'

import { ENVIRONMENT } from 'src/constants'

import { Box, Container, Grid, Link as MUILink, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { SiDiscord, SiGithub, SiLinkedin, SiTelegram, SiTwitter } from 'react-icons/si'
import { getConnectedEndpoint } from 'src/constants/endpoints'

import { FontIcons } from 'components/Icons/icons'

const Logo = () => <img src="/v3/svg/GameDAO-color-v-blk.svg" height="48" />

const Link = ({ href, children }) => (
	<Box>
		<MUILink variant="inherit" href={href} target="_blank" underline="none" rel="noreferrer" color="inherit">
			{children}
		</MUILink>
	</Box>
)

export function Footer() {
	const theme = useTheme()
	const { chain } = getConnectedEndpoint()

	return (
		<Box
			component="footer"
			py={3}
			px={1}
			sx={{
				// borderTop: `1px solid ${theme.palette.grey[500_32]}`,
				// backgroundColor: theme.palette.background.default,
				backgroundColor: `#00000069`,

				// TODO: 2075 Create custom component for Links or create style override
				a: { opacity: 0.8, textShadow: '15px pink' },
				'a:hover': { color: '#fcf', opacity: 1, textShadow: '0 0 5px #f3f', borderBottom: '1px dotted #f3f' },
				'*': { transitionTimingFunction: 'ease-in-out;', transitionDuration: '150ms' },
			}}
		>
			<Container>
				<Grid columns={12}>
					<Grid container direction="row" mt={2} mb={4}>
						<Grid item xs={12} md={2} mb={4}>
							<MUILink href="/">
								<Logo />
							</MUILink>
						</Grid>

						<Grid item xs={6} md={2} mb={4}>
							<Typography variant="h6" mb={2}>
								About
							</Typography>
							<Typography variant="caption" mb={2}>
								<Link href="https://blog.gamedao.co/the-gamedao-pinky-paper-8dcda7f2e1ca">
									pinky paper
								</Link>
								<Link href="https://blog.gamedao.co">blog</Link>
								<Link href="https://gamedao.co">gamedao.co</Link>
								<br />
								<Link href="https://discord.gg/rhwtr7p">discord</Link>
								<Link href="https://t.me/gamedaoco">telegram</Link>
								<Link href="https://twitter.com/gamedaoco">twitter</Link>
								<Link href="https://www.linkedin.com/company/gamedaoco">linkedin</Link>
							</Typography>
						</Grid>
						<Grid item xs={6} md={2} mb={4}>
							<Typography variant="h6" mb={2}>
								How we build
							</Typography>
							<Typography variant="caption" mb={2}>
								<Link href="https://zero.io">zero.io</Link>
								<Link href="https://acala.network">acala.network</Link>
								<Link href="https://substrate.dev">substrate.dev</Link>
								<Link href="https://kilt.io">kilt protocol</Link>
								<Link href="https://fractal.id">fractal id</Link>
								<br />
								<Link href="https://github.com/gamedaoco">github</Link>
								<Link
									href={`https://polkadot.js.org/apps/?rpc=${encodeURIComponent(
										chain.toLowerCase(),
									)}#/explorer`}
								>
									Polkadot Explorer
								</Link>
							</Typography>
						</Grid>
						<Grid item xs={12} md={6} mb={4}>
							<Typography variant="h6" mb={2}>
								GameDAO.
								<br />
								For the Creator and Player Economy.
							</Typography>
							<Typography mb={2}>
								Community driven ownership and creation will be a vital part of how we see video games
								in the near future. The transition to token driven economies is already in progress but
								is still in its early stages, only treating the symptoms of a broken, financial
								incentive driven sales machine.
								<br />
								<br />
								Tokenisation and community ownership need fair and transparent protocols to create safe
								environments for all participants working and creating together. Proper game theory
								needs to disincentivize bad actors and reward the good vibes of the community.
								<br />
								<br />
								From forging the initial idea over collaboration to fundraising and finally creating and
								operating game economies, we provide open protocols enabling coordination, ownership,
								fundraising and much more to sustainably improve economics of videogames, content
								creation and esports.
							</Typography>
						</Grid>
					</Grid>

					<Grid container direction="column">
						<Typography variant="small">
							{`© 2019-${new Date().getFullYear()} `}GameDAO AG, Vaduz, Liechtenstein. Powered by{' '}
							<a href="https://zero.io">Zero Reality</a>. <NextLink href="/imprint">Imprint</NextLink>.{' '}
							<NextLink href="/tos">Terms + Conditions</NextLink>.
						</Typography>
						<Typography variant="small">
							{process.env.APP_NAME} {process.env.APP_VERSION} build {process.env.BUILD_TIME}
							{' — '}
							{process.env.VERCEL_GIT_COMMIT_SHA} {' — '} {process.env.VERCEL_ENV}
							{' — '}
							ENVIRONMENT: {ENVIRONMENT}
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}
