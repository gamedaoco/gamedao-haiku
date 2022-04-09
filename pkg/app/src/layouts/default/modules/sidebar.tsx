import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import { Stack, Drawer, Fab, CircularProgress, Divider, Box } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useSidebarLazyQuery } from '@gamedao-haiku/graphql/dist'
import { createErrorNotification } from 'src/utils/notificationUtils'
import { BodyButton } from 'layouts/default/modules/bodyButton'
import { useExtensionContext } from 'provider/extension/modules/context'

interface ComponentProps {
	showHeader: boolean
	onClose: () => void
	open: boolean
	variant: 'permanent' | 'persistent' | 'temporary' | undefined
}

export function Sidebar({ showHeader, onClose, open, variant }: ComponentProps) {
	const theme = useTheme()
	const address = useCurrentAccountAddress()
	const { pathname, push } = useRouter()
	const { w3Enabled, connectWallet, selectedAccount } = useExtensionContext()
	const [loadSideBarForAddress, { error, loading, data }] = useSidebarLazyQuery()

	const buttonCallback = useCallback(() => {
		if (w3Enabled === false) {
			connectWallet()
		} else if (selectedAccount) {
			push('/app/organisations')
		}
	}, [w3Enabled, connectWallet, selectedAccount, push])

	useEffect(() => {
		if (address && address.length > 0) {
			loadSideBarForAddress({ variables: { address } })
		}
	}, [address])

	useEffect(() => {
		if (error) {
			createErrorNotification('The information for the sidebar could not be retrieved')
			console.error(error)
		}
	}, [error])

	return (
		<Drawer
			anchor="left"
			onClose={onClose}
			open={open}
			variant={variant}
			sx={{
				'& .MuiPaper-root': {
					width: '90px',
					top: showHeader ? 90 : 0,
					bottom: 0,
					height: 'auto',
					backgroundColor: theme.palette.background.default,
					borderRight: `1px solid ${theme.palette.grey[500_32]}`,
				},
			}}
		>
			<Stack pb={3} alignItems="center" height="100%" width="100%">
				{(loading || data) && (
					<Stack
						spacing={2}
						py={2}
						width={'100%'}
						alignItems="center"
						sx={{
							overflow: 'auto',
						}}
					>
						{loading && (
							<CircularProgress
								sx={{
									width: '48px',
									minHeight: '48px',
									margin: 'auto',
								}}
							/>
						)}
						{selectedAccount &&
							(data?.bodies?.slice() as any)
								?.sort((a, b) => a.metadata?.name?.localeCompare(b.metadata?.name))
								?.map((body, i) => {
									return (
										<Fragment key={body?.id}>
											<BodyButton
												id={body?.id}
												logo={body?.metadata?.logo}
												name={body?.metadata?.name}
												active={pathname?.indexOf(body?.id) >= 0}
												notification={i % 2 == 0}
											/>
										</Fragment>
									)
								})}
					</Stack>
				)}
				<Stack alignItems="center" spacing={2} width="100%">
					{(loading || data) && <Divider sx={{ width: '50%' }} />}
					<Fab
						color={'primary'}
						aria-label="add"
						sx={{
							width: '48px',
							height: '48px',
						}}
						onClick={buttonCallback}
					>
						<AddIcon />
					</Fab>
				</Stack>
			</Stack>
		</Drawer>
	)
}
