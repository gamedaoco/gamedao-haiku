import React from 'react'
import NextLink from 'next/link'

import { Box, Typography, Container, Link as MUILink, Grid } from '@mui/material'
import { SiDiscord } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { SiTelegram } from 'react-icons/si'
import { SiTwitter } from 'react-icons/si'

const Link = ({ href, children }) => (
	<MUILink variant="inherit" href={href} target="_blank" underline="none" color="inherit">
		{children}
		<br />
	</MUILink>
)

const SocialLinks = () => (
	<Box
		sx={{
			flexDirection: 'row',
			display: 'flex',
			justifyContent: 'flex-start',
			a: { opacity: 0.5, marginRight: '1rem', '& > *': { height: '1rem' } },
			'a:hover': { opacity: 1 },
		}}
	>
		<Typography sx={{ fontSize: '0.8rem', fontWeight: '400' }} mb={2}>
			Connect with us
			<br />
			<MUILink color="inherit" rel="noreferrer" target="_blank" href="https://discord.gg/P7NHWGzJ7r">
				<SiDiscord />
			</MUILink>
			<MUILink color="inherit" target="_blank" rel="noreferrer" href="https://t.me/gamedaoco">
				<SiTelegram />
			</MUILink>
			<MUILink color="inherit" target="_blank" rel="noreferrer" href="https://twitter.com/gamedaoco">
				<SiTwitter />
			</MUILink>
			<MUILink color="inherit" target="_blank" rel="noreferrer" href="https://github.com/gamedaoco">
				<SiGithub />
			</MUILink>
			<MUILink color="inherit" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/gamedaoco">
				<SiLinkedin size={'20px'} />
			</MUILink>
		</Typography>
	</Box>
)

export const Footer = (props) => (
	<Box
		component="footer"
		sx={{
			borderTop: (theme) => '1px solid ' + theme.palette.grey[500_32],
			py: 3,
			px: 1,
			mt: 'auto',
			fontSize: '.8em',
			color: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[100]),
			backgroundColor: (theme) =>
				theme.palette.mode === 'light' ? theme.palette.grey[900] : theme.palette.grey[900],
			a: { opacity: 0.8, textShadow: '15px pink' },
			'a:hover': { color: '#fcf', opacity: 1, textShadow: '0 0 5px #f3f', borderBottom: '1px dotted #f3f' },
			'*': { transitionTimingFunction: 'ease-in-out;', transitionDuration: '150ms' },
		}}
	>
		<Container>
			<Grid columns={12}>
				<Grid container direction="row" mt={4} mb={4}>
					<Grid item xs={12} md={2} mb={4}>
						<a href="#top">
							<img alt="GameDAO" src={`/assets/gamedao-logo-white.svg`} height={32} />
						</a>
					</Grid>

					<Grid item xs={6} md={2} mb={4}>
						<Typography sx={{ fontSize: '1rem', fontWeight: '800' }} mb={2}>
							About
						</Typography>
						<Typography sx={{ fontSize: '0.8rem' }} mb={2}>
							<Link href="https://blog.gamedao.co/the-gamedao-pinky-paper-8dcda7f2e1ca">
								{' '}
								pinky paper{' '}
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
						<Typography sx={{ fontSize: '1rem', fontWeight: '800' }} mb={2}>
							How we build
						</Typography>
						<Typography sx={{ fontSize: '0.8rem' }} mb={2}>
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
						<Typography sx={{ fontSize: '1rem', fontWeight: '800' }} mb={2}>
							GameDAO.
							<br />
							For the Creator and Player Economy.
						</Typography>
						<Typography sx={{ fontSize: '1rem', 'a:hover': { borderBottom: '1px dotted white' } }} mb={2}>
							Community driven ownership and creation will be a vital part of how we see video games in
							the near future. The transition to token driven economies is already in progress but is
							still in its early stages, only treating the symptoms of a broken, financial incentive
							driven sales machine.
							<br />
							<br />
							Tokenisation and community ownership need fair and transparent protocols to create safe
							environments for all participants working and creating together. Proper game theory needs to
							disincentivize bad actors and reward the good vibes of the community.
							<br />
							<br />
							From forging the initial idea over collaboration to fundraising and finally creating and
							operating game economies, we provide open protocols enabling coordination, ownership,
							fundraising and much more to sustainably improve economics of videogames, content creation
							and esports.
						</Typography>
					</Grid>
				</Grid>

				<Grid container direction="row">
					<SocialLinks />
				</Grid>

				<Grid container direction="row">
					<Typography
						variant="body1"
						sx={{
							backgroundColor: 'transparent',
							fontSize: '0.75em',
							color: (theme) =>
								theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[100],
						}}
					>
						{`© 2019-${new Date().getFullYear()} `}GAMEDAO AG, Vaduz, Liechtenstein. Powered by ZERO.IO
					</Typography>
				</Grid>
			</Grid>
		</Container>
	</Box>
)

export default Footer
