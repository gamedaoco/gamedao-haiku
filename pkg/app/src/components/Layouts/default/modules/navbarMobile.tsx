import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import {
	Stack,
	Drawer,
	Box,
	List,
	ListItemText,
	ListItemButton,
	ListItemIcon,
	Typography,
	Button,
	Link as MUILink,
} from '@mui/material'
import { FontIcons } from 'src/components'
import { useTranslation } from 'react-i18next'
import { SiDiscord, SiGithub, SiLinkedin, SiTelegram, SiTwitter } from 'react-icons/si'

interface ComponentProps {
	onClose: () => void
	open: boolean
}

// TODO: Extract to features / graphql
const urls = [
	{
		name: 'button:navigation:dashboard',
		path: '/app/dashboard',
		icon: 'dashboard',
	},
	{
		name: 'button:navigation:organisations',
		path: '/app/organisations',
		icon: 'organization',
	},
	{
		name: 'button:navigation:campaigns',
		path: '/app/campaigns',
		icon: 'campaign',
	},
	{
		name: 'button:navigation:wallet',
		path: '/app/wallet',
		icon: 'wallet',
	},
]

const Link = ({ href, children }) => (
	<Box>
		<MUILink variant="inherit" href={href} target="_blank" underline="none" rel="noreferrer" color="inherit">
			{children}
		</MUILink>
	</Box>
)

export function NavbarMobile({ onClose, open }: ComponentProps) {
	const theme = useTheme()
	const { t } = useTranslation()
	const { push } = useRouter()

	return (
		<Drawer
			anchor="right"
			onClose={onClose}
			open={open}
			variant="temporary"
			sx={{
				'& .MuiPaper-root': {
					width: '80vw',
					bottom: 0,
					height: 'auto',
					backgroundColor: theme.palette.background.paper,
				},
			}}
		>
			<Stack p={4} justifyContent="space-between" height="100%">
				<Stack spacing={2}>
					<ListItemButton>
						<ListItemText>Navigation</ListItemText>
					</ListItemButton>
					{urls.map((navItem) => {
						return (
							<Fragment key={navItem.name}>
								<ListItemButton onClick={() => push(navItem.path)}>
									<ListItemIcon>
										<FontIcons name={navItem.icon} />
									</ListItemIcon>
									<ListItemText primary={t(navItem.name)} />
								</ListItemButton>
							</Fragment>
						)
					})}
				</Stack>

				<Stack alignItems="center" spacing={4}>
					<Box alignItems="center">
						<Typography textAlign="center">Need help,</Typography>
						<Typography textAlign="center">Please check our docs</Typography>
					</Box>
					{/*TODO: Should come from graphql and not be called like this + translations */}
					<Button variant="contained" onClick={() => window.open('https://docs.gamedao.co').focus()}>
						Documentation
					</Button>

					<Stack direction="row" spacing={2}>
						<Link href="https://discord.gg/P7NHWGzJ7r">
							<SiDiscord size="25" />
						</Link>
						<Link href="https://t.me/gamedaoco">
							<SiTelegram size="25" />
						</Link>
						<Link href="https://twitter.com/gamedaoco">
							<SiTwitter size="25" />
						</Link>
						<Link href="https://github.com/gamedaoco">
							<SiGithub size="25" />
						</Link>
						<Link href="https://www.linkedin.com/company/gamedaoco">
							<SiLinkedin size="25" />
						</Link>
					</Stack>
				</Stack>
			</Stack>
		</Drawer>
	)
}
