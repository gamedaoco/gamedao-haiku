import React from 'react'

import { Box, Container, Grid, Link as MUILink, Stack, Typography } from '@mui/material'
import { SiDiscord, SiGithub, SiLinkedin, SiTelegram, SiTwitter } from 'react-icons/si'
import { useTheme } from '@mui/material/styles'
import { FontIcons } from 'src/components/Icons/icons'

const Link = ({ href, children }) => (
	<Box>
		<MUILink variant="inherit" href={href} target="_blank" underline="none" rel="noreferrer" color="inherit">
			{children}
		</MUILink>
	</Box>
)

const SocialLinks = () => (
	<Stack
		mb={2}
		sx={{
			// TODO: 2075 Create custom component for Links or create style override
			a: { opacity: 0.8, textShadow: '15px pink' },
			'a:hover': { color: '#fcf', opacity: 1, textShadow: '0 0 5px #f3f', borderBottom: '1px dotted #f3f' },
			'*': { transitionTimingFunction: 'ease-in-out;', transitionDuration: '150ms' },
		}}
	>
		<Typography>Connect with us</Typography>
		<Stack direction="row" spacing={1}>
			<Link href="https://discord.gg/P7NHWGzJ7r">
				<SiDiscord />
			</Link>
			<Link href="https://t.me/gamedaoco">
				<SiTelegram />
			</Link>
			<Link href="https://twitter.com/gamedaoco">
				<SiTwitter />
			</Link>
			<Link href="https://github.com/gamedaoco">
				<SiGithub />
			</Link>
			<Link href="https://www.linkedin.com/company/gamedaoco">
				<SiLinkedin />
			</Link>
		</Stack>
	</Stack>
)

export function Footer() {
	const theme = useTheme()

	return (
		<Box
			component="footer"
			py={3}
			px={1}
			sx={{
				borderTop: `1px solid ${theme.palette.grey[500_32]}`,
				backgroundColor: theme.palette.background.default,

				// TODO: 2075 Create custom component for Links or create style override
				a: { opacity: 0.8, textShadow: '15px pink' },
				'a:hover': { color: '#fcf', opacity: 1, textShadow: '0 0 5px #f3f', borderBottom: '1px dotted #f3f' },
				'*': { transitionTimingFunction: 'ease-in-out;', transitionDuration: '150ms' },
			}}
		>
			<Container>
				<Grid columns={12}>
					<Grid container direction="row" mt={4} mb={4}>
						<Grid item xs={12} md={2} mb={4}>
							<MUILink href="/">
								<FontIcons name={'logo'} sx={{ color: theme.palette.text.primary }} />
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
								<Link href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Falphaville.zero.io#/explorer">
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

					<Grid container direction="row">
						<SocialLinks />
					</Grid>

					<Grid container direction="row">
						<Typography variant="body2">
							{`© 2019-${new Date().getFullYear()} `}GAMEDAO AG, Vaduz, Liechtenstein. Powered by ZERO.IO
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}
