import React, { Fragment, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Logger } from 'lib/logger'

import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useExtensionContext } from 'providers/extension/modules/context'
import { useSidebarSubscription } from 'src/queries'
import { createErrorNotification } from 'src/utils/notificationUtils'

import { Add as AddIcon } from '@mui/icons-material'
import { CircularProgress, Divider, Drawer, Fab, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { OrganizationButtonMemoized } from './OrganizationButton'

interface ComponentProps {
	showHeader?: boolean
	onClose?: () => void
	open?: boolean
}

const log = Logger('HAIKU')

export function Sidebar({ showHeader, onClose, open }: ComponentProps) {
	const theme = useTheme()
	const address = useCurrentAccountAddress()
	const { push } = useRouter()
	const { w3Enabled, connectWallet, selectedAccount } = useExtensionContext()

	const { error, loading, data } = useSidebarSubscription({ variables: { address } })

	const buttonCallback = useCallback(() => {
		if (w3Enabled === false) {
			connectWallet()
		} else if (selectedAccount) {
			push('/guilds/create')
		}
	}, [w3Enabled, connectWallet, selectedAccount, push])

	useEffect(() => {
		if (error) {
			createErrorNotification('The information for the sidebar could not be retrieved')
			log.error(error)
		}
	}, [error])

	return (
		<Stack
			py={3}
			alignItems="center"
			height="100%"
			width="100%"
			justifyContent="space-between"
			sx={{ borderRight: `1px solid ${theme.palette.grey[500_32]}` }}
		>
			<Stack>
				{(loading || (data?.organization && selectedAccount)) && (
					<Stack
						spacing={2}
						pb={2}
						width={'100%'}
						alignItems="center"
						sx={{
							// TODO: find out if we need scrolling at all.
							// overflowX: 'hidden',
							// overflowY: 'scroll',
							position: 'relative',
							'&::-webkit-scrollbar': {
								width: 0,
								background: 'transparent',
							},
							':after': {
								position: 'absolute',
								content: '""',
								height: '2rem',
								bottom: 0,
								left: 0,
								right: 0,
								// backgroundImage: `linear-gradient(to bottom,transparent 0%, ${theme.palette.background.default})`,
							},
						}}
					>
						{loading && (
							<CircularProgress
								sx={{
									width: '48px',
									height: '48px',
									margin: 'auto',
								}}
							/>
						)}

						{selectedAccount &&
							(data?.organization?.slice() as any)
								?.sort((a, b) => a?.name?.localeCompare(b?.name))
								?.map((organization) => {
									return (
										<Fragment key={organization?.id}>
											<OrganizationButtonMemoized
												id={organization?.id}
												logo={organization?.logo}
												name={organization?.name}
												active={location?.pathname?.indexOf(organization?.id) >= 0}
												notification={false}
											/>
										</Fragment>
									)
								})}
					</Stack>
				)}

				<Stack alignItems="center" spacing={2} width="100%">
					{(loading || (data?.organization.length > 0 && selectedAccount)) && (
						<Divider sx={{ width: '50%' }} />
					)}

					<Fab
						// color={'primary'}
						aria-label="add"
						sx={{
							background: 'none',
							outline: `2px solid ${theme.palette.primary}`,
							mt: 1,
							width: '48px',
							height: '48px',
						}}
						onClick={buttonCallback}
					>
						<AddIcon color="primary" />
					</Fab>
				</Stack>
			</Stack>

			<Stack>
				{/*
					helper icons
					- feedback
					- docs
					- faucet
				*/}
			</Stack>
		</Stack>
	)
}
